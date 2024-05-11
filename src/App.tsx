import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from 'components/Layout/Layout';
import GlobalStyles from 'styles/GlobalStyles';

import About from 'pages/About/About';
import Home from 'pages/Home/Home';
import Users from 'pages/Users/Users';
import Clients from 'pages/Clients/Clients';
import Facebook from 'pages/Clients/components/Facebook/Facebook';
import Instagram from 'pages/Clients/components/Instagram/Instargram';
import LinkedIn from 'pages/Clients/components/LinkedIn/LinkedIn';

// Lessons
// import Lesson06 from 'lessons/Lesson06/Lesson06';
// import Lesson07 from 'lessons/Lesson07/Lesson07';
// import Lesson08 from 'lessons/Lesson08/Lesson08';
// import Lesson09 from 'lessons/Lesson09/Lesson09';
// import Lesson10 from 'lessons/Lesson10/Lesson10';
// import Lesson11 from 'lessons/Lesson11/Lesson11';
// import Lesson12 from 'lessons/Lesson12/Lesson12';
// import Consultation05 from 'consultation/Consultation';

//Homeworks
// import Homework07 from 'homeworks/Homework07/Homework07';
// import Homework08 from 'homeworks/Homework08/Homework08';
// import Homework09 from 'homeworks/Homework09/Homework09';
// import Homework11 from 'homeworks/Homework11/Homework11';



//Consultation

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/clients' element={<Clients />}/>
          <Route path='/clients/facebook' element={<Facebook />}/>
          <Route path='/clients/instagram' element={<Instagram />}/>
          <Route path='/clients/linkedin' element={<LinkedIn />}/>
          <Route path='*' element='Page Not Found'/>
        </Routes>        

      </Layout>
       {/* <Lesson06 /> */}
       {/* <Lesson07 /> */}
       {/* <Homework07 /> */}
       {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* <Lesson09 /> */}
      {/* <Homework09 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11 /> */}
      {/* <Homework11 /> */}
      {/* <Lesson12 /> */}
      {/* <Consultation05 /> */}</BrowserRouter>
    
    </>
    );
}

export default App;
