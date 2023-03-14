import React from "react";
import Layout from "@/components/Layout";
import Project from "@/components/projects/Project";

import img1 from "../img/projects/Adang-Peppercorn-Farm.jpg"
import img2 from "../img/projects/Benin_Soybean-01.jpg"
import img3 from "../img/projects/Benin_Soybean-02.jpg"
import img4 from "../img/projects/Eeng-Coffee-Plantation.jpg"
import img5 from "../img/projects/Gita-Corn-Farm.jpg"
import img6 from "../img/projects/Idrus-Rice-Field.jpg"
import img7 from "../img/projects/Iing-Tomato-Farm.jpg"
import img8 from "../img/projects/Ivory-Coast_Rice-Farm.jpg"
import img9 from "../img/projects/Rossy-Goat-and-Beef-Cattle-Farming-scaled.jpg"
import img10 from "../img/projects/Togo_Soccer-team-practice-01.jpg"


const projects = [
  {
    id: "1",
    name: "sfd",
    country: "Angola",
    url:img1.src
  },
  {
    id: "2",
    name: "fsd",
    country: "Zimbawe",
    url:img2.src
  },
  {
    id: "3",
    name: "sfd",
    country: "Togo",
    url:img3.src
  },
  {
    id: "4",
    name: "sfd",
    country: "Sudan",
    url:img4.src
  },
  {
    id: "5",
    name: "hello",
    country: "Nigeria",
    url:img5.src
  },
  {
    id: "6",
    name: "hello",
    country: "Mali",
    url:img6.src
  },

  {
    id: "7",
    name: "hello",
    country: "Angola",
    url:img7.src
  },
  {
    id: "8",
    name: "hello",
    country: "Angola",
    url:img8.src
  },
  {
    id: "9",
    name: "hello",
    country: "Angola",
    url:img9.src
  },
  {
    id: "10",
    name: "hello",
    country: "Angola",
    url:img10.src
  },
];

// export async function getStaticProps({ params }) {

//   const res = await fetch(
//    `http://localhost:3000/project.json`
//  );

//  const data = await res.json();
//  return {
//    props: {
//       data:data
//    },

//  };
// }

function project({ data }) {
  console.log(data);
  return (
    <Layout title={"Project"}>
      <Project data={projects} />
    </Layout>
  );
}

export default project;
