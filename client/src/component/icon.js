import m from "mithril";
import {
  dom,
  library,
  icon,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Add all icons we will be using, to pull them from fontawesome
// and add them to our library
library.add(fas);

var Icon = {
  view({ attrs }) {
    switch (attrs.type) {
      case "loader":
        return (
          <svg
            class={attrs.class || ""}
            style={attrs.style}
            width={attrs.width || 44}
            height={attrs.height || 44}
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
            stroke={attrs.color || "#fff"}
          >
            <g fill="none" fill-rule="evenodd" stroke-width="2">
              <circle cx="22" cy="22" r="1">
                <animate
                  attributeName="r"
                  begin="0s"
                  dur="1.8s"
                  values="1; 20"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.165, 0.84, 0.44, 1"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin="0s"
                  dur="1.8s"
                  values="1; 0"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.3, 0.61, 0.355, 1"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="22" cy="22" r="1">
                <animate
                  attributeName="r"
                  begin="-0.9s"
                  dur="1.8s"
                  values="1; 20"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.165, 0.84, 0.44, 1"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin="-0.9s"
                  dur="1.8s"
                  values="1; 0"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.3, 0.61, 0.355, 1"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        );
      case "icon": {
        const iconString = icon(findIconDefinition(attrs)).html[0];
        return m.trust(iconString);
      }
      default:
        return "Not Found";
    }
  }
};

export default Icon;
