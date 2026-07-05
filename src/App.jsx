import React from 'react'
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer';
import Home from './Components/Page/Home/Home'
import TopHeader from './Components/Shared/Header/TopHeader';

const App = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <Header />
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App
