import { addToWatchLater } from "../../redux/asyncThunks/watchLaterThunk";
const addToWatchLaterClickHandler = async (dispatch, video, token) => {
  const {
    payload: { status },
  } = await dispatch(addToWatchLater({ token, video }));
  console.log(status);
};

export { addToWatchLaterClickHandler };
