import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage'

function App() {
  return (
    <div className="container">
      {/* <p>Hi from App.tsx</p> */}
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
