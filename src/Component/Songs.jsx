import React from "react";
import Song from "../Component/Song";

export default function Songs(Props) {
  return (
    <div className="song-border">
      <h1 className="text-center text-light m-5 text-decoration-underline">
        <i>Songs</i>
      </h1>
      <div className="d-flex justify-content-evenly flex-wrap">
        {Props.allsongs.map((songItem) => {
          return <Song song={songItem} />;
        })}
      </div>
    </div>
  );
}
