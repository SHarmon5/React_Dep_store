import React from "react";
import axios from "axios";
import { Button, Header, Card, Segment, } from "semantic-ui-react";
import { Link, } from 'react-router-dom';


class ItemView extends React.Component {
  state = { items: [], };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.department_id}/items`)
      .then( res => {
        this.setState({ items: res.data, });debugger
      })
  }

  deleteItem = (department_id, id) => {
    axios.delete(`/api/departments/${department_id}/items/${id}`)
     .then( res => {
       const { items, } = this.state;
       this.setState({ items: items.filter(d => d.id !== id), })
  })
  }

  renderItems = () => {
    const { items, } = this.state;

    if (items.length <= 0)
      return <h2>No Items yet</h2>
    return items.map( item => (
      <Card>
        <Card.Content>
          <Card.Header>{ item.name }</Card.Header>
        </Card.Content>
        <Card.Content extra>
        <Button onClick={() => this.deleteItem(item.id)}>Delete</Button>
        <Button onClick={() => this.editItem(item.id)}>Delete</Button>
        </Card.Content>
      </Card>
    ))
  }


  render() {
    const  {items: { name,}} = this.state;
    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        <Card.Group>
        <Button as={Link} color="blue" to={{pathname: "/items/new",  state: {depId: this.props.match.params.department_id}}}>
          Add an Item
        </Button>        
          { this.renderItems}
          <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
        </Card.Group>
        
      </div>
    )
  }
}

export default ItemView;