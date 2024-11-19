import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BasicInfo from "../../profile/BasicInfo";

function ViewIndividualKyc() {
  const { username } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios(
          `https://sameer-yadav.online/api/get-user-data/${username}`,
          {
            withCredentials: true,
          }
        );

        setData(res.data);
      } catch (error) {
        console.error("Error occurred while fetching user data:", error);
      }
    }

    getUser();
  }, [username]);

  const handleKycApproval = async (status) => {
    const kyc_approval = status === true ? "Approved" : "Rejected";

    try {
      const res = await axios.post(
        `https://sameer-yadav.online/api/kyc-approval`,
        { username, kyc_approval },
        {
          withCredentials: true,
        }
      );
      alert(res.data.message);
    } catch (error) {
      console.error("Error occurred during KYC approval:", error);
    }
  };

  return (
    <>
      {data && (
        <div style={{ padding: 20, backgroundColor: "#fff" }}>
          <BasicInfo user={data} />
          <br />
          <button className="btn" onClick={() => handleKycApproval(true)}>
            Approve
          </button>
          <button
            className="btn"
            style={{ marginLeft: "10px" }}
            onClick={() => handleKycApproval(false)}
          >
            Reject
          </button>
          <button
            className="btn"
            style={{ marginLeft: "10px" }}
            onClick={() => navigate(`/edit-kyc/${data.username}`)}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
}

export default React.memo(ViewIndividualKyc);
