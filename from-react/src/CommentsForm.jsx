import {useState} from "react";
export default function CommentsForm() {

let [formData, setFromData] = useState({
    username:"",
    remarks :"",
    rating: 5
});


let handleInputChange = (event) => {
    setFromData((currData) => {
          return{ ...currData, [event.target.name]: event.target.value };
    });
 };

 let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
 }

return ( 
    <div>
        <h4>Give a Comment!</h4>
        <br />
        <form onSubmit={handleSubmit} action="">
             <label htmlFor="username">Username</label>
             <input name="username"
                id="username"
                onChange={handleInputChange}
                placeholder="username"
                type="text" 
                value={formData.username} />
             <br /> <br />
             
             <label htmlFor="remarks">Remarks</label>
             <textarea 
                onChange={handleInputChange}
                value={formData.remarks} 
                placeholder="add few remarks" 
                name="remarks" 
                id="remarks">Remarks</textarea>
             <br /><br />

             <label htmlFor="rating">Rating</label>
              <input id="rating" 
              onChange={handleInputChange} 
              value={formData.rating}  
              placeholder="rating"
              type="number" 
              min={1} 
              max={5}
              name="rating"/>
             <br /><br />
             <button>Add Comment </button>
             
        </form>
    </div>
  );
}

