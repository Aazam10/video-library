import { addToLiked } from "../../redux/asyncThunks/likedVideoThunk";
const addToLikedClickHandler = (dispatch, video, token) => {
  dispatch(addToLiked({ video, token }));
};

export { addToLikedClickHandler };
