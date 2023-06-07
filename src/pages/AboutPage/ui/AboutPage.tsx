import React from 'react';
import cls from './AboutPage.module.scss';
import {useTranslation} from 'react-i18next'
const AboutPage = () => {

    const {t} = useTranslation("about");

    return (
        <div className={cls.container}>
            <div className={cls.description_part}>
                <div className={cls.who_am_i}>{t('WEB_DEVELOPER')}</div>
                <div className={cls.that_is_me}>{t("react_angular")}</div>
                <div className={cls.description_text}>
                {t('description_text')}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
