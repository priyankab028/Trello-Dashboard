import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const TrelloLane = ({ title, cards }) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard key={card.id} text={card.text} />
            ))}
            <TrelloActionButton />
        </div>

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