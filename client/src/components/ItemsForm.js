import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from 'axios';


class ItemsForm extends React.Component {
  state = { name: "", description: "", price: "", };

  componentDidMount() {
    const { match: { params: { id, department_id, }}} = this.props
    if (id && department_id)
      axios.get(`/api/departments/${department_id}/items/${id}`)
        .then(res => {
          const {name, description, price } = res.data
          this.setState({ name, description, price })
        })
        .catch(err => {
          console.log(err.response)
        })
  }
   

  handleSubmit = (e) => {
    e.preventDefault();
    const item = { ...this.state, };
    const { match: { params: { id, department_id } } } = this.props
    if (id && department_id) {
    axios.put(`/api/departments/${department_id}/items/${id}`, item)
      .then( res => {
        this.props.history.push(`/departments/${department_id}/items`);
      })
    } else {
      axios.post(`/api/departments/${department_id}/items`, item)
        .then(res => {
          this.props.history.push(`/departments/${department_id}`)
        })
    }
  }
   

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, description, price } = this.state;

    return (
      <div>
        <Header as="h1">New Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Discription"
              value={description}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              type="number"
              value={price}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ItemsForm;