import React, {useState, createContext} from 'react';

import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();

function ComponentA(){
//state variable
  const [user, setUser] = useState("Shalom");
  return(
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}> <ComponentB user={user}/></UserContext.Provider>
     
      
    </div>//componentA is thus the provider.It provides the value user
  );

}

export default ComponentA;