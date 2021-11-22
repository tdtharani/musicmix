import "./ListenNow.scss"
import Nav from "../../components/Nav"
import Playlist from "../../components/Playlist"

const ListenNow = () => {

  const love_playlist = "https://youtube.com/playlist?list=PL6BA2D5208E8EF161";
  const study_playlist = "https://youtube.com/playlist?list=PLmgutjZvzLyryoakC3VAlDptXy4ChQGC3";
  const relax_playlist = "https://youtube.com/playlist?list=PL7v1FHGMOadDghZ1m-jEIUnVUsGMT9jbH";
  const gym_playlist = "https://youtube.com/playlist?list=PLxA687tYuMWih3dMICezqR_Y7hXBKM5qn";

  return (
    <>  
      <div className = "navBar">
        <Nav />
      </div>
      <div className="listenNow">
        <h1 className="title">Playlists</h1>
        <Playlist name = "Love" image = "../../../images/love.jpg" songs = {love_playlist} />
        <Playlist name = "Study" image = "../../../images/study.jpg" songs = {study_playlist}/>
        <Playlist name = "Relax" image = "../../../images/relax.jpg" songs = {relax_playlist}/>
        <Playlist name = "Gym"  image = "../../../images/gym.jpg" songs = {gym_playlist}/>
      </div>
    </>
  )
}

export default ListenNow
