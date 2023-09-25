import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Card,
    Image,
    Input,
    Message
} from "semantic-ui-react";


const PictureSlide = (props) => {
    const { selected, setSelected, data, modifyCount, type } = props;


    const EachCard = ({ item, customKey }) => {
        const [inputValue, setInputValue] = useState(data[customKey].count);
        const [message4error, setMessage4error] = useState("");

        const countModify = (value) => {
            if (!Number.isInteger(value)) {
                setMessage4error("Error! Value must be integer.")
            } else if (value < 0 || value > 10) {
                setMessage4error("Error! Value must be between 0 and 10.")
            } else {
                let newColors = data;
                setMessage4error("");
                newColors[customKey].count = value;
                modifyCount(newColors);
                setInputValue(value);
                setSelected({ ...selected, id: null })
            }

        }

        return (
            <Card key={item.file}>
                <Image src={item.file} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        {item.colorName ? item.colorName : item.type === "double" ? `${item.color} ${item.extraColor} ${item.border}` : item.color}
                    </Card.Header>
                    <Card.Meta>
                        {type}
                    </Card.Meta>
                    <Card.Description>
                        <Input
                            type="number"
                            size="mini"
                            value={inputValue}
                            width="full"
                            onChange={(e) => { setInputValue(e.target.value) }}
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
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <button className='ui basic green button' onClick={() => { countModify(Number(inputValue)) }}>
                            Modify
                        </button>
                        <button className='ui basic red button' onClick={() => { countModify(0) }}>
                            Remove
                        </button>
                    </div>
                </Card.Content>
            </Card>
        )
    }

    return (<>
        {data.map((item, key) => {
            if (item.count === 0) return <></>
            return (
                <EachCard item={item} customKey={key} />)
        })}
    </>)
}

export default PictureSlide;

