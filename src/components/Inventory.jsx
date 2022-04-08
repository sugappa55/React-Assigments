import { useState,useEffect} from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 1,
    notebooks: 3,
    pens: 4,
    inkpens:5
  });
  const [total,setTotal]=useState(inv.books+inv.notebooks+inv.pens+inv.inkpens)
    // Create add and remove functions here that changes the
    // state.
   
  const handleChange=(item,val)=>{
    if(inv[item]==0&&val<0)return 
    
    setInv({...inv,[item]:inv[item]+val})
    setTotal(total+val)
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>handleChange("books",1)}>+</button>
        <button className="circlularButton" onClick={()=>handleChange("books",-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>handleChange("notebooks",1)}>+</button>
        <button className="circlularButton" onClick={()=>handleChange("notebooks",-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handleChange("pens",1)}>+</button>
        <button className="circlularButton" onClick={()=>handleChange("pens",-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>handleChange("inkpens",1)}>+</button>
        <button className="circlularButton" onClick={()=>handleChange("inkpens",-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
            <div className="items">
              {total}
            </div>

    </div>
  );
};
