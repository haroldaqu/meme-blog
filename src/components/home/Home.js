import './Home.css'
import CreateMeme from "./CreateMeme";
import MemeFeed from './MemeFeed';
import { useState } from 'react';

const Home = ({ blogContent, setBlogContent, savedFeeds, setSavedFeeds, numID, setNumID, hasBlogs, setHasBlogs, urlInput, setUrlInput, createBlogHandle, savedFeedHandle, currentID, setCurrentID }) => {
    const [create, setCreate] = useState(false)
    const [createBtn, setCreateBtn] = useState('Create')

    
    // toggle create/close buttons
    const showInputHandle = () => {
        if (createBtn === 'Create') {
            setCreate(true)
            setCreateBtn('Close')
        }
        else {
            setCreate(false)
            setCreateBtn('Create')
        }
    }


    return ( 
        <main className="home-feed">
            <CreateMeme 
                create={ create } 
                showInputHandle={ showInputHandle }
                createBtn={ createBtn }
                urlInput={ urlInput }
                setUrlInput={ setUrlInput }
                blogContent={ blogContent }
                setBlogContent={ setBlogContent }
                numID={ numID }
                setNumID={ setNumID }
                setHasBlogs={ setHasBlogs }
                createBlogHandle={ createBlogHandle }
                currentID={ currentID }
                setCurrentID={ setCurrentID }
            />
            <MemeFeed 
                blogContent={ blogContent }
                setBlogContent={ setBlogContent }
                hasBlogs={ hasBlogs }
                setHasBlogs={ setHasBlogs }
                saveFeeds={ savedFeeds }
                setSavedFeeds={ setSavedFeeds }
                savedFeedHandle={ savedFeedHandle }
                currentID={ currentID }
                setCurrentID={ setCurrentID }
            />
        </main>
     );
}
 
export default Home;