import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Brand from "./brand";
import Store from "./store";
import Contract from "./contact";
import { DesktopContainer, MobileContainer } from "./header";

const Pages = ({children}) => (
 <>
 <DesktopContainer>{children}</DesktopContainer>
 <MobileContainer>{children}</MobileContainer>
 </>
)


const HomepageLayout = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Pages><Store/></Pages>} />
      <Route path="/brand" element={<Pages><Brand /></Pages>} />
      <Route path="/contract" element={<Pages><Contract /></Pages>} />
    </Routes>
  </Router>

);

export default HomepageLayout;
