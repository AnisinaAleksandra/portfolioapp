import cls from "./Contacts.module.scss";
import { useTranslation } from "react-i18next";
const Contacts = () => {
  const { t } = useTranslation("contacts");

  return (
    <div className={cls.container} id="contacts">
      <div className={cls.title_of_page}>{t("contacts")}</div>
      <div className={cls.contacts_form}>
        <input className={cls.field} placeholder="Enter your Name"></input>
        <input className={cls.field} placeholder="Enter your Email"></input>
        <textarea
          className={cls.field}
          placeholder="Enter your NamMessage"
        ></textarea>
      </div>
    </div>
  );
};

export default Contacts;
