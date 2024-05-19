import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

import ArrowLeft from "@/public/arrow-left.svg";

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
        "grow px-6 py-4 bg-[--white] shadow-basic" + " " + className ?? ""
      }
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-medium">{name}</h2>
        <Link className="flex gap-2" href={url}>
          Подробнее
          <Image
            className="relative top-[1px]"
            src={ArrowLeft}
            alt="Подробнее"
          />
        </Link>
      </div>

      {children}
    </section>
  );
};

export default BlockWrapper;
