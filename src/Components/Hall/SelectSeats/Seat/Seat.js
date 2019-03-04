import React, { Component } from 'react';


class Seat extends Component {

  handleSelect = () => {
    const row = this.props.row;
    const seat = this.props.seat;
    const cost = this.props.cost;
    this.props.selectTicket(row, seat, cost);
  };

  render() {
    const { seat, row, cost } = this.props;
    return (
      <div className={"row__seat" + ((this.props.isSelected && " row__seat_selected") || '')} data-title={`${row}ряд ${cost}руб`} onClick={this.handleSelect} key={seat}>{seat}</div >
    );
  }
}

export default Seat;
