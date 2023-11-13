import Keyframes from "./Incidents/Keyframes";
import { name, version } from "../package.json";

export default {
  npm_name: name, // don't touch this
  version: version, // don't touch this
  incidents: [
    {
      exportable: Keyframes,
      name: "Animation",
      // attributesValidationRules: attrRules,
    },
  ],
};
