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
    renderAddButton = () => {
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

    renderForm = () => {
        const { lane } = this.props;

        const placeholder = lane
            ? "Enter lane title..."
            : "Enter a title for this card...";

        const buttonTitle = lane ? "Add lane" : "Add Card";

        const Container = styled.div`
      width: ${lane ? "300px" : "100%"};
    `;

        const StyledCard = styled(Card)`
      min-height: 85px;
      padding: 6px 8px 2px;
    `;

        const StyledTextArea = styled(Textarea)`
      resize: none;
      width: 100%;
      overflow: hidden;
      outline: none;
      border: none;
    `;

        const StyledButton = styled(Button)`
      && {
        color: white;
        background: #5aac44;
      }
    `;

        const ButtonContainer = styled.div`
      margin-top: 8px;
      display: flex;
      align-items: center;
      margin-left: 8px;
    `;

        const StyledIcon = styled(Icon)`
      margin-left: 8px;
      cursor: pointer;
    `;

        return (
            <Container>
                <StyledCard>
                    <StyledTextArea
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                    />
                </StyledCard>
                <ButtonContainer>
                    <StyledButton
                        onMouseDown={lane ? this.handleAddlane : this.handleAddCard}
                        variant="contained"
                        children={buttonTitle}
                    />

                    <StyledIcon onClick={this.closeForm}><CloseIcon /></StyledIcon>
                </ButtonContainer>
            </Container>
        );
    };


    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}


export default connect()(TrelloActionButton);
