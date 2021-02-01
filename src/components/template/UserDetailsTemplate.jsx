import React from "react";
import { Container, Row, ProgressBar } from "react-bootstrap";

export default function UserDetailsTemplate() {
  let enableTab1 = false;
  let enableTab2 = false;
  let enableTab3 = false;
  let enableTab4 = false;

  let currentPageNumber = localStorage.getItem("currentPage");
  console.log("Current Page ", currentPageNumber);

  if (
    typeof localStorage.getItem("step1Details") !== "undefined" &&
    currentPageNumber === "1"
  ) {
    enableTab1 = true;
  }

  if (
    typeof localStorage.getItem("step1Details") !== "undefined" &&
    JSON.parse(localStorage.getItem("step1Details")) !== null &&
    currentPageNumber === "2"
  ) {
    enableTab2 = true;
  }

  if (
    typeof localStorage.getItem("step2Details") !== "undefined" &&
    JSON.parse(localStorage.getItem("step2Details")) !== null &&
    currentPageNumber === "3"
  ) {
    enableTab3 = true;
  }

  if (
    typeof localStorage.getItem("step3Details") !== "undefined" &&
    JSON.parse(localStorage.getItem("step3Details")) !== null &&
    currentPageNumber === "4"
  ) {
    enableTab4 = true;
  }

  return (
    <div>
      <Container>
        <h2 className="text-center mt-2">User Details Form</h2>
        <Row className="justify-content-center mt-2 w-auto">
          <ProgressBar className="mt-2 progress-style">
            <ProgressBar
              variant="success"
              now={25}
              key={1}
              className={enableTab1 ? "tab1-active" : "progress-disabled"}
              label="Profile Details"
            />
            <ProgressBar
              variant="primary"
              now={25}
              key={2}
              label="Card Details"
              className={enableTab2 ? "tab2-active" : "progress-disabled"}
            />
            <ProgressBar
              variant="danger"
              now={25}
              key={3}
              label="Review Your Details"
              className={enableTab3 ? "tab3-active" : "progress-disabled"}
            />
            <ProgressBar
              variant="info"
              now={25}
              key={4}
              label="Confirmation Page"
              className={enableTab4 ? "tab4-active" : "progress-disabled"}
            />
          </ProgressBar>
        </Row>
      </Container>
    </div>
  );
}
