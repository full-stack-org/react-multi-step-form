import React, { useEffect,useState } from "react";
import {
  FormGroup,
  FormLabel,
  FormControl,
  FormCheck,
  Form,
  Button,
  Card,
  Container,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function Step1() {
  //Setting up the error messages.
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Id")
      .required("Email Id is Required"),
    fname: Yup.string().required("First Name is Mandatory"),
    lname: Yup.string().required("Last Name is Mandatory"),
    gender: Yup.string().required("Please select Gender"),
  });

  //Validating the From with Yup
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //setting up navigate functionality
  let navigate = useNavigate();

  //Submitting the service data
  const onSubmit = (values) => {
    localStorage.setItem("step1Details", JSON.stringify(values));
    navigate("/step2");
    window.location.reload()
  };

  //Setting up the initial data
  let initialData = {
    email: "",
    fname: "",
    lname: "",
    gender: "",
  };

  const[localData,setLocalData] = useState(initialData)

  //Verifying the local data and setting up the initial data
  useEffect(() => {
    if (typeof localStorage.getItem("step1Details") !== "undefined") {
      setLocalData(JSON.parse(localStorage.getItem("step1Details")));      
    localStorage.setItem("currentPage",1)    
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    defaultValue={localData.email}
                    ref={register}
                    className={errors.email ? " is-invalid" : ""}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </FormGroup>
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter First Name"
                    name="fname"
                    defaultValue={localData.fname}
                    ref={register}
                    className={errors.fname ? " is-invalid" : ""}
                  />
                  <div className="invalid-feedback">
                    {errors.fname?.message}
                  </div>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter Last Name"
                    name="lname"
                    ref={register}
                    defaultValue={localData.lname}
                    className={errors.lname ? " is-invalid" : ""}
                  />
                  <div className="invalid-feedback">
                    {errors.lname?.message}
                  </div>
                </FormGroup>
                <FormLabel>Gender</FormLabel>
                <FormGroup>
                  <FormCheck
                    type="radio"
                    label="Male"
                    value="Male"
                    inline
                    name="gender"
                    defaultChecked={localData.gender === "Male"}
                    ref={register}
                    className={errors.gender ? " is-invalid" : ""}
                  ></FormCheck>
                  <FormCheck
                    type="radio"
                    label="Female"
                    value="Female"
                    inline
                    name="gender"
                    defaultChecked={localData.gender === "Female"}
                    ref={register}
                    className={errors.gender ? " is-invalid" : ""}
                  ></FormCheck>
                  <div className="invalid-feedback">
                    {errors.gender?.message}
                  </div>
                </FormGroup>
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
