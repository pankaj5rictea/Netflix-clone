import React from 'react'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from './components/Login';
import Banner from './components/Banner';
import List from './components/List';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <React.Fragment>
              <Header />
              <HomeBanner />
            </React.Fragment>
          } />
          <Route path='/login' element={
            <React.Fragment>
             <Header />
             <Login />
            </React.Fragment>
          } />
          <Route path='/register' element={
            <React.Fragment>
             <Header />
             <Login />
            </React.Fragment>
          } />
          <Route path='/dashboard' element={
            <React.Fragment>
            <Header />
            <Banner />
            <List title="Netflix Originals" param="originals" />
            <List title="Trending Now" param="trending" />
            <List title="Now Playing" param="now_playing" />
            <List title="popular" param="popular" />
            <List title="Top Rated" param="top_rated" />
            <List title="Upcoming" param="upcoming" />
            </React.Fragment>
          } />
          </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
