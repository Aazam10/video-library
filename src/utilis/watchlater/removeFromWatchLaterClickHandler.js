import { removeFromWatchLater } from "../../redux/asyncThunks/watchLaterThunk";
const removeFromWatchLaterClickHandler = async (dispatch, id, token) => {
  const {
    payload: { status },
  } = await dispatch(removeFromWatchLater({ id, token }));
  console.log(status);
};

export { removeFromWatchLaterClickHandler };
