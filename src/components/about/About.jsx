import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Col, Row } from 'antd';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

;

function About() {
  return (
        
    <>
        <Header/>
        <Row>
      <Col span={4}></Col>
      <Col span={16}>
      <h1 
        style={{fontSize:"30px",color:"#181818",fontFamily:"Roboto",textAlign:"center"}}>
          About Us</h1>
    <Typography>
    
    <Paragraph>
    
    
        <blockquote
        style={{fontSize:"30px"}}
        >Chair Man Message</blockquote>
        <pre>It should be noted that Allah, who is in need of no
           one and nothing, instills upon his men to give Qarz-e-Hasana
            because it is in man’s nature to be frugal whilst spending 
            his wealth. Allah speaks about qarz because it is returned and
             Allah promises that He will return the goodly loan by 70 folds
             . Allah conveys his message to the Muslim ummah through the 
             Holy Prophet Muhammad prompting Muslims to spend their wealth 
             in a certain way. He says,Oh children of Adam! Trust me with 
             your wealth. If you do so, no fire, flood or thieves will be 
             able to rob you off your money. Instead, you will be endowed 
             with your wealth when you most need it. He further says that 
             the poor and weak will not remain hungry and naked except due 
             to the negligence of the rich, </pre>
      </Paragraph>
      <Divider />
      
    </Typography>
    
      <Typography>
    
    <Paragraph>
   
        <blockquote
        style={{fontSize:"30px"}}
        >Saylani Welfare Trust</blockquote>
        <pre>Saylani Welfare International Trust is a non-government 
          organization (NGO) focusing primarily on feeding the poor
           and homeless. It was established in May 1999 and is headquartered
            at Bahdurabad, Karachi, Pakistan. It was founded and headed 
            by spiritual and religious scholar Maulana Bashir Farooq Qadri.
            With an estimated monthly expenditure of Pakistani Rupees above
             30 million, Saylani Trust, provides food twice a day to more 
             than 30,000 poor people through its 100 centers 
             (generally known as Dastar-Khawan), most of them 
             are serving in Karachi.The organization distributed 
             CNG rickshaws among the jobless citizens of Karachi in April 
             2011 with the help of members of the Karachi business community.
             </pre>
      </Paragraph>
      <Divider />
      
    </Typography>
    <Typography>
    
    <Paragraph>
   
        <blockquote
        style={{fontSize:"30px"}}
        >Services provided</blockquote>
        <pre>With its offices in Nottingham, UK, Saylani Welfare 
          raises funds, as well as raising awareness of a range of
           charity projects.
           Services by Saylani (NGO) are provided free of cost.</pre>
      </Paragraph>
      <Divider />
      
    </Typography>
    
    
      </Col>
      
      <Col span={4}></Col>
    </Row>

    <Footer/>
    </>
    
  );
}

export default About;
