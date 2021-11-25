import { useParams } from "react-router";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ data }) => {
    const params = useParams();
    const { galleryId } = params;

    const currentGallery = data.find((gallery) => gallery.id === parseInt(galleryId))

    const artObject = currentGallery.objects

    const allArt = artObject.map((artItem) => {
        return (<ArtImageTile key={artItem.id} artDisplay={artItem} />);
    })

    return (
        <div> 
            <h2>{currentGallery.name}</h2>
            {allArt}
        </div>
    );
};

export default GalleryView