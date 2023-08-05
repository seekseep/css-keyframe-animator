import { KEY_FRAME_NAME, PREVIEW_STYLE } from "./constant";
import { AnimationVariables } from "./types";

export function getStyleCode (
  {
    duration, keyframes, timingFunction
  } : Pick<AnimationVariables, 'duration' | 'keyframes' | 'timingFunction'>
) {
  return `@keyframes ${KEY_FRAME_NAME} {${keyframes}}

.box {${PREVIEW_STYLE}
  animation-name: ${KEY_FRAME_NAME};
  animation-duration: ${duration};
  animation-timing-function: ${timingFunction};
}
`
}
