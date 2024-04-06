// App.js
import React from 'react';
import './App.css'; // This imports the CSS from App.css
import LoginForm from './components/LoginForm'; // This imports the LoginForm component
import Navigation from './components/Navigation'; // This imports the Navigation component

// This is the main App component that will render our components on the screen
function App() {
  return (
    <div className="App">
      <Navigation /> {/* This renders the Navigation component */}
      <div className="form-container"> {/* This div will center the LoginForm */}
        <LoginForm /> {/* This renders the LoginForm component */}
      </div>
    </div>
  );
}

export default App; 