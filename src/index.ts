import { useElement } from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";
import ext from "./ext";
import type { Supernova } from "./types/global";
/**
 * Entrypoint for your sense visualization
 * @param {object} galaxy Contains global settings from the environment.
 * Useful for cases when stardust hooks are unavailable (ie: outside the component function)
 * @param {object} galaxy.anything Extra environment dependent options
 * @param {object=} galaxy.anything.sense Optional object only present within Sense,
 * see: https://qlik.dev/extend/build-extension/in-qlik-sense
 */
export default function supernova(galaxy: any): Supernova {
  return {
    qae: {
      properties,
      data,
    },
    ext: ext(galaxy),
    component() {
      const element = useElement();
      element.innerHTML = "<div>Hello Typescript!</div>"; // eslint-disable-line
      const button = document.createElement("button");
      button.innerHTML = "Click me";
      button.onclick = () => {
        alert("Hello!");
      };
      element.appendChild(button);
    },
  };
}
