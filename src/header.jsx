import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import {  Link } from 'react-router-dom';
import {
  Container,
  Sidebar,
  Icon,
  Menu,
  
  Segment,
  Visibility
} from "semantic-ui-react";

const DesktopContainer = ({ children }) => {
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => {
    setFixed(false);
  };

  const showFixedMenu = () => {
    setFixed(true);
  };

  return (
    <div>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment inverted textAlign="center" vertical>
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Link to="/">
                <Menu.Item >STORE</Menu.Item>
              </Link>
              <Link to="/brand">
                <Menu.Item >BRAND</Menu.Item>
              </Link>
              <Link to="/contract">
                <Menu.Item >CONTACT</Menu.Item>
              </Link>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </div>
  );
}


const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handlePusherClick = () => {
    if (sidebarOpened) {
      setSidebarOpened(false);
    }
  };

  const handleToggle = () => {
    setSidebarOpened(!sidebarOpened);
  };

  return (
    <div >
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          vertical
          visible={sidebarOpened}
        >
          <Link to="/">
            <div className="mobile-list" onClick={() => { handleToggle() }}>STORE</div>
          </Link>
          <Link to="/brand">
            <div className="mobile-list" onClick={() => { handleToggle() }}>BRAND</div>
          </Link>
          <Link to="/contract">
            <div className="mobile-list" onClick={() => { handleToggle() }}>CONTACT</div>
          </Link>
        </Sidebar>
        <Sidebar.Pusher
          dimmed={sidebarOpened}
          onClick={handlePusherClick}
          style={{ minHeight: "100vh" }}
        >
          <Segment inverted textAlign="center" vertical className="sticky" >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}


export { DesktopContainer, MobileContainer };
