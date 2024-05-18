import Link from "next/link";
import React, { ReactNode } from "react";

interface BlockWrapperProps {
  children: ReactNode;
  name: string;
  url: string;
  className?: string;
}

const BlockWrapper: React.FC<BlockWrapperProps> = ({
  children,
  name,
  url,
  className,
}) => {
  return (
    <section
      className={
        "grow px-6 pt-4 bg-[--white] shadow-basic" + " " + className ?? ""
      }
    >
      <h2 className="text-3xl font-medium">{name}</h2>
      {children}
      <Link href={url}>Подробнее</Link>
    </section>
  );
};

export default BlockWrapper;
