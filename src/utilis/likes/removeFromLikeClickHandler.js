import { removeFromLiked } from "../../redux/asyncThunks/likedVideoThunk";
const removeFromLikeClickHandler = async (dispatch, id, token) => {
  const {
    payload: { status },
  } = await dispatch(removeFromLiked({ id, token }));
  // console.log(status);
};

export { removeFromLikeClickHandler };
