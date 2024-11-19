import * as React from "react";
import "../../styles/dashboard.scss";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";
import Info from "./Info";
import Attendance from "./Attendance";
import Announcements from "./Announcements";
import AttendanceHeatmap from "./AttendanceHeatmap";
import Notifications from "./Notifications";
import CalendarComponent from "./Calendar";

export default function Dashboard() {
  const { user } = React.useContext(UserContext);

  return (
    <>
      <Container fluid className="dashboard">
        <Row>
          <Col xs={12} md={6} lg={8}>
            <Row>
              <Col xs={12} lg={5}>
                <Info user={user} />
              </Col>
              <Col xs={12} lg={7}>
                <Attendance />
              </Col>
            </Row>
            <Row>
              <Col>
                <Announcements />
              </Col>
            </Row>
            <Row>
              <Col>
                <AttendanceHeatmap />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Row>
              <Notifications />
            </Row>
            <Row>
              <CalendarComponent />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
