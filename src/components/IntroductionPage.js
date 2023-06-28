import React from 'react';
import './IntroductionPage.css'; // Import the CSS file

const IntroductionPage = () => {


  const gotolink =(link)=>
  {
      window.open(link ,'_blank')
  }
  return (
    <section className="container" id='introduction'>
      <h1>Welcome to My Website</h1>
      <div className="intro">
        <p>Hello, I'm Kartik Yadav,</p>
        <p>a student at IIT Ropar pursuing my B.Tech in Computer Science.</p>
        <p>I'm passionate about Web development</p>
        <p>On this website, you'll find information about my projects, achievements, and skills.</p>
      </div>
      <div className="image-box"></div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>Email :  2021csb1101@iitrpr.ac.in</li>   
          <li onClick={()=>gotolink('https://www.linkedin.com/in/kartik-yadav-432289244')}>LinkedIn : Kartik Yadav</li>
          <li onClick={()=>gotolink('https://github.com/Kartik150704')}>Github : kartikyadav1507</li>
        </ul>
      </div>
    </section>
  );
};

export default IntroductionPage;
