
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

  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

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
          <div className="yellow" style={{ display: "flex", border: "3px solid black", width: "100%", justifyContent: "space-between", paddingLeft: isMobile ? "7px" : "100px", paddingRight: isMobile ? "7px" : "100px", margin: "10px" }}>
            <Grid.Column width={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <p className={`small bold `}><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>~ C</span>ONTROL <span style={{ fontSize: "26px" }}>Y</span>OUR <span style={{ fontSize: "26px" }}>B</span>URN <span style={{ fontSize: "26px" }}>~</span></span></p>

            </Grid.Column>
            <Grid.Column width={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <p className="small bold "><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>~ S</span>AVE <span style={{ fontSize: "26px" }}>Y</span>OUR <span style={{ fontSize: "26px" }}>$</span>TA$H <span style={{ fontSize: "26px" }}>~</span></span></p>
            </Grid.Column>
          </div>
        </Grid.Row>

        <Grid.Row centered style={{ padding: "10px" }}>
          <div className="yellow" style={{ border: "3px solid black", width: "100%" }}>
            <Grid.Column width={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px" }}>
              <p className="small bold responsive-text"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>~&nbsp;&nbsp;&nbsp;&nbsp;P</span>IPES&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "26px" }}>~&nbsp;&nbsp;&nbsp;&nbsp;B</span>ONGS&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "26px" }}>~&nbsp;&nbsp;&nbsp;&nbsp;D</span>AB <span style={{ fontSize: "26px" }}>R</span>IGS&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "26px" }}>~</span></span></p>

            </Grid.Column>
            <Grid.Column width={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px", marginBottom: "30px" }}>
              <p className="small bold responsive-text"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>~&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="underline"><span style={{ fontSize: "26px" }}>D</span>AMPER <span style={{ fontSize: "26px" }}>T</span>OOL</span><span style={{ fontSize: "26px" }}>&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="underline"><span style={{ fontSize: "26px" }}>L</span>IGHTER <span style={{ fontSize: "26px" }}>C</span>ADDY</span><span style={{ fontSize: "26px" }}>&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="underline"><span style={{ fontSize: "26px" }}>M</span>AX <span style={{ fontSize: "26px" }}>H</span>IT <span style={{ fontSize: "26px" }}>C</span>ARB <span style={{ fontSize: "26px" }}>C</span>AP</span><span style={{ fontSize: "26px" }}>&nbsp;&nbsp;&nbsp;&nbsp;~</span></span></p>
            </Grid.Column>
            <Grid.Column width={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px" }}>
              <p className="small bold responsive-text"><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>~&nbsp;&nbsp;&nbsp;&nbsp;B</span>ANGERS&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "26px" }}>~&nbsp;&nbsp;&nbsp;&nbsp;C</span>HILLUMS&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "26px" }}>~&nbsp;&nbsp;&nbsp;&nbsp;A</span>SHTRAY&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "26px" }}>~</span></span></p>
            </Grid.Column>
          </div>
        </Grid.Row>

        <Grid.Row centered>
          <div className="yellow" style={{ display: "flex", border: "3px solid black", width: "100%", justifyContent: "space-between", paddingLeft: isMobile ? "10px" : "100px", paddingRight: isMobile ? "10px" : "100px", margin: "10px" }}>
            <Grid.Column width={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <p className="small bold "><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>~ W</span>HICH <span style={{ fontSize: "26px" }}>T</span>OOLS <span style={{ fontSize: "26px" }}>F</span>IT <span style={{ fontSize: "26px" }}>Y</span>OU<span style={{ fontSize: "26px" }}>? ~</span></span></p>

            </Grid.Column>
            <Grid.Column width={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <p className="small bold "><span className="inline" style={{ width: "auto" }}><span style={{ fontSize: "26px" }}>~ W</span>HAT<span style={{ fontSize: "26px" }}>' </span>S <span style={{ fontSize: "26px" }}>Y</span>OUR <span style={{ fontSize: "26px" }}>R</span>ITUAL<span style={{ fontSize: "26px" }}>? ~</span></span></p>
            </Grid.Column>
          </div>
        </Grid.Row>
        <div className="tableWrapper">
        <Table celled structured unstackable className="custom-table" style={{ width: "100%", justifyContent: "space-between", paddingLeft: isMobile ? "20px" : "100px", paddingRight: isMobile ? "20px" : "100px", margin: "10px" }}>
          <Table.Body>
            <Table.Row>
              {Array.from({ length: 4}, (_, index) => (
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
        </Table>
        </div>


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