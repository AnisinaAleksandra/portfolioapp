import { useState } from "react";
import cls from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { sendNotification } from "shared/config/utils/telegram";

const Contact = () => {
  const { t } = useTranslation("contact");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [messageIsSend, setMessageIsSend] = useState(false);
  const handleSubmitForm = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    const textMessage: string = `${data.name},${data.email},${data.message}`;
    console.log(textMessage);

    sendNotification(textMessage, "html").then((res) => {
      console.log(res);

      // if (JSON.parse(res)["ok"]) {
      //   setMessageIsSend(JSON.parse(res)["ok"]);
      // }
      // if (!JSON.parse(res)["ok"]) {
      //   setMessageIsSend(JSON.parse(res)["ok"]);
      // }
    });
    // .catch((res) => {
    //   console.log(JSON.parse(res));

    //   setMessageIsSend(true);
    // });
  };

  return (
    <div className={cls.container} id="contacts">
      <div className={cls.title_of_page}>{t("contact")}</div>
      <form
        className={cls.contacts_form}
        method="post"
        onSubmit={handleSubmit((data) => handleSubmitForm(data))}
      >
        <input
          className={cls.field}
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Min lenght is 3" },
          })}
          style={{
            borderColor: errors.name?.message ? "#ff9a9a" : "#bef0e4",
          }}
        ></input>
        {/* <span className={cls.errorMessage}>{errors.name?.message}</span> */}
        <input
          className={cls.field}
          placeholder={t("enter_your_email")}
          type="email"
          id="email"
          {...register("email", {
            required: "Email Address is required",
            pattern:
              // eslint-disable-next-line no-useless-escape
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          style={{
            borderColor:
              errors.email?.type || errors.email?.message
                ? "#ff9a9a"
                : "#bef0e4",
          }}
        ></input>
        <textarea
          className={cls.field}
          placeholder={t("enter_your_message")}
          id="message"
          {...register("message")}
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
