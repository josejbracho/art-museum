import { Link, useParams } from "react-router-dom";

const ArtImageTile = ({ art }) => {
    const params = useParams();
    const { galleryId } = params;

    return (
        <div>
        <Link to={`/galleries/${galleryId}/art/${art[0][0].images[0].imageid}`}>
            <img src={art[0][0].images[0].baseimageurl} alt="" width="500"/>
        </Link>
        </div>

    );
};

export default ArtImageTile;