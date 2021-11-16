import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

function App() {
  return (
    <GalleryNavigation data={harvardArt.records}/>
  );
}

export default App;
