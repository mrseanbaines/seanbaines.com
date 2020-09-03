import React from 'react'

type Return = [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>]

export const useToggle = (defaultValue: boolean = false): Return => {
  const [value, setValue] = React.useState(defaultValue)

  const toggleValue = () => {
    setValue(boolean => !boolean)
  }

  return [value, toggleValue, setValue]
}
