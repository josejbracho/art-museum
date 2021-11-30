import { Link, useParams } from "react-router-dom";

const ArtDescription = (artObjects) => {
    const { galleryId, artId } = useParams()

    console.log(artObjects)
//    const currentArt = artObjects.find((object) => object.images[0].imageid === parseInt(artId))

//    console.log(currentArt)
    
    return (
        <div>
            <h1>Hello from Art Description</h1>
            <Link to={`/galleries/${galleryId}`}>Back to Gallery {galleryId}</Link>
        </div>

    );
};

export default ArtDescription;