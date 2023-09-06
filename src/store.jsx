
import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Grid,
  Segment, Image
} from "semantic-ui-react";
import Slider from 'react-slick';

const colors = [{
  type: "single",
  color: "black",
  extraColor: "",
  file: "/dragon/Black Dragon 8143.jpg"
}, {
  type: "double",
  color: "green",
  extraColor: "black",
  file: "/dragon/Black Yellow Green Dragon 8132.jpg"
}, {
  type: "single",
  color: "blue",
  extraColor: "",
  file: "/dragon/Blue Dragon 8140.jpg"
}, {
  type: "double",
  color: "blue",
  extraColor: "red",
  file: "/dragon/Blue White Red Dragon 8136.jpg"
}, {
  type: "single",
  color: "gray",
  extraColor: "",
  file: "/dragon/Gray Dragon 8138.jpg"
}, {
  type: "single",
  color: "green",
  extraColor: "",
  file: "/dragon/Green Dragon 8133.jpg"
}, {
  type: "double",
  color: "green",
  extraColor: "blue",
  file: "/dragon/Green White Blue Dragon 8131.jpg"
}, {
  type: "double",
  color: "green",
  extraColor: "red",
  file: "/dragon/Green Yellow Red Dragon 8130.jpg"
}, {
  type: "single",
  color: "rgb(147,0,74)",
  extraColor: "",
  file: "/dragon/Maroon Dragon 8139.jpg"
}, {
  type: "single",
  color: "rgb(71,36,184)",
  extraColor: "",
  file: "/dragon/Purple Dragon 8139.jpg"
}, {
  type: "single",
  color: "red",
  extraColor: "",
  file: "/dragon/Red Dragon 8135.jpg"
}, {
  type: "double",
  color: "red",
  extraColor: "black",
  file: "/dragon/Red Yellow Black Dragon 8137.jpg"
}, {
  type: "single",
  color: "yellow",
  extraColor: "",
  file: "/dragon/Yellow Dragon 8134.jpg"
},]

const colors1 = [{
  type: "single",
  color: "black",
  extraColor: "",
  file: "/turtle/Black Turtle 8154.jpg"
}, {
  type: "single",
  color: "green",
  extraColor: "",
  file: "/turtle/Green Turtle 8148.jpg"
}, {
  type: "single",
  color: "rgb(123,16,67)",
  extraColor: "",
  file: "/turtle/Maroon Turtle 8152.jpg"
}, {
  type: "single",
  color: "rgb(60,34,171)",
  extraColor: "",
  file: "/turtle/Purple Turtle 8150.jpg"
},]

const Store = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [selected, setSelected] = useState({ content: { type: "", color: "", extraColor: "", file: "" }, id: null });
  const [selected1, setSelected1] = useState({ content: { type: "", color: "", extraColor: "", file: "" }, id: null });

  const colorClick = (whichSelect, whichSetSelect, each, key) => {
    if (whichSelect.id === key) {
      whichSetSelect({ ...whichSelect, id: null })
    } else {
      whichSetSelect({ content: each, id: key })
    }
  }

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
          <Grid.Column fluid="true" width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p className="small yellow inline bold"><span style={{ fontSize: "28px" }}>D</span>RAGON</p>

            {
              selected.id ?
                <img class="ui rounded image centered" alt="Turtle" src={selected.content.file} fluid data-xblocker="passed" /> :
                <Slider
                  {...settings}
                  style={{ width: "100%" }}
                >
                  {colors.map((each, key) => {
                    return (<div key={key}>
                      <img src={each.file} className="ui rounded image centered" alt="Dragon" fluid="true" data-xblocker="passed" />
                    </div>)
                  })}
                </Slider>
            }
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>

              {colors.map((each, key) => {
                let isSelected = ""
                if (key === selected.id) isSelected = " selected";

                if (each.type === "single") {
                  return (
                    <div
                      key={key}
                      className={`color-picker ${isSelected}`}
                      style={{ backgroundColor: each.color }}
                      onClick={() => { colorClick(selected, setSelected, each, key); }}
                    ></div>)
                } else if (each.type === "double") {
                  return (
                    <div
                      key={key}
                      className={`span-container color-picker ${isSelected}`}
                      onClick={() => { colorClick(selected, setSelected, each, key); }}>
                      <span className="left-side" style={{ backgroundColor: each.color }}></span>
                      <span className="right-side" style={{ backgroundColor: each.extraColor }}></span>
                    </div>)
                }
              })}

            </div>
          </Grid.Column>
          <Grid.Column fluid="true" width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p className="small yellow inline bold"><span style={{ fontSize: "28px" }}>T</span>URTLE</p>

            {
              selected1.id ?
                <img class="ui rounded image centered" alt="Turtle" src={selected1.content.file} fluid data-xblocker="passed" /> :
                <Slider
                  {...settings}
                  style={{ width: "100%" }}
                >
                  {colors1.map((each, key) => {
                    return (<div key={key}>
                      <img src={each.file} className="ui rounded image centered" alt="Dragon" fluid="true" data-xblocker="passed" />
                    </div>)
                  })}
                </Slider>
            }

            <div style={{ display: "flex", alignItems: "center" }}>

              {colors1.map((each, key) => {
                let isSelected = ""
                if (key === selected1.id) isSelected = " selected";

                if (each.type === "single") {
                  return (
                    <div
                      key={key}
                      className={`color-picker ${isSelected}`}
                      style={{ backgroundColor: each.color }}
                      onClick={() => { colorClick(selected1, setSelected1, each, key); }}
                    ></div>)
                } else if (each.type === "double") {
                  return (
                    <div
                      className={`span-container color-picker ${isSelected}`}
                      onClick={() => { colorClick(selected1, setSelected1, each, key); }}>
                      <span className="left-side" style={{ backgroundColor: each.color }}></span>
                      <span className="right-side" style={{ backgroundColor: each.extraColor }}></span>
                    </div>)
                }
              })}

            </div>
          </Grid.Column>
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