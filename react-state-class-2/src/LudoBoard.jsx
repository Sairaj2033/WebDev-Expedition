import { useState } from "react";

///----------------////

export default function LudoBoard() {

    let styles = {
        marginTop:'8rem',
      
    }
   
  
//////----


    let [moves,setMoves] = useState({blue:0, red:0, yellow:0, green:0});
    let [arr, SetArr] = useState(["no moves"]);
    let [count, setCount] = useState(0);



    let updateBlue = () => {
       // console.log(`moves.blue = ${moves.blue} `);
        // setMoves((prevMoves) => {
        //    return {...prevMoves, blue:prevMoves.blue +1 }
        //});

        arr.push("blue moves");
        SetArr(prevArr => { return [...prevArr,"blue moves"]}) ;
        console.log(arr);
    };



        let updateYellow = () => {
       // console.log(`moves.yellow = ${moves.yellow} `);
        setMoves((prevMoves) => {
           return {...prevMoves, yellow:prevMoves.yellow +1 }
        });
    };




    return (
        <div style={styles}>


            <p>Game Begins!</p>

             <p>{arr}</p>

            <div  className="board" >

            <p>Blue moves ={moves.blue} </p>
            <button  style={{ marginBottom:"2rem", backgroundColor:"blue"}} onClick={updateBlue} >+1</button>

            <p>Yellow moves ={moves.yellow} </p>
            <button style={{ marginBottom:"2rem", backgroundColor:"yellow", color:'black'}} onClick={updateYellow} >+1</button>

            <p>Green moves ={moves.green}  </p>
            <button style={{ marginBottom:"2rem", backgroundColor:"green"}}>+1</button>

            <p   >Red moves ={moves.red}  </p>
            <button style={{ marginBottom:"2rem", backgroundColor:"red"}}>+1</button>




            </div>


        </div>
    )
}