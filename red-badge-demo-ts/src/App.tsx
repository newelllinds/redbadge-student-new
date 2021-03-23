import React from "react";
import PropsExample from './components/PropsExample'
import PropsMapping from './components/PropsMapping'

function App() {
  const visitedPlaces = ['Mexico', 'Puerto Rico', 'Ireland', 'Italy', 'France', 'Bahamas']
  return (
    <div>
      <PropsExample name="Tom" business="mySpace"/>
      <PropsMapping visited = {visitedPlaces}/>
    </div>
  );
}

export default App;
