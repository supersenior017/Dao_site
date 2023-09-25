
import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Grid,
  Segment,
  Image,
  Card
} from "semantic-ui-react";

import PictureSlide from "./component/PictureSlide";
import Cart from "./component/Cart";
const colors = [{
  type: "single",
  color: "black",
  extraColor: "",
  file: "/dragon/Black Dragon 8143.jpg",
  count: 0
}, {
  type: "double",
  color: "green",
  extraColor: "black",
  border: "yellow",
  file: "/dragon/Black Yellow Green Dragon 8132.jpg",
  count: 0
}, {
  type: "single",
  color: "blue",
  extraColor: "",
  file: "/dragon/Blue Dragon 8140.jpg",
  count: 0
}, {
  type: "double",
  color: "red",
  border: "white",
  extraColor: "blue",
  file: "/dragon/Blue White Red Dragon 8136.jpg",
  count: 0
}, {
  type: "single",
  color: "gray",
  extraColor: "",
  file: "/dragon/Gray Dragon 8138.jpg",
  count: 0
}, {
  type: "single",
  color: "green",
  extraColor: "",
  file: "/dragon/Green Dragon 8133.jpg",
  count: 0
}, {
  type: "double",
  color: "green",
  extraColor: "blue",
  border: "white",
  file: "/dragon/Green White Blue Dragon 8131.jpg",
  count: 0
}, {
  type: "double",
  color: "green",
  extraColor: "red",
  border: "yellow",
  file: "/dragon/Green Yellow Red Dragon 8130.jpg",
  count: 0
}, {
  type: "single",
  color: "rgb(147,0,74)", colorName: "maroon",
  extraColor: "",
  file: "/dragon/Maroon Dragon 8139.jpg",
  count: 0
}, {
  type: "single",
  color: "rgb(71,36,184)", colorName: "dark purple",
  extraColor: "",
  file: "/dragon/Purple Dragon 8139.jpg",
  count: 0
}, {
  type: "single",
  color: "red",
  extraColor: "",
  file: "/dragon/Red Dragon 8135.jpg",
  count: 0
}, {
  type: "double",
  color: "red",
  extraColor: "black",
  border: "yellow",
  file: "/dragon/Red Yellow Black Dragon 8137.jpg",
  count: 0
}, {
  type: "single",
  color: "yellow",
  extraColor: "",
  file: "/dragon/Yellow Dragon 8134.jpg",
  count: 0
},]

const colors1 = [{
  type: "single",
  color: "black",
  extraColor: "",
  file: "/turtle/Black Turtle 8154.jpg",
  count: 0
}, {
  type: "single",
  color: "green",
  extraColor: "",
  file: "/turtle/Green Turtle 8148.jpg",
  count: 0
}, {
  type: "single",
  color: "rgb(123,16,67)", colorName: "maroon",
  extraColor: "",
  file: "/turtle/Maroon Turtle 8152.jpg",
  count: 0
}, {
  type: "single",
  color: "rgb(60,34,171)", colorName: "dark purple",
  extraColor: "",
  file: "/turtle/Purple Turtle 8150.jpg",
  count: 0
},]


const Store = () => {
  const [selected, setSelected] = useState({ content: { type: "", color: "", extraColor: "", file: "" }, id: null });
  const [selected1, setSelected1] = useState({ content: { type: "", color: "", extraColor: "", file: "" }, id: null });
  const [dragon, setDragon] = useState(colors);
  const [turtle, setTurtle] = useState(colors1);

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
          <PictureSlide selected={selected} setSelected={setSelected} colors={dragon} modifyCount={setDragon} type="DRAGON" />
          <PictureSlide selected={selected1} setSelected={setSelected1} colors={turtle} modifyCount={setTurtle} type="TURTLE" />
        </Grid.Row>
        <Grid.Row centered>
          <Card.Group centered>
            <Cart data={dragon} modifyCount={setDragon} type="DRAGON" selected={selected} setSelected={setSelected}/>
            <Cart data={turtle} modifyCount={setTurtle} type="TURTLE" selected={selected} setSelected={setSelected}/>
          </Card.Group>
        </Grid.Row>
        <Grid.Row style={{ paddingBottom: "80px" }}>
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
              <p className="small  close2top bold"><span className="big bold yellow underline">Buy 2 Dragons for $20 and get 1 Turtle free</span></p>
              <p className="small  close2top bold"><span className="big bold yellow underline">Buy 3 Turtles for $12</span></p>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingBottom: "80px" }}>
          <Grid.Column style={{ display: "flex", alignItems: "center", justifyContent: "center" }} width={10}>

            <div style={{ textAlign: "center" }}>
              <p className="small  close2top bold"><span className="big bold underline">You can also</span></p>
              <p className="small  close2top bold"><span className="big bold yellow underline">Wholesale Purchase</span></p>
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