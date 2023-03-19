// Import icons
import {
  AiFillLinkedin,
  AiOutlineAppstore,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineUser,
} from "react-icons/ai";

import { GiSkills } from "react-icons/gi";

import { MdOutlineContactMail } from "react-icons/md";

// const linkGitHub={<a href="https://www.linkedin.com/in/bba411124/"></a>})

export const navbars = [
  {
    id: 1,
    iconImage: <AiOutlineUser />,
    iconText: "About me",
    icoId: "idAbout",
  },
  {
    id: 2,
    iconImage: <MdOutlineContactMail />,
    iconText: "Contact",
    icoId: "idContact",
  },
  {
    id: 3,
    iconImage: <GiSkills />,
    iconText: "Skills",
    icoId: "idSkills",
  },
  {
    id: 4,
    iconImage: <AiOutlineAppstore />,
    iconText: "Projects",
    icoId: "idProjects",
  },
  {
    id: 5,
    iconImage: <AiFillLinkedin />,
    iconText: "Linkedin",
    icoId: "idLinkedin",
  },
  {
    id: 6,
    iconImage: <AiOutlineGithub />,
    iconText: "GitHub",
    icoId: "idGitHub",
  },
  {
    id: 7,
    iconImage: <AiOutlineInstagram />,
    iconText: "Instagram",
    iconLinkedin: "linkInstagram",
    icoId: "idInstagram",
  },
];
