import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Button from './Button';

import addIcon from '../assets/icons/add.svg';
import Textarea from './Textarea';



const TrelloCard = ({ text, id, index }) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <div style={styles.cardWrapper}>
                        <h3>{text}</h3>

                    </div>
                </div>
            )
            }
        </Draggable >

    )
}

const styles = {

    cardWrapper: {
        borderRadius: "3px",
        borderBottom: "1px solid #ccc",
        backgroundColor: "#fff",
        position: "relative",
        padding: "10px",
        cursor: "pointer",
        maxWidth: "250px",
        marginBottom: "7px",
        minWidth: "230px"
    }
}

export default TrelloCard;