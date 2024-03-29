import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/scss/_main.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './scenes/HomeSPA/Home';
import OnHere from './scenes/HomeSPA/OnHere';
import TextEmail from './scenes/HomeSPA/TextEmail';
import SyncID from './scenes/HomeSPA/SyncID';

import Donate from './scenes/Donate';
import ContactUs from './scenes/ContactUs';
import AboutUs from'./scenes/AboutUs';
import Redirect from'./scenes/Redirect';

import PrivacyPolicy from './scenes/PrivacyPolicy';
import TermsOfUse from './scenes/TermsOfUse';
import SiteMap from './scenes/SiteMap';
import FourOhFour from './scenes/404';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" component={ Home } exact={ true } />
          <Route path="/on-here" component={ OnHere } />
          <Route path="/email" component={ TextEmail } />
          <Route path="/texting" component={ SyncID } />

          <Route path="/donate" component={ Donate } />
          <Route path="/contact-us" component={ ContactUs } />
          <Route path="/about-us" component={ AboutUs } />
          <Route path="/redirect" component={ Redirect } />

          <Route path="/privacy-policy" component={ PrivacyPolicy } />
          <Route path="/terms-of-use" component={ TermsOfUse } />
          <Route path="/site-map" component={ SiteMap } />
          <Route path="/404" component={ FourOhFour } />

        </Switch>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
