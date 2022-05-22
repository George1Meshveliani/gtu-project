import './App.css';
import Main from './Pages/Main';
import GenerateData from './Pages/GenerateData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBars from './Components/NavBars';
import EnrichData from './Pages/EnrichData';
import PredictDataPage from './Pages/PredictDataPage';

function App() {
  return (
    <div className='App'>
      <NavBars />
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/generate" element={<GenerateData/>}/>
          <Route exact path="/enrich" element={<EnrichData/>}/>
          <Route exact path="/predict" element={<PredictDataPage/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
