import { Link, useParams } from "react-router-dom";

const ArtImageTile = ({ artDisplay }) => {
    const { galleryId } = useParams();

    return (
        <div>
        <Link to={`/galleries/${galleryId}/art/${artDisplay.images[0].imageid}`}>
            <img src={artDisplay.images[0].baseimageurl} alt={artDisplay.title} width="500"/>
        </Link>
        </div>

    );
};

export default ArtImageTile;