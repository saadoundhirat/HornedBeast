import React from 'react';
import Header from './ReactComponents/Header';
import Main from './ReactComponents/Main';
import Footer from './ReactComponents/Footer';

class App extends React.Component {
  render (){
    return (
      <>
          <Header />
          <Main />
          <Footer />
      </>
    );
  }

}
export default App;
