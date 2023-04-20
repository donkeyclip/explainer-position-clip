import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { leftMove } from "./library/leftMove";
import { zIndex } from "./library/zIndex";
import { opacity } from "./library/opacity";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
// setCSSCore(AnimePluginDefinition.CSSEffect);

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    },
  ],
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

clip.addIncident(opacity(1, ".initial-position", 500), 500);
clip.addIncident(opacity(0, ".initial-position", 500), 1800);
clip.addIncident(leftMove("362px", ".box:nth-child(1)", 500), 2500);
clip.addIncident(leftMove("242px", ".box:nth-child(2)", 500), 2500);
clip.addIncident(leftMove("122px", ".box:nth-child(3)", 500), 2500);

clip.addIncident(opacity(1, ".box:nth-child(3) .box-text", 500), 4000);
clip.addIncident(
  leftMove("83%", ".box:nth-child(3) .box-text", 1000, "easeInOutSine", "50%"),
  4000
);
clip.addIncident(opacity(0, ".box:nth-child(2),.box:nth-child(1)", 200), 3500);
clip.addIncident(opacity(1, ".box:nth-child(2),.box:nth-child(1)", 500), 5000);

clip.addIncident(opacity(1, ".box:nth-child(2) .box-text", 500), 6500);
clip.addIncident(
  leftMove("83%", ".box:nth-child(2) .box-text", 1000, "easeInOutSine", "50%"),
  7000
);
clip.addIncident(opacity(0, ".box:nth-child(3),.box:nth-child(1)", 200), 6000);
clip.addIncident(opacity(1, ".box:nth-child(3),.box:nth-child(1)", 500), 8000);

clip.addIncident(opacity(1, ".box:nth-child(1) .box-text", 500), 9500);
clip.addIncident(
  leftMove("83%", ".box:nth-child(1) .box-text", 1000, "easeInOutSine", "50%"),
  10000
);
clip.addIncident(opacity(0, ".box:nth-child(2),.box:nth-child(3)", 200), 9000);
clip.addIncident(opacity(1, ".box:nth-child(2),.box:nth-child(3)", 500), 11000);
