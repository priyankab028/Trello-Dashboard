import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addIcon from '../assets/icons/add.svg';
import closeIcon from '../assets/icons/close.svg';
import Button from './Button';
import Card from './Card';
import Textarea from 'react-textarea-autosize';
import { addLane, addCard } from '../actions'


export class TrelloActionButton extends Component {
    state = {
        formOpen: false,
        text: ""
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });

    };

    closeForm = (e) => {
        this.setState({
            formOpen: false
        });

    };
    renderAddButton = () => {
        const { lane } = this.props



        const buttonTitle = lane ? "click to add lane" : "click to add card"
        return (
            <Button

                handleClick={this.openForm}
                label={buttonTitle}
                icon={<img src={addIcon} />}
                type="primary"
            />
        )
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };
    handleAddLane = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        if (text) {
            dispatch(addLane(text));
        }
        return;
    };
    handleAddCard = () => {
        const { dispatch, laneID } = this.props;
        const { text } = this.state;
        if (text) {
            dispatch(addCard(laneID, text));
        }
        return;
    };
    renderForm = () => {

        const { lane } = this.props;

        const placeholder = lane ? "Enter lane title" : "Enter card title";

        const buttonTitle = lane ? "Add Lane" : "Add Card";

        return (<div>
            <Card>
                <Textarea style={styles.textArea} placeholder={placeholder} autoFocus onBlur={this.closeForm} onChange={this.handleInputChange} />
                <div style={styles.buttonGroup}>
                    <Button
                        handleMouseDown={lane ? this.handleAddLane : this.handleAddCard}
                        handleClick={this.openForm}
                        label={buttonTitle}
                        type="secondary"

                    />
                    <Button
                        handleClick={this.openForm}
                        icon={<img src={closeIcon} />}
                        type="tertiary"
                    />
                </div>
            </Card>
        </div>)
    };


    render() {
        return (
            this.state.formOpen ? this.renderForm() : this.renderAddButton()
        )
    }
};



const styles = {
    actionButton: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        height: 40,
        paddingLeft: 8,
    },
    buttonTitle: {
        paddingLeft: 8
    },
    textArea: {
        backgroundColor: "#fff",
        borderColor: "#3179ba",
        overflowY: "hidden",
        padding: "4px 2%",
        display: "flex",
        width: "96%",
        outline: "none",
        resize: "none",
    },

    buttonGroup: {
        display: "flex",
        alignItems: "center",

    }
};

export default connect()(TrelloActionButton)
