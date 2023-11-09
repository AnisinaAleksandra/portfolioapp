import { makePostRequest } from "./api";

const telegramBotKey = process.env.TELEGRAM_BOT_TOKEN;
const chat_id = `${process.env.TELEGRAM_USER_ID}`;

export const sendNotification = async (text: string, parse_node: string) => {
  let response = "";
  const endpoint = `https://api.telegram.org/bot${telegramBotKey}/sendMessage`;
  await makePostRequest(endpoint, {
    chat_id,
    parse_node,
    text,
  })
    .then((res) => JSON.stringify(res))
    .then((data) => (response = data))
    .catch((error) => (response = error));
  return response;
};
