import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Row, Col } from "react-bootstrap";
import MailIcon from "@mui/icons-material/Mail";
import "../../styles/backup-codes.scss";
import axios from "axios";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

function BackupCodes() {
  const { user, setUser } = useContext(UserContext);

  // Helper to split the backup codes into pairs
  const splitCodesIntoPairs = (codes) => {
    const pairs = [];
    for (let i = 0; i < codes?.length; i += 2) {
      pairs.push(codes.slice(i, i + 2));
    }
    return pairs;
  };

  const codePairs = splitCodesIntoPairs(user.backupCodes);

  const requestNewCodes = async () => {
    try {
      const res = await axios(
        `https://sameer-yadav.online/api/request-new-backup-codes`,
        { withCredentials: true }
      );

      setUser({ ...user, backupCodes: res.data.backupCodes });
    } catch (error) {
      console.error("Error occurred while requesting new backup codes:", error);
    }
  };

  const deleteCodes = async () => {
    try {
      const res = await axios.delete(
        `https://sameer-yadav.online/api/delete-backup-codes`,
        { withCredentials: true }
      );

      if (res.data.message === "Backup codes deleted") {
        setUser({ ...user, backupCodes: [] });
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("An error occurred while deleting backup codes.");
      console.error("Error deleting backup codes:", error);
    }
  };

  const sendEmail = async () => {
    // Create CSV formatted string
    const header = "Backup Codes\n";
    const csvContent = user.backupCodes.map((code) => `${code}`).join("\n");
    const csv = header + csvContent;

    // Create a Blob from the CSV string
    const blob = new Blob([csv], { type: "text/csv" });
    const reader = new FileReader();

    reader.onloadend = async () => {
      const params = {
        Destinations: [user.email],
        RawMessage: {
          Data: [
            `From: sameery.020@gmail.com\n`,
            `To: ${user.email}\n`,
            `Subject: Your Backup Codes\n`,
            `MIME-Version: 1.0\n`,
            `Content-Type: multipart/mixed; boundary="NextPart"\n\n`,
            `--NextPart\n`,
            `Content-Type: text/plain\n\n`,
            `Attached are your backup codes.\n\n`,
            `--NextPart\n`,
            `Content-Type: text/csv\n`,
            `Content-Disposition: attachment; filename="backup_codes.csv"\n\n`,
            `${csv}\n`, // Attach CSV data
            `--NextPart--`,
          ].join(""),
        },
      };

      try {
        await ses.sendRawEmail(params).promise();
        alert("Email sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
      }
    };

    reader.readAsDataURL(blob);
  };

  return (
    <div className="backup-codes">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <h5>Your Backup Codes</h5>
          <p>{user.backupCodes?.length} backup codes remaining</p>
        </div>
        <div>
          <Tooltip title="Request new backup codes">
            <IconButton onClick={requestNewCodes}>
              <ReplayRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete backup codes">
            <IconButton onClick={deleteCodes}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email backup codes">
            <IconButton onClick={sendEmail}>
              <MailIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <Divider variant="fullWidth" sx={{ opacity: 1, margin: "20px 0" }} />

      {codePairs.map((pair, index) => (
        <Row key={index} className="backup-codes-row">
          <Col xs={6}>
            <p>{pair[0]}</p>
          </Col>
          <Col xs={6}>{pair[1] && <p>{pair[1]}</p>}</Col>
        </Row>
      ))}
    </div>
  );
}

export default BackupCodes;
