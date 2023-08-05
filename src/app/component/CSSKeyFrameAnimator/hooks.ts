import { createContext, useContext, useState } from "react"
import { AnimationVariables } from "./types"
import { getStyleCode } from "./service"

export type AnimatorContextValue = AnimationVariables & {
  styleCode: string,
  update: (values: AnimationVariables) => void
}

export const AnimatorContext = createContext<AnimatorContextValue>({
  keyframes: '',
  duration: '',
  timingFunction: '',
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
