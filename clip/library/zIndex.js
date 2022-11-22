import { CSSEffect } from "@donkeyclip/motorcortex";
export const zIndex = (zIndex,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        zIndex,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
