import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import FormComponent from "./FormComponent";
import { Link } from "react-router-dom";

const PdfViewer = React.memo(() => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [school, setSchool] = useState("");
  const [schoolDescription, setSchoolDescription] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [mode, setMode] = useState("");
  const [indexProject, setIndexProject] = useState("");
  const [indexSkill, setIndexSkill] = useState(0);
  const [popup, setPopup] = useState(false);
  const [color, setColor] = useState("#7c6ed5");
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const { idUser } = useContext(UserContext);
  const token = localStorage.getItem("token");

  // Fetch CV data on component mount
  useEffect(() => {
    const fetchCVData = async () => {
      try {
        const response = await fetch("http://localhost:8088/api/v1/auth/myCv", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setName(data.name || "");
          setLastName(data.lastName || "");
          setEmail(data.email || "");
          setPhone(data.phone || "");
          setAboutMe(data.aboutMe || "");
          setSchool(data.education?.school || "");
          setSchoolDescription(data.education?.description || "");
          setDegree(data.education?.degree || "");
          setYear(data.education?.year || "");
          setColor(data.color || "#7c6ed5");
          setSkills(data.skills?.map((skill) => skill.skillName) || []);
          setProjects(
            data.workExperience?.map((exp) => ({
              projectName: exp.projectName,
              description: exp.description,
            })) || []
          );
        } else {
          console.error("Failed to fetch CV data");
        }
      } catch (error) {
        console.error("Error fetching CV data:", error);
      }
    };

    fetchCVData();
  }, [token]);

  // Save skills and projects to local storage on each change
  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [skills, projects]);

  // Other existing useEffect for updating CV
  useEffect(() => {
    const updateCV = async () => {
      try {
        const workExperience = projects.map((project) => ({
          projectName: project.projectName,
          description: project.description,
        }));

        const cvSkills = skills.map((skill) => ({ skillName: skill }));

        const cvJsonData = {
          name,
          lastName,
          email,
          phone,
          aboutMe,
          color,
          education: {
            school,
            degree,
            year,
            description: schoolDescription,
          },
          workExperience,
          skills: cvSkills,
        };

        const response = await fetch(`http://localhost:8088/api/v1/auth/myCv`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const updateResponse = await fetch(
            `http://localhost:8088/api/v1/cv/${data.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(cvJsonData),
            }
          );

          if (updateResponse.ok) {
            console.log("CV updated successfully");
            console.log(JSON.stringify(cvJsonData));
          } else {
            console.error("Failed to update CV");
          }
        } else {
          console.error("Failed to fetch CV ID");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    updateCV();
  }, [
    name,
    email,
    schoolDescription,
    aboutMe,
    color,
    year,
    degree,
    idUser,
    lastName,
    phone,
    school,
    skills,
    projects,
    token,
  ]);

  const showPopup = (index) => {
    setIndexSkill(index);
    setPopup(true);
    setMode("skills");
  };

  const showPopupProject = (index) => {
    setIndexProject(index);
    setPopup(true);
    setMode("projects");
  };

  const addInputProjects = () => {
    const newProject = { projectName: "", description: "" };
    setProjects([...projects, newProject]);
  };

  const handleProjectNameChange = (index, value) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], projectName: value };
    setProjects(newProjects);
  };

  const handleProjectDescriptionChange = (index, value) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], description: value };
    setProjects(newProjects);
  };

  const deleteInputProjects = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
    setPopup(false);
  };

  const deleteInputSkills = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
    setPopup(false);
  };

  const addInputSkills = () => {
    setSkills([...skills, ""]);
  };

  const handleSkillsChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleDateChange = (e) => {
    setYear(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setSchoolDescription(e.target.value);
  };

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      {!token && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Login Required</h2>
            <p className="text-gray-600 mb-4">Please login to continue.</p>
            <Link
              to="/login"
              className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-700 text-center"
            >
              Login
            </Link>
          </div>
        </div>
      )}

      <div className="form-container">
        <FormComponent
          firstName={name}
          lastName={lastName}
          phoneN={phone}
          Eaddress={email}
          aboutMe={aboutMe}
          school={school}
          degree={degree}
          year={year}
          mode={mode}
          indexProject={indexProject}
          indexSkill={indexSkill}
          popup={popup}
          color={color}
          skills={skills}
          projects={projects}
          schoolDescription={schoolDescription}
          onFirstNameChange={handleNameChange}
          onLastNameChange={handleLastNameChange}
          handlePhoneChange={handlePhoneChange}
          handleEaddressChange={handleEmailChange}
          handleAboutMeChange={handleAboutMeChange}
          handleSchoolChange={handleSchoolChange}
          handleDescriptionChange={handleDescriptionChange}
          handleDegreeChange={handleDegreeChange}
          handleDateChange={handleDateChange}
          addInputSkills={addInputSkills}
          handleSkillsChange={handleSkillsChange}
          handleColorChange={handleColorChange}
          deleteInputSkills={deleteInputSkills}
          deleteInputProjects={deleteInputProjects}
          handleProjectDescriptionChange={handleProjectDescriptionChange}
          handleProjectNameChange={handleProjectNameChange}
          addInputProjects={addInputProjects}
          showPopup={showPopup}
          showPopupProject={showPopupProject}
        />
      </div>
    </div>
  );
});

export default PdfViewer;
