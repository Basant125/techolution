import { useEffect, useState, useRef } from "react"

export function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observer = useRef()

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    })
  }, [])

  useEffect(() => {
    if(ref.current){
      observer.current.observe(ref.current)
    }
    return () => {
      if(observer.current){
        observer.current.disconnect()
      }
    }
  }, [ref, observer])

  return isIntersecting
}
