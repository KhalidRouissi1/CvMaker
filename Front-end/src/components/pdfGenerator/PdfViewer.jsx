import React, { useState , useContext,useEffect} from 'react'
import { UserContext } from '../../context/userContext'
import FormComponent from './FormComponent'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';





const PdfViewer= React.memo(()=> {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneN, setPhoneN] = useState('');
  const [Eaddress, setEaddress] = useState('');
  const [aboutMe, setaboutMe] = useState('');
  const [school, setSchool] = useState('');
  const [Schooldescription, setSchooldescription] = useState('');
  const [degree, setDegree] = useState('');
  const [dateG, setDateG] = useState('');
  const [mode,seteMode]=useState('')
  const [indexProject,setIndexProject]=useState('')
  const[indexSkill,setIndexSkill]=useState(0)
  const [popup,setPopup]=useState(false)
  const [color, setColor] = useState("#7c6ed5");
  const [skills, setSkills] = useState([""]);
  const[projects,setProjects]=useState([
    {
      name:"",
      description:"",
    }
  ])
  const {idUser } = useContext(UserContext)
  // Function to handle form submission and update CV
  useEffect(() => {
const updateCV = async (e) => {
  // e.preventDefault();
  try {
      const workExperience = projects.map((project) => ({
        ProjectName: project.name,
        Description: project.description,
      }));
      console.log("workExperience : ",workExperience)

      const cvSkills = skills.map((skill) => ({ SkillName: skill }));
      console.log("cvSkills : ",cvSkills)

  const cvData = {
    Name:     firstName,
    LastName: lastName,
    Email:    Eaddress,
    Phone:    phoneN,
    AboutMe:  aboutMe,
    Color:    color,
    Education: {
      school: school,
      degree: degree,
      year:   dateG,
      description: Schooldescription,
    },
    WorkExperience: workExperience,
    Skills: cvSkills,
    // Add other fields of CV as needed
  };
      const response = await fetch(`http://localhost:8000/api/cv/${idUser}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(cvData)
      });

      if (response.ok) {
          // CV updated successfully
          console.log('CV updated successfully');
          console.log(cvData)
      } else {
          // Handle error
          console.error('Failed to update CV');
      }
  } catch (error) {
      console.error('Error:', error);
  }
};
updateCV ();
}, [firstName, Eaddress, Schooldescription, aboutMe, color, dateG, degree, idUser, lastName,
 phoneN,school, skills,projects]);

// Call the updateCV function when needed, e.g., on form submission
// const handleSubmit = (e) => {
  
//   updateCV();
// };

  const showPopup=(index)=>{
    setIndexSkill(index)
    setPopup(true)
    seteMode('skills')
  }
  const showPopupProject=(index)=>{
    setIndexProject(index)
    setPopup(true)
    seteMode('projects')
  }
  const addInputProjucts = () => {
    const newProject = { name: "", description: "" };
    setProjects([...projects, newProject]);
  };
  const handleProjectNameChange = (index, value) => {
    const newProject=[...projects]
    newProject[index]={...newProject[index], name: value };
      setProjects(newProject); 
      console.log(projects)
  };
  const handleProjectDescriptionChange = (index, value) => {
    const newProject=[...projects]
    newProject[index]={...newProject[index], description: value };
      setProjects(newProject); 
  };
  const deleteInputProjects = (index) => {
    // Make a copy of the inputs array
    const Projects = [...projects];
    // Remove the item at the specified index using splice
    Projects.splice(index, 1);
    // Update the state with the modified Inputs array
    setProjects(Projects)
    setPopup(false)
  }

  const deleteInputSkills = (index) => {
    // Make a copy of the inputs array
    const Skills = [...skills];
    // Remove the item at the specified index using splice
    Skills.splice(index, 1);
    // Update the state with the modified Inputs array
    setSkills(Skills);
    setPopup(false)
    
  }
  const addInputSkills = () => {
    setSkills([...skills, '']);
  };
  const handleSkillsChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills); 
    console.log("lenghth",skills.length) 
  };
  const handleColorChange = (Ncolor) => {
    setColor(Ncolor)
  };

  const handlelDegreeChange = (e) => {
    setDegree(e.target.value);
  };
  const handlelDateGChange = (e) => {
    setDateG(e.target.value);
    console.log(dateG)
  };
  const handlelDescriptionChange = (e) => {
    setSchooldescription(e.target.value);
  };
  const handleschoolChange = (e) => {
    setSchool(e.target.value);
  };
  const handleaboutMeChange = (e) => {
    setaboutMe(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    
    
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneN(e.target.value);
  };

  const handleEaddressChange = (e) => {
    setEaddress(e.target.value);
  };
  // Add more event handlers as needed
  const cookies = new Cookies();
  const cookie = cookies.get('jwt');

  return (
    <div>
      {
           !cookie &&(
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                  <h2 className="text-2xl font-bold mb-4">Login Required</h2>
                  <p className="text-gray-600 mb-4">Please login to continue.</p>
                  <Link to="/login" className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-700 text-center">
                    Login
                  </Link>
                </div>
              </div>)
      }

            <div className="form-container">
        <FormComponent
          firstName={firstName}
          lastName={lastName}
          phoneN={phoneN}
          Eaddress={Eaddress}
          aboutMe={aboutMe}
          school={school}
          degree={degree}
          dateG={dateG}
          mode={mode}
          indexProject={indexProject}
          indexSkill={indexSkill}
          popup={popup}
          color={color}
          skills={skills}
          projects={projects}
          Schooldescription={Schooldescription}
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
          handlePhoneChange={handlePhoneChange}
          handleEaddressChange={handleEaddressChange}
          handleaboutMeChange={handleaboutMeChange}
          handleschoolChange={handleschoolChange}
          handlelDescriptionChange={handlelDescriptionChange}
          handlelDegreeChange={handlelDegreeChange}
          handlelDateGChange={handlelDateGChange}
          addInputSkills={addInputSkills}
          handleSkillsChange={handleSkillsChange}
          handleColorChange ={handleColorChange }
          deleteInputSkills={deleteInputSkills}
          deleteInputProjects={deleteInputProjects}
          handleProjectDescriptionChange={handleProjectDescriptionChange}
          handleProjectNameChange={handleProjectNameChange}
          addInputProjucts={addInputProjucts}
          showPopupProject={showPopupProject}
          showPopup={showPopup}
          setPopup={setPopup}
        />
      </div>

      </div>
  )
})
export default PdfViewer;
