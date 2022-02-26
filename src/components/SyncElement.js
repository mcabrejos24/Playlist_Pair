import axios from 'axios';
import { useEffect } from 'react';
import { getAuthValue } from "../variables/authValues";

export default function SyncElement(props) {
    let { spotifyConfirmed } = props;
    let { appleConfirmed } = props;

    useEffect(() => {
        let progressBar = document.querySelector('.sync-progress-bar');
        let syncButton = document.querySelector('.sync-button');

        if(spotifyConfirmed && appleConfirmed) {
            if(!progressBar.children[1].classList.contains('active')) progressBar.children[1].classList.add('active');
            if(!progressBar.children[2].classList.contains('active')) progressBar.children[2].classList.add('active');
            syncButton.disabled = false;
        }
        else if(spotifyConfirmed || appleConfirmed) {
            if(progressBar.children[2].classList.contains('active')) progressBar.children[2].classList.remove('active');
            if(!progressBar.children[1].classList.contains('active')) progressBar.children[1].classList.add('active');
            syncButton.disabled = true;
        } else {
            if(progressBar.children[1].classList.contains('active')) progressBar.children[1].classList.remove('active');
            if(progressBar.children[2].classList.contains('active')) progressBar.children[2].classList.remove('active');
            syncButton.disabled = true;
        }
    },[spotifyConfirmed, appleConfirmed]);

    async function syncPlaylists() {
        const applePlaylistValue = document.querySelector('.input-bar[name=apple]')?.value;
        const spotifyPlaylistValue = document.querySelector('.input-bar[name=spotify]')?.value;
        const hasValue = applePlaylistValue && spotifyPlaylistValue;
        if (!hasValue) return; //maybe do some error log
        
        let appleHash = window.btoa(getAuthValue('apple'));         // length 328
        let spotifyHash = window.btoa(getAuthValue('spotify'));     // length 312


        let appleAuthValue = [appleHash.slice(0, 128), appleHash.slice(128, 256), appleHash.slice(256, appleHash.length)];
        let spotifyAuthValue = [spotifyHash.slice(0, 128), spotifyHash.slice(128, 256), spotifyHash.slice(256, spotifyHash.length)];


        let syncStatus = await playlistPOST(appleAuthValue, spotifyAuthValue, applePlaylistValue, spotifyPlaylistValue);

        if(syncStatus) {
            console.log('SUCCESS in posting to backend!');
        } else {
            console.log('FAILED in posting to backend!');
        }
    }

    // THIS function will be moved under the api folder but for now lets keep it here for ease of access
    function playlistPOST(appleAuthValue, spotifyAuthValue, applePlaylistName, spotifyPlaylistName)  { 
        let path = 'playlist-pairs/';

        return axios.post(`http://127.0.0.1:8000/api/${path}`,
            {
                    "apple_token_1": appleAuthValue[0],
                    "apple_token_2": appleAuthValue[1],
                    "apple_token_3": appleAuthValue[2],
                    "spotify_token_1": spotifyAuthValue[0],
                    "spotify_token_2": spotifyAuthValue[1],
                    "spotify_token_3": spotifyAuthValue[2],
                    "apple_playlist_name": applePlaylistName,
                    "spotify_playlist_name": spotifyPlaylistName
            },
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
            // SOMETHING LIKE THIS IS WHAT WE WILL USE TO AUTHORIZE AND KEEP THE BACKEND SECURE, WE CAN LOOK INTO THIS LATER, JUST KEEPING IT HERE SO WE CAN REFERENCE IT
            // { 
            //     headers: {
            //         'music-user-token': `${getAuthValue('apple')}`,
            //         'Authorization': `Bearer ${REACT_APP_DEVELOPER_TOKEN}`
            //     }
            // }
        )
        .then(function (response) {
            return true;
        })
        .catch(function (error) {
            console.log(error);
            return false;
        });
    }

    return (
            <div className="sync-container">
                <ul className="sync-progress-bar">
                    <li className="active">1st Playlist</li>
                    <li>2nd Playlist</li>
                    <li>Sync</li>
                </ul>
                <button className="sync-button" onClick={ syncPlaylists }>
                    Sync Playlists
                </button>
            </div>
    )
}
