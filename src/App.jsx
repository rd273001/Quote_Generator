import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import store from './store/configure';
import Layout from './components/Layout';

const App = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='/bookmarks' element={ <Bookmarks /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;