import React,{useEffect} from "react";
import { Container, Row, Card } from "react-bootstrap";

export default function Step4() {
  //Pulling the Local Data
  let localData = {};
  if (typeof localStorage.getItem("step2Details") !== "undefined") {
    localData = JSON.parse(localStorage.getItem("step1Details"));
  }

  
  //Setting up the current page number in Local Storage
  useEffect(()=>{    
    localStorage.setItem("currentPage",4)
  },[])

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-3">
          <Card className="card-style">
            <Card.Body>
              <Card.Title className="text-success text-center">
                Your Data Saved Successfully {localData.fname} {localData.lname}
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
