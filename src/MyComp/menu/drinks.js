import "./menu.css";
import { useLocation, useParams } from "react-router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";


const DRINKMENUS = gql`query ($menuId:Int!){
    drinkus(menuId:$menuId){
     item{
         name,
         price
     }
    
   }
   }`;

const Drinkus = ({detail}) =>{

const {data, loading, error} = useQuery(DRINKMENUS,{
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
             <h1 className="category">Drinks</h1>
        <div className="foodname drink">
        {
                    
  data.drinkus.map(rest =><div class="coll" key={rest.item.name} className="fooditem drink">
               
  < h1 className="name">{rest.item.name}</h1>
  <h1 className="price">Price: {rest.item.price}$</h1>
  
</div>

)  
        }
    </div> 
      </div>
    );
}


export default Drinkus;