import './App.css';
import { QuizList } from './pages/QuizList';
import { Home } from './pages/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/quiz" element={<QuizList/>}/>
    </Routes>
      
  );
}

export default App;
