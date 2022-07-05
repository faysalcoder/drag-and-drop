import React, { useState } from 'react';
import Timestamp from 'react-timestamp';
import useData from '../hooks/useData';

const Form = () => {

   const {uploadData}= useData()
 const [data, setdata] = useState({})

      const handleChange = e => {
            e.preventDefault()
            const field = e.target.name;
            const value = e.target.value;
            const time= new Date();
            const formattime = time.getDate() + `,` + time.getMonth()+ `,`+ time.getFullYear()

            setdata(prev => ({ ...prev, [field]: value, time: formattime }))
      }

      const handleSubmit = e => {
            e.preventDefault()
            uploadData(data);
           
      }
      
     
    return (
        <div>
                

                  <h1 className='text-lime-700 flex justify-center text-4xl'>Write Your Blog Here</h1>
                  <div className='flex justify-center'>
                        <form onSubmit={handleSubmit} className="w-4/5 lg:w-2/5 md:w-3/5">
                              <div className="flex flex-wrap -mx-3  mb-4">
                                    <div className="w-full px-3">
                                         
                                          <input
                                                onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='title' type="text" placeholder="Title" />
                                    </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        
                                          <textarea
                                                onChange={handleChange}
                                                cols="15" rows="4" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='desc' type="text" placeholder="Descrption" />
                                    </div>
                              </div>
                             

                              <div className="flex flex-wrap -mx-3  mb-4">
                                    <div className="w-full px-3">
                                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">Status</label>
                                          <select
                                                onChange={handleChange}
                                                className='py-3 px-4 mb-3 bg-gray-200 w-full' name="status" id="category">
                                                <option>Select One</option>
                                                <option value="completed">Open</option>
                                                <option value="inprogress">In-Progress</option>
                                                <option value="completed">Technology</option>
                                            
                                          </select>
                                    </div>
                              </div>

                             

                            
                              <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                   Submit
                              </button>
                        </form>
                  </div>


                  
            </div>
    );
};

export default Form;