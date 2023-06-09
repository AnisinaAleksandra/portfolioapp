import cls from './MainPage.module.scss'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
      <div className={cls.main_page}>
          <div className={cls.left_side}>
              <div className={cls.head_text}>
                  <span className={cls.orange_text}>{t('orange_text')}</span>
                  <div className={cls.description_text}>{t('description_text')}</div>
              </div>

              <div className={cls.bottom_text}>{t('bottom_text')}</div>
          </div>
          <div className={cls.right_side_foto}>
          </div>
      </div>
  )
}

export default MainPage
