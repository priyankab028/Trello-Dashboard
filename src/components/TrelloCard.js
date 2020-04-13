import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import EditIcon from '@material-ui/icons/Edit';
import TrelloForm from "./TrelloForm";
import { editCard } from "../actions";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const TrelloCard = ({ text, id, laneID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = e => {
    setIsEditing(false);
  };

  const saveCard = e => {
    e.preventDefault();
    dispatch(editCard(id, laneID, cardText));
    setIsEditing(false);
  };

  const renderEditForm = () => {
    return (
      <TrelloForm
        text={cardText}
        setText={setText}
        closeForm={closeForm}
        actionButtonClicked={saveCard}
      />
    );
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <Card>
              <EditButton
                onMouseDown={() => setIsEditing(true)}

              >
                <EditIcon fontSize="small" />
              </EditButton>
              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
};

export default connect()(TrelloCard);
