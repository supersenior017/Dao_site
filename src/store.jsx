
import React, { useState, useContext } from "react";
import { GlobalContext } from './GlobalContext';
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Grid,
  Segment,
  Image,
  Card,
  Message,
  Button,
  Icon,
  Input,
  Table
} from "semantic-ui-react";

import PictureSlide from "./component/PictureSlide";
import { useMediaQuery } from 'react-responsive';

const Store = () => {
  const [selected, setSelected] = useState({ content: { type: "", color: "", extraColor: "", file: "" }, id: null });
  const [selected1, setSelected1] = useState({ content: { type: "", color: "", extraColor: "", file: "" }, id: null });
  const { dragon, setDragon,turtle, setTurtle ,whole, setWhole,  inputValue, setInputValue,allowedValue } = useContext(GlobalContext);
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column centered="true">
            <img className="ui fluid rounded image" alt="Store" src="/store.jpg" fluid="true" data-xblocker="passed" width="300px" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column centered="true">
            <img className="ui rounded image centered" alt="Hand" src="/main_bg.jpg" fluid="true" data-xblocker="passed" width="1300px" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <PictureSlide selected={selected} setSelected={setSelected} colors={dragon} type="DRAGON" />
          <PictureSlide selected={selected1} setSelected={setSelected1} colors={turtle} type="TURTLE" />
        </Grid.Row>

        <Grid.Row centered>
          <Message style={{ width: "90%", marginBottom: "20px" }}>

            <Grid>
              <Grid.Row centered className="bold big">
                Click on colors to choose quantity
              </Grid.Row>
              <Grid.Row centered style={{ marginLeft: "10%", marginRight: "10%", justifyContent: "space-between" }} >
                <span className="small bold " style={{ padding: "auto", margin: "auto" }}>DRAGONS $10 each</span>
                <span className="small bold" style={{ padding: "auto", margin: "auto" }}>TURTLES $5 each</span>
              </Grid.Row>
              <Grid.Row centered className="small">

                <Link
                  to="section1"
                  smooth={true}
                  duration={500}
                >
                  See Specials Below
                </Link>
              </Grid.Row>
            </Grid>
          </Message>
        </Grid.Row>
        
        <Grid.Row style={{ paddingBottom: "80px" }} id="section1">
          <Grid.Column floated="right" width={11}>
            <Image
              style={{ width: "100%" }}
              src="/Product Grouping_8163.jpg"
              className="ui centered medium image"
            />
          </Grid.Column>
          <Grid.Column width={5} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <p className="small  close2top bold"><span className="big bold yellow underline">All retail orders for $20 or more, shipping is free</span></p>
              <p className="small  close2top bold"><span className="big bold yellow underline">Buy 2 Dragons or more, get 1 Turtle free</span></p>
              <p className="small  close2top bold"><span className="big bold yellow underline">Buy 3 Turtles for $12</span></p>
            </div>
          </Grid.Column>
        </Grid.Row>

        

        <Grid.Row style={{ paddingBottom: "80px" }}>
          <Grid.Column style={{ display: "flex", alignItems: "center", justifyContent: "center" }} width={8}>

            <div style={{ textAlign: "center" }}>
              <p className="small close2top"><span className="big bold underline">You can also</span></p>
              <p className="small close2top"><span className="big bold yellow underline">Wholesale Purchase</span></p>
              <p className="small close2top"><span className="big bold yellow underline">Buy 1 container of 20 Dragons for $100.</span></p>
              <p className="small close2top"><span className="big bold yellow underline">Buy 2 or more containers of 20 Dragons for $80 each.</span></p>
              <Grid verticalAlign="middle" style={{ marginTop: '50px' }}>
                <Grid.Row columns={2} >
                  <Grid.Column>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <button
                        class="ui icon button"
                        style={{ height: "40px" }}
                        onClick={() => inputValue >= 1 && allowedValue.includes(`${inputValue * 1 - 1}`) && setInputValue(`${inputValue * 1 - 1}`)}
                        disabled={inputValue <= 0}
                      >
                        <i class={inputValue >= 2 ? "minus icon" : "trash icon"}></i>
                      </button>
                      <Input
                        style={{ width: "90px", height: "40px", fontSize: "20px", marginLeft: "-3px" }}
                        type="number"
                        size="mini"
                        value={inputValue}
                        width="full"
                        onChange={(e) => {
                          if (allowedValue.includes(e.target.value)) {
                            setInputValue(e.target.value)
                          }

                        }}
                        placeholder="Required Number"
                      />
                      <button
                        class="ui icon button"
                        style={{ height: "40px" }}
                        onClick={() => allowedValue.includes(`${inputValue * 1 + 1}`) && setInputValue(`${inputValue * 1 + 1}`)}
                        disabled={inputValue >= 10}
                      >
                        <i class="plus icon"></i>
                      </button>
                    </div>
                  </Grid.Column>

                  <Grid.Column>
                    <Button
                      onClick={() => {

                        setWhole([{
                          ...whole[0],
                          count: Number(inputValue)
                        }]);

                      }}
                      animated='vertical' size='big' color='teal' style={{ width: '160px' }}>
                      <Button.Content hidden>Add to Cart</Button.Content>
                      <Button.Content visible>
                        <Icon name='shop' />
                      </Button.Content>
                    </Button>

                  </Grid.Column>
                </Grid.Row>
              </Grid>

            </div>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              style={{ width: "100%" }}
              src="/Stacked Jars.jpg"
              className="ui centered medium image"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Store;