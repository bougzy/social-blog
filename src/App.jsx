
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './pages/Blog';
import Post from "./posts/Post"
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
    <Router> 
        <div>
          <Navbar />
          <div className="container mt-4">
            <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/blog' element={<Blog/>} />
              <Route path="/blog/:id" element={ <Post />}/>
            </Routes>
          </div>
        </div>
        </Router>
    </ThemeProvider>
  );
};

export default App;
