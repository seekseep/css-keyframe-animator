import { FC, PropsWithChildren } from "react";

import { AnimatorContext, useAnimatorContextValue } from './hooks'

const Provider:FC<PropsWithChildren> = ({ children }) => {
  const contextValue = useAnimatorContextValue()
  return (
    <AnimatorContext.Provider value={contextValue}>
      {children}
    </AnimatorContext.Provider>
  )
}

export default Provider
