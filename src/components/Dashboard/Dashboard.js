import React from 'react'
import './Dashboard.css';
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core';
import { Link,useHistory} from 'react-router-dom';

function FeeStructure() {

    const history=useHistory();
    const logOutHandler =()=>{
        localStorage.removeItem("id");
        
        alert('log out successful');
        history.push('/login');
    }

    return (

        

        <div id="Plans">
            
            <div id="Header">
            <Box  boxShadow={3} display="flex" flexDirection="row" justifyContent="space-between" p={1} >
              <Link to="/">
                <div><img width="120px" src="/logo.png" alt="Logo "/></div>
              </Link>

              <Link to="/">
                <div ><Button type="submit" onClick={logOutHandler} style={{borderRadius: "20px",
                background: "linear-gradient(to bottom right, #FFFFFF 1%, #e52929 50%)", color: "white", fontFamily:"arial"}} variant="contained" >Log Out</Button></div>
              </Link>

            </Box>
            </div>

            <div id="PlanContainer">
                <div id="pricesHeading">
                    <h2 style={{color:"#4b4f60",fontFamily:"Gilroy-Bold",marginBottom:"10px"}}>Pricing</h2>
                    <hr style={{backgroundColor:"#121760", width:"15rem", marginBottom:"30px",height:"2.5px"}}></hr>
                </div>

                <div id="planWrapper" className="planWrapper">

                    <Box id="planBox" /*style={{marginTop:"30px"}} */boxShadow={3}>

                        <div id="plan1Wrapper" >
                            <div id="plan1Container" >

                                <div id="numberOfSubjects">
                                    <div className="numberOfSubjects">One Subject</div>
                                    <h6 style={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>MATH/CHEM/PHY</h6>
                                </div>

                                <div id="price">
                                    <h4>10,000/-</h4> 
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


                                <div >
                                    <Button id="payButton" style={{marginBottom:"10px"}}>
                                        Subscribe
                                    </Button>
                                </div>

                            </div>
                        </div>

                    </Box>

                    <Box id="planBox" boxShadow={3}>

                    <div id="plan1Wrapper">
                        <div id="plan2Container" /*style={{width: "30vw",marginTop:"10px"}}*/>

                            <div id="numberOfSubjects">
                                <div  className="numberOfSubjects" >Three Subjects</div>
                                <div  >
                                <h5 >MATH+PHY+CHEM</h5>
                                </div>
                            </div>

                            <div id="price">
                                <h3 >27,000/-</h3>
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

                            <div >
                                <Button style={{backgroundColor:"#1F1B94",color:"white", marginBottom: "10px"}}id="payButton">
                                    Subscribe
                                </Button>
                            </div>

                        </div>
                    </div>
                    </Box>

                    <Box id="planBox" /*style={{marginTop:"30"}}*/ boxShadow={3}>

                        <div id="plan3Wrapper">
                            <div id="plan3Container">

                                
                                <div id="numberOfSubjects">
                                    <div className="numberOfSubjects">Two</div>
                                    <h6 >MATH+PHY/ MATH+CHEM/ CHEM+PHY</h6>
                                </div>
                                
                                <div id="price">
                                    <h4>18,000/-</h4>
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

                                <div >
                                    <Button id="payButton" style={{marginBottom:"10px"}}>
                                        Subscribe
                                    </Button>
                                    
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
