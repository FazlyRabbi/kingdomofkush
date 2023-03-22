import React, { useEffect, useState, useContext } from "react";
import { projectContext } from "@/context/ProjectContext";
import Head from "next/head";
import DHeader from "@/components/Dashboard/DHeader";
import slugify from "slugify";
import useSweetAlert from "@/components/lib/sweetalert2";
// import leftmenu
import LeftMenu from "@/components/Dashboard/LeftMenu";
import { API_URL, API_TOKEN } from "@/config/index";
import DataTable from "react-data-table-component";

import { CSVLink } from "react-csv";
import { TiDeleteOutline } from "react-icons/ti";
// import tailwind modal
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Button,
  Chip,
  Card,
  CardBody,
} from "@material-tailwind/react";

// imports react pdf
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// style sheet for
const styles = StyleSheet.create({
  doc: {
    color: "#404B50",
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginVertical: "20px",
  },
  label: {
    fontSize: "12px",
    marginBottom: "6px",
  },
  input: {
    fontSize: "13px",
    color: "#000",
  },
});

function index() {
  const { projectForm, setProjectForm, projectIninitalForm } =
    useContext(projectContext);

  const [thubmnail, setThubmnail] = useState(null);

  // loead init members
  const [projects, setProjects] = useState([]);
  // leoad search
  const [search, setSearch] = useState("");
  // set filtered members
  const [filteredMembers, setFilteredMembers] = useState([]);
  //  set single Data
  const [singleData, setSingleData] = useState("");

  // membershiip pdf
  const MembersPdf = () => (
    <Document>
      <Page size={"A4"} style={styles.doc}>
        <Text style={styles.header} fixed>
          {singleData.FirstName && singleData.FirstName}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            flexWrap: "wrap",
            paddingHorizontal: 20,
            marginTop: "20px",
          }}
        >
          <View>
            <Text style={styles.label} fixed>
              Title
            </Text>
            <Text style={styles.input} fixed>
              {singleData.Title && singleData.Title}
            </Text>
          </View>

          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              LastName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.LastName && singleData.LastName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              MiddleName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.MiddleName && singleData.MiddleName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FamilyLastName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FamilyLastName && singleData.FamilyLastName}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            flexWrap: "wrap",
            paddingHorizontal: 20,
            marginTop: "20px",
          }}
        >
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  // to open tailwind modals
  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    setSingleData(data);
    setOpen(!open);
  };

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

  // Fetch data from an external API or database
  useEffect(() => {
    fetch(`${API_URL}/api/projects?populate=*`, {
      method: "GET",
      headers: {
        Authorization: API_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data?.data);
        setFilteredMembers(data?.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const result = projects?.filter((project) =>
      project.attributes.Title.toLowerCase().match(search.toLowerCase())
    );
    setFilteredMembers(result);
  }, [search]);

  // table columns
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
      name: "Action",
      cell: (row) => (
        <div className=" grid my-2 justify-between items-center xl:grid-cols-3 grid-cols-1 gap-2">
          <Chip
            value="View"
            className=" cursor-pointer  lowercase "
            onClick={() => handleOpen(row.attributes)}
          />
          <Chip
            color="green"
            value="Active"
            className=" cursor-pointer  lowercase "
          />
          <Chip
            color="pink"
            value="In-Active"
            className=" cursor-pointer  lowercase "
          />
        </div>
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

  // add products related task

  const genrerateSlug = (string) => {
    const slug = slugify(string, {
      lower: true, // Convert to lowercase
      remove: /[*+~.()'"!:@]/g, // Remove special characters
    });
    setProjectForm({ ...projectForm, Slug: slug });
  };

  useEffect(() => {
    genrerateSlug(projectForm.Title);
  }, [projectForm?.Title]);

  const formData = typeof window !== "undefined" ? new FormData() : "";

  const { showAlert } = useSweetAlert();

  const showAlerts = () => {
    showAlert({
      title: `Project Added Successfully`,
      icon: "success",
      confirmButtonText: "Close",
      confirmButtonColor: "green",
    }).then((result) => {
      console.log(result);
    });
  };

  const addProjects = async () => {
    try {
      const res = await fetch(`${API_URL}/api/projects`, {
        method: "POST",
        headers: {
          Authorization: API_TOKEN,
        },

        body: formData,
      });

      const data = await res.json();
      if (!res.ok) return;
      showAlerts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    genrerateSlug(projectForm.Title);
    formData.append(`files.Thubmnail`, thubmnail, thubmnail.name);
    formData.append("data", JSON.stringify(projectForm));
    addProjects();
    setThubmnail(null);
    setProjectForm(projectIninitalForm);
  };

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <div className="grid  px-10 grid-cols-1 lg:grid-cols-5 gap-6 justify-items-left p-[3rem] ">
        <LeftMenu />
        <DHeader />

        <div className=" grid grid-cols-1 mt-[6rem] 2xl:grid-cols-3 gap-y-2 gap-2 lg:col-span-4 gap-x-5">
          <div className="project__form mt-[2rem] 2xl:order-1  order-2">
            <Card className="w-full 2xl:w-96">
              <h4 className=" text-center font-bold  text-[1.5rem] uppercase">
                Add a project
              </h4>

              <form onSubmit={handleSubmit}>
                <CardBody className="text-center gap-6  grid grid-cols-1">
                  <Input
                    required
                    label="Title"
                    value={projectForm.Title}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, Title: e.target.value })
                    }
                  />

                  <Input
                    required
                    label="Country"
                    value={projectForm.Country}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        Country: e.target.value,
                      })
                    }
                  />

                  <div>
                    <p className=" text-left font-bold mb-3">Thubmnail</p>
                    <input
                      required
                      name="image"
                      type="file"
                      accept="image/*"
                      placeholder="Image"
                      className="flex justify-start"
                      onChange={(e) => setThubmnail(e.target.files[0])}
                    />
                  </div>

                  <div>
                    <p
                      htmlFor="my-textarea"
                      className="text-left font-bold mb-3"
                    >
                      ProjectDescription
                    </p>
                    <textarea
                      id="my-textarea"
                      required
                      value={projectForm.ProjectDescription}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          ProjectDescription: e.target.value,
                        })
                      }
                      rows="3"
                      cols="20"
                      className="w-full border p-2 border-softGray rounded-md"
                    ></textarea>
                  </div>
                  <div>
                    <p for="my-textarea" className="text-left font-bold mb-3">
                      KushInvolment
                    </p>
                    <textarea
                      required
                      id="my-textarea"
                      name="message"
                      rows="3"
                      cols="20"
                      className="w-full border p-2 border-softGray rounded-md"
                      value={projectForm.KushInvolment}
                      onChange={(e) =>
                        setProjectForm({
                          ...projectForm,
                          KushInvolment: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <Input
                    required
                    label="ProjectCategorie"
                    value={projectForm.ProjectCategorie}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        ProjectCategorie: e.target.value,
                      })
                    }
                  />

                  <Input
                    required
                    label="Bradcamp"
                    value={projectForm.Bradcamp}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        Bradcamp: e.target.value,
                      })
                    }
                  />
                  <Input
                    required
                    label="Slug"
                    value={projectForm.Slug}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        Slug: e.target.value,
                      })
                    }
                  />

                  <Button type="submit" size="md">
                    Add project
                  </Button>
                </CardBody>
              </form>
            </Card>
          </div>

          <div className=" mr-10  2xl:col-span-2  2xl:order-2">
            <DataTable
              columns={columns}
              data={filteredMembers}
              // selectableRowsHighlight
              // highlightOnHover
              // selectableRows
              fixedHeader
              title="Project Table"
              subHeader
              subHeaderComponent={
                <div className="relative mb-6 mt-4  shadow-sm">
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
                    className="   bg-[#F9FAFB] border  border-softGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              }
              customStyles={customStyles}
              subHeaderAlign="center"
              pagination
              actions={
                <div className="flex justify-between mb-4 items-center space-x-2">
                  <CSVLink
                    data={projects}
                    headers={headers}
                    filename={"Invest-data.csv"}
                  >
                    <Chip
                      value="Download"
                      className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
                    />
                  </CSVLink>

                  <CSVLink
                    data={projects}
                    headers={headers}
                    filename={"Volunteers-data.csv"}
                  >
                    <Chip
                      color="amber"
                      value=" Download CSV"
                      className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
                    />
                  </CSVLink>

                  <Chip
                    color="indigo"
                    value="Pdf"
                    className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
                  />

                  <Chip
                    color="purple"
                    value="Share"
                    className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
                  />
                </div>
              }
            />
          </div>
        </div>

        {/* // tailwind modal  */}

        <Dialog open={open} handler={handleOpen}>
          <DialogHeader className="  flex justify-between">
            {" "}
            <p className="text-[1.3rem]">
              {singleData.FirstName && singleData.FirstName}
            </p>
            <PDFDownloadLink
              document={<MembersPdf />}
              fileName={`${singleData.FirstName}`}
            >
              {({ loading }) =>
                loading ? (
                  "Loading document..."
                ) : (
                  <Chip
                    value="Dwonlod Pdf "
                    className=" cursor-pointer   capitalize shadow-md active:shadow-sm  text-sm  "
                  />
                )
              }
            </PDFDownloadLink>
            <TiDeleteOutline
              className=" text-[1.5rem] cursor-pointer"
              onClick={handleOpen}
            />
          </DialogHeader>

          <DialogBody>
            <div
              className="grid grid-cols-1 max-h-[80vh]   
            overflow-y-auto 
            xl:grid-cols-2
            
            2xl:overflow-visible  gap-5 2xl:grid-cols-3
          "
            >
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Title
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.Title && singleData.Title}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  First Name
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.FirstName && singleData.FirstName}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Last Name
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.LastName && singleData.LastName}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Email
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.Email && singleData.Email}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Middle Name
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.MiddleName && singleData.MiddleName}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Family LastName
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.FamilyLastName && singleData.FamilyLastName}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Phone
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.Number && singleData.Number}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Street Address
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.StreetAddress && singleData.StreetAddress}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Apartment
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.Apartment && singleData.Apartment}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  State
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.State && singleData.State}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  City
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.City && singleData.City}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  PostalCode
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.PostalCode && singleData.PostalCode}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Country
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.Country && singleData.Country}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  MemberhipPlan
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.MemberhipPlan && singleData.MemberhipPlan}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  CardInfo
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.CardInfo && singleData.CardInfo}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  BillingName
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.BillingName && singleData.BillingName}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  BillingAddress
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.BillingAddress && singleData.BillingAddress}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  BillingApartment
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={
                    singleData.BillingApartment && singleData.BillingApartment
                  }
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  BillingCity
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.BillingCity && singleData.BillingCity}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  BillingState
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.BillingState && singleData.BillingState}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  BillingPostalCode
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={
                    singleData.BillingPostalCode && singleData.BillingPostalCode
                  }
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  BillingCountry
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.BillingCountry && singleData.BillingCountry}
                  disabled
                />
              </div>
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  RegistrationId
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.RegistrationId && singleData.RegistrationId}
                  disabled
                />
              </div>
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </>
  );
}

export default index;
