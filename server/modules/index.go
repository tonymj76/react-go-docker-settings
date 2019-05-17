package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/handler"
	prisma "github.com/tonymj76/react-go/server/generated/prisma-client"
	qg "github.com/tonymj76/react-go/server/generated/qglen"
)

const defaultPort = "4000"

func main() {
	port := os.Getenv("PORT")
	if len(port) == 0 {
		port = defaultPort
	}

	client := prisma.New(nil)
	resolver := Resolver{
		Prisma: client,
	}

	http.Handle("/", handler.Playground("GraphQL Playground", "/query"))
	http.Handle("/query", handler.GraphQL(qg.NewExecutableSchema(qg.Config{Resolvers: &resolver})))

	log.Printf("Server is running on http://localhost:%s", defaultPort)
	err := http.ListenAndServe(":"+defaultPort, nil)
	if err != nil {
		log.Fatal(err)
	}
}
