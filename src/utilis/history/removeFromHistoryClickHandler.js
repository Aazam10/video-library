import { removeFromHistory } from "../../redux/asyncThunks/historyThunk";

const removeFromHistoryClickHandler = async (dispatch, id, token) => {
  await dispatch(removeFromHistory({ id, token }));
};

export { removeFromHistoryClickHandler };
