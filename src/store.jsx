
import React, { useState } from "react";
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
  Input
} from "semantic-ui-react";

import PictureSlide from "./component/PictureSlide";
import Cart from "./component/Cart";
import PayPal from "./component/PayPal"

const allowedValue = ["", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


const colors = [{
  type: "single",
  color: "BLACK",
  extraColor: "",
  file: "/dragon/Black Dragon 8143.jpg",
  count: 0
}, {
  type: "double",
  color: "GREEN",
  extraColor: "BLACK",
  border: "YELLOW",
  file: "/dragon/Black Yellow Green Dragon 8132.jpg",
  count: 0
}, {
  type: "single",
  color: "BLUE",
  extraColor: "",
  file: "/dragon/Blue Dragon 8140.jpg",
  count: 0
}, {
  type: "double",
  color: "RED",
  border: "WHITE",
  extraColor: "BLUE",
  file: "/dragon/Blue White Red Dragon 8136.jpg",
  count: 0
}, {
  type: "single",
  color: "GRAY",
  extraColor: "",
  file: "/dragon/Gray Dragon 8138.jpg",
  count: 0
}, {
  type: "single",
  color: "GREEN",
  extraColor: "",
  file: "/dragon/Green Dragon 8133.jpg",
  count: 0
}, {
  type: "double",
  color: "GREEN",
  extraColor: "BLUE",
  border: "WHITE",
  file: "/dragon/Green White Blue Dragon 8131.jpg",
  count: 0
}, {
  type: "double",
  color: "GREEN",
  extraColor: "RED",
  border: "YELLOW",
  file: "/dragon/Green Yellow Red Dragon 8130.jpg",
  count: 0
}, {
  type: "single",
  color: "rgb(147,0,74)", colorName: "MAROON",
  extraColor: "",
  file: "/dragon/Maroon Dragon 8139.jpg",
  count: 0
}, {
  type: "single",
  color: "rgb(71,36,184)", colorName: "DARK PURPLE",
  extraColor: "",
  file: "/dragon/Purple Dragon 8139.jpg",
  count: 0
}, {
  type: "single",
  color: "RED",
  extraColor: "",
  file: "/dragon/Red Dragon 8135.jpg",
  count: 0
}, {
  type: "double",
  color: "RED",
  extraColor: "BLACK",
  border: "YELLOW",
  file: "/dragon/Red Yellow Black Dragon 8137.jpg",
  count: 0
}, {
  type: "single",
  color: "YELLOW",
  extraColor: "",
  file: "/dragon/Yellow Dragon 8134.jpg",
  count: 0
},]

const colors1 = [{
  type: "single",
  color: "BLACK",
  extraColor: "",
  file: "/turtle/Black Turtle 8154.jpg",
  count: 0
}, {
  type: "single",
  color: "GREEN",
  extraColor: "",
  file: "/turtle/Green Turtle 8148.jpg",
  count: 0
}, {
  type: "single",
  color: "rgb(123,16,67)", colorName: "MAROON",
  extraColor: "",
  file: "/turtle/Maroon Turtle 8152.jpg",
  count: 0
}, {
  type: "single",
  color: "rgb(60,34,171)", colorName: "DARK PURPLE",
  extraColor: "",
  file: "/turtle/Purple Turtle 8150.jpg",
  count: 0
},]


const Store = () => {
  const [selected, setSelected] = useState({ content: { type: "", color: "", extraColor: "", file: "" }, id: null });
  const [selected1, setSelected1] = useState({ content: { type: "", color: "", extraColor: "", file: "" }, id: null });
  const [dragon, setDragon] = useState(colors);
  const [turtle, setTurtle] = useState(colors1);
  const [whole, setWhole] = useState([{
    type: "single",
    color: "", colorName: "20 DRAGONS",
    extraColor: "",
    file: "/wholesale.jpg",
    count: 0
  }]);

  const checkNoCart = () => {
    let sum = 0;
    for (const each of dragon) {
      sum += each.count;
      console.log(each.count);
    }
    for (const each of turtle) {
      sum += each.count;
      console.log(each.count);
    }
    sum += whole[0].count;
    console.log(sum);
    return sum === 0;
  }

  const [inputValue, setInputValue] = useState(0);
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
          <Message style={{ width: "90%", marginBottom: "20px" }}>

            <Grid>
              <Grid.Row centered className="bold big">
                Left Click on colors to choose quantity
              </Grid.Row>
              <Grid.Row centered style={{ marginLeft: "10%", marginRight: "10%", justifyContent: "space-between" }} >
                <span className="small bold " style={{ padding: "auto", margin: "auto" }}>DRAGONS $10 each</span>
                <span className="small bold" style={{ padding: "auto", margin: "auto" }}>TURTLES $5 each</span>
              </Grid.Row>
              <Grid.Row centered className="small">
                See Specials Below
              </Grid.Row>
            </Grid>
          </Message>
        </Grid.Row>
        <Grid.Row centered>
          <Message style={{ backgroundColor: 'white', width: "90%" }}>
            {
              checkNoCart() ? <Grid>
                <Grid.Row centered >
                  <img className="ui rounded image centered" alt="mycart" src="/mycart.jpg" fluid="true" data-xblocker="passed" width="full" />
                </Grid.Row>
                <Grid.Row centered>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className="big">Your cart is currently empty</p>
                    <p className="small" > Before proceed to checkout, you must add some products to your cart.</p>
                    <p className="small" >Click your favourite color of Dragon or Turtle.</p>
                  </div>

                </Grid.Row>
              </Grid> : <Grid.Row centered>
                <p className="big bold">My Cart</p>
                <Card.Group centered>
                  <Cart data={whole} type="WHOLESALE" onRemove={id => {
                    const clone = [...whole]
                    clone[id].count = 0;
                    setWhole(clone)
                    setInputValue(0)
                  }} />
                  <Cart data={dragon} type="DRAGON" onRemove={id => {
                    const clone = [...dragon]
                    clone[id].count = 0;
                    setDragon(clone)
                  }} />
                  <Cart data={turtle} type="TURTLE" onRemove={id => {
                    const clone = [...turtle]
                    clone[id].count = 0;
                    setTurtle(clone)
                  }} />
                </Card.Group>
                <PayPal />
              </Grid.Row>
            }

          </Message>
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
          <Grid.Column style={{ display: "flex", alignItems: "center", justifyContent: "center" }} width={8}>

            <div style={{ textAlign: "center" }}>
              <p className="small  close2top bold"><span className="big bold underline">You can also</span></p>
              <p className="small  close2top bold"><span className="big bold yellow underline">Wholesale Purchase</span></p>
              <p className="small  close2top bold"><span className="big bold yellow underline">Buy 1 container of 20 Dragons for $100.</span></p>
              <p className="small  close2top bold"><span className="big bold yellow underline">Buy 2 or more containers of 20 Dragons for $80 each.</span></p>
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