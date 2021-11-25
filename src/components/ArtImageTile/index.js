import { Link, useParams } from "react-router-dom";

const ArtImageTile = ({ artDisplay }) => {
    const params = useParams();
    const { galleryId } = params;
    
    return (
        <div>
        <Link to={`/galleries/${galleryId}/art/${artDisplay.id}`}>
            <img src={artDisplay.primaryimageurl} alt="" width="500"/>
        </Link>
        </div>

    );
};

export default ArtImageTile;