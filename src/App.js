import { Routes, Route } from 'react-router-dom'
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

const Home = () => {
  return (
    <div>
    <h2>Harvard Art Museum</h2>
    <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
    </div>
  )
}

function App() {
  return (
      <div className="page-wrapper">
          <GalleryNavigation data={harvardArt.records} />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/galleries/:galleryId" element={<GalleryView data={harvardArt.records} />} />
          </Routes>
      </div>
  );
}

export default App;
