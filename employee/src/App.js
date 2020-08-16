import React from 'react';
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import Data from "./components/Data";
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <Header />
        <EmployeeTable />
          <Data />
            <SearchResults />
         
    </div>
  )
}

export default App;