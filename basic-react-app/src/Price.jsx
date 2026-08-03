export default function price({oldPrice, newPrice}) {
  let OLDstyles = {
    textDecorationLine:"line-through",
    color:'grey',
  };
   let NEWstyles = {
    fontWeight: "800",
    color:'black',
   }

   let styles = {
     backgroundColor:'#e0c367',
     height:'30px',
     width:'auto',
     borderBottomLeftRadius:"14px",
     borderBottomRightRadius:"14px",

   }

    return (
        <div style={styles}>
            <span style={OLDstyles}>{oldPrice}</span>
            &nbsp; &nbsp;&nbsp;     
            
            <span style={NEWstyles}>{newPrice}</span>
        </div>
    )
}