import React from "react";
import { useState } from "react";
import ModishInputBar from "./ModishInputBar";

export default function MusicCard(props) {
  const { service } = props;
  const { link } = props;
  const { linkName } = props;
  const { confirmPlaylist } = props;

  const authorized = false; // variable used to check if user has authorized previously
  const [showInput, setShowInput] = useState(authorized ? true : false);

  if (!service || !link || !linkName) {
    console.error("No service, link or linkName was given. Check MusicCard.js");
    return;
  }

  if (showInput) {
    document
      .querySelector(`.authorizer-button-wrapper-${service}`)
      .classList.add("hidden");
    document
      .querySelector(`.playlist-checker-${service}`)
      .classList.remove("hidden");
  }

  return (
    <div className={`music-wrapper music-wrapper-${service}`}>
      <div className={`music-header text-5xl`}>
        <a className={`header-title-${service}`} href={link}>
          {linkName}
        </a>
      </div>
      <div
        className={`authorizer-button-wrapper authorizer-button-wrapper-${service}`}
      >
        {/* Grabs the child component (spotify or apple authorizer) inside and passes setShowInput */}
        {/* function to update if the MusicCard component should show the input for playlists */}
        {React.cloneElement(props.children, { setter: setShowInput })}
      </div>
      <div className={`playlist-checker playlist-checker-${service} hidden`}>
        <p className="music-card-description">
          Enter the name of the playlist you want to link
        </p>
        <p className="music-card-note">
          {service === "apple"
            ? "Note: In order for us to successfuly FIND your APPLE playlist of choice, you must have AT LEAST one song already in it. Even if you created it on here. Also note, if created here you might want to wait 5 or so minutes."
            : "Note: In order for us to successfuly LINK your SPOTIFY playlist of choice, you must be the owner of this playlist. Also note you must reload this page and authorize again if idle longer than an hour."}
        </p>
        <ModishInputBar service={service} confirmPlaylist={ confirmPlaylist } />
      </div>
    </div>
  );
}
