import "./App.css";
import { Routes, Route } from "react-router-dom";

import { RequiresAuth } from "./RequiresAuth";
import { Explore } from "./components/Explore/Explore";
import { SingleVideo } from "./components/SingleVideo/SingleVideo";
import { useSelector } from "react-redux";
import { PlaylistModal } from "./components/PlaylistModal/PlaylistModal";
import {
  LikedVideos,
  WatchLater,
  History,
  Playlist,
  SinglePlaylist,
  Login,
  Signup,
} from "./pages";
import { Layout } from "./components/Layout/Layout";
function App() {
  const isModalOpen = useSelector(
    (state) => state.playlist.videoToAddInPlaylist
  );
  console.log(!!isModalOpen);
  return (
    <div className="App">
      {!!isModalOpen && <PlaylistModal />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Explore />} />
          <Route
            path="/liked"
            element={
              <RequiresAuth>
                <LikedVideos />
              </RequiresAuth>
            }
          />
          <Route
            path="/later"
            element={
              <RequiresAuth>
                <WatchLater />
              </RequiresAuth>
            }
          />
          <Route
            path="/history"
            element={
              <RequiresAuth>
                <History />
              </RequiresAuth>
            }
          />
          <Route
            path="/playlist"
            element={
              <RequiresAuth>
                <Playlist />
              </RequiresAuth>
            }
          />
          <Route
            path="/playlist/:playlistId"
            element={
              <RequiresAuth>
                <SinglePlaylist />
              </RequiresAuth>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path=":videoId" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
