import "./Add.scss"
import {useState} from "react";
import storage from "../../firebase";
import axios from "axios"

const Add = () => {
  const [song, setSong] = useState(null);
  const [songcover, setsongcover] = useState(null);
  const [audio, setAudio] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setSong({...song, [e.target.name]: value});
  }

  var complete = () => axios.post("songs/create", song)

  const save = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask =  storage.ref(`/items/${fileName}`).put(item.file);
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
            setUploaded((prev) => prev + 1);
        });
        }
        );
      })  
      
      
  }

  const handleUpload = (e) => {
    e.preventDefault();
    save([
      {file: songcover, label: "songcover"},
      {file: audio, label: "audio"}
    ])
  
  }
  const handleAdd = () => {
    axios.post("songs/create", song);
  }

  console.log(song)

  return (
    <div className="add">
      <div className="container">
        <form>
          <h1>Add Song</h1>
          <div >
            <input type="text" placeholder="Title" name="title" onChange = {handleChange} />
          </div>

          <div className="section">
            <input type="text" placeholder="Artist" name="artist" onChange = {handleChange} />
          </div>

          <div className="file">
            
            <div className="image">
              <label>Image:</label>
              <input type="file" className="fileselect" name="songcover" onChange = {e=>setsongcover(e.target.files[0])} />
            </div>
            <div className="mp3">
              <label>Track:</label>
            <input type="file" name="audio" className="fileselect" onChange = {e=>setAudio(e.target.files[0])} />
            </div>
            
            
          </div>

          {uploaded === 2 ? (
          <button className="loginButton" onClick={handleAdd}>
            Add Song
          </button>
        ) : (
          <button className="uploadButton" onClick={handleUpload}>
            Upload
          </button>
        )}

        </form>
        
      </div>
    </div>
  )
}

export default Add
