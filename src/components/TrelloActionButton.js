import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from "@material-ui/core/Icon";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Textarea from 'react-textarea-autosize';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addLane, addCard } from "../actions";
import styled from "styled-components";
import TrelloForm from "./TrelloForm";
import TrelloOpenForm from "./TrelloOpenForm";
import TrelloButton from "./TrelloButton";

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

    closeForm = e => {
        this.setState({
            formOpen: false
        });
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
            this.setState({
                text: ""
            });
            dispatch(addLane(text));
        }
        return;
    };
    handleAddCard = () => {
        const { dispatch, laneID } = this.props;
        const { text } = this.state;
        if (text) {
            this.setState({
                text: ""
            });
            dispatch(addCard(laneID, text));
        }
    };
    renderOpenForm = () => {
        const { lane } = this.props;

        const buttonText = lane ? "Add another lane" : "Add another card";
        const buttonTextOpacity = lane ? 1 : 0.5;
        const buttonTextColor = lane ? "white" : "inherit";
        const buttonTextBackground = lane ? "rgba(0,0,0,.15)" : "inherit";

        const OpenFormButton = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 3px;
      height: 36px;
      margin-left: 8px;
      width: 300px;
      padding-left: 10px;
      padding-right: 10px;
      opacity: ${buttonTextOpacity};
      color: ${buttonTextColor};
      background-color: ${buttonTextBackground};
    `;

        return (
            <OpenFormButton onClick={this.openForm}>
                <Icon><AddIcon /></Icon>
                <p style={{ flexShrink: 0 }}>{buttonText}</p>
            </OpenFormButton>
        );
    };

    render() {
        const { text } = this.state;
        const { lane } = this.props;
        return this.state.formOpen ? (
            <TrelloForm
                text={text}
                onChange={this.handleInputChange}
                closeForm={this.closeForm}
            >
                <TrelloButton onClick={lane ? this.handleAddLane : this.handleAddCard}>
                    {lane ? "Add lane" : "Add Card"}
                </TrelloButton>
            </TrelloForm>
        ) : (
                <TrelloOpenForm lane={lane} onClick={this.openForm}>
                    {lane ? "Add another lane" : "Add another card"}
                </TrelloOpenForm>
            );
    }
}

export default connect()(TrelloActionButton);
