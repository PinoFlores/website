import styled from "@emotion/styled";

interface FlexboxProps {
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  direction?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial"
    | "inherit";
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
}

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;

  flex-wrap: ${(props) => props?.wrap || "wrap"};
  flex-direction: ${(props) => props?.justify || "row"};
  align-items: ${(props) => props?.alignItems || "flex-start"};
  justify-content: ${(props) => props?.justify || "flex-start"};
`;
