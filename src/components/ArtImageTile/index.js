import { Link, useParams } from "react-router-dom";

const ArtImageTile = ({ artDisplay }) => {
    const { galleryId } = useParams();

    // Gallery 2340 doesn't work because it has an art with no image path for .images[0], must find a way to give alternative path
    
    return (
        <div>
        <Link to={`/galleries/${galleryId}/art/${artDisplay.images[0].imageid}`}>
            <img src={artDisplay.images[0].baseimageurl} alt={artDisplay.title} width="500"/>
        </Link>
        </div>

    );
};

export default ArtImageTile;