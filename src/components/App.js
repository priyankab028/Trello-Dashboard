import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrelloLane from './TrelloLane';
import TrelloActionButton from './TrelloActionButton';


function App(props) {

  const { lanes } = props
  return (
    <div className="App">
      <div style={styles.laneWrapper}>
        {lanes.map(lane => (
          <TrelloLane key={lane.id} title={lane.title} cards={lane.cards} />

        ))}
        <TrelloActionButton lane />
      </div>
    </div>
  );
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
