import React, { Component } from 'react';

import Schedule from './Schedule/Schedule.js'
import Calendar from './Calendar/Calendar';
import './styles.scss';


const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
const MILLISECONDS_IN_HOUR = 1000 * 3600;
const MILLISECONDS_IN_MINUTE = 1000 * 60;
const MINUTES_IN_HOUR = 60;

class FilmProfile extends Component {
  state = {
    day: new Date().getTime(),
  }

  getSecondsSinceMidnight = () => {
    const now = new Date(),
      then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0, 0, 0);
    return now.getTime() - then.getTime();
  }

  getCurrentTimes = (times, day) => {
    return times.filter((time) => +time > day && +time < (day + DAY_IN_MILLISECONDS))
  }

  selectDay = (day) => this.setState({ day })

  getCurrentSessions = (sessions, movieId, day) => {
    const newSessions = sessions.filter(session => session.movieId.id === movieId);
    return newSessions.map(session => {
      return (<Schedule
        cinemaId={session.cinemaId.id}
        hallId={session.hallId.id}
        movieId={session.movieId.id}
        times={this.getCurrentTimes(session.times, day)}
        key={session.cinemaId.id + session.hallId.id + session.movieId.id}
        cinemas={this.props.cinemas}
      />) || ' '
    })
  }

  createDays = () => {
    const now = new Date();
    const t = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0, 0, 0).getTime();
    const days = [];
    for (let i = 0; i < 14; i++) {
      days.push(new Date(t + (DAY_IN_MILLISECONDS * i)));
    }
    return days;
  }

  getHours(milliseconds) {
    return Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
  }

  getMinutes(milliseconds, hours) {
    return (milliseconds / MILLISECONDS_IN_MINUTE) - hours * MINUTES_IN_HOUR;
  }

  render() {
    const days = this.createDays();
    const movieId = this.props.movieId;
    const movie = this.props.movies.find((movie) => movie.id === movieId)
    return (
      <div className="movie-profile">
        <div className="movie-profile__name">
          {`${movie.name}, 
            ${this.getHours(movie.runningTime)}h
           ${this.getMinutes(movie.runningTime, this.getHours(movie.runningTime))}m`
          }
        </div>
        <div className="movie-profile__info">
          <div className="movie-profile__content">
            <img src={movie.img} className="movie-profile__poster" alt="movie"></img>
            <div className="movie-profile__description-container">
              <span className="movie-profile__title">Description </span>
              <p className="movie-profile__description">{movie.description}</p>
            </div>
          </div>
          <div className="movie-profile__tickets-info">
            <Calendar selectDay={this.selectDay} days={days} />
            {this.getCurrentSessions(this.props.sessions, movieId, this.state.day)}
          </div>
        </div>
      </div>
    );
  }
}

export default FilmProfile;
