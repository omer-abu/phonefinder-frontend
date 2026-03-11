import { type Ref } from "react"
import RangeSlider, {
  type InputEventHandler,
  type ReactRangeSliderInputProps,
  type ReactRangeSliderInputRef,
} from "react-range-slider-input"

type RangeSliderWithLabelsProps = Omit<
  ReactRangeSliderInputProps,
  "onInput"
> & {
  ref?: Ref<ReactRangeSliderInputRef>
  units?: string
  onValuesChange: InputEventHandler
}

const RangeSliderWithLabels = ({
  ref,
  units,
  onValuesChange,
  value,
  ...rangeSliderProps
}: RangeSliderWithLabelsProps) => {
  const [minValue, maxValue] = (value as [number, number]) ?? [0, 0]

  return (
    <div className="range-slider-wrapper">
      <span>
        {minValue}
        {units}
      </span>

      <RangeSlider
        ref={ref}
        {...rangeSliderProps}
        value={value}
        onInput={onValuesChange}
      />

      <span>
        {maxValue}
        {units}
      </span>
    </div>
  )
}

export default RangeSliderWithLabels
