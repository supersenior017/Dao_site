import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import {
  Grid,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
const Brand = () => (
  <Segment style={{ padding: "4em 0em 0em 0em" }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column floated="right" width={6}>
          <Image
            bordered
            rounded fluid
            size="large"
            src="/brand1.jpg"
            class="ui centered medium image"
          />
        </Grid.Column>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              rounded style={{ width: "100%", padding: "15px" }}
              size="large"
              src="/daoscience.jpg"
            />
            <p className="small close2bottom bold">Designs and Manufactures:</p>
            <p className="small close2bottom close2top bold"><p className="big bold yellow underline">Quality Tools and Accessories</p> for</p>
            <p className="big bold close2top">Smoking Markets.</p>
            <p className="small bold">Our future is <span className="big bold yellow underline">Burning Bright</span>.</p>
            <p className="small  bold close2bottom">We are the <span className="big yellow bold underline">Original Inventors</span> of</p>
            <p className="small close2top bold">Innovative Silicone Rubber <p className="big bold yellow underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>ARB <span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>APS</p>.</p>
            <p className="big bold far2bottom"><p className="inline yellow" style={{ width: "auto" }}>~<span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>ONTROL <span style={{ fontSize: "34px", paddingTop: "-10px" }}>Y</span>OUR <span style={{ fontSize: "34px", paddingTop: "-10px" }}>B</span>URN~</p></p>
            <p className="small close2bottom bold">Avoid unnecessary waste and save money.</p>
            <p className="big bold yellow close2top underline" style={{ marginBottom: "0px", padding: "0px" }}>
              Use&nbsp;&nbsp;
              <div style={{ display: "inline", position: "relative" }}>
                <Image style={{ height: "27px", display: "inline", position: "absolute", top: "0px", left: "0px" }} src="/brand2-1.png" />efefe
              </div>
              &nbsp;<span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>ARB <span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>APS to snuff out your Bowls
            </p>.

            <p className="small far2top bold">Control the flow of <p className="small yellow inline">oxygen/smoke</p> through your pipe while preserving the Cannabis in the bowl.</p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p className="sbig yellow inline underline bold">
              <div style={{ display: "inline", position: "relative" }}>
                <Image style={{ height: "30px", display: "inline", position: "absolute", top: "0px", left: "0px" }} src="/brand2-1.png" />efee
              </div>
              <span style={{ fontSize: "38px", paddingTop: "-10px" }}>B</span>RAND</p>
            <p className="big bold">~What does it mean to you?~</p>
            <p className="small bold" style={{ textAlign: "left" }}>The&nbsp;
              <Image style={{ height: "30px", width: "auto", display: "inline", marginTop: "-10px" }} src="/daoscience.jpg" />
              &nbsp;<span style={{ fontSize: "26px" }}>B</span>RAND combines the concept of wholesome balanced positive philosophy with the truth and precision of <span style={{ fontSize: "26px" }}>S</span>CIENCE.
            </p>
            <p className="small bold" style={{ textAlign: "left" }}>The&nbsp;
              <Image style={{ height: "30px", width: "auto", display: "inline", marginTop: "-10px" }} src="/daoscience.jpg" />
              &nbsp;<span style={{ fontSize: "26px" }}>B</span>RAND often relates its products to things found in <span style={{ fontSize: "26px" }}>N</span>ATURE.
            </p>
            <p className="small bold" style={{ textAlign: "left" }}>
              For example, a “
              <p className="small yellow inline"><span style={{ fontSize: "26px" }}>T</span>URTLE</p>” symbolizes
              <p className="underline"> longevity, wisdom, caution, and slow and steady wins the race</p>.
            </p>
            <p className="small bold" style={{ textAlign: "left" }}>
              A “<p className="small yellow inline"><span style={{ fontSize: "26px" }}>D</span>RAGON</p>
              ” symbolizes <p className="small underline">power and excellence</p>.
              In ancient mythology, <span style={{ fontSize: "26px" }}>D</span>RAGONS&nbsp;
              <p className="small underline">offered help and guidance</p>. A <span style={{ fontSize: "26px" }}>D</span>RAGON can take multiple forms representing different imaged moralities. For example, a <span style={{ fontSize: "26px" }}>D</span>RAGON can be an angel or a devil.
            </p>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            bordered
            rounded fluid
            size="large"
            src="/brand2.jpg"
            class="ui centered medium image"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column floated="right" width={6}>
          <Image
            rounded fluid
            size="large"
            src="/brand3.png"
            class="ui centered medium image"
          />
        </Grid.Column>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p className="big bold">“
              <p className="big bold yellow underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>D</span>AO</p>
              ”
            </p>
            <p className="small bold" style={{ textAlign: "left" }}>(noun) (In Chinese philosophy):</p>
            <p className="small bold" style={{ textAlign: "left" }} >The absolute principle underlying the universe, combining within itself the principles of Yin and Yang, and signifying the way, or code of behavior, which is in harmony with the natural order and balance of all things.</p>
            <p className="small bold" style={{ textAlign: "left" }}>The Chinese character “<p className="chinese-text">道</p>,” spelled “Dao” or “Tao” in English (same thing), means “the Path,” “the Way,” “the Method,” or “the Road.”</p>
            <p className="small bold" style={{ textAlign: "left" }}>Depending on the context of its use, “Dao” can also mean “to Reason,” “a Skill,” “a Principle,” “a Truth,” or “Morality.”</p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
          <p className="big bold">“
              <p className="big bold yellow underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>S</span>CIENCE</p>
              ”
            </p>
            <p className="small bold" style={{ textAlign: "left" }}>(noun):</p>
            <p className="small bold" style={{ textAlign: "left" }}>The word “Science” symbolizes “Precision” as well as “Nature”; particularly the Laws of Physics on the one hand (Tangible), and the general dynamic of “Peace Science” on the other hand (Intangible Balance).</p>
            <p className="small bold">Thus: <p className="big yellow inline">“<p className="big bold text underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>D</span>AO</p>” + “<p className="big bold text underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>S</span>CIENCE</p>”</p></p>
            <p className="small bold" style={{ textAlign: "left" }}>The concept of Dao Science suggests “Natural Balance” and “Natural Truth.”</p>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            rounded fluid
            size="large"
            src="/brand4.jpg"
            class="ui centered medium image"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column floated="right" width={6}>
          <Image
            rounded fluid
            size="large"
            src="/brand5.jpg"
            class="ui centered medium image"
          />
        </Grid.Column>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p className="big bold yellow underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>Y</span>IN~<span style={{ fontSize: "34px", paddingTop: "-10px" }}>Y</span>ANG</p>
            <p className="small bold" style={{ textAlign: "left" }}>The Yin~Yang symbolizes many things in <span style={{ fontSize: "26px" }}>D</span>AO <span style={{ fontSize: "26px" }}>S</span>CIENCE:</p>
            <List as='ol' style={{ textAlign: "left" }}>
              <List.Item as='li' value='*' className="small list-text bold">
                The Circular Nature of Life.
              </List.Item>
              <List.Item as='li' value='*' className="small list-text bold">
                The Shape of the Planets.
              </List.Item>
              <List.Item as='li' value='*' className="small list-text bold">
                The Philosophy of Opposites.
              </List.Item>
              <List.Item as='li' value='*' className="small list-text bold">
                The “Balance” in Nature that Occurs at the Center of the Two Opposite Sides of All Things.
              </List.Item>
              <List.Item as='li' value='*' className="small list-text bold">
                The Yin~Yang symbol is intended to express a philosophy of two opposite sides with a line where “balance” occurs down the center.
              </List.Item>
              <List.Item as='li' value='*' className="small list-text bold">
                Thus, the Yin~Yang symbolizes: left, center, and right; or top, middle, and bottom.
              </List.Item>
            </List>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p className="big bold yellow underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>T</span>HE <span style={{ fontSize: "34px", paddingTop: "-10px" }}>N</span>UMBER “3”</p>
            <p className="small bold" style={{ textAlign: "left" }}>The number “3” has multiple symbolic meanings and represents:</p>
            <List as='ol' style={{ textAlign: "left" }}>
              <List.Item as='li' value='*' className="small list-text bold">
                The three parts of the Yin~Yang (Top, Middle, Bottom ~ Left, Center, Right).
              </List.Item>
              <List.Item as='li' value='*' className="small list-text bold">
                The <p className="small yellow inline"> Medical, Philosophical, and Recreational </p> uses of Cannabis.
              </List.Item>
              <List.Item as='li' value='*' className="small list-text bold">
                The “Toke Sign,” which is a universal sign of Peace, Sharing, and Brother/Sisterhood.
              </List.Item>
              <List.Item as='li' value='*' className="small list-text bold">
                Heaven, Earth, and Underworld.
              </List.Item>
            </List>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            rounded fluid
            size="large"
            src="/brand6.png"
            class="ui centered medium image"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid relaxed='very' columns={4} style={{ backgroundColor: "rgb(254,248,4)" }}>
      <Grid.Column>
        <Image src='/footer1.jpg' height="auto" style={{ maxHeight: "180px" }} width="auto" centered />
      </Grid.Column>
      <Grid.Column>
        <Image src='/footer2.jpg' height="auto" style={{ maxHeight: "180px" }} width="auto" centered />
      </Grid.Column>
      <Grid.Column>
        <Image src='/footer3.jpg' height="auto" style={{ maxHeight: "180px" }} width="auto" centered />
      </Grid.Column>
      <Grid.Column>
        <Image src='/footer4.jpg' height="auto" style={{ maxHeight: "180px" }} width="auto" centered />
      </Grid.Column>
    </Grid>
  </Segment>
)
export default Brand;