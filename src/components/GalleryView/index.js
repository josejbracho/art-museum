import { useParams } from "react-router";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ data }) => {
    const params = useParams();
    const { galleryId } = params;

    const currentGallery = data.find((gallery) => gallery.id === parseInt(galleryId))

    const art = data.map((gallery) => currentGallery.objects)

    return (
        <div> 
            <h2>{currentGallery.name}</h2>
            <ArtImageTile art={art}/>
        </div>
    );
};

export default GalleryView