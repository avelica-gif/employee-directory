//ignore eslint
import React, { Component } from "react";
import Wrapper from "./components/wrapper";
import './App.css';
// import navbar from "./components/navbar";
// import form from "./components/form";
// import table from "./components/table";
import { get } from "./utils/API";
import Table from "./components/table";

class App extends Component{
  state = {
      users: [],
      sorted: "desc",
      search: ""
  };

componentDidMount() {
  get()
  .then(res => {
    this.setState({users: res.data.results})
  });
}

sortUsers = () => {
  if (this.state.sorted === "desc") {
    const sortedUsers = this.state.users.sort((a, b) =>  (b.name.first.toLocaleLowerCase() > a.name.first.toLocaleLowerCase()) ? 1: -1) 
    this.setState({users: sortedUsers});
    this.setState({sorted: "asc"})
  } else {
    const sortedUsers = this.state.users.sort((a, b) =>  (b.name.first.toLocaleLowerCase() < a.name.first.toLocaleLowerCase()) ? 1: -1)       
    this.setState({users: sortedUsers});
    this.setState({sorted: "desc"})
  }
    
}

onSearch = (event) => {
  console.log("works")
  // console.log(event.target.value)
  this.setState({search: event.target.value})
  console.log(this.state.search)
}


App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper />
      <div className ="container">
        <Form onSearch = {this.onSearch}/>
        <Table
        data = {this.state.search.length > 0 ? this.state.users.filter(users => {return users.name.first.toLowerCase().includes(this.state.search.toLocaleLowerCase())}) : this.state.users}
        handleSort = {this.sortUsers}
        />
      </div>
    </div>
  );


export default App
