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

class Ingredients extends Component {
  state = {
    ingredients: [],
    name:"",
    ingredientType:""
  };



  componentDidMount() {
    this.loadIngredients();
  }

   /// Ingredients Options handling
   constructor(props) {
    super(props);
    this.setState({ ingredients: props.data, name: "Brocolli", ingredientType: "Veggie"})
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadIngredients = () => {  
    API.getIngredients()
    .then(res =>
      this.setState({ ingredients: res.data, name: "", ingredientType: ""})
    )
    .catch(err => console.log(err));
  };

  deleteIngredient = id => {
    API.deleteIngredient(id)
      .then(res => this.loadIngredients())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveIngredient({
      name: this.state.name,
      ingredientType: this.state.ingredientType
    })
    .then(res => this.loadIngredients())
    .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleSubmit(event) {
    event.preventDefault();
    alert('You picked ' + this.name);
    console.log(this.state.value)

  }

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-6">
            <Jumbotron>
              <h1>Ingredients</h1>
            </Jumbotron>
            <form>          
              <Input
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name of Ingredient"
              />
              <Input
              value={this.props.ingredientType}
              onChange={this.handleInputChange}
              name="ingredientType"
              placeholder="Type of Ingredient"
            />        
              <FormBtn
                // disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Your Ingredients
              </FormBtn>
            </form>
          
            {this.state.ingredients.length ? (
              <IngredientList>
                <div className="control-group">
                  <h1>Choose Your Veggies</h1>
                  {this.state.ingredients.map(ingredient => (
                    <IngredientOption key={ingredient._id}>
                      <div className="li-img">
                        <form onSubmit={this.handleSubmit}>
                          <label 
                          onChange={this.handleChange}
                          value={this.state.name}
                          name="name"
                          >
                          {ingredient.name}
                          </label>
                          <button type="submit" value="Submit" >Suubmit</button>

                        </form>
                      </div>
                    </IngredientOption>
                  ))}
                  {/* <FormBtn
                // disabled={!(this.state.title)}
              >
                Get A Recipe
              </FormBtn> */}
                  </div>
                
              </IngredientList>
            ) : (
              <h3>No Results to Display</h3>
            )}
            
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Pick A type of Food to Cook</h1>
            </Jumbotron>
            {this.state.ingredients.length ? (
              <List>
                {this.state.ingredients.map(ingredient => (
                  <ListItem key={ingredient._id}>
                    <Link to={"/ingredients/" + ingredient._id}>
                    <div className="li-img">
                      <strong>
                        An available recipe for {ingredient.name} is made with {ingredient.ingredientType}
                      </strong>
                    </div>
                      
                    </Link>
                    <DeleteBtn onClick={() => this.deleteIngredient(ingredient._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Ingredients;
