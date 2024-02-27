import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
//   const [value, setValue] = useState<T>(() => {
//     var jsonValue;
//   if(typeof window !== 'undefined'){
//      jsonValue = localStorage.getItem(key)
//   }

//     if (jsonValue != null) return JSON.parse(jsonValue)

//     if (typeof initialValue === "function") {
//       return (initialValue as () => T)()
//     } else {
//       return initialValue
//     }
//     }hsnemam cas css
//   })
   const [value, setValue] = useState([] as number[]);
  useEffect(() => {
    var a = localStorage.getItem(key)
    setValue(a && JSON.parse(a))
  }, [])
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])



  return [value, setValue] as [typeof value, typeof setValue]

}
