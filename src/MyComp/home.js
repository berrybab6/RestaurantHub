import React, { useState } from "react";
import "./home.css";
import { useHistory } from "react-router-dom";

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const RESTAURANT = gql`
  query {
    restaurants{
      menu{
        id
      },
    name,
    img
  }
    
  }
`;


const Home1=()=>{
  let history = useHistory();

    // const history = useNavigate();
    const [menu, setMenu] = useState(null);
  
    const { data, loading, error } = useQuery(RESTAURANT);
    var url = "http://127.0.0.1:8000/";

    const someEventHandler = ({title, named}) => {
      
   };

   function sayHello(name, named) {
    // alert(`hello, ${name}`);
    history.push({
      pathname: '/menus',
      state: { detail: name, named:named}
  });
  }

    if (loading) {
        return <div>loading</div>;
      }
    
      if (error) {
        return <div>{error}</div>;
      }
    return (
        <div className="home">
        
                <h1 className="resthub">RestaurantHub</h1>
            <div className="search_inpt">
                <input  type="text" placeholder="Search Restaurants Here"></input>
                <button type="submit">Search</button>
            </div>

            <div className="rest">
                
                    <h1>Reasturants</h1>
                    
                    <div class="rowed">
                    
                   { data.restaurants.map(rest => 
                              <div class="coll" key={rest.name}>
                              <img src={url+rest.img}/>
                              <p className="name">{rest.name}</p>
                              <p className="location">Around Bole Atlas</p>
                              <button onClick={()=>{
                                sayHello(rest.menu.id, rest.name)
                              }}>View our Menu</button>   
                          </div>
  
                    )    }          
                </div>

                </div>
            </div>
        
    );
}

export default Home1;