import { Col, Row } from 'antd';
import image1 from "./image1.jpg";
function Gallary() {
    return (
      <div>
        <h1 
        style={{fontSize:"30px",color:"#181818",fontFamily:"Roboto",textAlign:"center"}}>
          Photos</h1>
       <Row>
       <Col span={2}></Col>
      <Col span={5}>
      <img src={image1} width="300px" className=""/>
      </Col>
      <Col span={5}>
      <img src={image1} width="300px" className=""/>
      </Col>
      <Col span={5}>
      <img src={image1} width="300px" className=""/>
      </Col>
      <Col span={5}>
      <img src={image1} width="300px" className=""/>
      </Col>
      
      <Col span={2}>
      
      </Col>
    </Row>
    <Row>
       <Col span={2}></Col>
      <Col span={5}>
      <img src={image1} width="300px" className=""/>
      </Col>
      <Col span={5}>
      <img src={image1} width="300px" className=""/>
      </Col>
      <Col span={5}>
      <img src={image1} width="300px" className=""/>
      </Col>
      <Col span={5}>
      <img src={image1} width="300px" className=""/>
      </Col>
      
      <Col span={2}>
      
      </Col>
    </Row>
      </div>
    );
  }
  
  export default Gallary;