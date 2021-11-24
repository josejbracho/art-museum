import { Link, useParams } from "react-router-dom";

const ArtImageTile = ({ artDisplay }) => {
    const params = useParams();
    const { galleryId } = params;
    
    return (
        <div>
        <Link to={`/galleries/${galleryId}/art/${artDisplay.imageid}`}>
            <img src={artDisplay.baseimageurl} alt="" width="500"/>
        </Link>
        </div>

    );
};

export default ArtImageTile;