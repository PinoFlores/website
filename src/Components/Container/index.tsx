import React from "react";
import { makeStyles } from "@mui/styles";

export interface ContainerProps {
  maxWidth?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Container = ({
  style,
  children,
  className = "",
  maxWidth = "80%",
}: ContainerProps) => {
  const classes = useStyles(maxWidth)();
  const classList = `${className} ${classes.containerComponent}`.trim();

  return (
    <div style={style} className={classList}>
      {children}
    </div>
  );
};

const useStyles = (maxWidth: string) => {
  return makeStyles({
    containerComponent: {
      width: maxWidth,
      margin: "0 auto",
    },
  });
};
