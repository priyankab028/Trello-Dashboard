import React, { Component } from 'react'
import { connect } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";
import TrelloLane from './TrelloLane';
import TrelloActionButton from './TrelloActionButton';

export class App extends Component {
  onDragEnd = () => {

  };
  render() {
    const { lanes } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <div style={styles.laneWrapper}>
            {lanes.map(lane => (
              <TrelloLane laneID={lane.id} key={lane.id} title={lane.title} cards={lane.cards} />

            ))}
            <TrelloActionButton lane />
          </div>
        </div>
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


