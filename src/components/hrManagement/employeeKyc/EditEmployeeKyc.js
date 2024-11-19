import React from "react";
import CompleteKYC from "./CompleteKYC";
import { useParams } from "react-router-dom";

function EditEmployeeKyc() {
  const { username } = useParams();
  return <CompleteKYC username={username} />;
}

export default React.memo(EditEmployeeKyc);
