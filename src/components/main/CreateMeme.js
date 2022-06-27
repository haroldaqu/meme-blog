
const CreateMeme = ({ 
        create, 
        showInputHandle, 
        createBtn, 
        urlInput ,
        setUrlInput,
        blogContent,
        setFeedContent,
        numID,
        setNumID,
        setHasBlogs
}) => {

    const createBlogHandle = () => {
        setHasBlogs(true)
        setNumID(() => numID + 1)
        setFeedContent([
            ...blogContent, {
                id: numID,
                name: 'Harold Aquino',
                src: urlInput,
                likes: 0
            }
        ])
        setUrlInput('')
    }

    return ( 
        <article className="create-container">
            <div className="button-create-container">
                <p>Create a blog meme</p>
                <button onClick={showInputHandle} > { createBtn } </button>
            </div>
            { create &&
                <div className="input-container">
                    <input 
                        type="text" 
                        placeholder="URL" 
                        value={ urlInput }  
                        onChange={ (e) => setUrlInput(e.target.value) }
                    /> 
                    <button onClick={ createBlogHandle } >Add to Feed</button>
                </div>
            }
        </article>
    );
}
 
export default CreateMeme;