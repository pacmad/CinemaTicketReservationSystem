import React, { Component } from 'react';
import SeatsData from './SeatsData.js'
import './SelectSeats.scss';
import Seat from './Seat/Seat.js'



class SelectSeats extends Component {
  handleDrawSeats = (amount, row, cost) => {
    let seats = [];
    for (let i = 0; i < amount; i++) {
      seats.push(
        <Seat seat={i + 1} row={row} cost={cost} key={i + 1}
          isSelected={
            this.props.selectedSeats.find((seat) => seat === `${row}.${i + 1}.${cost}`)
          }
          selectTicket={this.props.selectTicket}
          selectedSeats={this.props.selectedSeats} />)
    }
    return seats;
  };

  render() {
    const seats = SeatsData;
    return (
      seats.map((seat) => {
        const count = seat.amountOfSeats;
        return (
          <div className="row" key={seat.row}>
            <div className="row__number">{seat.row}</div>
            <div className={seat.row + ' row__seats-container'}>{this.handleDrawSeats(count, seat.row, seat.cost)} </div>
            <div className="row__number">{seat.row}</div>
          </div>
        );
      })
    );
  }
}

export default SelectSeats;
