import React from 'react';
import PropTypes from "prop-types";
import './Tracks.scss'
const Tracks = ({tracks}) => {
   return (
       <div className="Tracks">
           {
               tracks &&
               tracks.map((item, idx) => {
                 const { album, artists, name, preview_url, external_urls} = item.track;
                 const artistNames = artists.map(artist => artist.name).join(', ');
                 return (
                 <div className="TrackItem" key={`playlist-track-item-${idx}`}>
                     <p className="TrackItemTitle">{name}</p>
                     <img className="TrackItemImage" src={album.images[1].url} alt={name}/>
                     <audio controls>
                       <source src={preview_url} type="audio/mpeg"/>
                     </audio>
                     <p>Artists:</p>
                     <p> {artistNames}</p>
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
