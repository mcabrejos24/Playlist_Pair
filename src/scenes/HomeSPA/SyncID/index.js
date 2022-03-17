import { useState, useEffect } from "react";
import BackButton from "../../../components/BackButton";
import MusicCard3 from "../../../components/MusicCard3";
import AuthorizerAppleMusic from "../../../components/AuthorizerAppleMusic";
import AuthorizerSpotify from "../../../components/AuthorizerSpotify";
import SubmitSync from "../../../components/SubmitSync";

export default function SyncID() {
  const [playlistReady, setPlaylistReady] = useState(false);

  function openPopUp() {
    const popup = document.getElementById("popup");
    if (popup.classList.contains("popup-hide")) {
      popup.classList.remove("popup-hide");
    }
    popup.classList.add("popup-show");
  }

  function closePopUp() {
    const popup = document.getElementById("popup");
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
    popup.classList.add("popup-hide");
  }

  useEffect(() => {
    // setTimeout(openPopUp,500);
    openPopUp();
  });

  return (
    <div className="content sync-id-page">

      <div className="coming-soon">
        <div id="popup" className="popup">
          <div className="popup-card">
            <h2>Coming Soon!</h2>
            <button id="close" className="close" onClick={closePopUp}>&times;</button>
            <p className="popup-card--content">This page is still in development so submitting won't actually do anything. But feel free to mess around!</p>
          </div>
        </div>
      </div>

      <BackButton></BackButton>
      <div className="double-authorizer-wrapper">
        <MusicCard3 confirmPlaylist={setPlaylistReady}>
          <AuthorizerAppleMusic />
          <AuthorizerSpotify />
        </MusicCard3>
      </div>
      <SubmitSync playlistReady={playlistReady} />

            <div className="how-it-works sync-id">
                <h1 className="how-it-works-title">How to use this sync ID option</h1>
                <div className="point need">
                    <h2 className="point-title">Submit Sync ID</h2>
                    <div className="point-description">
                        <p>This one is made for when both your peer has already done the second option.
                            <br /><br />
                            Simply, enter the Sync ID that was emailed or texted to you.
                            <br /><br />
                            You then choose the playlist you would like to sync.
                            <br /><br />
                            If you want to make a new playlist, then enter the name of the new playlist and press the button below it to create it.
                            <br /><br />
                            Then, since you peer has already provided their information, you just need to press the Sync button and your playlists will be synced!
                            <br /><br />
                            Enjoy sharing your playlist!
                            <br/><br/>
                        </p>
                    </div>
                </div>
            </div>
      
    </div>
  );
}
