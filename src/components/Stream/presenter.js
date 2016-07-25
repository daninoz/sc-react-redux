import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { CLIENT_ID } from "../../constants/auth";

/*
 Stream is an stateless function because it receives an input
 and return an output. It doesn't have side effects.

 In this case it receives props (state) and returns a view.
 */
class Stream extends Component {
  componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);

    if (!audioElement) { return; }

    const { activeTrack } = this.props;

    if (activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  render() {
    const { user, tracks = [], activeTrack, onAuth, onPlay } = this.props;

    return (
        <div>
          <div>
            {
              // If the user is present we display the username
              // If not we display a login button
              user ?
                  <div>{ user.username }</div> :
                  <button onClick={onAuth} type="button">Login</button>
            }
          </div>
          <br />
          <div>
            {
              tracks.map((track, key) => {
                // List of components should have a unique key
                return (
                    <div className="track" key={key}>
                      {track.origin.title}
                      <button type="button" onClick={() => onPlay(track)}>Play</button>
                    </div>
                )
              })
            }
          </div>
          {
            activeTrack ?
                <audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio> :
                null
          }
        </div>
    );
  }
}

export default Stream;