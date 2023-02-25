import React from 'react';
import eman from "./imgs/me.jpg";





function About() {
  return (

    <div>
      <h1>About Page</h1>




      <div>
        <img src={eman} alt="Your" style={{
          width: '250px', height: '360px',
          display: 'block', marginLeft: 'auto',
          marginRight: 'auto'
        }} />
      </div>




      <p>Immanuel Williams is a mathematics and statistics expert with a passion for data science and computer science. He earned his Bachelor's degree in Mathematics from UMBC in 2011, followed by a Master's in Statistics and a PhD in Psychometrics. He has taught at CSU Monterey Bay, UC Santa Cruz, and Cal Poly San Luis Obispo.</p>

      <p>He is the founder of GATO365 Learning Center, an educational company dedicated to creating learning experiences in data science, statistics, mathematics, and computer science. He also consults for many companies and research institutions, helping them to make sense of data and develop predictive models.</p>

      <p>As a public speaker, Immanuel has spoken at multiple conferences and universities, and is an advocate for diversity in STEM. He encourages students from all backgrounds to pursue their dreams and goals.</p>

    </div>
  );
}

export default About;

