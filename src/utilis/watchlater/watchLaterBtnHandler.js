import {
  checkIsInWatchLater,
  removeFromWatchLaterClickHandler,
  addToWatchLaterClickHandler,
} from "../../utilis";
const watchLaterBtnHandler = (id, dispatch, video, token, watchLater) => {
  checkIsInWatchLater(id, watchLater)
    ? removeFromWatchLaterClickHandler(dispatch, id, token)
    : addToWatchLaterClickHandler(dispatch, video, token);
};

export { watchLaterBtnHandler };
