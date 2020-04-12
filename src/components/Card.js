import React, { Children } from 'react';;



const Card = ({ children }) => {
    return (
        <div style={styles.cardwrapper}>
            {children}
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
    },
    cardHeader: {

    },
    cardContent: {

    }
}

export default Card;


