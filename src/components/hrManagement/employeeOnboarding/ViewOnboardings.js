import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

function ViewOnboardings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://sameer-yadav.online/api/view-onboardings`,
          {
            withCredentials: true,
          }
        );
        setData(res.data);
      } catch (error) {
        console.error("Error occurred while fetching onboardings:", error);
      }
    }

    getData();
  }, []);

  const columns = [
    {
      accessorKey: "username",
      header: "Username",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "first_name",
      header: "First Name",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "middle_name",
      header: "Middle Name",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "last_name",
      header: "Last Name",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "email",
      header: "Email",
      enableSorting: false,
      size: 250,
    },
    {
      accessorKey: "employee_photo",
      header: "Employee Photo",
      enableSorting: false,
      size: 160,

      Cell: ({ cell }) =>
        cell.getValue() ? <a href={`${cell.getValue()}`}>View</a> : "NA",
    },
    {
      accessorKey: "resume",
      header: "Resume",
      enableSorting: false,
      size: 120,

      Cell: ({ cell }) =>
        cell.getValue() ? <a href={`${cell.getValue()}`}>View</a> : "NA",
    },
    {
      accessorKey: "address_proof",
      header: "Address Proof",
      enableSorting: false,
      size: 150,

      Cell: ({ cell }) =>
        cell.getValue() ? <a href={`${cell.getValue()}`}>View</a> : "NA",
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnResizing: true,
    enableColumnOrdering: true,
    enableDensityToggle: false, // Disable density toggle
    enablePagination: false,
    enableBottomToolbar: false,
    initialState: {
      density: "compact",
    }, // Set initial table density to compact
    enableColumnPinning: true, // Enable column pinning
    enableGrouping: true, // Enable row grouping
    enableColumnFilters: false, // Disable column filters
    enableColumnActions: false,
    enableStickyHeader: true, // Enable sticky header
    enablePinning: true, // Enable pinning for sticky columns
    muiTableContainerProps: {
      sx: { maxHeight: "650px", overflowY: "auto" },
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
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export default React.memo(ViewOnboardings);
