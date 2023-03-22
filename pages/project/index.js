import React from "react";
import Layout from "@/components/Layout";

import Project from "@/components/projects/Project";

function project() {




  return (
    <Layout title={"Project"}>
      {" "}
      <Project/>
    </Layout>
  );
}

export default project;

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(`https://kingdomofkush-backend.onrender.com/api/projects?populate=*`);
//   const projects = await res.json();
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: { projects },
//     revalidate: 1,
//   };
// }
