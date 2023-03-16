import React from "react";
import bg from "../../img/Oji-String-Beans-Farm.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import Card from "./Card";

const Project = ({ data }) => {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <ul className="flex flex-wrap justify-center gap-3">
              <li>Filter by</li>
              <li onClick={() => handleProject("all")}>
                <a>
                  <span className="text-[#cb9833] font-semibold">All</span>
                </a>
              </li>
              {categories?.map((category) => (
                <li
                  onClick={() => handleProject(category?.type)}
                  className="flex gap-2"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-3">
              {projects?.map((project, index) => (
                <Card
                  key={index}
                  id={project.id}
                  name={project.name}
                  country={project.country}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
