import React from "react";

import moment from "moment";
import styled from "@emotion/styled";
import { Flexbox } from "./../StyledComponents/index";
import { ICurriculum, IExperience } from "../../types/Curriculum";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material";

const icons = {
  phone: PhoneForwardedIcon,
  email: MailIcon,
  social: LinkedInIcon,
};

interface CurriculumProps {
  metadata: ICurriculum;
}

export const Curriculum = ({ metadata }: CurriculumProps) => {
  const { palette } = useTheme();
  const { experiences } = metadata;

  return (
    <CurriculumPaper>
      <Grid columns="16rem 1.5fr" style={{ padding: "1.5rem 1rem" }}>
        <Flexbox
          justify="center"
          style={{ position: "relative", padding: "1.5rem" }}
        >
          <Avatar width="80%" src={metadata.img} />
          <div
            style={{
              top: 0,
              width: "90%",
              height: "90%",
              borderRadius: "8px",
              position: "absolute",
              transform: `rotate(2deg)`,
              border: "1px solid #3e3e3e9e",
            }}
          />
          <div
            style={{
              top: 2,
              width: "96%",
              height: "96%",
              position: "absolute",
              borderRadius: "8px",
              transform: `rotate(-2deg)`,
              border: "1px solid #3e3e3e9e",
            }}
          />
        </Flexbox>
        <Flexbox>
          <div>
            <div style={{ position: "relative" }}>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "3rem",
                  margin: 0,
                  height: "10px",
                  marginBottom: "3.2rem",
                }}
              >
                {metadata.firstName} {metadata.lastName}
              </h1>
            </div>
            <h2 style={{ margin: 0, color: "#2079ff", fontWeight: 500 }}>
              {metadata.professionTitle}
            </h2>

            <p style={{ textAlign: "justify", marginTop: "10px" }}>
              {metadata.presentationText}
            </p>

            <Flexbox style={{ marginTop: "10px" }}>
              {metadata.contacts.map((contact, index) => {
                const { type, label } = contact;

                const Icon = icons[type];

                return (
                  <Flexbox
                    key={index}
                    alignItems="center"
                    style={{ marginRight: "12px" }}
                  >
                    <Icon color="primary" /> &nbsp; &nbsp;{" "}
                    <p style={{ color: palette.primary.main }}>{label}</p>
                  </Flexbox>
                );
              })}
            </Flexbox>
          </div>
        </Flexbox>
      </Grid>
      <br />
      {/* Left Side */}
      <Grid columns="18rem 1.5fr" style={{ padding: "0 1rem" }}>
        <div>
          <p style={{ textAlign: "justify" }}>
            IT lover • Easy Learning • Critical Analisys • Great Idea • Good
            comunication • Algoritms design and analisis • Full Understand of
            Data Structure • Good Eye for UI • Mobile Knowladge • Database
            design
          </p>
        </div>
        <div>
          <p
            style={{
              margin: "12px 0px",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            PROFESSINAL EXPERIENCE
          </p>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </Grid>
    </CurriculumPaper>
  );
};

const CurriculumPaper = styled.div`
  padding: 10px;
  width: 210mm;
  height: 297mm;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

// ==================================

interface AvatarProps {
  size?: number;
  borderRadius?: number;
}

const Avatar = styled.img<AvatarProps>`
  background-color: #5c5f69;
  width: ${(props) => props.size || 100}%;
  border-radius: ${(props) => props.borderRadius || 6}px;
`;

interface GridProps {
  gap?: number;
  columns: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${(props) => props.columns};
  grid-column-gap: ${(props) => props.gap || 2}rem;
`;

interface ExperienceProps {
  experience: IExperience;
}

const ExperienceItem = ({ experience }: ExperienceProps) => {
  const date = moment(experience.date);
  return (
    <div style={{ position: "relative", marginBottom: "1.5rem" }}>
      <ExperienceDecoration>
        <ExperienceItemCircle />
        <ExperienceItemLine />
      </ExperienceDecoration>
      <div style={{ marginLeft: "1.5rem" }}>
        <Flexbox alignItems="center">
          <h3>
            {experience.job} / {experience.title}
          </h3>
          &nbsp; &nbsp;
          <p style={{ fontSize: "14px" }}>
            {date.isValid() ? date.format("MM/YY") : experience.date}
          </p>
        </Flexbox>
        <p style={{ fontSize: "14px" }}>
          {experience.company.name} | {experience.company.location}
        </p>
        <p style={{ marginTop: "12px", textAlign: "justify" }}>
          {experience.description}
        </p>

        <ul style={{ marginLeft: "1rem", marginTop: "12px" }}>
          {experience.resposabilities.map((resposability, index) => (
            <li key={index}>{resposability}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceDecoration = styled.div`
  top: 7px;
  left: -6.5px;
  height: 100%;
  position: absolute;
`;

const ExperienceItemCircle = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 100px;
  border: 1px solid #2f3236;
`;

const ExperienceItemLine = styled.div`
  width: 1px;
  height: 100%;
  margin-left: 7px;
  background-size: 3px 8px;
  background-repeat: repeat-y;
  background-image: linear-gradient(
    180deg,
    #2f3236 40%,
    hsla(0, 0%, 100%, 0) 2px
  );
`;
