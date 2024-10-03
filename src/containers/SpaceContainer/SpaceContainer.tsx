import { useAppDispatch, useAppSelector } from '@features/hook'
import { setThemeMode } from '@features/slices/theme/themeSlice'
import { useTheme } from '@hooks/useTheme'
import { ReactNode, useEffect } from 'react'

function SpaceContainer({ children }: { children: ReactNode }) {
  const [darkTheme] = useTheme()
  const themeMode = useAppSelector((state) => state.theme.mode)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const curMode = darkTheme ? 'dark' : 'light'
    if (themeMode != curMode) dispatch(setThemeMode({ mode: curMode }))
  }, [darkTheme])

  return children
}

export default SpaceContainer
