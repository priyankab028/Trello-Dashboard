import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import laneReducer from '../reducers/laneReducer';


const TrelloLane = ({ title, cards, laneID }) => {
    return (
        <Droppable droppableId={String(laneID)}>
            {provided => (

                <div  {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                    <h4>{title}</h4>
                    {cards.map((card, index) => (
                        <TrelloCard key={card.id} id={card.id} text={card.text} index={index} />
                    ))}
                    <TrelloActionButton laneID={laneID} />
                    {provided.placeholder}
                </div>

            )}
        </Droppable>

    )
}

const styles = {
    container: {
        backgroundColor: "#e3e3e3",
        borderRadius: "3px",
        margin: "5px 5px",
        position: "relative",
        padding: "10px",
        display: [
            "-webkit-inline-box",
            "-webkit-inline-flex",
            "-ms-inline-flexbox",
            "inline-flex"
        ],
        height: "auto",
        maxHeight: "90%",
        WebkitFlexDirection: "column",
        msFlexDirection: "column",
        flexDirection: "column",

    }
}

export default TrelloLane;