import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Saved from './components/saved/Saved';
import TopFeeds from './components/top/TopFeeds';
import Login from './components/login/Login';

function App() {
  const [blogContent, setBlogContent] = useState([])
  const [savedFeeds, setSavedFeeds] = useState([])
  const [numID, setNumID] = useState(1)
  const [urlInput, setUrlInput] = useState('')
  const [hasBlogs, setHasBlogs] = useState(false)
  const [currentID, setCurrentID] = useState(null)

  const createBlogHandle = () => {
        setHasBlogs(true)
        setNumID(() => numID + 1)
        setBlogContent([
            ...blogContent, {
                id: numID,
                name: 'Harold Aquino',
                src: urlInput,
                likes: 0,
                saved: false
            }
        ])
        setUrlInput('')
  }

  const savedFeedHandle = (id) => {
        setCurrentID(id)
        setBlogContent(
            blogContent.map(blog => {
                if(blog.id === currentID) {
                    return {
                        ...blog, saved: true
                    }
                }
            return blog
            }
        ))
        const userSavedFeeds = blogContent.filter(blog => blog.saved === true)
        setSavedFeeds(userSavedFeeds)
  }  

  const unsaveHandle = (id) => {
        setCurrentID(id)
        const newSavedFeeds = savedFeeds.filter(blogs => blogs.id !== currentID)
        setSavedFeeds(newSavedFeeds)
        setBlogContent(
            blogContent.map(blog => {
                if(blog.id === currentID) {
                    return {
                        ...blog, saved: false
                    }
                }
            return blog
            }
        ))
  }


  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Navbar />
          <Switch >
            <Route exact path="/">
              <Home 
                blogContent={ blogContent } 
                setBlogContent={ setBlogContent } 
                savedFeeds={ savedFeeds }
                setSavedFeeds={ setSavedFeeds }
                numID={ numID }
                setNumID={ setNumID }
                createBlogHandle={ createBlogHandle }
                urlInput={ urlInput }
                setUrlInput={ setUrlInput }
                hasBlogs={ hasBlogs }
                setHasBlogs={ setHasBlogs }
                createBlogHandl={ createBlogHandle }
                savedFeedHandle={ savedFeedHandle }
                currentID={ currentID }
                setCurrentID={ setCurrentID }
              />
            </Route>
            <Route path="/topfeeds">
              <TopFeeds />
            </Route>
            <Route path="/saved">
              <Saved 
                setBlogContent={ setBlogContent }
                savedFeeds={ savedFeeds } 
                setSavedFeeds= { setSavedFeeds }
                currentID={ currentID }
                setCurrentID={ setCurrentID }
                unsaveHandle={ unsaveHandle }
              />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// https://color.adobe.com/search?q=social%20media
