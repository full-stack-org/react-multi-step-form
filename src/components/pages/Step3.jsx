import React, { useEffect } from "react";
import {
  FormGroup,
  FormLabel,
  Button,
  Form,
  Card,
  Container,
  FormCheck,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function Step3() {
  const navigate = useNavigate();

  //Setting up the error messages.
  const validationSchema = Yup.object().shape({
    terms: Yup.bool().oneOf([true], "Please Accept Terms and Conditions"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //Setting up the current page number in Local Storage
  useEffect(() => {
    localStorage.setItem("currentPage", 3);
  }, []);

  //Pulling the data from Local Storage
  let profileData = {};
  let cardData = {};
  if (
    typeof localStorage.getItem("step2Details") !== "undefined" &&
    typeof localStorage.getItem("step1Details") !== "undefined"
  ) {
    profileData = JSON.parse(localStorage.getItem("step1Details"));
    cardData = JSON.parse(localStorage.getItem("step2Details"));
  }

  //Submitting the service data
  const onSubmit = (values) => {
    if (values.terms) {
      localStorage.setItem("step3Details", JSON.stringify(values));
      navigate("/step4");
      window.location.reload()
    }
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-3">
          <Card className="card-style">
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center mb-2">Profile Details</h3>
                <FormGroup>
                  <FormLabel className="font-weight-bold mr-2">
                    Email Id:{" "}
                  </FormLabel>
                  <FormLabel>{profileData.email}</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormLabel className="font-weight-bold mr-2">
                    First Name:{" "}
                  </FormLabel>
                  <FormLabel>{profileData.fname}</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormLabel className="font-weight-bold mr-2">
                    Last Name:{" "}
                  </FormLabel>
                  <FormLabel>{profileData.lname}</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormLabel className="font-weight-bold mr-2">
                    Gender:{" "}
                  </FormLabel>
                  <FormLabel>{profileData.gender}</FormLabel>
                </FormGroup>
                <h2 className="text-center mb-2">Card Details</h2>
                <FormGroup>
                  <FormLabel className="font-weight-bold mr-2">
                    Name On Card:{" "}
                  </FormLabel>
                  <FormLabel>{cardData.nameoncard}</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormLabel className="font-weight-bold mr-2">
                    Card Number:{" "}
                  </FormLabel>
                  <FormLabel>{cardData.cardnumber}</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormLabel className="font-weight-bold mr-2">
                    Expiry:{" "}
                  </FormLabel>
                  <FormLabel>{cardData.month}</FormLabel>/
                  <FormLabel>{cardData.year}</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormLabel className="font-weight-bold mr-2">CVV: </FormLabel>
                  <FormLabel>{cardData.cvv}</FormLabel>
                </FormGroup>
                <FormGroup className="form-inline mb-2">
                  <FormCheck
                    name="terms"
                    ref={register}
                    className={errors.terms ? " is-invalid" : ""}
                  ></FormCheck>
                  <FormLabel>
                    I have read all terms and conditions and ready to save my
                    data.
                  </FormLabel>
                  <div className="invalid-feedback">
                    {errors.terms?.message}
                  </div>
                </FormGroup>
                <Button
                  variant="danger"
                  type="button"
                  onClick={() => navigate("/step2") }
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
