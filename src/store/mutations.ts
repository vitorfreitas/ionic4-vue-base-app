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
  },
  ADD_NEW_NOTE(state: any, payload: any) {
    state.noteList.push(payload);
    localStorage.setItem("noteList", JSON.stringify(state.noteList));
  },
  UPDATE_NOTE(state: any, payload: any) {
    state.noteList.forEach((note: any, index: number) => {
      if (note.id == payload.id) {
        state.noteList[index] = payload;
      }
    });
    localStorage.setItem("noteList", JSON.stringify(state.noteList));
  }
};
