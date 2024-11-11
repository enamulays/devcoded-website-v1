import Image from "next/image";
import React from "react";
import TextTitle from "../element/TextTitle";

interface Sprops {
  image: string;
  title: string;
  subtitle: string;
  subtitle2?: string;
  btntitle?: string;
  cn?: string;
  boxstyle?: string;
  icon?: boolean;
  h2style?: string;
  h4style?: string;
  imgstyle?: string;
}

const ImageTextCard = ({
  image,
  title,
  subtitle,
  subtitle2,
  btntitle,
  cn,
  boxstyle,
  icon,
  h2style,
  h4style,
  imgstyle,
}: Sprops) => {
  return (
    <div className={cn}>
      <div className={imgstyle}>
        <Image
          width={620}
          height={400}
          src={image}
          alt="img"
          className="h-[100%] w-full"
        />
      </div>
      <TextTitle
        title={title}
        subtitle={subtitle}
        btntitle={btntitle}
        boxstyle={boxstyle}
        subtitle2={subtitle2}
        h2style={h2style}
        h4style={h4style}
      />
    </div>
  );
};

export default ImageTextCard;
