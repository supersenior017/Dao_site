
import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import {
  Grid,
  Image,
  Segment,
} from "semantic-ui-react";

const Contract = () => (
  <Segment style={{ padding: "4em 0em 0em 0em" }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "left" }}>
            <p className="big bold">DaoScience.com</p>
            <p className="big bold">Dao Science, LLC</p>
            <p className="big bold">PO Box <span className="big-yellow inline">14</span></p>
            <p className="big bold">Ontario, OR 97914</p>
          </div>
        </Grid.Column>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "left", width: "100%" }}>
            <p className="big bold"> <Image style={{ height: "30px", width: "auto", display: "inline" }} src="/instagram.png" />: @daoscience</p>
            <p className="big bold underline" style={{ color: "blue", overflowWrap: "break-word" }}>
              <span>
                <a href="mailto:DaoScience.Sales@gmail.com">DaoScience.Sales@gmail.com</a>
              </span>
            </p>
            <p className="big bold">541-239-3964</p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="far2bottom">
        <Grid.Column centered="true">
          <img className="ui fluid rounded image" alt="Store" src="/contact1.jpg" fluid="true" data-xblocker="passed" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="far2top">
        <Grid.Column centered="true">
          <img className="ui fluid rounded image" alt="Store" src="/contact2.jpg" fluid="true" data-xblocker="passed" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Contract;