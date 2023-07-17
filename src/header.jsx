import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Sidebar,
  Icon,
  Menu,
  Responsive,
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
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
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
                <Menu.Item as="a">STORE</Menu.Item>
              </Link>
              <Link to="/brand">
                <Menu.Item as="a">BRAND</Menu.Item>
              </Link>
              <Link to="/contract">
                <Menu.Item as="a">CONTACT</Menu.Item>
              </Link>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </Responsive>
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
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          vertical
          visible={sidebarOpened}
        >
          <Link to="/">
            <Menu.Item as="a" onClick={() => { handleToggle() }}>STORE</Menu.Item>
          </Link>
          <Link to="/brand">
            <Menu.Item as="a" onClick={() => { handleToggle() }}>BRAND</Menu.Item>
          </Link>
          <Link to="/contract">
            <Menu.Item as="a" onClick={() => { handleToggle() }}>CONTACT</Menu.Item>
          </Link>
        </Sidebar>
        <Sidebar.Pusher
          dimmed={sidebarOpened}
          onClick={handlePusherClick}
          style={{ minHeight: "100vh" }}
        >
          <Segment inverted textAlign="center" vertical class="sticky" >
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
    </Responsive>
  );
}


export { DesktopContainer, MobileContainer };
