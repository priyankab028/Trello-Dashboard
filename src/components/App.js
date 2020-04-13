import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TrelloLane from './TrelloLane';
import TrelloActionButton from './TrelloActionButton';
import { sort } from '../actions';


const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;`;

export class App extends Component {
  onDragEnd = (result) => {

    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  render() {
    const { lanes } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="wrapperHEader">
          <h2>Trello Dashboard</h2>
        </div>
        <Droppable droppableId="all-lanes" direction="horizontal" type="lane">
          {provided => (
            <MainWrapper
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lanes.map((lane, index) => (
                <TrelloLane
                  laneID={lane.id}
                  key={lane.id}
                  title={lane.title}
                  cards={lane.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <TrelloActionButton lane />
            </MainWrapper>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
const styles = {
  laneWrapper: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state => ({
  lanes: state.lanes
})

export default connect(mapStateToProps)(App);


