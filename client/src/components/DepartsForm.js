import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from 'axios';

class DepartsForm extends React.Component {
  state = { name: "", };

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    if (id)
      axios.get(`/api/departments/${id}`)
        .then(res => {
          this.setState({ name: res.data.name })
        })
        .catch(err => {
          console.log(err.response)
        })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state, };
    const { match: { params: { id } } } = this.props
    if (id) {
      axios.put(`/api/departments/${id}`, department)
      .then( res => {
        this.props.history.push(`/departments/${id}`);
      })
    } else {
      axios.post(`/api/departments`, department)
        .then(res => {
          this.props.history.push('/departments')
        })
    }
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, } = this.state;

    return (
      <div>
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
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default DepartsForm;
