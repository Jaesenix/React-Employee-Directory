import React, { Component } from 'react';
import Table from "./components/Table.js";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Table} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    )
  }
}

export default App;
