import React from 'react';
import PropTypes from "prop-types";

const Tracks = ({tracks}) => {
   return (
       <div>
           {
               tracks &&
               tracks.map((item, idx) => {
                   const { artists, name} = item.track;
                 return (
                 <div key={`playlist-track-item-${idx}`}>
                     <p>{name}</p>

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
