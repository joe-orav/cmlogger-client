import { useState } from "react"

function useLocalStorage(item, defaultValue) {
  let storageValue = localStorage.getItem(item)
  const [itemValue, setItemValue] = useState(storageValue || defaultValue)

  function handleValueChange(value) {
    setItemValue(value)
    localStorage.setItem(item, value)
  }

  return [itemValue, handleValueChange]
}

export default useLocalStorage
