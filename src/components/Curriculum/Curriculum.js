import React from 'react';
import './Curriculum.css';
import Box from '@material-ui/core/Box';
function Curriculum() {
    return (
        <div id="CurriculumWrapper">

            <div id="CurriculumContainer">

                <div id="CurriculumHeading">
                    <div ><h2>Curriculum</h2></div>
                    <p className="CurriculumSubHeading">for Boards</p>
                    <hr style={{backgroundColor:"#121760", width:"15rem", height:"2.2px"}}></hr>
                </div>
                
                <div id="MathsCurriculum">
                    <h4>MATHS SYLLABUS</h4>
                </div>

                {/* <Box > */}
                    <div id="CurriculumBox">

                    {/* <Box  > */}
                        <div id="1" className="curriculumBoxes">
                            <h5>
                                Relation and functions
                            </h5>
                            <p>(6 classes)</p>
                        </div >
                        <div id="2" className="curriculumBoxes">
                            <h5>
                            Inverse circular functions
                            </h5>
                            <p>(6 classes)</p>
                        </div >
                        <div id="3" className="curriculumBoxes">
                            <h5>
                                Matrices
                            </h5>
                            <p>(8 classes)</p>
                        </div >
                        <div id="4" className="curriculumBoxes">
                            <h5>
                                Determinants
                            </h5>
                            <p>(8 classes)</p>
                        </div >
                        <div id="5" className="curriculumBoxes">
                            <h5>
                                Continuity and differentiabilty
                            </h5>
                            <p>(14 classes)</p>
                        </div >
                        <div id="6" className="curriculumBoxes">
                            <h5>
                                Applications of derivatives
                            </h5>
                            <p>(10 classes)</p>
                        </div >
                        <div id="7" className="curriculumBoxes">
                            <h5>
                                Integrals
                            </h5>
                            <p>(16 classes)</p>
                        </div >
                        <div id="8" className="curriculumBoxes">
                            <h5>
                                Applications of Integrals
                            </h5>
                            <p>(8 classes)</p>
                        </div >
                        <div id="9" className="curriculumBoxes">
                            <h5>
                                Differential equation
                            </h5>
                            <p>(8 classes)</p>
                        </div >
                        <div id="10" className="curriculumBoxes">
                            <h5>
                                Vectors,3D geometry
                            </h5>
                            <p>(19 classes)</p>
                        </div >
                        <div id="11" className="curriculumBoxes">
                            <h5>
                                L.P.P
                            </h5>
                            <p>(9 classes)</p>
                        </div >
                        <div id="12" className="curriculumBoxes">
                            <h5>
                                Probability
                            </h5>
                            <p>(14 classes)</p>
                        </div >
                    {/* </Box> */}

               
                    </div>
                {/* </Box> */}

            </div>
        </div>
    )
}

export default Curriculum
