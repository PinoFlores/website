import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Curriculum, Navbar, Container } from "../../Components";
import { ICurriculum } from "../../types/Curriculum";
import { Flexbox } from "../../Components/StyledComponents";
import React from "react";
import { AsyncImg } from "../../Components/AsyncImg";

interface CommonContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const CommonContainer = (props: CommonContainerProps) => {
  return <Container maxWidth="70%" {...props} />;
};

const imgs = [
  "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "https://cdn.worldvectorlogo.com/logos/webpack-icon.svg",
  "https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg",
  "https://cdn.worldvectorlogo.com/logos/graphql.svg",
  "https://cdn.worldvectorlogo.com/logos/redux.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  "https://cdn.worldvectorlogo.com/logos/cucumber.svg",
  "https://cdn.worldvectorlogo.com/logos/redis.svg",
  "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
  "https://cdn.worldvectorlogo.com/logos/hibernate.svg",
  "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  "https://cdn.worldvectorlogo.com/logos/kafka.svg",
  "https://cdn.worldvectorlogo.com/logos/rabbitmq.svg",
  "https://cdn.worldvectorlogo.com/logos/php-1.svg",
  "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
  "https://cdn.worldvectorlogo.com/logos/android.svg",
  "https://cdn.worldvectorlogo.com/logos/docker-3.svg",
  "https://cdn.worldvectorlogo.com/logos/kubernets.svg",
  "https://cdn.worldvectorlogo.com/logos/java-4.svg",
  "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
  "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  "https://cdn.worldvectorlogo.com/logos/nginx-1.svg",
  "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
  "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-2019.svg",
  "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-cs6.svg",
  "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
];
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
      <header className="header">
        <Navbar height={3} Container={CommonContainer}>
          <Flexbox>
            <Flexbox>
              <Button variant="text" style={{ textTransform: "none" }}>
                <Typography color="MenuText">Home</Typography>
              </Button>
              &nbsp;
              <Button variant="text" style={{ textTransform: "none" }}>
                <Typography color="MenuText">Curriculum</Typography>
              </Button>
              &nbsp;
              <Button variant="text" style={{ textTransform: "none" }}>
                <Typography color="MenuText">Portfolio</Typography>
              </Button>
              &nbsp;
              <Button variant="text" style={{ textTransform: "none" }}>
                <Typography color="MenuText">Blog</Typography>
              </Button>
            </Flexbox>
            <Flexbox style={{ marginLeft: "2rem" }}>
              <Button variant="contained" disableElevation color="warning">
                Join Now
              </Button>
              &nbsp; &nbsp;
              <Button variant="outlined" color="warning">
                Enter
              </Button>
            </Flexbox>
          </Flexbox>
        </Navbar>
        <CommonContainer className="headerInnerContainer">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                <h2
                  style={{
                    margin: 0,
                    height: "1rem",
                    color: "#F65F0E",
                    fontFamily: "'Permanent Marker', cursive",
                  }}
                >
                  Hello
                </h2>
                <div
                  style={{ position: "absolute", left: "50%", top: "-10px" }}
                >
                  <svg
                    width="77"
                    height="41"
                    viewBox="0 0 77 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_26_5)">
                      <path
                        d="M8.89863 32.1007L0 29.9988L8.89863 27.8981L10.9994 19L13.1002 27.8981L22.0001 29.9988L13.1002 32.102L10.9994 41.0001L8.89863 32.1007Z"
                        fill="#F65F0E"
                      />
                    </g>
                    <g clip-path="url(#clip1_26_5)">
                      <path
                        d="M36.8986 13.1007L28 10.9988L36.8986 8.89811L38.9994 0L41.1002 8.89811L50.0001 10.9988L41.1002 13.102L38.9994 22.0001L36.8986 13.1007Z"
                        fill="#F65F0E"
                      />
                    </g>
                    <g clip-path="url(#clip2_26_5)">
                      <path
                        d="M63.8986 32.1007L55 29.9988L63.8986 27.8981L65.9994 19L68.1002 27.8981L77.0001 29.9988L68.1002 32.102L65.9994 41.0001L63.8986 32.1007Z"
                        fill="#F65F0E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_26_5">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0 19)"
                        />
                      </clipPath>
                      <clipPath id="clip1_26_5">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(28)"
                        />
                      </clipPath>
                      <clipPath id="clip2_26_5">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(55 19)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h1
                  style={{
                    margin: 0,
                    height: "5.5rem",
                    color: "#263846",
                    fontSize: "5rem",
                    fontFamily: "Poppins",
                  }}
                >
                  I'm Jose Aburto
                </h1>
                <svg
                  width="700"
                  height="28"
                  viewBox="0 0 751 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M711.693 3C713.39 7.38107 715.646 9.1323 728.733 11.0845C733.496 11.7951 745.465 12.6395 747.574 14.3052C751.467 17.3801 727.519 17.6447 722.878 17.7668C686.93 18.7128 650.459 18.4215 614.41 18.3803C510.31 18.2611 406.026 14.024 301.992 15.0063C200.003 15.9692 101.215 17.8335 3 25"
                    stroke="#263846"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h6
                style={{
                  margin: 0,
                  fontSize: "2.2rem",
                  color: "#F65F0E",
                }}
              >
                Full Stack Software Engineer
              </h6>
            </div>
            <br />
            <Typography variant="h4" fontSize={22}>
              IT lover • Easy Learning • Critical Analisys • Great Idea • Good
              comunication • Algoritms design and analisis Full Understand of
              Data Structure • Good Eye for UI • Mobile Knowladge • Database
              design
            </Typography>
            <br />
            <br />
            <div className="img-container">
              {imgs.map((src, i) => {
                return <AsyncImg src={src} />;
              })}
            </div>
          </div>
        </CommonContainer>
      </header>

      <br />
      <br />
      <br />
      <Container>
        <Flexbox justify="center">
          <Curriculum metadata={cv} />
        </Flexbox>
      </Container>
    </Box>
  );
};
const useStyles = makeStyles({
  root: {
    "& .img-container": {
      "& img": {
        height: "70px",
        width: "70px",
        padding: "0.5rem",
      },
    },
    background: "#fafcfd",
    "& .headerInnerContainer": {
      padding: "6rem 0 2rem 0",
    },
    "& .header": {
      height: "100vh",
    },
  },
});
