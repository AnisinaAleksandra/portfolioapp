import cls from "./Contact.module.scss";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation("contact");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log(form);
  };
  return (
    <div className={cls.container} id="contacts">
      <div className={cls.title_of_page}>{t("contact")}</div>
      <form className={cls.contacts_form} method="post" onSubmit={handleSubmit}>
        <input
          className={cls.field}
          placeholder={t("enter_your_name")}
          name="name"
        ></input>
        <input
          className={cls.field}
          placeholder={t("enter_your_email")}
          name="email"
        ></input>
        <textarea
          className={cls.field}
          placeholder={t("enter_your_message")}
          name="message"
          rows={5}
        ></textarea>
        <button className={cls.button_submit}>
          <span>{t("submit")}</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
