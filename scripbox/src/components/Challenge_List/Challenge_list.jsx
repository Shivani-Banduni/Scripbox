import React from 'react';
import "../Challenge_List/challenge.css"
const ChallengeList = () => {

const finaldata=JSON.parse(localStorage.getItem("employee_data")) 
console.log(finaldata);


const handleUpvote =()=>{

}
    return (
        <div className='Main_div'>

            {finaldata.map((e)=>{return <div className='challenge'><h2 style={{color:'white'}}><b> {e.title}</b> </h2><hr></hr>
            <p> <span className='description'>Description</span> - {e.description}</p>
            <b className='tag'>  <b>Tags</b> - {e.tags} </b> <hr></hr>
            <button onClick={handleUpvote} className='btn'>Upvote</button> 
            
            </div>})}
        </div>
    );
}

export default ChallengeList;

