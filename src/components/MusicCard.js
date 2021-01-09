import React from 'react'
import { useState } from 'react';
import '../assets/styles/components/music-card.scss';
import CustomInputBar from './CustomInputBar';

export default function MusicCard(props) {
    const { service } = props;
    const { link } = props;
    const { linkName } = props;

    const authorized = false; // variable used to check if user has authorized previously
    const [showInput, setShowInput] = useState(authorized ? true : false);
    console.log(showInput);

    if (!service || !link ||! linkName) {
        console.error('No service, link or linkName was given. Check MusicCard.js');
        return;
    }

    if(showInput) {
        document.querySelector(`.authorizer-button-wrapper-${service}`).classList.add('hidden');
        document.querySelector(`.playlist-checker-${service}`).classList.remove('hidden');
    }

    return(
        <div className={`music-wrapper music-wrapper-${service}`}>
            <div className="music-header text-5xl">
                <a href={ link }>{ linkName }</a>
            </div>
            <div className={`authorizer-button-wrapper authorizer-button-wrapper-${service}`}>
                {React.cloneElement(props.children, {setter: setShowInput})}
            </div>
            <div className={`playlist-checker playlist-checker-${service} hidden`}>
                <p>Enter the playlist you want to link, if empty then we will create a default one for you.</p>
                <CustomInputBar service={service}/>
            </div>
        </div>
    );
}
