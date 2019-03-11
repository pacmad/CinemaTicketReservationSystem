import React, { Component } from 'react';
import { getAdditionalServicesAsync } from '../../actions/index.js'
import additionalServices from '../../additionalServices.js'
import ConfirmTicket from '../../Components/Hall/ConfirmTicket/ConfirmTicket.js';
import { connect } from 'react-redux';


class ConfirmTicketsPage extends Component {
  componentDidMount() {
    this.props.getAdditionalServicesAsync(additionalServices);
  }

  render() {
    return (
      this.props.additionalServices.length != 0 && <ConfirmTicket
        additionalServices={this.props.additionalServices}
        selectedSeats={this.props.selectedSeats}
      />
    );
  }
}

const mapStateToProps = store => ({
  selectedSeats: store.selectTicket.selectedSeats,
  additionalServices: store.additionalServices.additionalServices
})

const mapDispatchToProps = dispatch => ({
  getAdditionalServicesAsync(additionalServices) {
    dispatch(getAdditionalServicesAsync(additionalServices));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmTicketsPage);
