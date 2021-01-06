import React from 'react'
import './MentorInfo.css';
function MentorInfo() {
    return (
        <div id="Mentors">
            <div id="MentorInfoContainer">

                {/* heading */}
                <div id="MentorInfoHeading" style={{color:"#4B4F60",fontSize:"20px",fontFamily:"Gilroy-Bold",marginBottom:"auto"}}>
                    <h3 >Industry Experienced Mentors</h3>
                    <hr style={{backgroundColor:"#121760", width:"22rem", height:"2.7px"}}></hr>
                </div>

                {/* mentor card */}
                <div id="MentorCard">

                    {/* mentor 1 */}
                    <div id="Mentor1">
                        
                        {/* mentor pic */}
                        <div id="Mentor1Image" /*className="Mentor1Image"*/>
                            <img className="MentorImage" width="100px" src="./logo.png" ></img>
                        </div>
                        {/* mentor description */}
                        <div id="Mentor1Name&Info">
                            <h3 className="MentorName">Pradeep Karmakar</h3>
                            <p className="MentorInfo" >Mr. Pradeep has an experience of 13 yeaars of teaching 10,000+ students for their JEE Mains, JEE Advance and XII Board Examination. 
                            <br></br>
                            <br></br>
                            He is a Bsc.( phy hon. + maths)graduate from RU and holds a PGD in Engineering from NIFFT and has worked at Birla Institute and STC(Nagpur) as an IIT JEE/Engineering/10+2 maths faculty.
                                <br></br>
                                <br></br>
                            He has in-depth knowledge of Mathematics. Many of his students are in IIT Delhi, IIT Bombay, IIT Madras, IIT Kanpur and in India's top Engineering institutes.
                            </p>
                        </div>
                    
                    </div>

                    {/* mentor 2 */}
                    <div id="Mentor2">
                        
                    <div id="Mentor2Image" className="Mentor1Image">
                            <img className="Mentor1Image" width="100px" src="./Sohan Chaudhary.jpeg" ></img>
                        </div>
                        {/* mentor description */}
                        <div id="Mentor1Name&Info">
                            <h3 className="MentorName">Sohan Chaudhary</h3>
                            <p className="MentorInfo" >Mr. Sohan is a Chemistry Wizard and helpig students from past 10 years to crack India's toughest entrance examinations.
                            <br></br>
                            <br></br>
                            {/* He is a Bsc.( phy hon. + maths)graduate from RU and holds a PGD in Engineering from NIFFT and has worked at Birla Institute and STC(Nagpur) as an IIT JEE/Engineering/10+2 maths faculty. */}
                                {/* <br></br>
                                <br></br> */}
                            He has in-depth knowledge of Chemistry, and is reflected in his teachings, and his way of explaiing even the toughest concepts to the students, is something which helps his students scoring best in the exams.
                            </p>
                        </div>
                    
                    </div>


                </div>
            
            </div>
        </div>
    )
}

export default MentorInfo
