import { useState } from "react"
import DeleteModal from "./DeleteModal"

const MemeFeed = ({ blogContent, setBlogContent, hasBlogs, savedFeedHandle, currentID, setCurrentID}) => {
    const [deleteBtn, setDeleteBtn] = useState(false)

    const likeHandle = (id) => {
        setBlogContent(
            blogContent.map(blog => {
                if(blog.id === id) {
                    return {
                        ...blog, likes: blog.likes + 1
                    }
                }
            return blog
            }))
    }

    const deleteHandle = (id) => {
        setDeleteBtn(true)
        setCurrentID(id)
    }

    const confirmDeleteHandle = (id) => {
        const newBlogContent = blogContent.filter(blog => blog.id !== currentID)
        setBlogContent(newBlogContent)
        setDeleteBtn(false)
    }

    const backBtnHandle = () => {
        setDeleteBtn(false)
    }

 

    return ( 
        <div className="meme-feed">
                {hasBlogs ?
                    blogContent.map(blog => (
                        <div className="meme-feed-container" key={blog.id}>
                            <div className="user-who-posted" >
                                <p> { blog.name } </p>
                                <button onClick={() => deleteHandle(blog.id)} >Delete</button>                           
                            </div>
                            <img src={ blog.src } alt="" className="meme-img" />
                            <div className="user-interactions">
                                <div className="like-contents">
                                    <button onClick={() => likeHandle(blog.id)} >Like</button>
                                    <p>  { blog.likes } Likes</p>
                                </div>
                                <button>Share</button>
                                <button onClick={() => savedFeedHandle(blog.id)} >Save</button>
                            </div>
                             {deleteBtn &&  currentID === blog.id &&
                                <DeleteModal 
                                deleteBtn={ deleteBtn } 
                                setDeleteBtn={ setDeleteBtn } 
                                confirmDeleteHandle={ confirmDeleteHandle }
                                blogID={ blog.id }
                                backBtnHandle={ backBtnHandle }
                                />                          
                            }
                        </div>
                    ))
                    : <p> No blogs yet </p>
                }
        </div>
     );
}
 
export default MemeFeed;

// https://d.newsweek.com/en/full/1176971/obesity-meme.png?w=1600&h=1200&q=88&f=e427296d9c04b9020a09aedbddd40dc6