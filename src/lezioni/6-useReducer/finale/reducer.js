import { OPEN_CLOSE_MODAL } from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case `PREMO_BOTTONE`:
      console.log("bottone premuto");
      if (state.isChange) {
        return {
          ...state,
          input: "User Reducer Components !",
          isChange: false,
        };
      }
      return { ...state, input: "Sono il nuovo Use Reducer", isChange: true };
    case OPEN_CLOSE_MODAL:
      if (state.isModalOpen) {
        return { ...state, isModalOpen: false, modalContent: "" };
      }
      return { ...state, isModalOpen: true, modalContent: action.payload };
    default:
      console.log("Non ci sono funzioni");
      break;
  }
};
export default reducer;
