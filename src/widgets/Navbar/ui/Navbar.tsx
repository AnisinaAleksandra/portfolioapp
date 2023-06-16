import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  return (
      <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.SECONDARY}
              to={'/'} className={cls.mainLink}>{t('main')}
              </AppLink>
              <AppLink theme={AppLinkTheme.RED}
              to={'/about'} className={cls.mainLink}>
                  {t('about')}
              </AppLink>
              <AppLink theme={AppLinkTheme.RED}
              to={'/projects'} className={cls.mainLink}>
                  {t('projects')}
              </AppLink>
              <AppLink theme={AppLinkTheme.RED} to={'/contacts'}>
                  {t('contacts')}
              </AppLink>
          </div>
      </div>
  )
}
