import TicketNum from "./TicketNum";
import "./Ticket.css";

export  default function Ticket({ticket}) {

    return (
      
        <div className="Ticket Tickets" >
              <p className="btm" >Ticket</p>
            
        {ticket.map((num, idx) => (
            <TicketNum num={num} key={idx}/>
        ))}
        </div> 
    )
}