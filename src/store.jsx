
import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import {
  Grid,
  Segment
} from "semantic-ui-react";

const Store = () => (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column centered>
            <img class="ui fluid rounded image" alt="Store" src="/store.jpg" fluid data-xblocker="passed" width="300px" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )

  export default Store;