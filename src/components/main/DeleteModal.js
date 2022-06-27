const DeleteModal = ({  confirmDeleteHandle, backBtnHandle, blogID }) => {


    return ( 
        <div className="delete-modal-container">
            <p>Confirm to delete blog post</p>
            <div>
                <button onClick={backBtnHandle} >Back</button>
                <button onClick={() => confirmDeleteHandle(blogID)} >Confirm</button>
            </div>
        </div>
     );
}
 
export default DeleteModal;