import React from 'react';
import PropTypes from "prop-types";

const Tracks = ({tracks}) => {
   return (
       <div>
           {
               tracks &&
               tracks.map((item, idx) => {
                   const { artists, name, preview_url} = item.track;
                 return (
                 <div key={`playlist-track-item-${idx}`}>
                     <p>{name}</p>
                     <audio controls>
                       <source src={preview_url} type="audio/mpeg"/>
                     </audio>
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
