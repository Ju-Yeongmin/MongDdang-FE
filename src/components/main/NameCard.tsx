import React from "react";

interface NameCardProps {
  name: string;
}

function NameCard({ name }: NameCardProps) {
  return (
    <>
      <div className="flex text-lg mt-[48px] ml-[38px] ">
        <p>{name}</p>
        <p>님</p>
      </div>
    </>
  );
}

export default NameCard;
