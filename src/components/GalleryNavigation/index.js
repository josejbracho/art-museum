import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'

const GalleryNavigation = ({ data }) => {
    const galleryItems = data.map((gallery) => <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.id} </NavLink>);

    return (
        <nav>
            <NavLink to="/">Home Page</NavLink>
            <h1>Galleries</h1>
            {galleryItems}
        </nav> 
    );
};

export default GalleryNavigation