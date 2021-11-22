import "./Update.scss"
import storage from "../../firebase";
import axios from "axios"
import {useState} from "react";
import { useLocation } from "react-router";

const Update = () => {

  const location = useLocation()

  const thisSong = location.state.object;
  console.log(thisSong);
  const id = thisSong._id;

  const [song, setSong] = useState(null);
  const [songcover, setsongcover] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSong({...song, [e.target.name]: value});
  }


  const save = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred /snapshot.totalBytes)*100;
          console.log("Upload is" + progress + "% done.");
        }, 
        (err) => {
          console.log(err)
        }, 
        ()=> {
          storage.ref("items").child(fileName).getDownloadURL().then((url) => {
            setSong((prev) => {
              return {...prev, [item.label]: url};
            });
        });
        }
        );
      });

      axios.put(`songs/${id}`, song)

  }

  const handleUpdate = (e) => {
    //e.preventDefault();
    save([
      {file: songcover, label: "songcover"},
      {file: audio, label: "audio"}
    ])
  }

  return (
    <div className="update">
      <div className="container">
      <form>
          <h1>Edit</h1>
          <div >
            <input type="text"
            placeholder="Title"
            name="title"
            defaultValue = {thisSong.title} 
            onChange = {handleChange} />
          </div>

          <div className="section">
            <input type="text"
            placeholder="Artist" 
            name="artist" 
            defaultValue = {thisSong.artist} 
            onChange = {handleChange} />
          </div>

          <div className="file">
          <label>Image:</label>
            <input type="file" className="fileselect" name="songcover" onChange = {e=>setsongcover(e.target.files[0])} />
          </div>

          <div className="file">
            <label>Track:</label>
            <input type="file" name="audio" className="fileselect" onChange = {e=>setAudio(e.target.files[0])} />
          </div>

          <button className="loginButton" onClick={handleUpdate}>Update Details</button>
        </form>
        
      </div>
    </div>
  )
}

export default Update
