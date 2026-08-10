import "./App.css";
import Lottery from "./Lottery";
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";
import { sum } from "./helper";

function App() {

      let winCondition = (ticket) => {
       return ticket[0] === 0 ; 
      }

  return (
    <>
    {/* <Ticket ticket={[0,1,2]}></Ticket>
    <Ticket ticket={[5,6,7,8]}></Ticket> */}
   
   <Lottery n={3}  winCondition={winCondition} ></Lottery>
   </>
  )
  
}

export default App;
