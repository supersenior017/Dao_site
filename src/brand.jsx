import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import {
  Grid,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

const footerImage = [
  '/footer1.jpg',
  '/footer2.jpg',
  '/footer3.jpg',
  '/footer4.jpg',
]
const Brand = () => (
  <Segment style={{ padding: "4em 0em 0em 0em" }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column floated="right" width={6}>
          <Image
            bordered
            rounded fluid
            src="/brand1.jpg"
            className="ui centered medium image"
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
            <p className="small close2bottom close2top bold"><span className="big bold yellow underline">Quality Tools and Accessories</span> for</p>
            <p className="big bold close2top">Smoking Markets.</p>
            <p className="small bold">Our future is <span className="big bold yellow underline">Burning Bright</span>.</p>
            <p className="small  bold close2bottom">We are the <span className="big yellow bold underline">Original Inventors</span> of</p>
            <p className="small close2top bold">Innovative Silicone Rubber <span className="big bold yellow underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>ARB <span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>APS</span>.</p>
            <p className="big bold far2bottom"><span className="inline yellow" style={{ width: "auto" }}>~<span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>ONTROL <span style={{ fontSize: "34px", paddingTop: "-10px" }}>Y</span>OUR <span style={{ fontSize: "34px", paddingTop: "-10px" }}>B</span>URN~</span></p>
            <p className="small close2bottom bold">Avoid unnecessary waste and save money.</p>
            <p className="big bold yellow close2top underline" style={{ marginBottom: "0px", padding: "0px" }}>
              Use&nbsp;&nbsp;
              <span style={{ display: "inline", position: "relative" }}>
                <Image style={{ height: "27px", display: "inline", position: "absolute", top: "0px", left: "0px" }} src="/brand2-1.png" />efefe
              </span>
              &nbsp;<span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>ARB <span style={{ fontSize: "34px", paddingTop: "-10px" }}>C</span>APS to snuff out your Bowls
            </p>.

            <p className="small far2top bold">Control the flow of <span className="small yellow inline">oxygen/smoke</span> through your pipe while preserving the Cannabis in the bowl.</p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p className="sbig yellow inline underline bold">
              <span style={{ display: "inline", position: "relative" }}>
                <Image style={{ height: "30px", display: "inline", position: "absolute", top: "0px", left: "0px" }} src="/brand2-1.png" />efee
              </span>
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
              <span className="small yellow inline"><span style={{ fontSize: "26px" }}>T</span>URTLE</span>” symbolizes
              <span className="underline"> longevity, wisdom, caution, and slow and steady wins the race</span>.
            </p>
            <p className="small bold" style={{ textAlign: "left" }}>
              A “<span className="small yellow inline"><span style={{ fontSize: "26px" }}>D</span>RAGON</span>
              ” symbolizes <span className="small underline">power and excellence</span>.
              In ancient mythology, <span style={{ fontSize: "26px" }}>D</span>RAGONS&nbsp;
              <span className="small underline">offered help and guidance</span>. A <span style={{ fontSize: "26px" }}>D</span>RAGON can take multiple forms representing different imaged moralities. For example, a <span style={{ fontSize: "26px" }}>D</span>RAGON can be an angel or a devil.
            </p>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            bordered
            rounded fluid
            src="/brand2.jpg"
            className="ui centered medium image"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column floated="right" width={6}>
          <Image
            rounded fluid
            src="/brand3.png"
            className="ui centered medium image"
          />
        </Grid.Column>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p className="big bold">“
              <span className="big bold yellow underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>D</span>AO</span>
              ”
            </p>
            <p className="small bold" style={{ textAlign: "left" }}>(noun) (In Chinese philosophy):</p>
            <p className="small bold" style={{ textAlign: "left" }} >The absolute principle underlying the universe, combining within itself the principles of Yin and Yang, and signifying the way, or code of behavior, which is in harmony with the natural order and balance of all things.</p>
            <p className="small bold" style={{ textAlign: "left" }}>The Chinese character “<span className="chinese-text">道</span>,” spelled “Dao” or “Tao” in English (same thing), means “the Path,” “the Way,” “the Method,” or “the Road.”</p>
            <p className="small bold" style={{ textAlign: "left" }}>Depending on the context of its use, “Dao” can also mean “to Reason,” “a Skill,” “a Principle,” “a Truth,” or “Morality.”</p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p className="big bold">“
              <span className="big bold yellow underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>S</span>CIENCE</span>
              ”
            </p>
            <p className="small bold" style={{ textAlign: "left" }}>(noun):</p>
            <p className="small bold" style={{ textAlign: "left" }}>The word “Science” symbolizes “Precision” as well as “Nature”; particularly the Laws of Physics on the one hand (Tangible), and the general dynamic of “Peace Science” on the other hand (Intangible Balance).</p>
            <p className="small bold">Thus: <span className="big yellow inline">“<span className="big bold text underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>D</span>AO</span>” + “<span className="big bold text underline"><span style={{ fontSize: "34px", paddingTop: "-10px" }}>S</span>CIENCE</span>”</span></p>
            <p className="small bold" style={{ textAlign: "left" }}>The concept of Dao Science suggests “Natural Balance” and “Natural Truth.”</p>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            rounded fluid
            src="/brand4.jpg"
            className="ui centered medium image"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingBottom: "80px" }}>
        <Grid.Column floated="right" width={6}>
          <Image
            rounded fluid
            src="/brand5.jpg"
            className="ui centered medium image"
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
            src="/brand6.png"
            className="ui centered medium image"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid relaxed='very' columns={4} className="footer-image-wrap">
      {
        footerImage.map((each, key) =>
          <Grid.Column className="footer-image" key={key}>
            <Image src={each}  className="footer-each-image"  />
          </Grid.Column>
        )
      }

    </Grid>
  </Segment>
)
export default Brand;