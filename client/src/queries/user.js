import { gql } from 'apollo-boost'

export const Userss = gql`
{
  users{
    id 
    lastName
    firstName
    email
  }
}
`
export const AddUser = gql`
  mutation($firstName: String!, $lastName: String!, $userName:String!, $gender:String!, $isAdmin:Boolean!, $email:String!) {
    createUser(data:{firstName:$firstName,lastName:$lastName, userName:$userName, gender:$gender, isAdmin:$isAdmin, email:$email}){
      firstName
      lastName
      id
    }
  }
  `
export const getUser = gql`
  query($id:ID){
    user(where:{id:$id}){
      isAdmin
      lastName
      firstName
      email
      userName
      gender
      createdAt
      images{
        id
      }
    }
  }
`