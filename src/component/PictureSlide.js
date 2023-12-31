import React, { useContext, useState } from "react";
import { GlobalContext } from './../GlobalContext';
import { useRef, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Grid,
    Popup,
    Input,
    Button,
    GridColumn,
    Icon
} from "semantic-ui-react";
import Slider from 'react-slick';



const PictureSlide = (props) => {
    const { selected, setSelected, colors, type } = props;
    const [currentSlide, setCurrentSlide] = useState(0); // Added state for tracking the current slide index
    const sliderRef = useRef(); // Added a ref for the slider component

    const autoPlaySpeed = 3000; // Define autoplay speed here for reusability

    // State to manage if the autoplay should be paused/resumed
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

    // Effect to handle autoplay resume with delay
    useEffect(() => {
        let timer;
        // If the autoplay is paused, set a timer to resume it
        if (isAutoplayPaused && sliderRef.current) {
            timer = setTimeout(() => {
                sliderRef.current.slickPlay();
                setIsAutoplayPaused(false);
            }, 60000); // Resume after 10 seconds
        }
        return () => clearTimeout(timer); // Clear the timer on effect cleanup
    }, [isAutoplayPaused]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: current => setCurrentSlide(current),
        autoplay: !isAutoplayPaused, // Control autoplay based on state
        autoplaySpeed: autoPlaySpeed,
        initialSlide: currentSlide,
      };

    const colorClick = (whichSelect, whichSetSelect, each, key) => {
        if (whichSelect.id !== key) {
            whichSetSelect({ content: each, id: key });
            setCurrentSlide(key); // Update currentSlide state to the selected color's key
    
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(key); // Go to the slide of the selected color
            }
        } else {
            whichSetSelect({ ...whichSelect, id: null });
            // No need to reset the slide here as we want to continue from the selected color
        }
    }
    


    const pictureDes = (pic) =>
        <div style={{ textAlign: 'center', border: "none" }}>
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
        const { setDragon, setTurtle, allowedValue, setWhole, whole } = useContext(GlobalContext);

        const popupRef = useRef();

        const onCloseClick = () => {
            setSelected({ ...selected, id: null }); // Close the popup
            setIsAutoplayPaused(true); // Pause autoplay
        };


        // Hook for adding event listeners on mount and cleaning up on unmount
        useEffect(() => {
            // Check if the click is outside
            const handleClickOutside = event => {
                if (!event.target.closest('.ui.popup')) {
                    setSelected({ ...selected, id: null });
                }
            };

            // If the popup is opened, add the listener
            if (customKey === selected.id) {
                document.addEventListener('mousedown', handleClickOutside);
            }

            // Clean up on unmount or when the popup closes
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [customKey, selected, setSelected]); // Add your state variables in the dependency array


        return (<Popup
            ref={popupRef}
            trigger={children}
            open={customKey === selected.id}
            style={{ height: '120px' }}
            position="bottom left"
        >
            <div >
                <span
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={onCloseClick}
                >
                    Χ
                </span>

            </div>

            <Grid.Column>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "20px", marginBottom: "10px" }}>
                    <button
                        class="ui icon button"
                        style={{ height: "35px" }}
                        onClick={() => inputValue >= 1 && allowedValue.includes(`${inputValue * 1 - 1}`) && setInputValue(`${inputValue * 1 - 1}`)}
                        disabled={inputValue <= 0}
                    >
                        <i class={inputValue >= 2 ? "minus icon" : "trash icon"}></i>
                    </button>
                    <Input
                        style={{ width: "70px", height: "35px", fontSize: "15px", marginLeft: "-3px" }}
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
                        style={{ height: "35px" }}
                        onClick={() => allowedValue.includes(`${inputValue * 1 + 1}`) && setInputValue(`${inputValue * 1 + 1}`)}
                        disabled={inputValue >= 10}
                    >
                        <i class="plus icon"></i>
                    </button>
                </div>
            </Grid.Column>
            <Grid centered columns={1}>
                <Button style={{ marginTop: "10px", width: '100px' }} animated='vertical' size='small' color='teal' onClick={() => {
                    let newColors = colors;
                    newColors[customKey].count = Number(inputValue);
                    if (type == "DRAGON") {
                        setDragon(newColors);
                        setWhole([{
                            ...whole[0],
                            haha: Number(inputValue)
                        }]);
                    } else {
                        setTurtle(newColors);
                        setWhole([{
                            ...whole[0],
                            haha: Number(inputValue)
                        }]);
                    }
                    setInputValue(Number(inputValue));
                    setSelected({ ...selected, id: null });

                }}>
                    <Button.Content hidden>Add to Cart</Button.Content>
                    <Button.Content visible>
                        <Icon name='shop' />
                    </Button.Content>
                </Button>
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
                    ref={sliderRef} // Add the ref to the Slider component
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
                        <CustomizedPopup key={key} customKey={key} selected={selected} setSelected={setSelected}>
                            <div
                                className={`color-picker ${isSelected}`}
                                style={{ backgroundColor: each.color }}
                                onClick={() => { colorClick(selected, setSelected, each, key); }}
                            ></div>
                        </CustomizedPopup>
                    )
                } else if (each.type === "double") {
                    return (
                        <CustomizedPopup  key={key} customKey={key} selected={selected} setSelected={setSelected}>
                            <div
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

