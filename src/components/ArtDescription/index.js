import { Link, useParams } from "react-router-dom";

const ArtDescription = (artObjects) => {
    const { galleryId, artId } = useParams()

    const currentArt = artObjects.props.find((object) => object.images[0].imageid === parseInt(artId))

    const allImages = currentArt.images.map((artImage) => {
        return (<img key={currentArt.imageid} src={artImage.baseimageurl} alt={artImage.alttext} width="200" />)
    })

    console.log(currentArt)

    return (
        <div>
            <h3><a href={currentArt.url} rel="noreferrer" target="_blank">{currentArt.title}</a></h3><br></br>
            {allImages}
            <h4>Technique: {currentArt.technique}</h4>
            <h4>Description:</h4>
            <p>{currentArt.description}</p>
            <h4>Credit: {currentArt.creditline}</h4>
            <Link to={`/galleries/${galleryId}`}>Back to Gallery {galleryId}</Link>
        </div>

    );
};

export default ArtDescription;