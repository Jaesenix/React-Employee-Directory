import React from 'react';
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <Header />
        <EmployeeTable />
            <SearchResults />
         
    </div>
  )
}

export default App;