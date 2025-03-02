import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [inputData, setInputData] = useState('');
  const [inputGroup, setInputGroup] = useState('');
  const [inputDistrict , setDistrict ] =useState('');

  // Handle change in input field
  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  const handlChange = (e) => {
    setInputGroup(e.target.value);
  };
  const city = (e) =>{
    setDistrict(e.target.value);
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend using Axios
      const response = await axios.post('http://localhost:3000/api/data', {
        input: inputData,
        group: inputGroup,
        District : inputDistrict
        
      });

      // Handle the response from the backend
      if (response.status === 200) {
        console.log('Response from backend:', response.data);
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
  
    <>
   
  {/* ***************************************************************************** */}
 
  <div>
   <form  onSubmit={handleSubmit} >
<h1 id="forminbutton" className="formbood bg-neutral text-white ">Blood Donation Registration Form</h1>
<div className=" grid grid-cols-2 bg-neutral   ">
  
    <label className="form-control w-full max-w-xs ">
    <div className="label ">
    <span className="label-text  text-white" >Donor's Name</span>
    </div>
    <input
          type="text"
          value={inputData}
          onChange={handleChange} required
          placeholder="Enter your name" className='input input-bordered input-accent w-full max-w-xs bg-neutral  text-yellow-100'
        />
  </label>
  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text  text-white" > Date of Birth</span>
    </div>
    <input type="date" required placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs bg-neutral  text-yellow-100" />
  </label>
  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">Age</span>
  </div>
  <input type="number" required placeholder="Age" className="input input-bordered input-accent w-full max-w-xs bg-neutral text-yellow-100" />
  </label>
  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">Gender</span>
  
  </div>
  <div className="form-control">
  <label className="label cursor-pointer ">
    <span className="label-text text-white ">Male</span>
    <input type="radio" name="radio-10" className="radio checked:bg-red-500 border-gray-300 " defaultChecked />
    <span className="label-text text-white">Female</span>
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500 border-gray-300" defaultChecked />
  </label> 
 </div> 
</label>

<label className="form-control w-full max-w-xs ">
   <div className="label">
    <span className="label-text text-white">Mobile No.</span>
  </div>
  <input type="number"  placeholder="Please Write Your Valid Mobile No" className="input input-bordered input-accent w-full max-w-xs bg-neutral text-yellow-100" />
  </label>

  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">Phone No.</span>
  </div>
  <input type="number" required placeholder="Please Write Your Valid Phone No." className="input input-bordered input-accent w-full max-w-xs bg-neutral text-yellow-100" />
  </label>
  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">Id Proof</span>
  </div>
  <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs bg-neutral text-slate-400" />
  </label>

  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">Your Blood Group</span>
  </div>
  <select required value={inputGroup} onChange={handlChange} className="select select-accent w-full max-w-xs bg-neutral text-yellow-100">
  <option disabled selected>--select--</option>
  <option>A+</option>
  <option>A-</option>
  <option>B+</option>
  <option>B-</option>
  <option>AB+</option>
  <option>AB-</option>
  <option>O+</option>
  <option>O-</option>
  <option>Unknow</option>
</select>
  </label>
  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">Do You know your Weight?</span>
  </div>
  <select className="select select-accent w-full max-w-xs bg-neutral text-yellow-100">
  <option disabled selected>--select--</option>
  <option>20-to-30(kg)</option>
  <option>30-to-40(kg)</option>
  <option>40-to-50(kg)</option>
  <option>60-to-70(kg)</option>
  <option>80-to-90(kg)</option>
  <option>90+ (kg)</option>
  <option>Unknow</option>
</select>
  </label>
  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">States</span>
  </div>
  <select className="select select-accent w-full max-w-xs bg-neutral text-yellow-100">
  <option disabled selected >--select--</option>
<option disabled >Andhra Pradesh</option>
<option disabled >Arunachal Pradesh</option>
<option disabled >Assam</option>
<option disabled >Bihar</option>
<option disabled >Chhattisgarh</option>
<option disabled >Goa</option>
<option disabled >Gujarat</option>
<option disabled >Haryana</option>
<option disabled >Himachal Pradesh</option>
<option disabled >Jharkhand</option>
<option disabled >Karnataka</option>
<option disabled >Kerala</option>
<option disabled >Maharashtra</option>
<option >Madhya Pradesh</option>
<option disabled >Manipur</option>
<option disabled >Meghalaya</option>
<option disabled >Mizoram</option>
<option disabled >Nagaland</option>
<option disabled >Odisha</option>
<option disabled >Punjab</option>
<option disabled >Rajasthan</option>
<option disabled >Sikkim</option>
<option disabled >Tamil Nadu</option>
<option disabled >Tripura</option>
<option disabled >Telangana</option>
<option disabled >Uttar Pradesh</option>
<option disabled >Uttarakhand</option>
<option disabled >West Bengal</option>
<option disabled >Andaman & Nicobar (UT)</option>
<option disabled >Chandigarh (UT)</option>
<option disabled >Dadra & Nagar Haveli and Daman & Diu (UT)</option>
<option disabled >Delhi [National Capital Territory (NCT)]</option>
<option disabled >Jammu & Kashmir (UT)</option>
<option disabled >Ladakh (UT)</option>
<option disabled >Lakshadweep (UT)</option>
<option disabled >Puducherry (UT)</option>
</select>
  </label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-white">District</span>
  </div>
  <select
    required
    value={inputDistrict} // Controlled component
    onChange={city}       // Make sure this function is updating state correctly
    className="select select-accent w-full max-w-xs bg-neutral text-slate-400"
  >
    <option value="" disabled>--select--</option> {/* Default option */}
    <option value="Agar">Agar</option>
    <option value="Alirajpur">Alirajpur</option>
    <option value="Anuppur">Anuppur</option>
    <option value="Ashoknagar">Ashoknagar</option>
    <option value="Balaghat">Balaghat</option>
    <option value="Barwani">Barwani</option>
    <option value="Betul">Betul</option>
    <option value="Bhind">Bhind</option>
    <option value="Bhopal">Bhopal</option>
    <option value="Burhanpur">Burhanpur</option>
    <option value="Chhatarpur">Chhatarpur</option>
    <option value="Chhindwara">Chhindwara</option>
    <option value="Damoh">Damoh</option>
    <option value="Datia">Datia</option>
    <option value="Dewas">Dewas</option>
    <option value="Dhar">Dhar</option>
    <option value="Dindori">Dindori</option>
    <option value="Guna">Guna</option>
    <option value="Gwalior">Gwalior</option>
    <option value="Harda">Harda</option>
    <option value="Indore">Indore</option>
    <option value="Jabalpur">Jabalpur</option>
    <option value="Ujjain">Ujjain</option>
  </select>
</label>
  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">Address</span>
  </div>
  <textarea required className="textarea textarea-accent bg-neutral text-yellow-100" placeholder="Address"></textarea>
  </label>
 <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">Pin Code</span>
  </div>
  <input
  type="number" placeholder="Pin Code" className="input input-bordered input-accent w-full max-w-xs bg-neutral text-yellow-100" />
  </label>
  <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text text-white">Address</span>
  </div>
  <label className="input input-bordered flex items-center gap-2 input-accent bg-neutral text-yellow-100 ">
  Email:=
  <input type="text" className="grow text-yellow-100" placeholder="hit@gmail.com" />
</label>
</label>
  </div>
  <button className="btn btn-block btn-active btn-outline btn-secondary" type="submit">Submit</button>
  </form> </div>
   </>
    
  );
}

export default Form;

