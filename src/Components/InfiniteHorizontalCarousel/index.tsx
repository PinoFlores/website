/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";

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

export const InfiniteHorizontalCarousel = () => {
  const pictures = [...imgs, ...imgs];
  console.log(pictures.length);

  const frame = keyframes`
  0% {
    transform: translateX(0);
	}
	100% {
        transform: translateX(calc(-30px * ${pictures.length}));
	}
`;

  return (
    <div
      css={css`
        width: 70%;
        margin: auto;
        overflow: hidden;
        position: relative;
        border-right: 1px solid #fafcfd;
        &::before,
        &::after {
          background: linear-gradient(
            to right,
            #fafcfd 10%,
            #fafcfd 20%,
            rgba(255, 255, 255, 0) 100%
          );
          z-index: 2;
          content: "";
          width: 50px;
          height: 100px;
          position: absolute;
        }

        &::after {
          right: 0;
          top: 0;
          transform: rotateZ(180deg);
        }
      `}
    >
      <div
        css={css`
          display: flex;
          transform: translateX(70);
          width: calc(50px * ${pictures.length});
          animation: ${frame} 10s linear infinite;
        `}
      >
        <div
          style={{
            height: "50px",
            minWidth: "50px",
            padding: "0.5rem",
          }}
        />

        {pictures.map((src, i) => {
          return (
            <div>
              <img
                key={i}
                alt={src}
                src={src}
                width={50}
                height={50}
                style={{ padding: "0.5rem" }}
              />
            </div>
          );
        })}

        <div
          style={{
            minWidth: "70px",
            height: "70px",
            padding: "0.5rem",
          }}
        />
      </div>
    </div>
  );
};
