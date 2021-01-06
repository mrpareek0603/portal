import React from 'react'
import './FeeStructure.css';
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core';
import { Link} from 'react-router-dom';

function FeeStructure() {
    return (
        
        <div id="Plans">
            
            <div>
                <div id="pricesHeading">
                    <h2 style={{color:"#4b4f60",fontFamily:"Gilroy-Bold",marginBottom:"10px"}}>Pricing</h2>
                    <hr style={{backgroundColor:"#121760", width:"15rem", marginBottom:"30px",height:"2.5px"}}></hr>
                </div>

                <div id="4" className="planWrapper">

                    <Box id="planContainer" style={{marginTop:"30px"}} boxShadow={3}>

                    <div >
                        <div id="a" >

                            <div id="numberOfSubjects">
                                <div className="numberOfSubjects">One Subject</div>
                                <h6 style={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>MATH/CHEM/PHY</h6>
                            </div>

                            <div id="price">
                                <h4>7,000/-</h4> 
                            </div>

                            <div className="content">
                                <h6>Topic-wise videos Lectures</h6>
                                
                                <h6>Topic wise Assessments</h6>
                                <h6>Doubt Resolution Support</h6>
                                <h6>Revision test will be
                                held on each sunday.</h6>
                                <h6>Cumulative test on every 15 days</h6>
                                <h6>Complete Topic Analysis</h6>
                            </div>


                            <div ><Link to="/login">
                                <Button id="payButton">
                                    Subscribe
                                </Button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    </Box>

                    <Box id="planContainer" boxShadow={3}>

                    <div >
                        <div id="a" style={{width: "30vw",marginTop:"10px"}}>

                            <div id="numberOfSubjects">
                                <div  className="numberOfSubjects" >Three Subjects</div>
                                <div  >
                                <h5 >MATH+PHY+CHEM</h5>
                                </div>
                            </div>

                            <div id="price">
                                <h3 >18,000/-</h3>
                            </div>

                            <div className="content">
                                <h6>Topic-wise videos</h6>
                                <h6>Topic wise Assessments</h6>
                                <h6>Doubt Resolution Support</h6>
                                <h6>Revision test will be
                                held on each sunday.</h6>
                                <h6>Cumulative test on every 15 days</h6>
                                <h6>Complete Topic Analysis</h6>
                            </div>

                            <div ><Link to="/login">
                                <Button style={{backgroundColor:"#1F1B94",fontSize:"20px",color:"white"}}id="payButton">
                                    Subscribe
                                </Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    </Box>

                    <Box id="planContainer" style={{marginTop:"30px"}} boxShadow={3}>

                    <div >
                        <div id="a">

                            
                            <div id="numberOfSubjects">
                                <div className="numberOfSubjects">Two</div>
                                <h6 >MATH+PHY/ MATH+CHEM/ CHEM+PHY</h6>
                            </div>
                            
                            <div id="price">
                                <h4>13,000/-</h4>
                            </div>
                            
                            <div className="content">
                                <h6>Topic-wise videos</h6>
                                <h6>Topic wise Assessments</h6>
                                <h6>Doubt Resolution Support</h6>
                                <h6>Revision test will be
                                held on each sunday.</h6>
                                <h6>Cumulative test on every 15 days</h6>
                                <h6>Complete Topic Analysis</h6>
                            </div>

                            <div ><Link to="/login">
                                <Button id="payButton" style={{marginBottom:"10%"}}>
                                    Subscribe
                                </Button>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                    </Box>

                </div>


            </div>
            <hr style={{width:"1px"}}></hr>
        </div>
    )
}

export default FeeStructure
