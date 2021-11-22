import "./Playlist.scss"

const Playlist = (props) => {
  return (
    <div>
      <div className="playlists">
          <div className="plist">
            <a href={props.songs} target="_blank">
              <div className="cover">
                <img src={props.image} alt=""/>
              </div>
            </a>
            <div className="text">
              <h2 className="pname"> {props.name}</h2>
              <span className="pdesc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum placeat totam minus iste veritatis harum officiis beatae, natus voluptatum ipsum error debitis,</span>
            </div>
          </div>
        </div>      
    </div>
  )
}

export default Playlist
