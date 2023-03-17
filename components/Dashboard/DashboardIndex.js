import React, { useEffect, useState, useMemo } from "react";
import LeftMenu from "./LeftMenu";
import { API_URL, API_TOKEN } from "@/config/index";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import { Chip } from "@material-tailwind/react";

function DashboardIndex() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);

  // csv headers
  const headers = [
    { label: "ID", key: "id" },
    { label: "Title", key: "attributes.Title" },
    { label: "FirstName", key: "attributes.FirstName" },
    { label: "LastName", key: "attributes.LastName" },
    { label: "FamilyLastName", key: "attributes.FamilyLastName" },
    { label: "Email", key: "attributes.Email" },
    { label: "Number", key: "attributes.Number" },
    { label: "StreetAddress", key: "attributes.StreetAddress" },
    { label: "State", key: "attributes.State" },
    { label: "City", key: "attributes.City" },
    { label: "PostalCode", key: "attributes.PostalCode" },
    { label: "Country", key: "attributes.Country" },
  ];

  useEffect(() => {
    // Fetch data from an external API or database
    fetch(`${API_URL}/api/memberhip-plans?populate=*`, {
      method: "GET",
      headers: {
        Authorization: API_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMembers(data?.data);
        setFilteredMembers(data?.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const result = members?.filter((member) =>
      member.attributes.Title.toLowerCase().match(search.toLowerCase())
    );
    setFilteredMembers(result);
  }, [search]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.attributes.Title,
      sortable: true,
    },
    {
      name: "FIRSTNAME",
      selector: (row) => row.attributes.FirstName,
      sortable: true,
    },
    {
      name: "LastName",
      selector: (row) => row.attributes.LastName,
      sortable: true,
    },
    {
      name: "MiddleName",
      selector: (row) => row.attributes.MiddleName,
      sortable: true,
    },
    {
      name: "MiddleName",
      selector: (row) => row.attributes.MiddleName,
      sortable: true,
    },
    {
      name: "FamilyLastName",
      selector: (row) => row.attributes.FamilyLastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.attributes.Email,
      sortable: true,
    },
    {
      name: "Number",
      selector: (row) => row.attributes.Number,
      sortable: true,
    },

    {
      name: "Action",
      cell: (row) => (
        <Chip value="View" className=" cursor-pointer  lowercase " />
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#fff",
        fontSize: "14px",
        color: "#333",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#F9FAFB",
        boxShadow: "none",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#374151",
        textTransform: "uppercase",
      },
    },
  };

  return (
    <div className="grid  px-10 grid-cols-1 lg:grid-cols-5 gap-5 justify-items-left p-[3rem] ">
      
        <LeftMenu />

      <div className=" lg:col-span-4  mr-10 mt-14">
        <DataTable
          columns={columns}
          data={filteredMembers}
          // selectableRowsHighlight
          // highlightOnHover
          // selectableRows
          fixedHeader
          title="Members"
          subHeader
          subHeaderComponent={
            <div className="relative mb-6  shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-[#6B7280] dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="  bg-[#F9FAFB] border  border-softGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          }
          customStyles={customStyles}
          subHeaderAlign="center"
          pagination
          actions={
            <CSVLink
              data={members}
              headers={headers}
              filename={"Members-data.csv"}
            >
              <Chip
                value=" Download CSV"
                className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
              />
            </CSVLink>
          }
        />
      </div>
    </div>
  );
}

export default DashboardIndex;
