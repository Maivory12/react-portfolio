import React from 'react';
import coverImage from "../../assets/cover/avatar.jpg";


function About() {
 return (
<section className="my-5">
 <h1 id="about">Marques Ivory</h1>
 <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
 <p>I am passionate about technology and constantly seeking new challenges. 
    I love collaborating with others, video games, and sports. 
    In my free time, I enjoy walking watching movies, cooking, and going on walks in nature
          </p>
</section>

 );
}
export default About;