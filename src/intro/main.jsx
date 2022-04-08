import { H1 } from "./H1";
import { Li } from "./Li";


export const Main=()=>{

    var os=["android","iphone","blackberry","windows"];
    var mobiles=["redmi","nokia","samsung","LV"];

    return <div>
        <H1 item={"Mobile Operating Systems"}/>
        <Componets arr={os}/>
        <H1 item="Mobile Manufactures"/>
        <Componets arr={mobiles}/>
    </div>
}

const Componets=({arr})=>{

    return<>
       { arr.map((e,i)=><Li key={i} item={e}/>)}</>
}