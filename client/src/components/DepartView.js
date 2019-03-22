import React from "react";
import axios from "axios";
import { Button, Header, Segment, Card, Image, } from "semantic-ui-react";
import { Link, } from 'react-router-dom';


class DepartView extends React.Component {
  state = { department: {}, items: [] };

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })

      axios.get(`/api/departments/${id}/items`)
        .then(res => {
          this.setState({ items: res.data })
        })
        .catch(err => {
          console.log(err.response)
        })
  }

  ListItems = () => {
    const { id, } = this.props.match.params
    return this.state.items.map(i => (
      <div style={{ marginTop: '40px', padding: '20px'}}>
        <Link to={`/departments/${id}/items/${i.id}`}>
          <Card style={{ height: "300px", width: '300px', textAlign: "center"}}>
          <h3>{i.name}</h3>
          <Card.Description>${i.price}</Card.Description>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: '20px',
              }}
            >
              <Image
                style={{
                  height: '200px',
                  width: '200px',
                }}
                src={"https://loremflickr.com/400/400/products?" + Math.random()} alt="Product" />
            </div> 
          </Card>
        </Link>
      </div>
    ))
  }

  render() {
    const  { id, name, } = this.state.department;
    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        <br />
        <br />
        <Button as={Link} to={`/departments/${id}/edit`} color='red'>Edit Department</Button>
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >   
          Back
        </Button>
         <Button as={Link} to={`/departments/${id}/items/new`} color='green'>Add an Item</Button>
        <br />
        <br />
         <Card.Group itemsPerRow={3}>
          {this.ListItems()}
        </Card.Group>
      </div>
    )
  }
}

export default DepartView;