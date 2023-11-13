import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import MyPluginDefinition from "../dist/bundle.esm";
const MyPlugin = loadPlugin(MyPluginDefinition);

const clip = new HTMLClip({
  html: `<div class="container">
        <div id="effect"></div>
        <div id="htmlclip"></div>
        <div class="combo" id="combo"></div>
        <div class="combo two"></div>
        <div id="myclip"></div>
    </div>`,
  css: `
        .container{
            background: #111;
            width: 600px;
            height: 400px;
        }
        .combo {
          position: absolute;
          background: #4672fe;
          width: 120px;
          height: 40px;
          top: 100px;
          left: 220px;
        }
        .combo.two{
          top: 250px;
          left: 220px;
        }
    `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "600px",
    height: "400px",
  },
});

const newCombo = new MyPlugin.Keyframes(
  {
    keyframes: {
      0: {
        top: "20px",
        width: "400px",
        easing: "easeInOutQuad",
      },
      50: {
        easing: "easeInOutQuad",
        top: "200px",
        width: "200px",
        background: "pink",
      },
      100: {
        width: "10px",
        background: "red",
        easing: "easeInOutQuad",
      },
    },
    animation: "tada",
  },
  {
    selector: "#combo",
    duration: 1000,
    // easing: "easeInQuad",
    // delay: "@stagger(0, 400)",
  }
);

clip.addIncident(newCombo, 0);

// eslint-disable-next-line no-unused-vars
const player = new Player({ clip });
