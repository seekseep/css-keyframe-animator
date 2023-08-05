"use client"

import { FC } from "react";
import { View, ViewProps, useTheme, Flex, Button, TextAreaField } from "@aws-amplify/ui-react";
import { useAnimatorContext } from "./hooks";

const Code:FC<ViewProps> = (props) => {
  const theme = useTheme()
  const { styleCode, _key } = useAnimatorContext()

  const clipToCopyboard = async () => {
    await window.navigator.clipboard.writeText(styleCode)
    window.alert("コピーしました")
  }

  return (
    <View {...props} padding={theme.tokens.space.small}>
      <Flex direction="column" gap={theme.tokens.space.small}>
        <TextAreaField label="コード" key={_key} fontFamily="monospace" whiteSpace="pre" defaultValue={styleCode} rows={30} />
        <View>
          <Button onClick={() => { clipToCopyboard() }}>コピー</Button>
        </View>
      </Flex>
    </View>
  )
}

export default Code
