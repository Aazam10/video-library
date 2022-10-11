const checkIsLiked = (id, likedVideos) => {
  return likedVideos.some((video) => video._id === id);
};

export { checkIsLiked };
