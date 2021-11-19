import "./menu.css";
import { useLocation, useParams } from "react-router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";


const FOODMENUS = gql`query ($menuId:Int!){
    menus(menuId:$menuId){
     item{
         name,
         price
     }
    
   }
   }`;

const Foods = ({detail}) =>{

const {data, loading, error} = useQuery(FOODMENUS,{
    variables:{
        menuId:detail
    }
});
if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
    return (
        <div className="foodpage">
            <h1 className="category">Foods</h1>
       <div className="foodname">
           {
                       
     data.menus.map(rest =><div class="coll" key={rest.item.name} className="fooditem">
                  
     < h1 className="namefood">{rest.item.name}</h1>
     <h1 className="foodprice">price: {rest.item.price}$</h1>
     
 </div>

)  
           }
       </div>        
   </div>
    );
}


export default Foods;