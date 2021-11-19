import "./menu.css";
import { useLocation, useParams } from "react-router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Foods from "./foods";
import Drinkus from "./drinks";


// const MENUS = gql`query ($menuId:Int!){
//     menus(menuId:$menuId){
//      item{
//          name
//      }
    
//    }
//    }`;

// const MENUSS = gql`
//   query {
//     items{  
//   name,
//   img,
//   price
  
// }
//   }
// `;


const Menus = () =>{
const {state} = useLocation();
const { detail, named } = state; 


    return (
        <div className="menuss">
                
        <h1 className="titlename">{named}</h1>
        
        <div class="menupage">
            
            <Foods detail={detail}/> 
            
            
            <Drinkus detail={detail}/> 
            

              
    </div>
    </div>
    );
}


export default Menus;