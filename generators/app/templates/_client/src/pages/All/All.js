import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class All extends Component {
  state = {
    items: [],
    name: "",
    author: "",
    description: ""
  };

  componentDidMount() {
    this.loaditems();
  }

  loaditems = () => {
    API.getitems()
      .then(res =>
        this.setState({ items: res.data, name: "", author: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loaditems())
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
    if (this.state.name && this.state.author) {
      API.saveItem({
        name: this.state.name,
        author: this.state.author,
        description: this.state.description
      })
        .then(res => this.loaditems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What items Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>items On My List</h1>
            </Jumbotron>
            {this.state.items.length ? (
              <List>
                {this.state.items.map(Item => (
                  <ListItem key={Item._id}>
                    <Link to={"/items/" + Item._id}>
                      <strong>
                        {Item.name} by {Item.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteItem(Item._id)} />
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

export default All;
