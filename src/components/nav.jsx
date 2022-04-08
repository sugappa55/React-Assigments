import { Button } from "./button"
import { Link } from "./links"
import { Logo } from "./logo"

export const Navbar=()=>{
    var links=["home","explore","about"]
    return <div style={{
        width:"100%",
        height:"4rem",
        backgroundColor:"black",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        color:"white"
    }}>
    <Logo/>
   <div style={{
       display:"flex",
       justifyContent:"space-evenly",
       width:"30%"
   }}>
  {links.map((e,i)=><Link text={e} key={i}/>)}

   </div>
<Button text={"Contact"}/>
    </div>
}