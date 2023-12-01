import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const[bookmarks, setBookmarks] = useState([]);
  const[readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead =(id, time) =>{
    const newReadingTime =readingTime + time;
    setReadingTime(newReadingTime);

    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);
    
  }
  const handleAddToBookMark = blog =>{
    const newBookmarks =[...bookmarks, blog]
    setBookmarks(newBookmarks);

   
  }

  return (
    <div className='App'>
    <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </div>
     
     
    
  );
}

export default App;

