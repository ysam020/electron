import * as React from "react";
import LoggedInDevices from "./LoggedInDevices";
import BasicInfo from "./BasicInfo";
import { getSessionData } from "../../utils/auth/getSessionData";
import { logOutFromAllSessions } from "../../utils/auth/logOutFromAllSessions";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "../customComponents/StyledAccordion";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import BackupCodes from "./BackupCodes";
import TwoFactorAuthentication from "./TwoFactorAuthentication";
import PushNotifications from "./PushNotifications";

export default function Profile() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [geolocation, setGeolocation] = React.useState({});
  const { setUser, user } = React.useContext(UserContext);

  const navigate = useNavigate();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Initial fetch of geolocation data when the component mounts
  React.useEffect(() => {
    getSessionData(setGeolocation);
  }, []);

  return (
    <div>
      <br />
      {/* Basic Info */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h6 style={{ fontWeight: "bold" }}>Personal Info</h6>
        </AccordionSummary>
        <AccordionDetails
          style={{ maxHeight: "50vh", overflowY: "auto", padding: "30px" }}
        >
          <BasicInfo user={user} />
        </AccordionDetails>
      </Accordion>
      {/* Logged in devices */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h6 style={{ fontWeight: "bold" }}>Logged in devices</h6>
        </AccordionSummary>
        <AccordionDetails>
          <LoggedInDevices
            geolocation={geolocation}
            setGeolocation={setGeolocation}
          />
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <button
              className="btn"
              style={{
                marginTop: "20px",
              }}
              onClick={() => logOutFromAllSessions(setUser, navigate)}
            >
              Log out from all devices
            </button>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* Reset Password */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h6 style={{ fontWeight: "bold" }}>Reset Password</h6>
        </AccordionSummary>
        <AccordionDetails>
          <ResetPassword />
        </AccordionDetails>
      </Accordion>
      {/* Two Factor Authentication */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h6 style={{ fontWeight: "bold" }}>Two Factor Authentication</h6>
        </AccordionSummary>
        <AccordionDetails>
          <TwoFactorAuthentication />
        </AccordionDetails>
      </Accordion>
      {/* Backup Codes */}
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h6 style={{ fontWeight: "bold" }}>Backup Codes</h6>
        </AccordionSummary>
        <AccordionDetails>
          <BackupCodes />
        </AccordionDetails>
      </Accordion>
      {/* Push Notifications */}
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h6 style={{ fontWeight: "bold" }}>Push Notifications</h6>
        </AccordionSummary>
        <AccordionDetails>
          <PushNotifications />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
