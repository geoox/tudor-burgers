import React, { Component } from "react"
import { Form, Message, Checkbox } from 'semantic-ui-react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './contact.css'

export default class Contact extends Component{

  state = {
    Name: '',
    Email: '',
    Phone: '',
    Message: '',
    Checkbox: false,
    formSuccess: false,
    formError: false
  }
  formChange = (e) => {
    var key = e.target.placeholder
    var val = e.target.value
    var obj  = {}
    obj[key] = val
    this.setState(obj)
  }

  checkboxChange = () => {
    this.setState({
      Checkbox: !this.state.Checkbox
    })
  }

  onSubmitClick = () => {

    this.setState({
      formSuccess: false,
      formError: false
    })

    if(this.state.Checkbox == false){
      this.setState({
        formError: true
      })
    } else {
      this.setState({
        formError: false
      })

      window.Email.send({
        SecureToken: "bc6a7a53-459f-4c2e-b66b-46327900d5cf",
        To : "info@tudorburgers.ro",
        From : this.state.Email,
        Subject : "Contact form",
        Body : "Name: " + this.state.Name + "<br>" + "Phone: " + this.state.Phone + "<br>" + "Message: " + this.state.Message
    }).then(
        message => {
          if(message.includes('address')){
            this.setState({
              formError: true
            })
          } 
          if(message == "OK"){
            this.setState({
              formSuccess: true
            })
          } 
        })
    }

  }



  render(){

    return(
      <Layout>
        <div className="contact">
          <SEO title="Contact" />
          <div className="contact-parallax">
            <div className="inner-parallax">
              <p>Contact</p>
            </div>
          </div>
          <div className="contact-container">

          <Form>
            <Form.Field onChange={this.formChange} width={6}>
              <label>Name</label>
              <input placeholder='Name' />
            </Form.Field>
            <Form.Field onChange={this.formChange} width={6}>
              <label>Email</label>
              <input placeholder='Email' />
            </Form.Field>
            <Form.Field onChange={this.formChange} width={6}> 
              <label>Phone</label>
              <input placeholder='Phone' />
            </Form.Field>
            <Form.TextArea label='Message' placeholder='Message' onChange={this.formChange} width={6}/>
            <Checkbox onChange={this.checkboxChange} label='By filling out this form I agree to the Privacy Policy for the use and processing of personal data.' className="gdpr-check"/>
            <Form.Button onClick={this.onSubmitClick} className="submit-btn">Submit</Form.Button>
          </Form>

          {
              this.state.formSuccess
              ?                     
              <Message
                  success
                  header='Thank you!'
                  content='We will get back to you as soon as possible'
              />
              : <div></div>
          }

          {
              this.state.formError
              ?                     
              <Message
              error
              header='Validation error!'
              list={[
                'Your email address must be a valid one',
                'You need to give your consent regarding personal information processing',
              ]}
              />
              : <div></div>
          }
              
          </div>

        </div>
      </Layout>
    )
  }
}

