function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}


function handleMouseOver() {
    console.log("bye!")
}

function handleDblClick() {
    console.log("you Double clicked")
}


export default function Button() {
    return(
        <div>
        <button onClick={handleClick} >Click here</button>
        <p onMouseOver={handleMouseOver} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint illo quo perspiciatis molestias, quibusdam iste tempora, excepturi eius laborum ex impedit debitis.</p>
        <button onDoubleClick={handleDblClick} >Click here</button>
       
        </div> 
    );
    };
