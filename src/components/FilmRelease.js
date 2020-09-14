import React, { Component } from 'react';
import './FilmReleaseList.css';

class FilmRelease extends Component {
  render() {
    return (
      <>
        <li className="film-release">
          <h4>{this.props.name}</h4>
          <a href={this.props.url} target="_blank">{this.props.url}</a>
        </li>
      </>
    );
  }
}

export default FilmRelease;