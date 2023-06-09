import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
      <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                  Главная
              </AppLink>
              <AppLink theme={AppLinkTheme.RED} to={'/about'} className={cls.mainLink}>
                  Обо мне
              </AppLink>
              <AppLink theme={AppLinkTheme.RED} to={'/projects'} className={cls.mainLink}>
                  Проекты
              </AppLink>
              <AppLink theme={AppLinkTheme.RED} to={'/contacts'}>
                  Контакты
              </AppLink>
          </div>
      </div>
  )
}
