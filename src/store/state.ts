import { Pages } from "./interfaces";

export default {
  User: {
    name: "",
    email: ""
  },
  Token: null,
  CurrentPage: Pages.Login,
  noteList:
    (JSON.parse(localStorage.getItem("noteList") as string) as Array<any>) || []
};
