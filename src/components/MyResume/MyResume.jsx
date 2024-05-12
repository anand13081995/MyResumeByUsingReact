import MyPic from './MyPic.jpg';
import { useState } from 'react';
import '../MyResume/style.css';

const MyResume = () => {

    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="resume-container">

            <div className="sidebar">
                <div>
                    <img src={MyPic} alt="MyPic" />
                    <h4>Anand Kumar Sahani</h4>
                    <span style={{display:'inline-block', width:'10vw', border:'2px solid white', textAlign:'center', borderRadius:'15px', backgroundColor:'rgb(33,88,104)', color:'white', marginTop:'10%', marginBottom:'10%'}}>Helllo World !</span>
                </div>

                <hr style={{marginTop:'8%', width:'12vw', backgroundColor:'rgb(33,88,104)', height:'0.3vh', border:'none', borderRadius:'15px'}} />

                <div>
                    <div style={{display:'flex', marginTop:'5%'}}>
                        <div style={{display:'flex', justifyContent:'space-around', flexDirection:'column', height:'35vh'}}>
                            <i style={{backgroundColor:'rgb(32,47,54)', border:'none', borderRadius:'15px', width:'3vw', height:'7vh', textAlign:'center', paddingTop:"25%"}}>&#8987;</i>
                            <i style={{backgroundColor:'rgb(32,47,54)', border:'none', borderRadius:'15px', width:'3vw', height:'7vh', textAlign:'center', paddingTop:"25%", color:'yellow'}}>&#9906;</i>
                            <i style={{backgroundColor:'rgb(32,47,54)', border:'none', borderRadius:'15px', width:'3vw', height:'7vh', textAlign:'center', paddingTop:"25%"}}><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="yellow"
                            >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg></i>
                        </div>
                        
                        <div style={{display:'flex', justifyContent:'space-around', flexDirection:'column', height:'35vh', marginLeft:'4%', width:'10vw'}}>
                            <div>
                                <p style={{color:'darkGrey'}}>AGE</p>
                                <p style={{color:'white'}}>28 years old</p>
                            </div>
                            <div>
                                <p style={{color:'darkGrey'}}>LOCATION</p>
                                <p style={{color:'white'}}>Bihar, India</p>
                            </div>
                            <div>
                                <p style={{color:'darkGrey'}}>PERSONALITY TYPE</p>
                                <p style={{color:'white'}}>INTJ-T</p>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'13vw', marginTop:'10%', marginBottom:'10%', display:'flex', justifyContent:'space-around'}}>
                        <a href="https://github.com/anand13081995"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="white" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.286-.012-1.042-.015-2.044-3.348.724-4.055-1.613-4.055-1.613-.547-1.387-1.336-1.757-1.336-1.757-1.094-.748.083-.732.083-.732 1.207.085 1.84 1.24 1.84 1.24 1.07 1.832 2.805 1.303 3.49.998.108-.775.42-1.303.763-1.603-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.302-.536-1.52.117-3.17 0 0 1.007-.322 3.3 1.23.96-.266 1.98-.398 3-.405 1.02.007 2.04.14 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.657 1.65.24 2.868.117 3.17.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.622-5.48 5.917.43.373.81 1.1.81 2.213 0 1.602-.015 2.888-.015 3.282 0 .32.192.694.8.575C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg></a>

                        <a href="https://www.linkedin.com/in/anand-sahani-64672b2a7/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path fill='white' d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg></a>

                        <a href="https://www.instagram.com/an_and_55_/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path fill='white' d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg></a>

                        <a href="https://x.com/anandsahani213?s=09"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
                            <path fill='white' d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg></a>
                    </div>
                </div>
            </div>

            <div className="about-container">
                <div style={{borderRadius:'15px'}}>
                    
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <h1 style={{color:'white', border:'none', width:'15vw', height:'12vh', display:'flex', alignItems:'flex-end', justifyContent:'center'}}>About Me</h1>
                        </div>
                        <div className="navbar">
                            <a style={{textDecoration:'none'}} href="#"><span style={{color:'Yellow'}}>About</span></a>
                            <a style={{textDecoration:'none'}} href="#"><span style={{color:'white'}}>Certificates</span></a>
                            <a style={{textDecoration:'none'}} href="#"><span style={{color:'white'}}>Projects</span></a>
                            <a style={{textDecoration:'none'}} href="#"><span style={{color:'white'}}>More</span></a>
                            <a style={{textDecoration:'none'}} href="#"><span style={{color:'white'}}>Contact</span></a>
                        </div>
                    </div>

                    <hr style={{width:'4vw', backgroundColor:'yellow', height:'1vh', border:'none', borderRadius:'15px', marginTop:'2%', marginLeft:'4.5%'}} />

                    <div className="about-content">
                        <div className="about-text">
                            <p style={{ maxHeight: showMore ? 'none' : '75px', overflow: 'hidden', color:'white'}}>&quot;Hello there! 👋 My name is Anand and I&rsquo;m from Bihar, India. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn&rsquo;t just a hobby, it&rsquo;s a key ingredient in every project I work on. <br /> <br />

                            Growing up bilingual, I developed a love for languages and I currently speak three of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client&rsquo;s identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly. <br /> <br />

                            In my free time, I enjoy exploring my other passions, such as photography and playing Guitar, which provide me with creative outlets. I am also very passionate about Web and everything related to E-commerce, and blockchain technology as I believe they have the potential to revolutionize business and online interactions. <br /> <br />

                            If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don&rsquo;t hesitate to reach out and let&rsquo;s start a conversation about your concept. I&rsquo;m excited to collaborate and help bring your ideas to life.&quot;</p>

                            {showMore ? (
                                <button className="show-button" onClick={toggleShowMore}>Show less...</button>
                            ) : (
                                <button className="show-button" onClick={toggleShowMore}>Show more...</button>
                            )}
                        </div>

                        <div className="focus-container">
                            <h2 className="focus-header">Primary Focus</h2>

                            <div style={{ display:'flex',justifyContent:'space-between'}}>

                                <div className="focus-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="white" d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM4 7v12h16V7H4z"/>
                                    </svg>
                                    <div>
                                        <h4 style={{color:'white', marginBottom:'4%'}}>Web Design & Development</h4>
                                        <p style={{color:'white'}}>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                                    </div>
                                </div>

                                <div className="focus-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="white" d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM4 7v12h16V7H4z"/>
                                    </svg>
                                    <div>
                                        <h4 style={{color:'white', marginBottom:'4%'}}>Full-Stack Solutions</h4>
                                        <p style={{color:'white'}}>Developing scalable web applications using HTML, CSS, JavaScript Frameworks (React)</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display:'flex',justifyContent:'space-between'}}>

                                <div className="focus-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="white" d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM4 7v12h16V7H4z"/>
                                    </svg>
                                    <div>
                                        <h4 style={{color:'white', marginBottom:'4%'}}>Mobile Apps & Games</h4>
                                        <p style={{color:'white'}}>mobile app icon Mobile Apps & Games Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
                                    </div>
                                </div>

                                <div className="focus-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="white" d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM4 7v12h16V7H4z"/>
                                    </svg>
                                    <div>
                                        <h4 style={{color:'white', marginBottom:'4%'}}>Digital Content Creation</h4>
                                        <p style={{color:'white'}}>Creating digital elements, such as 3D models, graphics, animations, videos and AI-generated content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyResume;
