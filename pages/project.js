import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import YouTube from "react-youtube";

function project({ categories }) {
  console.log(categories);
  return (
    <Layout title={"Project"}>
      {categories?.map((category) => (
        <div>
          {category.data?.map((singleData) => (
            <div>
              {singleData.type === "image" && (
                <div>
                  <Image
                    src={singleData.image}
                    alt="My Image"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                  {/* <p>{item.caption}</p> */}
                </div>
              )}
              {singleData.type === "video" && (
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src={singleData.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </Layout>
  );
}

export default project;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/projectCategory.json");
  const categories = await res.json();
  console.log(categories);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { categories },
    revalidate: 1,
  };
}
