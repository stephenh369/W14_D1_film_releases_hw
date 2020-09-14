import React, { Component } from 'react';
import './FilmReleaseList.css';
import FilmRelease from './FilmRelease';

class FilmReleaseList extends Component {
  render() {
    const filmNodes = this.props.films.map((film) => {
      return (
        <FilmRelease key={film.id} name={film.name} url={film.url}/>
      );
    })
    return (
      <>
        <ul className="film-release-list">
          {filmNodes}
        </ul>
      </>
    );
  }
}

export default FilmReleaseList;