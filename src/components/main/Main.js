import './Main.css'
import CreateMeme from "./CreateMeme";
import MeemFeed from './MemeFeed';
import { useState } from 'react';

const Main = () => {
    const [create, setCreate] = useState(false)
    const [createBtn, setCreateBtn] = useState('Create')
    const [blogContent, setFeedContent] = useState([])
    const [urlInput, setUrlInput] = useState('')
    const [numID, setNumID] = useState(1)
    const [hasBlogs, setHasBlogs] = useState(false)

    
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
        <main className="main">
            <CreateMeme 
                create={ create } 
                showInputHandle={ showInputHandle }
                createBtn={ createBtn }
                urlInput={ urlInput }
                setUrlInput={ setUrlInput }
                blogContent={ blogContent }
                setFeedContent={ setFeedContent }
                numID={ numID }
                setNumID={ setNumID }
                setHasBlogs={ setHasBlogs }
            />
            <MeemFeed 
                blogContent={ blogContent }
                setFeedContent={ setFeedContent }
                hasBlogs={ hasBlogs }
                setHasBlogs={ setHasBlogs }
            />
        </main>
     );
}
 
export default Main;