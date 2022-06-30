const SideProfile = ({ isAuth }) => {
    return ( 
        <div className="side-profile">
            { isAuth && <h1>Harold Aquino</h1>}
        </div>
     );
}
 
export default SideProfile;