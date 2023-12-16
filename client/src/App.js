import { BrowserRouter as Router, Route } from 'react-router-dom';
import publicRoute from "./routes/publicRoute";


function App() {
  return (
    <Router>
    
      <Route component={publicRoute} />
  
     
     
    </Router>
  );
}

export default App;

