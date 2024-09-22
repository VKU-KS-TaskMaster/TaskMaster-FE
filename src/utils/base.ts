import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

// cn (clsx + twMerge)
export function cn(...inputs: any) {
  return twMerge(clsx(inputs))
}

// debounce a function (avoid a lot of click in 1 time)
export function debounce(fn: any, delay = 500) {
  let timerId: any
  return () => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }
    timerId = setTimeout(() => {
      fn()
    }, delay)
  }
}
