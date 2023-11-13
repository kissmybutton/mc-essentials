import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import MyPluginDefinition from "../dist/bundle.esm";
const Essentials = loadPlugin(MyPluginDefinition);

const urlParams = new URL(window.location.href).searchParams;
const animation = urlParams.get("animation");

const clip = new HTMLClip({
  html: `<div class="container">
        <div id="effect"></div>
        <div id="htmlclip"></div>
        <div class="combo" id="combo">MC Essentials</div>
        <div id="myclip"></div>
    </div>`,
  css: `
        .container{
            background: #252525;
            width: 700px;
            height: 700px;
        }
        .combo {
          position: absolute;
          color: yellow;
          font-size: 60px;
          font-weight: bold;
          height: 40px;
          top: 300px;
          left: 177px;
        }
    `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "700px",
    height: "700px",
  },
});

const newCombo = new Essentials.Animation(
  {
    // keyframes: {
    //   0: {
    //     top: "20px",
    //     width: "400px",
    //     easing: "easeInOutQuad",
    //   },
    //   50: {
    //     easing: "easeInOutQuad",
    //     top: "200px",
    //     width: "200px",
    //     background: "pink",
    //   },
    //   100: {
    //     width: "10px",
    //     background: "red",
    //     easing: "easeInOutQuad",
    //   },
    // },
    animation: animation || "bounce",
  },
  {
    selector: "#combo",
    duration: 1500,
    easing: "easeInCubic",
    // delay: "@stagger(0, 400)",
  }
);

clip.addIncident(newCombo, 0);

// eslint-disable-next-line no-unused-vars
const player = new Player({ clip, controls: false });
document.getElementById("clip").style.opacity = 1;
setTimeout(player.play, 200);
