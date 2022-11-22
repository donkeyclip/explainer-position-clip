import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { leftMove } from "./library/leftMove";
import { zIndex } from "./library/zIndex";
import { opacity } from "./library/opacity";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    },
  ],
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

clip.addIncident(opacity(1,".initial-position",1000),1500);
clip.addIncident(opacity(0,".initial-position",1000),4500);
clip.addIncident(leftMove("362px",".box:nth-child(1)",800),8000);
clip.addIncident(leftMove("242px",".box:nth-child(2)",800),8000);
clip.addIncident(leftMove("122px",".box:nth-child(3)",800),8000);
clip.addIncident(opacity(1,".box:nth-child(3) .box-text",500),13500);
clip.addIncident(leftMove("83%",".box:nth-child(3) .box-text",1000,"easeInOutSine"),15000);
// clip.addIncident(zIndex(1,".box:nth-child(3)",1),13000);
// clip.addIncident(zIndex(0,".box:nth-child(3)",1),16000);
clip.addIncident(opacity(0,".box:nth-child(2),.box:nth-child(1)",500),13000);
clip.addIncident(opacity(1,".box:nth-child(2),.box:nth-child(1)",500),16000);
clip.addIncident(opacity(1,".box:nth-child(2) .box-text",500),17500);
clip.addIncident(leftMove("83%",".box:nth-child(2) .box-text",1000,"easeInOutSine"),19000);
// clip.addIncident(zIndex(1,".box:nth-child(2)",1),17000);
// clip.addIncident(zIndex(0,".box:nth-child(2)",1),20000);
clip.addIncident(opacity(0,".box:nth-child(3),.box:nth-child(1)",500),17000);
clip.addIncident(opacity(1,".box:nth-child(3),.box:nth-child(1)",500),20000);
clip.addIncident(opacity(1,".box:nth-child(1) .box-text",500),21500);
clip.addIncident(leftMove("83%",".box:nth-child(1) .box-text",1000,"easeInOutSine"),23000);
// clip.addIncident(zIndex(1,".box:nth-child(1)",1),21000);
// clip.addIncident(zIndex(0,".box:nth-child(1)",1),24000);
clip.addIncident(opacity(0,".box:nth-child(2),.box:nth-child(3)",500),21000);
clip.addIncident(opacity(1,".box:nth-child(2),.box:nth-child(3)",500),24000);



