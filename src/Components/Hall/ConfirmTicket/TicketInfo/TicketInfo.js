import React, { Component } from 'react';

import './TicketInfo.scss'


class TicketInfo extends Component {
  constructor(props) {
    super(props);
    const services = [...props.additionalServices];
    this.state = {
      form: services.map((service, index) => {
        return ({
          id: index,
          value: false,
          name: service.name,
          cost: service.cost
        });
      })
    }
  }

  handleSelect = (seatId, cost, index) => {
    const newForm = this.state.form;
    newForm[index].value = !newForm[index].value;
    this.setState({
      form: this.state.form
    })
    this.props.handleSelect(seatId, index, cost);
  }

  render() {
    const { row, seat, additionalServices, movieName, ticketId, cinemaId, seatId } = this.props;
    const services = additionalServices;
    return (
      <div className="confirm-ticket-component">
        <div className="confirm-ticket__ticket-info">
          <div className="confirm-ticket__number">
            {ticketId}
          </div>
          <div className="confirm-ticket__info">
            <span>
              {movieName}
            </span>
            <span>
              {`row ${row}/seat ${seat}`}
            </span>
          </div>
        </div>
        <div>
          {
            services.map((service, index) => {
              return (
                <div className="input-group" key={row + seat + service.name}>
                  <input
                    className="input-group__service"
                    id={"option" + row + seat + service._id}
                    name="option1"
                    type="checkbox"
                    checked={this.state.form[index].value}
                    onChange={() => this.handleSelect(seatId, service.cost, index)}
                  />
                  <label className="input-group__name" htmlFor={"option" + row + seat + service._id}>
                    {service.name}
                  </label>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default TicketInfo;
