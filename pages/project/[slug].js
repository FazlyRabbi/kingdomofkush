import React, { useContext } from "react";
import { useRouter } from "next/router";
import { API_URL, API_TOKEN } from "@/config/index";
import Layout from "@/components/Layout";
import { projectContext } from "@/context/ProjectContext";
import ShowProject from "@/components/projects/ShowProject";

function showProject({params}) {

  const router = useRouter();

  // if (router.isFallback) {
  //   return <div className="text-center font-bold text-primary">Loading...</div>;
  // }

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

export async function getStaticProps({ params }) {
  return {
    props: { params },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/projects?populate=*`, {
    headers: {
      Authorization: API_TOKEN,
    },
  });

  const path = await res.json();

  return {
    paths: path.data.map((project) => {
      return {
        params: {
          slug: project.attributes.Slug,
        },
      };
    }),

    fallback: true,
  };
}
