import React from 'react';
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './GlobalContext';

import Howtouse from "./howtouse";
import Brand from "./brand";
import Store from "./store";
import Contact from "./contact";
import Cart from './cart';
import { DesktopContainer, MobileContainer } from "./header";
import { useMediaQuery } from 'react-responsive';


const Pages = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  if (isMobile) {
    return <MobileContainer>{children}</MobileContainer>
  } else {
    return <DesktopContainer>{children}</DesktopContainer>
  }

}


const HomepageLayout = () => (
  <GlobalProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Pages><Store /></Pages>} />
        <Route path="/howtouse" element={<Pages><Howtouse /></Pages>} />
        <Route path="/brand" element={<Pages><Brand /></Pages>} />
        <Route path="/contact" element={<Pages><Contact /></Pages>} />
        <Route path="/cart" element={<Pages><Cart /></Pages>} />
      </Routes>
    </Router>
  </GlobalProvider>


);

export default HomepageLayout;
