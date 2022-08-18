import './App.css';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Contact from './views/Contact';
import Projects from './views/Projects';
import ProjectsGames from './components/ProjectsGames';
import ProjectsApp from './components/ProjectsApps';
import ErrorPage from './views/ErrorPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/contact'} element={<Contact/>} />
        <Route path = {'/projects'} element={<Projects/>}>
          <Route path={'games'} element={<ProjectsGames/>} />
          <Route path={'apps'} element={<ProjectsApp />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
