import React, { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from './GlobalContext';
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';
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
  const [number, setNumber] = useState(0);
  const { dragon, setDragon, turtle, setTurtle, whole, setWhole } = useContext(GlobalContext);

  useEffect(() => {
    let temp = 0;
    dragon.forEach(each => {
      if (each.count > 0) temp++;
    })
    turtle.forEach(each => {
      if (each.count > 0) temp++;
    })
    whole.forEach(each => {
      if (each.count > 0) temp++;
    })

    setNumber(temp);
  }, [dragon, turtle, whole]);

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
              <Link to="/howtouse">
                <Menu.Item >HOW TO USE</Menu.Item>
              </Link>
              <Link to="/brand">
                <Menu.Item >BRAND</Menu.Item>
              </Link>
              <Link to="/contact">
                <Menu.Item >CONTACT</Menu.Item>
              </Link>
              <Menu.Item position="right" style={{ paddingRight: 0 }}>
                <Link to="/cart">
                  <span className="avatar-container">
                    <Icon name="shopping cart" size="large"
                      className="avatar" />
                  </span>
                  <span className="badge">{number}</span>
                </Link>
              </Menu.Item>

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
  const [height, setHeight] = useState(0);
  const headerRef = useRef();
  const [number, setNumber] = useState(0);
  const { dragon, setDragon, turtle, setTurtle, whole, setWhole } = useContext(GlobalContext);

  const handlePusherClick = () => {
    console.log('pusher')
    if (sidebarOpened) {
      setSidebarOpened(false);
    }
  };

  const handleToggle = () => {
    setSidebarOpened(!sidebarOpened);
  };

  useEffect(() => {
    let temp = 0;
    dragon.forEach(each => {
      if (each.count > 0) temp++;
    })
    turtle.forEach(each => {
      if (each.count > 0) temp++;
    })
    whole.forEach(each => {
      if (each.count > 0) temp++;
    })

    setNumber(temp);
  }, [dragon, turtle, whole]);
  useEffect(()=>{
    
    setHeight(headerRef.current.clientHeight)
  }, [])
  console.log(height)
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
          <Link to="/howtouse">
            <div className="mobile-list" onClick={() => { handleToggle() }}>HOW TO USE</div>
          </Link>
          <Link to="/brand">
            <div className="mobile-list" onClick={() => { handleToggle() }}>BRAND</div>
          </Link>
          <Link to="/contact">
            <div className="mobile-list" onClick={() => { handleToggle() }}>CONTACT</div>
          </Link>

        </Sidebar>
        <Sidebar.Pusher
          
          dimmed={sidebarOpened}
          onClick={handlePusherClick}
          style={{ width: "100%"}}
        >
          <div ref={headerRef}>
          <Segment inverted textAlign="center" vertical>
            <Container>
              <Menu inverted pointing secondary  >
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right" style={{ paddingRight: 0 }}>
                  <Link to="/cart">
                    <span className="avatar-container">
                      <Icon name="shopping cart" size="large"
                        className="avatar" />
                    </span>
                    <span className="badge">{number}</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          </div>
          <div style={{height:`calc(100vh - ${height}px)`, overflow: 'auto'}}>
            {children}
          </div>

        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
export { DesktopContainer, MobileContainer };
