import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { BugButton } from 'app/providers/ErrorBoundary'
import CollLeft from 'shared/assets/icons/window-collapse-left-svgrepo-com.svg'
import CollRight
  from 'shared/assets/icons/window-collapse-right-svgrepo-com.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
      <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar,
              { [cls.collapsed]: collapsed },
              [className ?? ''])}
        >
          <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ThemeButton.CLEAR}
            >
              {collapsed ? <CollRight/> : <CollLeft/> }
          </Button>
          <div className={cls.switchers}>
              {/* <BugButton/> */}
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  )
}
