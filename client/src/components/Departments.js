import React from 'react'
import { Button, Card, Header, } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, })
      })
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
     .then( res => {
       const { departments, } = this.state;
       this.setState({ departments: departments.filter(d => d.id !== id), })
  })
  }

  renderDeparts = () => {
    const { departments, } = this.state;

    if (departments.length <= 0)
      return <h2>No Departments yet</h2>
    return departments.map( department => (
      <Card>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
        </Card.Content>
        <Card.Content extra>
        <Button as={Link} to={`/departments/${department.id}`} color="blue">
          View Department
        </Button>
        <Button onClick={() => this.deleteDepartment(department.id)}>Delete</Button>
        </Card.Content>
      </Card>
    ))
  }

  

  render() {
    return (
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Button as={Link} color="blue" to="/departments/new">
          Add Department
        </Button>
        <Card.Group>
          { this.renderDeparts() }
        </Card.Group>
      </div>
    )
  }
  
}

export default Departments;