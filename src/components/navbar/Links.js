import { Link } from "react-router-dom";

const Links = () => {
    return ( 
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/topfeeds">Top</Link>
            <Link to="/saved">Saved</Link>
        </div>
     );
}
 
export default Links;