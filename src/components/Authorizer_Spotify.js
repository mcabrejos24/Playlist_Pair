import axios from "axios";
import { useEffect, useState } from "react";

// var client_id = '2ca75b06400e42f69f44c8d84de5043c'; // Your client id
// var client_secret = 'cf7478a852b64912a582ff12a0b39b29'; // Your secret
// var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri




export default function Authorizer_Spotify() {

    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
    } = process.env;
    
//    useEffect(() => {
//     axios.get(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private%20user-read-email&state=34fFs29kd09`)
//         .then(res => {
//             console.log('spiderman: '+res);
//         })
//     },[]);

    const handleLogin = () => {
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    return (
        <button variant="info" type="submit" onClick={handleLogin}>
            Login to spotify
        </button>
    );
}
