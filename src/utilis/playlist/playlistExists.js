const playlistExists = (title, playlists) => {
  return playlists.some((playlist) => playlist.title === title);
};

export { playlistExists };
