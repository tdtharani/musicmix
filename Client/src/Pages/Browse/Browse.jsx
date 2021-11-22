import "./Browse.scss"
import ListItem from "../../components/ListItem"
import {useState, useEffect} from "react"
import axios from "axios"

const Browse = () => {
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const getSongs = async () => {
      try {
        const res = await axios.get("songs");
        setSongs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSongs();
  },[]);

  const filterSongs = (items, searchTerm) => {
    const result = [];
  
    items.forEach((item) => {
      if (item.title.toLowerCase().includes(searchTerm)||item.artist.toLowerCase().includes(searchTerm)) {
        result.push(item)}
    })
    
    return (result);
  }

  const handleSearch = async (e) => {
    const searchTerm = e.currentTarget.value.toLowerCase();

    try {
      const r = await axios.get("songs");
      if (!searchTerm) {setSongs(r.data)}
      setSongs(filterSongs(r.data, searchTerm));
    
    } catch (err) {
      console.log(err);
    }

  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  }


  return (
    <div className="body">
      <div className="all-songs">
        <div className="search">
          <input 
          type="search" 
          placeholder="Search songs"
          name = "searchTerm"
          onChange={handleSearch}/>
        </div>
        <ul>
          {songs.map((song) => (
            <li key = {song._id}>
              <ListItem song = {song}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Browse
