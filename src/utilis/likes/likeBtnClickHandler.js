import {
  checkIsLiked,
  removeFromLikeClickHandler,
  addToLikedClickHandler,
} from "../../utilis";
const likeBtnClickHandler = (id, dispatch, video, token, likedVideos) => {
  checkIsLiked(id, likedVideos)
    ? removeFromLikeClickHandler(dispatch, id, token)
    : addToLikedClickHandler(dispatch, video, token);
};

export { likeBtnClickHandler };
