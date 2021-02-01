import React, { useEffect,useState } from "react";
import {
  FormGroup,
  FormLabel,
  FormControl,
  Form,
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function Step2() {
  //Setting up the error messages.
  const validationSchema = Yup.object({
    nameoncard: Yup.string().required("Name On Card is Manadatory"),
    cardnumber: Yup.string().required("Card number is Mandatory"),
    month: Yup.string().required("Month is Mandatory"),
    year: Yup.string().required("Year is Mandatory"),
    cvv: Yup.string().required("CVV is Mandatory"),
  });

  //Validating the From with Yup
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //setting up navigate functionality
  let navigate = useNavigate();

  //Submitting the service data
  const onSubmit = (values) => {
    localStorage.setItem("step2Details", JSON.stringify(values));
    navigate("/step3");
    window.location.reload()
  };

  //Setting up the initial Data
  let initialData = {
    nameoncard: "",
    cardnumber: "",
    month: "",
    year: "",
    cvv: "",
  };

  const[localData,setLocalData] = useState(initialData)

  //Verifying the local data and setting up the initial data
  useEffect(() => {
    if (typeof localStorage.getItem("step2Details") !== "undefined") {
      setLocalData(JSON.parse(localStorage.getItem("step2Details")));      
    localStorage.setItem("currentPage",2)
    }
  }, []);

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-3">
          <Card className="card-style">
            <Card.Body>
              <Form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <FormLabel>Name On Card</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Name On Card"
                    name="nameoncard"
                    ref={register}
                    defaultValue={localData.nameoncard}
                    className={errors.nameoncard ? " is-invalid" : ""}
                  />
                  <div className="invalid-feedback">
                    {errors.nameoncard?.message}
                  </div>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl
                    type="number"
                    placeholder="Enter Card Number"
                    name="cardnumber"
                    ref={register}
                    defaultValue={localData.cardnumber}
                    className={errors.cardnumber ? " is-invalid" : ""}
                  />
                  <div className="invalid-feedback">
                    {errors.cardnumber?.message}
                  </div>
                </FormGroup>
                <FormLabel>Expiry</FormLabel>
                <FormGroup className="form-inline">
                  <Col xs={6}>
                    <FormControl
                      as="select"
                      name="month"
                      ref={register}
                      defaultValue={localData.month}
                      className={errors.month ? " is-invalid" : ""}
                    >
                      <option value="">Month</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </FormControl>
                    <div className="invalid-feedback">
                      {errors.month?.message}
                    </div>
                  </Col>
                  <Col xs={6}>
                    <FormControl
                      as="select"
                      name="year"
                      ref={register}
                      defaultValue={localData.year}
                      className={errors.year ? " is-invalid" : ""}
                    >
                      <option value="">Year</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </FormControl>
                    <div className="invalid-feedback">
                      {errors.year?.message}
                    </div>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <FormLabel>CVV</FormLabel>
                  <FormControl
                    type="number"
                    placeholder="Enter Card CVV"
                    name="cvv"
                    ref={register}
                    defaultValue={localData.cvv}
                    className={errors.cvv ? " is-invalid" : ""}
                  />
                  <div className="invalid-feedback">{errors.cvv?.message}</div>
                </FormGroup>
                <Button
                  variant="danger"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  Previous
                </Button>
                <Button
                  variant="danger"
                  type="submit"
                  className="next-button-style"
                >
                  Next
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
