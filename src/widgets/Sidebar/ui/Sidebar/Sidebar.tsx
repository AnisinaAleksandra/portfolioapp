import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
// import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from "./Sidebar.module.scss";
// import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { useTranslation } from "react-i18next";
import { useTheme } from "app/providers/ThemeProviders";
// import { BugButton } from 'app/providers/ErrorBoundary'
// import CollLeft from 'shared/assets/icons/window-collapse-left-svgrepo-com.svg'
// import CollRight
//   from 'shared/assets/icons/window-collapse-right-svgrepo-com.svg'

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  // const [collapsed, setCollapsed] = useState(true)
  const { theme, toggleTheme } = useTheme();

  // const onToggle = () => {
  //   setCollapsed((prev) => !prev)
  // }
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar)}>
      <div className={cls.switchers}>
        <div className={cls.social_container}>
          <ul className={cls.social_icons}>
            <li>
              <a href="https://wa.me/9133856872">
                <i className="fa fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#" onClick={toggle}>
                <i className="fa fa-language"></i>
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleTheme}>
                <i
                  className="fa fa-lightbulb-o"
                  aria-hidden="true"
                  style={{ left: "14px" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
