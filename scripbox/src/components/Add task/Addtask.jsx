import React from 'react';
import { useState } from 'react';
import "../Add task/addtask.css"
const Addtask = () => {




    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Do something with the form data (e.g., send it to the server)
      console.log('Title:', title);
      console.log('Description:', description);
      console.log('Tags:', tags);
  
      // Reset the form fields after submission if needed
      setTitle('');
      setDescription('');
      setTags('');

  // Get existing data from localStorage
const existingData=localStorage.getItem(JSON.parse("employee_data"))
  // Create new data object
  const newData = {
    title: title,
    description: description,
    tags: tags
  };

  // Push new data into existing data array
  existingData.push(newData);

  // Save the updated array back to localStorage
  localStorage.setItem("employee_data", JSON.stringify(existingData));
  
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
