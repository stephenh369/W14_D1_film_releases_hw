import React, { Component } from 'react';

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