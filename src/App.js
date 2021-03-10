import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import RouterComponent from "./components/common/RouterComponent";
function App() {
  return (
      <Router>
        <RouterComponent />
      </Router>
  );
}

export default App;