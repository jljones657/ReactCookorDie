import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import {IngredientOption, IngredientList} from "../../components/Ingredients";
// import Books from "../../pages/Books"
// import FoodType from "../../components/FoodType";

class IngredientOptions extends Component {
  state = {
    ingredients: [],
    name:"Fernando",
    LastName:"Medina"
  };
  
    constructor(props) {
      super(props);
      this.setState({ ingredients: props.data, name: "", LastName: ""})
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.name);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select onChange={this.handleChange}>
            <option value={this.state.name} name="name">{this.state.name}</option>
            <option value={this.state.name} name="name">{this.state.LastName}</option>

            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  export default IngredientOptions;
