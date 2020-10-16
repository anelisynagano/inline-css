import React from 'react';

function App() {
  return (
    //using inline CSS, remove the bullet points from the list items and have them side-by-side
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Inline CSS!</h1>
      <p>This is an example of inline CSS</p>
    </div>
  );
}

export default App;
