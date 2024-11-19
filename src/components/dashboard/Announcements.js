import React from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

function Announcements() {
  const data = [
    {
      title: "Quarterly Financial Results",
      date: "01-01-2022",
      time: "10:00 AM",
      description: "Q2 2024 financial performance.",
    },
    {
      title: "Quarterly Financial Results",
      date: "01-01-2022",
      time: "10:00 AM",
      description: "Q2 2024 financial performance.",
    },
    {
      title: "Quarterly Financial Results",
      date: "01-01-2022",
      time: "10:00 AM",
      description: "Q2 2024 financial performance.",
    },
    {
      title: "Quarterly Financial Results",
      date: "01-01-2022",
      time: "10:00 AM",
      description: "Q2 2024 financial performance.",
    },
  ];

  const columns = [
    {
      accessorKey: "title",
      header: "Title",
      enableSorting: false,
      size: 260,
    },
    {
      accessorKey: "date",
      header: "Date",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "time",
      header: "Time",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "description",
      header: "Description",
      enableSorting: false,
      size: 260,
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data,
    enableBottomToolbar: false,
    enableTopToolbar: false,
    enableStickyHeader: true,
    muiTableContainerProps: {
      sx: { maxHeight: "300px", overflowY: "auto" },
    },
    muiTableHeadCellProps: {
      sx: {
        position: "sticky",
        top: 0,
        zIndex: 1,
      },
    },
  });

  return (
    <div className="dashboard-container">
      <h5>
        <strong>Announcements</strong>
        <br />
        <br />
        <MaterialReactTable table={table} />
      </h5>
    </div>
  );
}

export default Announcements;
