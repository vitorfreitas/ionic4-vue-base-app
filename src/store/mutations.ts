export default {
  LOGIN(state: any, payload: any) {
    state.Token = payload;
    localStorage.setItem("AppTabToken", state.Token);
  },
  CHANGE_USER(state: any, payload: any) {
    state.User = payload;
  },
  CHANGE_CURRENT_PAGE(state: any, payload: any) {
    state.CurrentPage = payload;
  }
};
