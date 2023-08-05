"use client"

import { FC } from "react";
import { View, ViewProps, useTheme, Flex } from "@aws-amplify/ui-react";
import { useAnimatorContext } from "./hooks";

const Preview:FC<ViewProps> = (props) => {
  const theme = useTheme()
  const { _key, styleCode } = useAnimatorContext()
  return (
    <>
      <style>{styleCode}</style>
      <View {...props}
        backgroundColor={theme.tokens.colors.background.disabled}>
        <Flex
          direction="column" width="100%" height="100%"
          alignItems="center" justifyContent="center">
            <View key={_key} className="box" />
        </Flex>
      </View>
    </>
  )
}

export default Preview
