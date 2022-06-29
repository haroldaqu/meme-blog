import { useEffect } from "react"

const CreateMeme = ({ 
        create, 
        showInputHandle, 
        createBtn, 
        urlInput ,
        setUrlInput,
        createBlogHandle
}) => {


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