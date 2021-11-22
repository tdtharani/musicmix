import "./ListItem.scss"
import { NavLink } from "react-router-dom";
import axios from "axios";
import {Howl} from "howler"
import { useState, useRef } from "react";


const ListItem = ({song}) => {

  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayer= useRef();

  const songId = song._id;
  const src = song.audio;

  const sound = new Howl ({
      src,
      html5: true
  })

  const handleDelete = () => {
    axios.delete(`songs/${songId}`)
  }

  const handlePause = () => {
    sound.stop();
    setIsPlaying(false);
  }

  const handlePlay = () => {
    sound.play();
    setIsPlaying(true);
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    
    setIsPlaying(!prevValue);
    if (!prevValue) {
      //audioPlayer.current.play();
    } else {
      //audioPlayer.current.pause();

    }
  }

  return (
    <div className="listItem">
      <div className="song">
        <div className="cover">
          <img src={song.songcover} alt="" />
        </div>
        <div className="details">
          <h5 onClick={togglePlayPause}>{song.title}</h5>
          <h6>{song.artist}</h6>
        </div>
      </div>
      <div className="controls">

    
          <button onClick = {togglePlayPause}>

            {!isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 320 384">
              <path id="play" d="M405.2,232.9,126.8,67.2A20.993,20.993,0,0,0,115.9,64,19.953,19.953,0,0,0,96.1,84H96V428h.1a19.953,19.953,0,0,0,19.8,20c4.1,0,7.5-1.4,11.2-3.4L405.2,279.1a30.1,30.1,0,0,0,0-46.2Z" transform="translate(-96 -64)" fill="#fff"/>
              </svg>
              : 
              <svg xmlns="http://www.w3.org/2000/svg" width="18.664" height="18.664" viewBox="0 0 38.664 38.664">
                <path id="close_icon" d="M101.525,96.4,88.38,83.257l13.145-13.145A3.623,3.623,0,0,0,96.4,64.989L83.257,78.134,70.112,64.989a3.623,3.623,0,0,0-5.123,5.123L78.134,83.257,64.989,96.4a3.623,3.623,0,0,0,5.123,5.123L83.257,88.38,96.4,101.525a3.623,3.623,0,0,0,5.123-5.123Z" transform="translate(-63.925 -63.925)" fill="#fff"/>
              </svg>
            }          
          </button>

          {!isPlaying ? (
            <div className = "controls">
              <NavLink to = {{
                pathname:"/update",
                state: {
                  object: song
                }
                }}> 
                <button><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 290.575 291.047">
                  <path id="update" d="M287.842,71.254,219.829,3.24a11.345,11.345,0,0,0-15.789,0L0,208.5v82.588H82.588L287.842,87.043C291.486,83.4,291.486,76.112,287.842,71.254ZM70.442,270.436h-49.8v-49.8l3.644-2.429,48.581,48.581Zm10.931-12.145L32.792,209.71,177.321,62.752l51.01,51.01ZM236.832,105.26l-51.01-51.01,25.505-25.505,51.01,51.01Z" transform="translate(0 -0.036)" fill="#fff"/>
                  </svg>
                </button>
              </NavLink>

        
              <button onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 177.611 177.611">
                <path id="delete" d="M88.806,0A11.1,11.1,0,0,0,77.7,11.1H0V33.3H11.1V155.41a22.2,22.2,0,0,0,22.2,22.2H144.309a22.2,22.2,0,0,0,22.2-22.2V33.3h11.1V11.1h-77.7A11.1,11.1,0,0,0,88.806,0ZM44.4,155.41H33.3V55.5H44.4Zm33.3,0H66.6V55.5H77.7Zm33.3,0h-11.1V55.5h11.1Zm33.3,0h-11.1V55.5h11.1Z" fill="#fff"/>
                </svg>
              </button>
            </div>
          )
          : (
            <div className="playbar">
              <audio ref={audioPlayer} src={song.audio} controls autoplay={true}></audio>
            </div>
          )
            
          }

        
      </div>
    </div>
  )
}

export default ListItem
