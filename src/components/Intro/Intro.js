import React from 'react'

function Intro() {
    return (

        <div  style={{ display:"flex", justifyContent:"space-between"}} >

            <div style={{ display:"flex",width:"100vw"}}>

                
            
                {/* text div */}
                <div style={{width:"100%"}}>
                <div  style={{ fontFamily:"Gilroy-Bold", fontSize: "2vw",color:"#4B51B4"}}><h1>JEE Cracker</h1>
                </div>
                        
                        
                <div style={{color:"#4B4F60",fontSize: "1.6vw"}}><h2>Crack the JEE Exam and get admission  in India's top engineering colleges</h2> 
                </div>
                        
                <div style={{color: "#4b4f60",
                    fontFamily: "Gilroy-Medium",
                    fontSize: "1.5vw"}}><h3>Our Past Students have cracked the India's toughest engineering entrance exam.</h3></div>
                        
                
                </div>

                {/* image div */}
                <div style={{marginTop:"10px",width:"100%"}}><img  width="60%" height="100%"src="/introImage.png" alt="" /></div>

            </div>
        </div>
        
        
    )
}

export default Intro
