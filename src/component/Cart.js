import React, { useContext, useState } from "react";
import { GlobalContext } from './../GlobalContext';
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Card,
    Input,
    Image
} from "semantic-ui-react";


const PictureSlide = (props) => {
    const { data, setData, type, onRemove } = props;

    const EachCard = ({ item, customKey, onRemove }) => {
        const [inputValue, setInputValue] = useState(data[customKey].count);
        const { dragon, setDragon, turtle, setTurtle, whole, setWhole, allowedValue } = useContext(GlobalContext);

        return (
            <Card key={item.file} style={{ padding: '10px' }}>
                <div >
                    <span
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={onRemove}
                    >
                        Χ
                    </span>

                </div>
                <Image src={item.file} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        {item.colorName ? item.colorName : item.type === "double" ? `${item.color} ${item.extraColor} ${item.border}` : item.color}


                    </Card.Header>
                    <Card.Meta>
                        {type}
                    </Card.Meta>
                    <Card.Description className="bold small">
                        {inputValue}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "20px", marginBottom: "10px" }}>
                            <button
                                class="ui icon button"
                                style={{ height: "35px" }}
                                onClick={() => {
                                    if (inputValue >= 1 && allowedValue.includes(`${inputValue * 1 - 1}`)) {
                                        let temp = data;
                                        temp[customKey].count=inputValue * 1 - 1;
                                        setData(temp)
                                        setInputValue(`${inputValue * 1 - 1}`);
                                    }
                                }}
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
                                placeholder="Required Number"
                            />
                            <button
                                class="ui icon button"
                                style={{ height: "35px" }}
                                onClick={() => {
                                    if (allowedValue.includes(`${inputValue * 1 + 1}`)) {
                                        let temp = data;
                                        temp[customKey].count=inputValue * 1 + 1;
                                        setData(temp);
                                        setInputValue(`${inputValue * 1 + 1}`);
                                    }
                                }}
                                disabled={inputValue >= 10}
                            >
                                <i class="plus icon"></i>
                            </button>
                        </div>
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }

    return (<>
        {data.map((item, key) => {
            if (item.count === 0) return <></>
            else {
                return (<EachCard key={key} item={item} customKey={key} onRemove={() => onRemove(key)} />)
            }

        })}
    </>)
}

export default PictureSlide;

