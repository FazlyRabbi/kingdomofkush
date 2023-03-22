import React, { useContext } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { projectContext } from "@/context/ProjectContext";
import ShowProject from "@/components/projects/ShowProject";

function showProject() {
  const router = useRouter();
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
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/projects?populate=*`);

  const path = await res.json();
  console.log(path);
  return {
    paths: path.data.map((project) => {
      return {
        params: {
          slug: project.attributes.Slug,
        },
      };
    }),

    fallback: false,
  };
}
