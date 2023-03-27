import React, { useContext } from "react";
import { useRouter } from "next/router";
import { API_URL, API_TOKEN } from "@/config/index";
import Layout from "@/components/Layout";
import { projectContext } from "@/context/ProjectContext";
import ShowProject from "@/components/projects/ShowProject";


function showProject() {

  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center font-bold text-primary">Loading...</div>;
  }

  const { projectData } = useContext(projectContext);

  const filteredProduct = projectData?.data.find(
    (data) => data.attributes.Slug === router.query.slug
  );


  return (
    <Layout title={"Project"}>
      <ShowProject data={filteredProduct} />
    </Layout>
  );
}

export default showProject;

// `getStaticPaths` requires using `getStaticProps`

export async function getStaticProps({ params }) {
  return {
    // Passed to the page component as props
    props: { params },
    revalidate: 3,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/projects`, {
    headers: {
      Authorization: API_TOKEN,
    },
  });

  const path = await res.json();

  return {
    paths: path.data.map((path) => {
      return {
        params: {
          slug: path.attributes.Slug,
        },
      };
    }),

    fallback: true, 
  };
}

