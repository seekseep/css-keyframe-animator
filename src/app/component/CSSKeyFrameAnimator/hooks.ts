import { createContext, useContext, useState } from "react"
import { AnimationVariables } from "./types"
import { getStyleCode } from "./service"
import { ANIMATION_DURATION, ANIMATION_KEY_FRAMES, ANIMATION_TIMING_FUNCTION } from "./constant"

export type AnimatorContextValue = AnimationVariables & {
  styleCode: string,
  update: (values: AnimationVariables) => void
}

export const AnimatorContext = createContext<AnimatorContextValue>({
  keyframes: ANIMATION_KEY_FRAMES.ROTATE,
  duration: ANIMATION_DURATION.MEDIUM,
  timingFunction: ANIMATION_TIMING_FUNCTION.EASE_IN,
  _key: 0,
  styleCode: '',
  update: () => {}
})

export function useAnimatorContextValue () {
  const [variables, setVariables] = useState<AnimationVariables>({
    duration: '',
    keyframes: '',
    timingFunction: '',
    _key: Date.now(),
  })

  return {
    ...variables,
    styleCode: getStyleCode(variables),
    update: setVariables,
  }
}

export function useAnimatorContext () {
  return useContext(AnimatorContext)
}
