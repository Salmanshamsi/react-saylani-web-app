import Header from "../header/Header";
import styled from "styled-components";
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
function Contact() {
  const Wrapper = styled.section`
  .container{
    margin-top:6rem;
    text-align:center;

    .contact-form{
      max-width:40rem;
      margin-left:20%;

      .form-inputs{
        display:flex;
        flex-direction:column;
        gap:1rem;
      }
    }

    
  }
  `;
    
    return (
      <>
      <Header/>
      <Wrapper>
        <h1 
        style={{fontSize:"30px",color:"#181818",fontFamily:"Roboto",textAlign:"center"}}>
          Feel Free to Contact Us</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4470666493285!2d67.06596461447798!3d24.88272775049396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eebb56aaaab%3A0x27ab04809ef5020a!2sSaylani%20Welfare%20Head%20Office.!5e0!3m2!1sen!2sus!4v1673076515719!5m2!1sen!2sus" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" ></iframe>
      <div className="container">
      <h1 
        style={{marginTop:"-60px",fontSize:"30px",color:"#181818",fontFamily:"Roboto",textAlign:"center"}}>
          Enter Your Query Here</h1>
      <div className="contact-form">
      
      <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
       
      
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Message" rows="100">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit" style={{marginRight:"80%"}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
      </div>
      </Wrapper>
      </>
    );
  }
  
  export default Contact;