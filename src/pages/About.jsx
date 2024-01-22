import pfp from '../assets/images/pfp.jpg'

export default function About() {
  return (
    <card>
      <h1>About me</h1>
      <div className="about">
        <div>
          <img className="avatar" src={pfp} alt="me"></img>
        </div>
        <p className='about-me'>Hello there, but I digress. My name is Nataniel. 
          I am a graduate of the Texas A&M Mechanical Engineering program. 
          I currently work in the semiconductor industry as a field service engineer and I am looking 
          to expand my repertoire of programming and coding skills.
          <br></br><br></br>
          Under the "Portfolio" page you will find some of the coding projects I have created
          during my coding learning experience at the University of Texas at Austin Full Stack
          Web Development Bootcamp.
          <br></br><br></br>
          Feel free to contact me through my contact page.
        </p>
      </div>
    </card>
  );
}