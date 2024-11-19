import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Row, Col } from "react-bootstrap";
import { generateToken } from "../../utils/pushNotifications/generateToken";
import { disablePushNotifications } from "../../utils/pushNotifications/disablePushNotifications";

function PushNotifications() {
  return (
    <Row>
      <Col>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemText primary="Push Notifications" />
                <ListItemText
                  secondary={
                    <>
                      <button
                        style={{ marginTop: 0 }}
                        className="btn"
                        onClick={generateToken}
                      >
                        Enable on this device
                      </button>
                      <button
                        style={{ marginTop: 0, marginLeft: "10px" }}
                        className="btn"
                        onClick={disablePushNotifications}
                      >
                        Disable
                      </button>
                    </>
                  }
                />
              </ListItem>
            </List>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default PushNotifications;
