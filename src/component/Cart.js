import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Card,
    Image
} from "semantic-ui-react";


const PictureSlide = (props) => {
    const { data,type, onRemove } = props;


    const EachCard = ({ item, customKey, onRemove }) => {
        const [inputValue, setInputValue] = useState(data[customKey].count);

        return (
            <Card key={item.file} style={{padding: '10px'}}>
                  <div >
                <span
                    style={{ float: "right", cursor:"pointer" }}
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
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }

    return (<>
        {data.map((item, key) => {
            if (item.count === 0) return <></>
            else{
                return (<EachCard key={key} item={item} customKey={key} onRemove={()=>onRemove(key)}/>)
            }
            
        })}
    </>)
}

export default PictureSlide;

