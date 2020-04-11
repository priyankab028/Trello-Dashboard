import React from 'react';

const TrelloCard = () => {
    return (
        <div style={styles.cardWrapper}>
            <h3>New Card</h3>
        </div>
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