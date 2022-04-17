import React from "react";
import { makeStyles } from "@mui/styles";
import { Flexbox } from "../StyledComponents";
import { ContainerProps, Container as MUIContainer } from "../Container";

interface NavbarProps {
  height?: number;
  children?: React.ReactNode;
  Container?: React.FunctionComponent<ContainerProps>;
}

export const Navbar = ({ Container, children, height = 3 }: NavbarProps) => {
  const classes = useStyles(height)();
  Container = Container || MUIContainer;

  return (
    <Container>
      <Flexbox
        alignItems="center"
        justify="space-between"
        className={classes.rootNavbar}
      >
        <div>
          <svg
            style={{ fontSize: "2rem" }}
            width="151"
            height="49"
            viewBox="0 0 151 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.1575 10.8224C32.7789 10.1596 28.011 10.4141 22.8234 11.7513C21.2402 12.1594 16.2597 13.69 19.9244 14.8678C25.3391 16.6079 30.9851 16.933 35.6782 20.0668C41.654 24.0572 41.4678 30.459 35.2013 34.3455C30.9582 36.9771 26.2828 37.1406 21.7172 35.0048C17.2388 32.9097 15.1265 27.6569 17.9599 24.1871C21.527 19.8189 29.0323 19.7718 33.4658 23.1083C37.7268 26.3151 40.1584 30.7332 44.337 34.0159"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M47.7702 24.8463C47.5817 27.0118 46.9023 29.5198 48.1326 31.5736C48.4755 32.1461 49.4662 33.7292 50.3259 32.6973C52.218 30.4263 51.8753 27.5038 51.7182 24.9362C51.6473 23.778 50.5028 20.6403 51.5465 21.4602C51.9461 21.7741 52.1456 22.9964 52.2713 23.363C52.9818 25.4362 53.4269 27.4513 53.6826 29.5809C53.8702 31.1428 54.293 32.6484 54.293 34.2256C54.293 35.1174 54.5664 34.0206 54.6362 33.7461"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M59.0991 20.8008C59.5364 27.2425 60.15 33.6248 61.6739 39.979C61.8943 40.8979 62.8401 43.605 62.5131 42.7058C62.1768 41.7814 61.8887 40.8598 61.5022 39.949"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M58.4125 26.7341C58.7284 25.5207 59.5165 19.906 62.5321 19.842C65.5562 19.7778 65.5718 26.0586 65.3929 27.3634C65.1698 28.9913 63.6458 32.6156 60.8156 32.3377C57.5646 32.0185 58.333 29.2655 59.4424 27.8129"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M73.1745 29.431C74.3105 28.0367 77.8226 24.2193 74.3952 22.8985C71.9222 21.9455 70.3851 23.8662 70.1611 25.6254C69.8943 27.7213 70.4646 31.8079 73.7849 32.3377C76.0694 32.7023 77.3735 30.0651 78.3241 28.8916"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M80.3838 23.2282C81.522 25.5061 83.9524 28.5831 84.0075 31.1391C84.0437 32.8139 82.2179 29.257 82.1194 28.9666C81.4841 27.0954 81.7168 24.6981 83.5498 23.2581C86.0169 21.32 90.2377 21.8797 93.4293 21.8797"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M117.804 24.3069C120.947 21.9881 122.199 20.1639 122.915 16.8304C123.586 13.7084 123.544 9.97132 121.923 7.01665C119.128 1.9191 110.234 -0.43728 106.818 5.51836C104.853 8.94404 104.53 13.2674 104.472 16.9653C104.383 22.6666 104.424 29.0528 106.894 34.4953C108.239 37.4582 111.541 39.8517 115.401 37.7915C119.994 35.3399 121.732 30.5884 123.64 26.7341"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M128.446 26.734C128.474 29.4832 128.635 31.8437 129.896 34.4053C130.287 35.2008 131.577 38.2589 132.89 36.5179C134.302 34.6463 134.187 31.5657 134.263 29.4759C134.356 26.9358 134.232 24.4082 133.939 21.8796"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M141.816 32.089C142.152 34.4221 142.599 35.3547 145.188 36.3943C146.13 36.7727 148.498 37.2224 148.916 38.1094C149.686 39.7469 144.948 39.8878 144.029 39.9528C136.917 40.4566 129.701 40.3015 122.568 40.2795C101.971 40.2161 81.3382 37.9597 60.7544 38.4827C40.5752 38.9956 21.4324 43.1835 2 47"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g clip-path="url(#clip0_26_6)">
              <path
                d="M140.591 24.0836L134.881 22.9312L140.591 21.7796L141.939 16.9012L143.287 21.7796L148.998 22.9312L143.287 24.0843L141.939 28.9627L140.591 24.0836Z"
                fill="#232124"
              />
            </g>
            <defs>
              <clipPath id="clip0_26_6">
                <rect
                  width="14.1162"
                  height="12.0615"
                  fill="white"
                  transform="translate(134.881 16.9012)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        {children}
      </Flexbox>
    </Container>
  );
};

const useStyles = (height: number) => {
  return makeStyles({
    rootNavbar: {
      width: "100%",
      minHeight: `${height}rem`,
    },
  });
};
