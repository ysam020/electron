import React from "react";
import { Row, Col } from "react-bootstrap";

function Attendance() {
  return (
    <div className="dashboard-container">
      <h5>
        <strong>Attendance and Leaves</strong>
      </h5>
      <Row className="attendance-row attendance-row-1">
        <Col>
          <span className="total-leaves">10</span>
          <p>Total Leaves</p>
        </Col>
        <Col>
          <span className="leaves-taken">6.5</span>
          <p>Leaves Taken</p>
        </Col>
        <Col>
          <span className="leaves-absent">6</span>
          <p>Leaves Absent</p>
        </Col>
      </Row>
      <Row className="attendance-row attendance-row-2">
        <Col>
          <span className="pending-approval">1</span>
          <p>Pending Approval</p>
        </Col>
        <Col>
          <span className="working-days">315</span>
          <p>Working Days</p>
        </Col>
        <Col>
          <span className="loss-of-pay">3</span>
          <p>Loss of Pay</p>
        </Col>
      </Row>
    </div>
  );
}

export default Attendance;
