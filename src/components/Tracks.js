import React from 'react';
import PropTypes from "prop-types";
import './Tracks.scss'
const Tracks = ({tracks}) => {
   return (
       <div className="Tracks">
           {
               tracks &&
               tracks.map((item, idx) => {
                   const { artists, name, preview_url, external_urls} = item.track;
                 return (
                 <div className="TrackItem" key={`playlist-track-item-${idx}`}>
                     <p>{name}</p>
                     <audio controls>
                       <source src={preview_url} type="audio/mpeg"/>
                     </audio>
                     <a className="TrackExternalLink" href={external_urls.spotify} target="_blank">See more in spotify</a>
                 </div>
                 )
               })

           }
       </div>
   );
};

Tracks.propTypes = {
    tracks: PropTypes.array,
};

export default Tracks;
