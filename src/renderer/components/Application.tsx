import React, { useEffect, useState } from 'react';
import './Application.scss';

const Application: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme == 1) {
      setDarkTheme(true);
    } else if (useDarkTheme == 0) {
      setDarkTheme(false);
    }

  }, []);

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  /**
   * Toggle Theme
   */
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  function handlePrintClick() {
    const fileInput: HTMLInputElement | null = document.getElementById("file-selector") as HTMLInputElement;
    if (!fileInput) {
      alert("Please select a file to print.");
      return;
    }
    if (fileInput.files.length === 0) {
      alert("Please select a file to print.");
      return;
    }
    const filePath = fileInput.files[0].path;
  
    // Send a POST request to the server endpoint
    fetch('my-app://run-script', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filePath }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => {
      console.error('Error sending request:', error);
    });
  }

  return (
    <div id='erwt'>
      <div className='header'>
        <div className='main-heading'>
          <h1 className='themed'>3D Printing Electron App</h1>
        </div>
      </div>

      <div className='footer'>
        <div className='center'>
        <input type="file" id="file-selector" />
        <button id="print-button" onClick={handlePrintClick}>Print</button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button onClick={toggleTheme}>
            {darkTheme ? 'Light Theme' : 'Dark Theme'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
