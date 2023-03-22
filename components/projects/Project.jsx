import React, { useState, useContext, useEffect } from "react";
import { projectContext } from "@/context/ProjectContext";

import Card from "./Card";

const categories = [
  {
    id: 1,
    title: "Angola",
    type: "Angola",
  },
  {
    id: 2,
    title: "Benin",
    type: "benin",
  },
  {
    id: 3,
    title: "Burkina Faso",
    type: "burkina",
  },
  {
    id: 4,
    title: "DRC",
    type: "drc",
  },
  {
    id: 5,
    title: "Guinea",
    type: "guinea",
  },
  {
    id: 6,
    title: "Indonesia",
    type: "Indonesia",
  },
  {
    id: 7,
    title: "Ivory Coast",
    type: "ivory",
  },
  {
    id: 8,
    title: "Mali",
    type: "mali",
  },
  {
    id: 9,
    title: "Nigeria",
    type: "nigeria",
  },
  {
    id: 10,
    title: "Sudan",
    type: "sudan",
  },
  {
    id: 11,
    title: "Togo",
    type: "togo",
  },
  {
    id: 12,
    title: "Zimbawe",
    type: "zimbawe",
  },
];

const Project = () => {
  const { projectData, setProjectData } = useContext(projectContext);

  const [filter, setFilter] = useState(null);

  const [click, setClick] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleProject = (type) => {
    setSelectedCategory(type);

    if (type === "all") {
      setClick(false);
      setProjectData(projectData);
    } else {
      setClick(true);
      const filterProject = projectData?.data?.filter(
        (project) =>
          project.attributes.Country.toLowerCase() == type.toLowerCase()
      );
      setFilter(filterProject);
    }
  };

  return (
    <>
      <section className="dark:bg-[#161519]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <ul className="flex flex-wrap justify-center gap-3">
              <li onClick={() => handleProject("all")}>
                <a>
                  <span className="text-[#cb9833] font-semibold">All</span>
                </a>
              </li>
              {categories?.map((category) => (
                <li
                  onClick={() => handleProject(category?.type)}
                  className="flex gap-4"
                  key={category.id}
                >
                  /
                  <a>
                    <span className="text-[#cb9833] font-semibold">
                      {category.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <h3 className="text-primary text-xl font-semibold">
                {selectedCategory}
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-3">
              {projectData !== null && !click
                ? projectData?.data.map((project, index) => (
                    <Card key={index} data={project} />
                  ))
                : filter?.map((project, index) => (
                    <Card key={index} data={project} />
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
