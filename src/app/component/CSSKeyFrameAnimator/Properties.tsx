"use client"

import { FC } from "react";
import {
  useTheme,
  View, ViewProps,
  SelectField,
  Flex,
  Button
} from "@aws-amplify/ui-react";
import { useForm } from "react-hook-form";

import {
  ANIMATION_DURATION,
  ANIMATION_KEY_FRAMES,
  ANIMATION_TIMING_FUNCTION
} from './constant'
import { useAnimatorContext } from "./hooks";
import { AnimationVariables } from "./types";

type FormValues = Omit<AnimationVariables, '_key'>

const Properties:FC<ViewProps> = (props) => {
  const theme = useTheme()
  const {
    update,
    duration, keyframes, timingFunction
  } = useAnimatorContext()

  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: { duration, keyframes, timingFunction }
  })

  return (
    <View {...props}
      padding={theme.tokens.space.small}>
      <form onSubmit={handleSubmit((values) => update({ ...values, _key: Date.now(), }))}>
        <Flex
          direction="column" gap={theme.tokens.space.small}>
          <SelectField label="速さ" {...register('duration')}>
            <option value={ANIMATION_DURATION.SHORTEST}>とても速い</option>
            <option value={ANIMATION_DURATION.SHORTER}>速い</option>
            <option value={ANIMATION_DURATION.MEDIUM}>普通</option>
            <option value={ANIMATION_DURATION.LONGER}>遅い</option>
            <option value={ANIMATION_DURATION.LONGEST}>とても遅い</option>
          </SelectField>
          <SelectField label="変化の仕方" {...register('timingFunction')}>
            <option value={ANIMATION_TIMING_FUNCTION.EASE}>イーズ</option>
            <option value={ANIMATION_TIMING_FUNCTION.EASE_IN}>イーズイン</option>
            <option value={ANIMATION_TIMING_FUNCTION.EASE_OUT}>イーズアウト</option>
            <option value={ANIMATION_TIMING_FUNCTION.EASE_IN_OUT}>イーズイン・アウト</option>
            <option value={ANIMATION_TIMING_FUNCTION.LINEAR}>リニア</option>
          </SelectField>
          <SelectField label="テンプレート" {...register("keyframes")}>
            <option value={ANIMATION_KEY_FRAMES.ROTATE}>回転</option>
            <option value={ANIMATION_KEY_FRAMES.FADE_IN}>フェードイン</option>
            <option value={ANIMATION_KEY_FRAMES.FADE_OUT}>フェードアウト</option>
          </SelectField>
          <View>
            <Button variation="primary" type="submit">適応する</Button>
          </View>
        </Flex>
      </form>
    </View>
  )
}

export default Properties
