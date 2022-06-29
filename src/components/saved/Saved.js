import './Saved.css'
import { useState } from 'react'

const Saved = ({ savedFeeds, setSavedFeeds, currentID, setCurrentID, unsaveHandle }) => {

    return ( 
        <main className="saved-feeds">
            <h1>Saved Memes</h1>
            { 
                savedFeeds.map(blog => (
                    <div className="meme-feed-container" key={blog.id}>
                        <div className="user-who-posted" >
                            <p> { blog.name } </p>
                            <button onClick={() => unsaveHandle(blog.id)} >Unsave</button>                           
                        </div>
                        <img src={ blog.src } alt="" className="meme-img" />
                        <div className="user-interactions">
                            <div className="like-contents">
                                <button >Like</button>
                                <p>  { blog.likes } Likes</p>
                            </div>
                        </div>                        
                        {/* <div className="user-interactions">
                            <div className="like-contents">
                                <button onClick={() => likeHandle(blog.id)} >Like</button>
                                <p>  { blog.likes } Likes</p>
                            </div>
                            <button>Share</button>
                            <button onClick={() => savedFeedHandle(blog.id)} >Save</button>
                        </div> */}
                    </div>                    
                ))
            }
        </main>
     );
}
 
export default Saved;