
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

const Howtouse = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const isMobile1 = useMediaQuery({ query: '(max-width: 670px)' });
  const isMobile2 = useMediaQuery({ query: '(max-width: 530px)' });
  const isMobile3 = useMediaQuery({ query: '(max-width: 470px)' });
  const isMobile4 = useMediaQuery({ query: '(max-width: 420px)' });

  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row centered>
          <Grid.Column width={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p className="small bold"><span className="inline yellow underline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>H</span>OW <span style={{ fontSize: "26px" }}>T</span>O <span style={{ fontSize: "26px" }}>U</span>SE</span></p>
            <p className="big bold"><span className="inline yellow underline" style={{ width: "auto" }}><span style={{ fontSize: "34px", paddingTop: "-10px" }}>~  D</span>AO <span style={{ fontSize: "34px", paddingTop: "-10px" }}>S</span>CIENCE  <span style={{ fontSize: "34px", paddingTop: "-10px" }}>~</span></span></p>
            <p className="big bold "><span className="inline yellow underline" style={{ width: "auto" }}><span style={{ fontSize: "34px" }}>C</span>ARB  <span style={{ fontSize: "34px" }}>C</span>APS</span></p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <div className="yellow" style={{ display: "flex", border: "3px solid black", width: "100%", justifyContent: "space-between", paddingLeft: isMobile3 ? "10px" : isMobile2 ? "20px" : isMobile1 ? "50px" : "100px", paddingRight: isMobile3 ? "10px" : isMobile2 ? "20px" : isMobile1 ? "50px" : "100px", margin: "10px" }}>
            <Grid.Column width={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <p className={`small1 bold `}><span className="inline" style={{ width: "auto" }}><span className="cap">~ C</span>ONTROL <span className="cap">Y</span>OUR <span className="cap">B</span>URN <span className="cap">~</span></span></p>

            </Grid.Column>
            <Grid.Column width={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <p className="small1 bold "><span className="inline" style={{ width: "auto" }}><span className="cap">~ S</span>AVE <span className="cap">Y</span>OUR <span className="cap">$</span>TA$H <span className="cap">~</span></span></p>
            </Grid.Column>
          </div>
        </Grid.Row>

        <Grid.Row centered style={{ padding: "10px" }}>
          <div className="yellow" style={{ border: "3px solid black", width: "100%" }}>
            <Grid.Column width={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px" }}>
              <p className="small1 bold responsive-text"><span className="inline" style={{ width: "auto" }}><span className="cap">~&nbsp;&nbsp;&nbsp;&nbsp;P</span>IPES&nbsp;&nbsp;&nbsp;&nbsp;<span className="cap">~&nbsp;&nbsp;&nbsp;&nbsp;B</span>ONGS&nbsp;&nbsp;&nbsp;&nbsp;<span className="cap">~&nbsp;&nbsp;&nbsp;&nbsp;D</span>AB <span className="cap">R</span>IGS&nbsp;&nbsp;&nbsp;&nbsp;<span className="cap">~</span></span></p>

            </Grid.Column>
            <Grid.Column width={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px", marginBottom: "30px" }}>
              {isMobile4 ?
                <p className="small1 bold responsive-text"><span className="inline" style={{ width: "auto" }}><span className="cap">~&nbsp;</span><span className="underline"><span className="cap">D</span>AMPER <span className="cap">T</span>OOL</span><span className="cap">&nbsp;~&nbsp;</span><span className="underline"><span className="cap">L</span>IGHTER <span className="cap">C</span>ADDY</span><span className="cap">&nbsp;~&nbsp;</span><span className="underline"><span className="cap">M</span>AX <span className="cap">H</span>IT <span className="cap">C</span>ARB <span className="cap">C</span>AP</span><span className="cap">&nbsp;~</span></span></p>
                :
                <p className="small1 bold responsive-text"><span className="inline" style={{ width: "auto" }}><span className="cap">~&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="underline"><span className="cap">D</span>AMPER <span className="cap">T</span>OOL</span><span className="cap">&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="underline"><span className="cap">L</span>IGHTER <span className="cap">C</span>ADDY</span><span className="cap">&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="underline"><span className="cap">M</span>AX <span className="cap">H</span>IT <span className="cap">C</span>ARB <span className="cap">C</span>AP</span><span className="cap">&nbsp;&nbsp;&nbsp;&nbsp;~</span></span></p>
              }
            </Grid.Column>
            <Grid.Column width={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px" }}>
              <p className="small1 bold responsive-text"><span className="inline" style={{ width: "auto" }}><span className="cap">~&nbsp;&nbsp;&nbsp;&nbsp;B</span>ANGERS&nbsp;&nbsp;&nbsp;&nbsp;<span className="cap">~&nbsp;&nbsp;&nbsp;&nbsp;C</span>HILLUMS&nbsp;&nbsp;&nbsp;&nbsp;<span className="cap">~&nbsp;&nbsp;&nbsp;&nbsp;A</span>SHTRAY&nbsp;&nbsp;&nbsp;&nbsp;<span className="cap">~</span></span></p>
            </Grid.Column>
          </div>
        </Grid.Row>

        <Grid.Row centered>
          <div className="yellow" style={{ display: "flex", border: "3px solid black", width: "100%", justifyContent: "space-between", paddingLeft: isMobile3 ? "10px" : isMobile2 ? "20px" : isMobile1 ? "50px" : "100px", paddingRight: isMobile3 ? "10px" : isMobile2 ? "20px" : isMobile1 ? "50px" : "100px", margin: "10px" }}>
            <Grid.Column width={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <p className="small1 bold "><span className="inline" style={{ width: "auto" }}><span className="cap">~ W</span>HICH <span className="cap">T</span>OOLS <span className="cap">F</span>IT <span className="cap">Y</span>OU<span className="cap">? ~</span></span></p>

            </Grid.Column>
            <Grid.Column width={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <p className="small1 bold "><span className="inline" style={{ width: "auto" }}><span className="cap">~ W</span>HAT<span className="cap">' </span>S <span className="cap">Y</span>OUR <span className="cap">R</span>ITUAL<span className="cap">? ~</span></span></p>
            </Grid.Column>
          </div>
        </Grid.Row>
        {isMobile ?
          <Table celled structured unstackable className="custom-table" style={{ width: "100%", justifyContent: "space-between", paddingLeft: "100px", paddingRight: "100px", margin: "10px" }}>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="video-container">
                  <div className="aspect-ratio-16-9">
                    <video controls playsInline preload="auto">
                      {/* <source src="/1.webm" type="video/webm" /> */}
                      <source src={`/1.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>D</span>RAGON <span style={{ fontSize: "26px" }}>1</span></span></p>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container">
                  <div className="aspect-ratio-16-9">
                    <video controls playsInline preload="auto">
                      {/* <source src="/2.webm" type="video/webm" /> */}
                      <source src={`/2.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>D</span>RAGON <span style={{ fontSize: "26px" }}>2</span></span></p>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container">
                  <div className="aspect-ratio-16-9">
                    <video controls playsInline preload="auto">
                      {/* <source src="/3.webm" type="video/webm" /> */}
                      <source src={`/3.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>D</span>RAGON <span style={{ fontSize: "26px" }}>3</span></span></p>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container">
                  <div className="aspect-ratio-16-9">
                    <video controls playsInline preload="auto">
                      {/* <source src="/4.webm" type="video/webm" /> */}
                      <source src={`/4.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold" style={{ marginBottom: "5px" }}>
                      <span className="inline underline" style={{ width: "auto" }}>
                        <span style={{ fontSize: "26px" }}>D</span>ARAGON <span style={{ fontSize: "26px" }}>&</span>
                      </span>
                    </p>
                    <p className="small bold">
                      <span className="inline underline" style={{ width: "auto", marginBottom: "20px" }}>
                        <span style={{ fontSize: "26px" }}>T</span>URTLE
                      </span>
                    </p>
                  </div>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell className="video-container">
                  <div className="aspect-ratio-16-9">
                    <video controls playsInline preload="auto">
                      {/* <source src="/5.webm" type="video/webm" /> */}
                      <source src={`/5.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>T</span>URTLE <span style={{ fontSize: "26px" }}>1</span></span></p>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container">
                  <div className="aspect-ratio-16-9">
                    <video controls playsInline preload="auto">
                      {/* <source src="/6.webm" type="video/webm" /> */}
                      <source src={`/6.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>T</span>URTLE <span style={{ fontSize: "26px" }}>2</span></span></p>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container">
                  <div className="aspect-ratio-16-9">
                    <video controls playsInline preload="auto">
                      {/* <source src="/7.webm" type="video/webm" /> */}
                      <source src={`/7.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>T</span>URTLE <span style={{ fontSize: "26px" }}>3</span></span></p>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container">
                  <div className="aspect-ratio-16-9">
                    <video controls playsInline preload="auto">
                      {/* <source src="/8.webm" type="video/webm" /> */}
                      <source src={`/8.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold" style={{ marginBottom: "5px" }}>
                      <span className="inline underline" style={{ width: "auto" }}>
                        <span style={{ fontSize: "26px" }}>T</span>URTLE <span style={{ fontSize: "26px" }}>&</span>
                      </span>
                    </p>
                    <p className="small bold">
                      <span className="inline underline" style={{ width: "auto", marginBottom: "20px" }}>
                        <span style={{ fontSize: "26px" }}>T</span>URTLE
                      </span>
                    </p>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table> :
          <Table celled structured unstackable className="custom-table" style={{ width: "100%", justifyContent: "space-between", paddingLeft: "100px", paddingRight: "100px", margin: "10px" }}>
            <Table.Body>
              <Table.Row>
                {Array.from({ length: 4 }, (_, index) => (
                  <Table.Cell key={index} className="video-container">
                    {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p className="small bold "><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>V</span>IDEO <span style={{ fontSize: "26px" }}>{index + 1}</span></span></p>
            </div> */}
                    <div className="aspect-ratio-16-9">
                      <video controls>
                        <source src={`/${index + 1}.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </Table.Cell>
                ))}
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>D</span>RAGON <span style={{ fontSize: "26px" }}>1</span></span></p>
                  </div>
                </Table.Cell>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>D</span>RAGON <span style={{ fontSize: "26px" }}>2</span></span></p>
                  </div>
                </Table.Cell>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>D</span>RAGON <span style={{ fontSize: "26px" }}>3</span></span></p>
                  </div>
                </Table.Cell>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold" style={{ marginBottom: "5px" }}>
                      <span className="inline underline" style={{ width: "auto" }}>
                        <span style={{ fontSize: "26px" }}>D</span>ARAGON <span style={{ fontSize: "26px" }}>&</span>
                      </span>
                    </p>
                    <p className="small bold">
                      <span className="inline underline" style={{ width: "auto", marginBottom: "20px" }}>
                        <span style={{ fontSize: "26px" }}>T</span>URTLE
                      </span>
                    </p>
                  </div>


                </Table.Cell>
              </Table.Row>
              <Table.Row>
                {Array.from({ length: 4 }, (_, index) => (
                  <Table.Cell key={index} className="video-container">
                    {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p className="small bold "><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>V</span>IDEO <span style={{ fontSize: "26px" }}>{index + 1}</span></span></p>
            </div> */}
                    <div className="aspect-ratio-16-9">
                      <video controls>
                        <source src={`/${index + 5}.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </Table.Cell>
                ))}
              </Table.Row>
              <Table.Row>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>T</span>URTLE <span style={{ fontSize: "26px" }}>1</span></span></p>
                  </div>
                </Table.Cell>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>T</span>URTLE <span style={{ fontSize: "26px" }}>2</span></span></p>
                  </div>
                </Table.Cell>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold underline"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>T</span>URTLE <span style={{ fontSize: "26px" }}>3</span></span></p>
                  </div>
                </Table.Cell>
                <Table.Cell className="video-container yellow-background">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <p className="small bold" style={{ marginBottom: "5px" }}>
                      <span className="inline underline" style={{ width: "auto" }}>
                        <span style={{ fontSize: "26px" }}>T</span>URTLE <span style={{ fontSize: "26px" }}>&</span>
                      </span>
                    </p>
                    <p className="small bold">
                      <span className="inline underline" style={{ width: "auto", marginBottom: "20px" }}>
                        <span style={{ fontSize: "26px" }}>T</span>URTLE
                      </span>
                    </p>
                  </div>


                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>}





        <Grid.Row centered style={{ margin: "10px" }} stackable={false} columns={3}>
          <Grid.Column floated="right" width={3}>
            <Image
              src="/brand2.jpg"
              className="ui centered medium image"
            />
          </Grid.Column>
          <Grid.Column floated="right" width={10}>
            <Image
              src="/footer2.jpg"
              className="ui centered medium image"
            />
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            <Image
              src="/brand1.jpg"
              className="ui centered medium image"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Howtouse;