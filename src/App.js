import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Global from './theme/global';
import Content from './components/content'

function App() {
  return (
    <React.Fragment>
      <Global/>
      <Header/>
      <Content/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
