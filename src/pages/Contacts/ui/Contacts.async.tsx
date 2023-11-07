import { lazy } from "react";
export const ContactsAsync = lazy(async () => await import("./Contacts"));
