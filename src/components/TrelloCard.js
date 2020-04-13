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
import { editCard, deleteCard } from "../actions";
import TrelloButton from "./TrelloButton";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const TrelloCard = React.memo(({ text, id, laneID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const CardContainer = styled.div`
    margin: 0 0 8px 0;
    position: relative;
    max-width: 100%;
    word-wrap: break-word;
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

  const DeleteButton = styled(Icon)`
    position: absolute;
    display: none;
    right: 5px;
    bottom: 5px;
    opacity: 0.5;
    ${CardContainer}:hover & {
      display: block;
      cursor: pointer;
    }
    &:hover {
      opacity: 0.8;
    }
  `;

  const closeForm = e => {
    setIsEditing(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const saveCard = e => {
    e.preventDefault();
    dispatch(editCard(id, laneID, cardText));
    setIsEditing(false);
  };

  const handleDeleteCard = e => {
    dispatch(deleteCard(id, laneID));
  };

  const renderEditForm = () => {
    return (
      <TrelloForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        <TrelloButton onClick={saveCard}>Save</TrelloButton>
      </TrelloForm>
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
              <DeleteButton onMouseDown={handleDeleteCard}>
                <DeleteOutlineIcon fontSize="small" />
              </DeleteButton>
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
});

export default connect()(TrelloCard);
