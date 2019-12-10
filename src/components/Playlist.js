import React from 'react';
import PropTypes from "prop-types";
import './Playlist.scss'
const Playlist = ({playlist, onClickItem}) => {
   return (
       <div className="Playlist">
           {
               playlist &&
               playlist.map((item, idx) => {
                 return (
                 <div key={`playlist-item-${idx}`} onClick={() => onClickItem(item)}>
                     <p className="PlaylistTitle">{item.name}</p>
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
