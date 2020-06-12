import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import styled from "styled-components";

//Css colors
import "../assets/colors.css";

const Styles = styled.div`
  Button {
    width: 30rem;
    background-color: var(--button-color);
  }
`;

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async handleSubmit(e) {
    //window.location.reload();
    e.preventDefault();
    const { name, email, message } = this.state;
    const form = await axios.post("/api/form", {
      name,
      email,
      message,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Styles>
          <Form onSubmit={this.handleSubmit} style={{ width: "30rem" }}>
            <FormGroup>
              <Label for="name">Ditt namn:</Label>
              <Input type="text" name="name" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for="name">Din e-postadress:</Label>
              <Input type="email" name="email" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for="name">Meddelande:</Label>
              <Input
                type="textarea"
                name="message"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Styles>
      </React.Fragment>
    );
  }
}
export default ContactForm;
