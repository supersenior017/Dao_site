import React, { useContext } from "react";
import { GlobalContext } from './GlobalContext';
import "./App.css";
import {
  Grid,
  Card,
  Message,
  Segment
} from "semantic-ui-react";
import PayPal from "./component/PayPal";
import Cart from "./component/Cart"

const CartPage = () => {

  const { dragon, setDragon, turtle, setTurtle, whole, setWhole, setInputValue } = useContext(GlobalContext);
  const checkNoCart = () => {
    let sum = 0;
    for (const each of dragon) {
      sum += each.count;
    }
    for (const each of turtle) {
      sum += each.count;
    }
    sum += whole[0].count;
    console.log(sum);
    return sum === 0;
  }
  const totalCost=()=>{
    let subtotal = 0;
    dragon.forEach(each=>{
      subtotal+=each.count*10;
    })
    turtle.forEach(each=>{
      subtotal+=each.count*5;
    })
    whole.forEach(each=>{
      subtotal+=each.count*100;
    })
    
    return subtotal
  }
  const totaldiscount=()=>{
    let discount = 0;
    let dragon_count = 0;
    let turtle_count = 0;
    let whole_count = 0;
    dragon.forEach(each=>{
      dragon_count+=each.count;
    })
    turtle.forEach(each=>{
      turtle_count+=each.count;
    })
    whole.forEach(each=>{
      whole_count+=each.count;
    })

    if (dragon_count >= 2){
      turtle_count = turtle_count -1;
    }

    if (turtle_count >= 3){
      discount = discount + turtle_count * 4;
    }

    if (whole_count >= 2){
      discount = discount + whole_count * 80;
    }

    discount = discount + dragon_count * 10;
    
    return discount
  }
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row centered style={{ marginTop: "40px" }}>
          
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
              <p className="big bold underline">Cart Total</p>
              <p className="small bold">Subotal: ${totalCost()}</p>
              <p className="small bold">Discount: ${totalCost()-totaldiscount()}</p>
              <p className="small bold">Total: ${totaldiscount()}</p>
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
    </Segment>

  );
};

export default CartPage;