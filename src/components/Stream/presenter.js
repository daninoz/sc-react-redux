import React from "react";

/*
 Stream is an stateless function because it receives an input
 and return an output. It doesn't have side effects.

 In this case it receives props (state) and returns a view.
 */
function Stream({ tracks = [], onAuth }) {
  return (
      <div>
        <div>
          <button onClick={onAuth} type="button">Login</button>
        </div>
        <br />
        <div>
          {
            tracks.map((track, key) => {
              // List of components should have a unique key
              return <div className="track" key={key}>{track.title}</div>;
            })
          }
        </div>
      </div>
  );
}

export default Stream;