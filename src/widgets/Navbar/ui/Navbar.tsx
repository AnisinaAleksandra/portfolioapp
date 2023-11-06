import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
// import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation("navbar");
  // const actualTheme =
  //   localStorage.getItem("theme") === "dark"
  //     ? AppLinkTheme.PRIMARY
  //     : AppLinkTheme.SECONDARY;
  return (
    <div className={classNames(cls.navbar, {}, className ? [className] : [])}>
      <div className={cls.logo}>
        <a>Portfolio Anisina</a>
      </div>
      <div className={cls.links}>
        {/* <AppLink theme={actualTheme}
              to={'/'} className={cls.mainLink}>{t('main')}
              </AppLink>
              <AppLink theme={actualTheme}
              to={'/about'} className={cls.mainLink}>
                  {t('about')}
              </AppLink>
              <AppLink theme={actualTheme}
              to={'/projects'} className={cls.mainLink}>
                  {t('projects')}
              </AppLink>
              <AppLink theme={actualTheme} to={'/contacts'}>
                  {t('contacts')}
              </AppLink> */}

        <Link
          className={cls.mainLink}
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t("main")}
        </Link>
        <Link
          to="about"
          className={cls.mainLink}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t("about")}
        </Link>
        <Link
          to="projects"
          className={cls.mainLink}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t("projects")}
        </Link>
        <Link
          to="contacts"
          className={cls.mainLink}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t("contacts")}
        </Link>
      </div>
    </div>
  );
};
