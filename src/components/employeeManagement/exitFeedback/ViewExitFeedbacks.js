import React from "react";
import { MaterialReactTable } from "material-react-table";
import useTableConfig from "../../../hooks/useTableConfig";

function ViewExitFeedbacks() {
  const data = [];

  const columns = [
    {
      accessorKey: "employee_name",
      header: "Employee Name",
      enableSorting: false,
      size: 160,
    },

    {
      accessorKey: "department",
      header: "Department",
      enableSorting: false,
      size: 140,
    },
    {
      accessorKey: "last_date",
      header: "Last Date",
      enableSorting: false,
      size: 120,
    },
    {
      accessorKey: "job_satisfaction",
      header: "Job Satisfaction",
      enableSorting: false,
      size: 120,
    },
    {
      accessorKey: "support_from_manager",
      header: "Support From Manager",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "approach_of_reporting_manager",
      header: "Approach Of Reporting Manager",
      enableSorting: false,
      size: 230,
    },
    {
      accessorKey: "overall_company_culture",
      header: "Overall Company Culture",
      enableSorting: false,
      size: 180,
    },
    {
      accessorKey: "training_and_development",
      header: "Training and Development",
      enableSorting: false,
      size: 180,
    },
    {
      accessorKey: "suggestions",
      header: "Suggestions",
      enableSorting: false,
      size: 220,
    },
  ];

  const table = useTableConfig(data, columns);

  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export default React.memo(ViewExitFeedbacks);
