import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "front-end development.",
        1500,
        "CCTV installation.",
        1500,
        "computers & network.",
        1500,
        "data analysis.",
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="text-600"
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
