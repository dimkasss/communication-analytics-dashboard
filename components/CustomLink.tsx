import Link from "next/link";

interface CustomLinkProps {
  children: string | string[];
  href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, href }) => {
  return (
    <Link
      className="flex w-[--link-width] items-center justify-center text-center"
      href={href}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
