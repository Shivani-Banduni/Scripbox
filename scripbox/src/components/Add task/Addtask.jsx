import React from 'react';
import { useState } from 'react';
import "../Add task/addtask.css";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
const Addtask = () => {
    const Id = uuidv4();
    const navigate=useNavigate();


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
  
      // Reset the form fields after submission if needed
      setTitle('');
      setDescription('');
      setTags('');

  // Get existing data from localStorage
const existingData=JSON.parse(localStorage.getItem("employee_data")) || []
  // Create new data object
  const newData = {
      id:Id,
      data:Date.now(),
      upvote:0,
    title: title,
    description: description,
    tags: tags
  };

  // Push new data into existing data array
  existingData.push({...newData});
localStorage.setItem("employee_data",JSON.stringify(existingData))
  // Save the updated array back to localStorage
  console.log(newData)

  navigate("/challengelist")

    };



    return (
        <div className='employee_main_div'><br></br>
           <h2>Create a New Entry</h2><br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags (comma-separated)"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
        </div>
    );
}

export default Addtask;
