import Logo from "./logo.png";
import React from 'react';
import { Col, Row } from 'antd';
import { NavLink } from "react-bootstrap";
import styled from "styled-components";
function Footer() {
    return (
     
    <Row style={{
      backgroundColor: '#e7e7e7',
      width: '100%',
      height: '350px'
    }}>
      <Col span={8}>
        <div style={{margin:"10%"}}>
      <img src={Logo} width="300px" className="logo"/>
        <h1 style={{fontFamily:"Roboto",color:"rgb(24, 24, 24)"}}>Syllani Mass IT Training</h1>
        <p style={{fontFamily:"Roboto",textAlign:"justify",color:"rgb(24, 24, 24)"}}>Saylani Welfare International Trust has been working for the last 22 years to improve the conditions of the less privileged, helpless, and handicapped individuals. The organization is working day 
        and night to make life happier</p>
        </div>
      </Col>
      <Col span={4}>
      <div style={{margin:"25%"}}>
      
        <h1 style={{fontFamily:"Roboto",color:"rgb(24, 24, 24)"}}>About</h1>
        <Nav>
        <ul className="navbar-list">
                <li>
                    <NavLink className="navbar-links" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links" to="/courses">Courses</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links" to="/gallary">Gallary</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links"  to="/contact">Contact</NavLink>
                </li>
                
                
            </ul>
            </Nav>
        </div>
      </Col>
      <Col span={4}>
      <div style={{margin:"25%"}}>
      
        <h1 style={{fontFamily:"Roboto",color:"rgb(24, 24, 24)"}}>Explore</h1>
        <Nav>
        <ul className="navbar-list">
                <li>
                    <NavLink className="navbar-links" to="/">News</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links" to="">Media</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links" to="">Contact</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links" to="">Donation</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links"  to="">Bank Detail</NavLink>
                </li>
                
                
            </ul>
            </Nav>
        </div>
      </Col>
      <Col span={4}>
      <div style={{marginTop:"10%"}}>
      
        <h1 style={{marginTop:"57px",fontFamily:"Roboto",color:"rgb(24, 24, 24)"}}>Contact</h1>
        <p style={{
          lineHeight: "20px",
          fontWeight: "bold",
          marginTop: "36px",fontFamily:"Roboto",textAlign:"justify",color:"rgb(24, 24, 24)"}}>
        A-25, Bahadurabad Chowrangi Karachi, Pakistan
        UAN: 111-729-526 (+0092-213)4130786-90
        CELL: 92-311-1729526
        USA NO +1(716)941 7792
        UK NO (+44)115 970 6256
        </p>
        
        </div>
      </Col>
    </Row>
   
    );
  }
  
  const Nav = styled.nav`
  
 
  .navbar-list{
    li{

        list-style:none;

        .navbar-links{
            text-decoration:none;
            color:#181818;
            font-family: 'Roboto', sans-serif; 
            margin-left: -40px;
            line-height: 33px;
            font-size: 17px;
        }
        
    }

    li a:hover{
        color:#0155ca;
       
    }

    
  
        
    }
    
    

  }
  `;
  export default Footer;