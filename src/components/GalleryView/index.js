import { useParams, Routes, Route } from "react-router";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";

const GalleryView = ({ data }) => {
    const { galleryId } = useParams();

    const currentGallery = data.find((gallery) => gallery.id === parseInt(galleryId))

    const artObjects = currentGallery.objects

    const allArt = artObjects.map((artItem) => {
        return (<ArtImageTile key={artItem.id} artDisplay={artItem} />);
    })

    return (
        <div> 
            <h2>{currentGallery.name}</h2>
            <Routes>
                <Route path="/" element={allArt} />
                <Route path="/art/:artId" element={<ArtDescription artObject={artObjects}/>}/>
            </Routes>
        </div>
    );
};

export default GalleryView