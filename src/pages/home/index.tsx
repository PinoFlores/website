import * as React from "react";

import { Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import { Curriculum } from "../../Components";
import { ICurriculum } from "../../types/Curriculum";
import { Flexbox } from "../../Components/StyledComponents";

export const HomePage = () => {
  const classes = useStyles();

  const cv: ICurriculum = {
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQFEvfVLdcIr0A/profile-displayphoto-shrink_800_800/0/1553727303871?e=1655337600&v=beta&t=W0-HvUApchHf00PqgMzlTzXY5LdcWzvabXM6D8nBdFQ",
    firstName: "Jose",
    lastName: "Aburto Flores",
    professionTitle: "Full Stack Web Engineer",
    presentationText:
      "IT lover • Easy Learning • Critical Analisys • Great Idea • Good comunication • Algoritms design and analisis • Full Understand of Data Structure • Good Eye for UI • Mobile Knowladge • Database design",
    contacts: [
      { type: "phone", label: "+34 6665544" },
      { type: "social", label: "@joseaburto", link: "" },
      { type: "email", label: "joseaburto@gmail.com" },
    ],
    experiences: [
      {
        job: "Frontend Developer",
        title: "TITLE",
        date: new Date(),
        company: {
          name: "Compact Company",
          location: "Managua, Nic",
        },
        description: "",
        resposabilities: [
          "Design, layout and programming different websites for different client from US.",
        ],
      },
      {
        job: "Junior Full Stack",
        title: "TITLE",
        date: new Date(),
        company: {
          name: "CCSS",
          location: "Heredia, Costa Rica",
        },
        description: "",
        resposabilities: [
          "API design and implementation in Java",
          "Microservices with Spring framework",
          "System maintance and documentation",
          "Web Development with Reactjs",
        ],
      },
      {
        job: "Full Stack Engineer",
        title: "TITLE",
        date: "current",
        company: {
          name: "Delinternet",
          location: "Tarragona, Spain",
        },
        description: "",
        resposabilities: [
          "Product Owner",
          "Junior UX/UI Designer",
          "Frontend Architecture",
          "Backend Architecture",
          "Databases Design - SQL / NO-SQL",
        ],
      },
      {
        job: "React Native Developer",
        title: "",
        date: "freelance",
        company: {
          name: "Delinternet",
          location: "Tarragona, Spain",
        },
        description:
          "Collaborate in free days with freelance team in develop android apps.",
        resposabilities: ["Component Design", "Testing"],
      },
    ],
  };

  return (
    <Box className={classes.root}>
      <div className={classes.container}>
        <div className={classes.navbar}></div>
        <Container maxWidth="md">
          <div>
            <Typography variant="h6">Hi, my name is</Typography>
            <Typography variant="h1">Jose Aburto</Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est
              voluptatibus cupiditate facere modi eligendi in? Mollitia,
              recusandae neque beatae unde nostrum exercitationem similique ipsa
              quis perspiciatis, consectetur animi facilis.
            </Typography>
          </div>
          <div>
            <Flexbox justify="center">
              <Curriculum metadata={cv} />
            </Flexbox>
          </div>
        </Container>
      </div>
      <div className={classes.backgroundContainer} />
    </Box>
  );
};
const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  container: {
    zIndex: 2,
    height: "100vh",
    position: "relative",
    background: "linear-gradient(180deg, #e4edf8 30%, #c6d7eb 90%)",
  },
  backgroundContainer: {
    zIndex: 0,
    width: "100%",
    height: "100vh",
    position: "absolute",
    background: "linear-gradient(180deg, #c6d7eba0 90%, #C6D7EB 100%)",
  },
  navbar: {
    padding: "1rem",
  },
  curriculumContainer: {
    zIndex: 2,
    width: "100%",
    padding: "1rem",
    height: "100vh",
  },
});
