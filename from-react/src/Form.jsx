import { useState } from "react"  ;


export default function Form() {

  let[formData, setFormData] = useState ({
    fullName:"",
    username:""
  })

    // let handleNameChange = (event) => {
    //  setFullName(event.target.value);
    // }

    //  let handleUsername = (event) => {
    //  setUsername(event.target.value);
    // }
 let handleInputChange = (event) => {
    let fieldName = event.target.name;
    console.log(fieldName); 
}

return (
<form>
    <label htmlFor="fullName" > Full Name </label>
    <input type="text" 
    placeholder="enter full name "  
    value={formData.fullName} 
    onChange={handleNameChange} 
    id="fullName"
    name="fullName" />
   
 <br /><br />
     <label htmlFor="username" >  Username </label>
    <input type="text"
     placeholder="enter full name " 
     value={formData.username} 
     onChange={handleUsername} 
     id="username " 
     name="fullName"/>
    <br />
    <button>Submit</button>

</form>
);
}