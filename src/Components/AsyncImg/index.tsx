interface AsyncImgProps {
  src: string;
}

export const AsyncImg = ({ src }: AsyncImgProps) => {
  return <img src={src} loading="lazy" alt={src} />;
};
