import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogsScreen from './routes/BlogsScreen';
import MainScreen from './routes/MainScreen';
import NoMatchScreen from './routes/NoMatchScreen';
import ShowBlogScreen from './routes/ShowBlogScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen/>}></Route>
        <Route path="/blogs" element={<BlogsScreen/>}></Route>
        <Route path="/blogs/:blogId" element={<ShowBlogScreen/>}></Route>
        <Route path="*" element={<NoMatchScreen/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
