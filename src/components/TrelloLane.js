import React from 'react';
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const LaneContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const Trellolane = ({ title, cards, laneID, index }) => {
    return (
        <Draggable draggableId={String(laneID)} index={index}>
            {provided => (
                <LaneContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Droppable droppableId={String(laneID)} type="card">
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <h4>{title}</h4>

                                {cards.map((card, index) => (
                                    <TrelloCard
                                        key={card.id}
                                        text={card.text}
                                        id={card.id}
                                        index={index}
                                        laneID={laneID}
                                    />
                                ))}
                                {provided.placeholder}
                                <TrelloActionButton laneID={laneID} />
                            </div>
                        )}
                    </Droppable>
                </LaneContainer>
            )}
        </Draggable>
    );
};

export default Trellolane;