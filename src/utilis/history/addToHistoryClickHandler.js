import { checkIsinHistory, removeFromHistoryClickHandler } from "../../utilis";
import { addToHistory } from "../../redux/asyncThunks/historyThunk";

const addToHistoryClickHandler = async (video, token, dispatch, history) => {
  if (checkIsinHistory(video._id, history)) {
    const response = await removeFromHistoryClickHandler(
      dispatch,
      video._id,
      token
    );
    console.log(response);
    dispatch(addToHistory({ video, token }));
  } else {
    dispatch(addToHistory({ video, token }));
  }
};

export { addToHistoryClickHandler };
