import { NavLink } from "react-router-dom";

const GalleryNavigation = ({ data }) => {

    console.log(data)
    
    const galleryItems = data.map((gallery) => <NavLink key={gallery.id} to={`/galleries/:${gallery.id}`}>Hello from {gallery.id}</NavLink>);

    return (
        <nav>
            <NavLink to="/">Home Page</NavLink>
            <h1>Galleries</h1>
            {galleryItems}
        </nav> 
    );
};

export default GalleryNavigation