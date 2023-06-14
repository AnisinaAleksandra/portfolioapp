import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
      <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, className ? [className] : [])}
        >
          <button onClick={onToggle}>toggle</button>
          <div className={cls.switchers}>
            <BugButton/>
              <LangSwitcher/>
              <ThemeSwitcher />
          </div>
      </div>
  )
}
