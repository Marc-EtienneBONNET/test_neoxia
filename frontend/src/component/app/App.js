import Content from '../content/content'
import Footer from './../footer/footer'
import Header from './../header/header'
import { useState } from 'react'
import axios from 'axios';



function App() {
  let [page, mouvPage] = useState(1);

  return (
   <div className=''>
      <Header mouvPage={mouvPage}/>
      <Content page={page}/>
      <Footer/>
   </div>
  );
}

export default App;
