import "./Home.scss"
import MusicControls from "../../components/MusicControls"
import Hero from "../../components/Hero"

const Home = () => {
  return (
    <div className = 'outerWrap'>
      <div className="App">
        <Hero />
      </div>
        <MusicControls />
    </div>
  )
}

export default Home
