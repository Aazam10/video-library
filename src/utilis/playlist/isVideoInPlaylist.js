const isVideoInPlaylist = (playlist, video) => {
  return playlist.videos.some((v) => v._id === video._id);
};

export { isVideoInPlaylist };
