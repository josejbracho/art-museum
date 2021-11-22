import { useParams } from "react-router";

const GalleryView = ({ data }) => {
    const params = useParams();
    const { galleryId } = params;

    const currentGallery = data.find((gallery) => gallery.id === parseInt(galleryId))

    return (
        <div> 
            <h1>Hello from Gallery {galleryId}</h1>
            <h2>{currentGallery.name}</h2>
        </div>
    );
};

export default GalleryView