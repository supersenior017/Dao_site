import React, { useContext }from "react";
import { GlobalContext } from './GlobalContext';
import "./App.css";
import {
  Grid,
  Card,
  Message,
} from "semantic-ui-react";
import PayPal from "./component/PayPal";
import Cart from "./component/Cart"



const CartPage = () => {
  
  const {  dragon, setDragon,turtle, setTurtle ,whole, setWhole,setInputValue } = useContext(GlobalContext);
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
  return (
    <Grid container stackable verticalAlign="middle">
      <Grid.Row centered style={{marginTop: "40px"}}>
          <Message style={{ backgroundColor: 'white', width: "90%"}}>
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
                  <Cart data={whole} type="WHOLESALE" setData={setWhole} onRemove={id => {
                    const clone = [...whole]
                    clone[id].count = 0;
                    setWhole(clone)
                    setInputValue(0)
                  }} />
                  <Cart data={dragon} type="DRAGON" setData={setDragon} onRemove={id => {
                    const clone = [...dragon]
                    clone[id].count = 0;
                    setDragon(clone)
                  }} />
                  <Cart data={turtle} type="TURTLE" setData={setTurtle} onRemove={id => {
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
    </Grid>
  );
};

export default CartPage;