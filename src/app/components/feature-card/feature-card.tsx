import Image from "next/image";

type FeatureCardProps = {
  tag: string;
  heading: string;
  text: string;
  imgSrc: string;
};

const FeatureCard = ({ tag, heading, text, imgSrc }: FeatureCardProps) => {
  return (
    <div
      className="w-[100%] flex flex-col gap-12 py-8 px-5 items-center justify-center rounded-lg"
      style={{
        background: "linear-gradient(180deg, #11181f, rgba(17, 24, 31, 0))",
      }}
    >
      <Image src={imgSrc} alt="hero-img" width={60} height={80} />

      <div className="flex flex-col items-center text-center gap-5">
        <p className="text-teal-700 text-lg">{tag.toLocaleUpperCase()}</p>

        <h3 className="text-white text-2xl font-bold">{heading}</h3>

        <p className="text-sky-200">{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
