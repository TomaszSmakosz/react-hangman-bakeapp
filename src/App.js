import React from 'react'

import './App.css';

import Layout from "./hoc/Layout/Layout";
import HangmanContent from './containers/HangmanContent/HangmanContent';

function App() {
  return (
    <div className="App">
      <Layout>
          <HangmanContent/>
      </Layout>
    </div>
  );
}

export default App;
