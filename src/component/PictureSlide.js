import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Grid,
    Popup,
    Input,
    Button,
    GridColumn,
    Message
} from "semantic-ui-react";
import Slider from 'react-slick';
const allowedValue = ["", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const PictureSlide = (props) => {
    const { selected, setSelected, colors, modifyCount, type } = props;
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const colorClick = (whichSelect, whichSetSelect, each, key) => {
        if (whichSelect.id === key) {
            whichSetSelect({ ...whichSelect, id: null })
        } else {
            whichSetSelect({ content: each, id: key })
        }
    }

    const pictureDes = (pic) =>
        <div style={{ textAlign: 'center' }}>
            <span className="color-badge" >
                {
                    pic.color.slice(0, 3) === "rgb" ?
                        pic.colorName.toUpperCase() :
                        pic.color.toUpperCase()
                }
            </span>
            {
                pic.type === "double" ? <>
                    <span className="color-badge" >
                        {pic.border.toUpperCase()}
                    </span>
                    <span className="color-badge">
                        {pic.extraColor.toUpperCase()}
                    </span>
                </> : <></>
            }
        </div>


    const CustomizedPopup = ({ children, customKey, selected, setSelected }) => {
        const [inputValue, setInputValue] = useState(colors[customKey].count);
        const [message4error, setMessage4error] = useState("");


        let isDisabled = () => {
            let disabled = false;
            if (colors[customKey].count === 0) disabled = true;
            return disabled;
        };

        const countModify = (value) => {
            if (!Number.isInteger(value)) {
                setMessage4error("Error! Value must be integer.")
            } else if (value < 0 || value > 10) {
                setMessage4error("Error! Value must be between 0 and 10.")
            } else {
                let newColors = colors;
                setMessage4error("");
                newColors[customKey].count = value;
                modifyCount(newColors);
                setInputValue(value);
                setSelected({ ...selected, id: null })
            }

        }


        return (<Popup
            trigger={children}
            open={customKey === selected.id}
        >
            <div >
                <span
                    style={{ float: "right", cursor:"pointer" }}
                    onClick={() => {
                        setSelected({ ...selected, id: null })
                    }}
                >
                    X
                </span>

            </div>

            <Input
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
                labelPosition='right'
                label={{ tag: true, content: '' }}
            />
            <Message
                size="mini"
                color="red"
                visible={message4error.length > 0}
                hidden={message4error.length === 0}
            >
                {message4error}
            </Message>
            <Grid centered columns={2}>
                <GridColumn>
                    <Button positive size="mini" onClick={() => { countModify(Number(inputValue)) }}>
                        {isDisabled() ? "Add" : "Modify"}
                    </Button>
                </GridColumn>
                <GridColumn>
                    <Button negative size="mini" basic disabled={isDisabled()} onClick={() => { countModify(0) }}>Remove</Button>
                </GridColumn>
            </Grid>
        </Popup>)
    }


    return (<Grid.Column fluid="true" width={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
        <p className="small yellow inline bold"><span style={{ fontSize: "28px" }}>{type.slice(0, 1)}</span>{type.slice(1)}</p>

        {
            selected.id !== null ?
                <>
                    <img className="ui rounded image centered" alt="Turtle" src={selected.content.file} fluid="true" data-xblocker="passed" />
                    {pictureDes(selected.content)}
                </> :
                <Slider
                    {...settings}
                    style={{ width: "100%" }}
                >
                    {colors.map((each, key) => {
                        return (<div key={key} style={{ alignItems: "center", justifyContent: "center", }}>
                            <img src={each.file} className="ui rounded image centered" alt="Dragon" fluid="true" data-xblocker="passed" />
                            {pictureDes(each)}
                        </div>)
                    })}
                </Slider>
        }
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>

            {colors.map((each, key) => {
                let isSelected = "";

                if (key === selected.id) isSelected = " selected";

                if (each.type === "single") {
                    return (
                        <CustomizedPopup customKey={key} selected={selected} setSelected={setSelected}>
                            <div
                                key={key}
                                className={`color-picker ${isSelected}`}
                                style={{ backgroundColor: each.color }}
                                onClick={() => { colorClick(selected, setSelected, each, key); }}
                            ></div>
                        </CustomizedPopup>
                    )
                } else if (each.type === "double") {
                    return (
                        <CustomizedPopup customKey={key} selected={selected} setSelected={setSelected}>
                            <div
                                key={key}
                                className={`span-container color-picker ${isSelected}`}
                                onClick={() => { colorClick(selected, setSelected, each, key); }}
                            >
                                <span className="left-side" style={{ backgroundColor: each.color }}></span>
                                <span className="border-side" style={{ backgroundColor: each.border }}></span>
                                <span className="right-side" style={{ backgroundColor: each.extraColor }}></span>
                            </div>
                        </CustomizedPopup>
                    )
                }
            })}
        </div>
    </Grid.Column>)
}

export default PictureSlide;

