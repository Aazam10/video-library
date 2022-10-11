const checkIsInWatchLater = (id, watchLater) => {
  return watchLater.some((video) => video._id === id);
};

export { checkIsInWatchLater };
