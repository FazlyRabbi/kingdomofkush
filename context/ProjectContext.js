import { createContext, useEffect, useState } from "react";

import { API_URL, API_TOKEN } from "@/config/index";

export const projectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const projectIninitalForm = {
    Title: "",
    Slug: "",
    Country: "",
    ProjectDescription: "",
    KushInvolment: "",
    Country: "",
    RegistrationId: "",
    Bradcamp: "",
    ProjectCategorie: "",
    VideoUrl: "",
    Replay: {
      Name: "",
      Email: "",
      Phone: "",
    },
  };

  const [projectForm, setProjectForm] = useState(projectIninitalForm);

  const [projectData, setProjectData] = useState(null);

  const loadProjectData = async () => {
    const res = await fetch(`${API_URL}/api/projects?populate=*`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: API_TOKEN,
      },
    });
    const projects = await res.json();

    setProjectData(projects);
  };

  useEffect(() => {
    loadProjectData();
  }, []);

  return (
    <projectContext.Provider
      value={{
        projectForm,
        setProjectForm,
        projectIninitalForm,
        projectData,
        setProjectData,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};
