export const ANIMATION_DURATION = {
  SHORTEST: '250ms',
  SHORTER: '500ms',
  MEDIUM: '1000ms',
  LONGER: '2000ms',
  LONGEST: '3000ms',
}

export const ANIMATION_TIMING_FUNCTION = {
  EASE: 'ease',
  EASE_IN: 'ease-in',
  EASE_OUT: 'ease-out',
  EASE_IN_OUT: 'ease-in-out',
  LINEAR: 'linear',
  STEP_START: 'step-start',
  STEP_END: 'step-end',
}

export const KEY_FRAME_NAME = 'animation'

const ROTATE_ANIMATION_KEY_FRAME =
`
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
`

const FADE_IN_ANIMATION_KEY_FRAME =
`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`

const FADE_OUT_ANIMATION_KEY_FRAME =
`
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`

export const ANIMATION_KEY_FRAMES = {
  ROTATE: ROTATE_ANIMATION_KEY_FRAME,
  FADE_IN: FADE_IN_ANIMATION_KEY_FRAME,
  FADE_OUT: FADE_OUT_ANIMATION_KEY_FRAME
}

export const PREVIEW_STYLE =
`
  width: 200px;
  height: 200px;
  background: white;
  border: solid 1px black;`
