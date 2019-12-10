import React from 'react';
import PropTypes from "prop-types";

const Playlist = ({playlist, onClickItem}) => {
   return (
       <div>
           {
               playlist &&
               playlist.map((item, idx) => {
                 return (
                 <div key={`playlist-item-${idx}`} onClick={() => onClickItem(item)}>
                     <p>{item.name}</p>
                     <img src={item.images[1].url} alt={item.name}/>
                 </div>
                 )
               })

           }
       </div>
   );
};

Playlist.propTypes = {
    playlist: PropTypes.array,
    onClickItem: PropTypes.func.isRequired,
};

export default Playlist;
