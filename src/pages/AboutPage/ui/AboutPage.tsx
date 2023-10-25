import cls from './AboutPage.module.scss'
import { useTranslation } from 'react-i18next'
const AboutPage = () => {
  const { t } = useTranslation('about')

  return (
      <div className={cls.container}>
          <div className={cls.title_of_page}>
              {t('ABOUT_ME')}
          </div>
          <div className={cls.content_page}>
               <div className={cls.description_part}>
              <div className={cls.who_am_i}>{t('WEB_DEVELOPER')}</div>
              <div className={cls.that_is_me}>{t('react_angular')}</div>
              <div className={cls.description_text}>
                  {t('description_text')}
              </div>
          </div>
          <div className={cls.my_skils}>
                 <div className={cls.title_of_skills}>
              {t('SKILLS')}
              </div>
                  <div className={cls.skills_list}>
                      <div className={cls.skills_item}>
                      React
                  </div>
                      <div className={cls.skills_item}>
                      Angular
                  </div>
                  <div className={cls.skills_item}>
                      HTML
                  </div><div className={cls.skills_item}>
                      CSS
                  </div><div className={cls.skills_item}>
                      JavaScript/TypeScript
                  </div><div className={cls.skills_item}>
                      SASS
                  </div><div className={cls.skills_item}>
                      GITHUB/GITLUB
                  </div><div className={cls.skills_item}>
                      Responsive Design
                  </div>

                  <div className={cls.skills_item}>
                      Express
                  </div>
                  <div className={cls.skills_item}>
                      RTK Query
                  </div>
                   
              </div>
          </div>
          </div>
         
      </div>
  )
}

export default AboutPage
