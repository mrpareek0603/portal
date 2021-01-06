import React from 'react'
import Box from '@material-ui/core/Box';
import './Features.css';

function Features() {
    return (
        
        // features div
        <div id="Features">
            {/* feature 2 */}
            <div>

                {/* 2 feautures */}

                    {/* Features heading DIV */}
                    <div id="FeaturesHeading" style={{marginBottom:"20px"}}>
                        <h2 >Features</h2>
                        <hr style={{backgroundColor:"#121760", width:"15rem", height:"2.5px"}}></hr>
                    </div>
            
                    {/* features container DIV */}

                    <Box>
                       
                       <div className="featureContainer" style={{marginRight:"10px"}}>

                            {/* 1st container DIV */}
                            <div className="feature">

                                <div className="img1" style={{padding:"2px"}} >

                                    <img width="100px" height="100px" src="./click.png" alt=""></img>

                                </div>
                                <p style={{width:"100px",fontFamily:"Gilroy-Bold",fontSize:"1rem"}}>Learn Ontime, Anywhere at your own convenience.</p>
                            </div>
                        
                            {/* 2nd container DIV */}
                            <div className="feature">

                                <div  className="img2" style={{padding:"2px",paddingLeft:"3px"}}>
                                    <img width="100px"  height="100px" src="./examtest.png"  alt=""></img>
                                </div>
                                <p style={{width:"100px", fontSize:"1rem",fontFamily:"Gilroy-Bold"}}>Defined Exam Relevant Curriculum.</p>
                            </div>

                            {/* 3rd container DIV */}
                            <div className="feature">

                                <div className="img3" style={{ padding:"2px"}}>
                                    <img width="100px" height="100px" src="./hat.png" alt=""></img>
                                </div>
                                <p style={{width:"100px",fontFamily:"Gilroy-Bold",fontSize:"1rem"}}>Delivered by Experienced Teachers from IITs & Pre Experienced only.</p>
                            </div>
                            
                            {/* 4th container DIV */}
                            <div className="feature">

                                <div className="img4" >
                                    <img width="100px" height="100px" src="./team.png" alt=""></img>
                                </div>
                                    <p style={{width:"100px",fontFamily:"Gilroy-Bold",marginRight:"5px",fontSize:"1rem"}}>Experience rated 4.9/5 by past 1000+ students.</p>
                            </div>

                        </div>
                    </Box>

                {/* 2 */}
            
            </div>
        </div>
    )
}

export default Features
