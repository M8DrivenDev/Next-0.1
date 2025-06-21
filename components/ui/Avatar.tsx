import React from "react";
import Image from "next/image";

const Avatar = ({ src }: { src: string}) => {
  return (
    <div>
      <Image src={src} alt="avatar" width={40} height={40}/>
    </div>
  );
};

export default Avatar;
