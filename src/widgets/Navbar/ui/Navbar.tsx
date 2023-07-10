import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar')
  return (
      <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
        <div className={cls.logo}><a>Portfolio Anisina</a></div>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.PRIMARY}
              to={'/'} className={cls.mainLink}>{t('main')}
              </AppLink>
              <AppLink theme={AppLinkTheme.PRIMARY}
              to={'/about'} className={cls.mainLink}>
                  {t('about')}
              </AppLink>
              <AppLink theme={AppLinkTheme.PRIMARY}
              to={'/projects'} className={cls.mainLink}>
                  {t('projects')}
              </AppLink>
              <AppLink theme={AppLinkTheme.PRIMARY} to={'/contacts'}>
                  {t('contacts')}
              </AppLink>
          </div>
      </div>
  )
}
