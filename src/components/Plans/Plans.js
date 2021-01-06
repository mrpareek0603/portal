import React from 'react'
import './Plans.css'
function Plans() {
    return (
        <div id="Plan">
            
            <div id="PlanWrapper">

                <div id="HeadingWrap">
                    <div id="HeadingContainer">
                        <h3>Plans</h3>
                        <hr style={{backgroundColor:"#121760", width:"15rem", marginBottom:"30px",height:"2.5px"}}></hr>
                    </div>
                </div>

                <div id="PlanContainer">

                    <div id="Plan1">
                        <div id="JeeWrapper">
                            <div id="JeeContainer">
                                <h4>JEE PACKAGE</h4>
                            </div>
                        </div>

                        <div id="PriceWrapper">
                            <div id="ThreeSubjects" className="PriceBox">
                                <div>
                                    <h6>PHY+CHEM+MATHS</h6>
                                    <h6>27,000/-</h6>
                                </div>
                            </div>
                            <div id="TwoSubjects" className="PriceBox">
                                <div>
                                    <h6>PHY+CHEM/ PHY+MATHS/ CHEM+MATHS</h6>
                                    <h6>18,000/-</h6>
                                </div>    
                            </div>
                            <div id="OneSubject" className="PriceBox">
                                <div>
                                    <h6>PHY/ CHEM/ MATHS</h6>
                                    <h6>10,000/-</h6>
                                </div>    
                            </div>


                        </div>
                    </div>

                    <div id="Plan2">
                        <div id="XIIWrapper">
                            <div id="XIIBoardContainer">
                                <h4>CBSE XII BOARD</h4>
                            </div>
                        </div>

                        <div id="PriceWrapper">
                            <div id="ThreeSubjects" className="PriceBox">
                                <div>
                                    <h6>PHY+CHEM+MATHS</h6>
                                    <h6>18,000/-</h6>
                                </div>
                            </div>
                            <div id="TwoSubjects" className="PriceBox">
                                <div>
                                    <h6>PHY+CHEM/ PHY+MATHS/ CHEM+MATHS</h6>
                                    <h6>10,000/-</h6>
                                </div>    
                            </div>
                            <div id="OneSubject" className="PriceBox">
                                <div>
                                    <h6>PHY/ CHEM/ MATHS</h6>
                                    <h6>7,000/-</h6>
                                </div>    
                            </div>


                        </div>
                    </div>

                    <div id="Plan3">
                        <div id="XWrapper">
                            <div id="XBoardContainer">
                                <h4>CBSE X BOARD</h4>
                            </div>
                        </div>

                        <div id="PriceWrapper">
                            <div id="ThreeSubjects" className="PriceBox">
                                <div>
                                    <h6>PHY+CHEM+MATHS</h6>
                                    <h6>18,000/-</h6>
                                </div>
                            </div>
                            <div id="TwoSubjects" className="PriceBox">
                                <div>
                                    <h6>PHY+CHEM/ PHY+MATHS/ CHEM+MATHS</h6>
                                    <h6>10,000/-</h6>
                                </div>    
                            </div>
                            <div id="OneSubject" className="PriceBox">
                                <div>
                                    <h6>PHY/ CHEM/ MATHS</h6>
                                    <h6>7,000/-</h6>
                                </div>    
                            </div>


                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}

export default Plans
