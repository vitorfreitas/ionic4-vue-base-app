export default {
  LOGIN(state: any, payload: any) {
    state.Token = payload;
    localStorage.setItem("BaseAppToken", state.Token);
  },
  CHANGE_CURRENT_PAGE(state: any, payload: any) {
    state.CurrentPage = payload;
  }
};
