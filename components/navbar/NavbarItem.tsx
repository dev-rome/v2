import Link from "next/link";
export interface NavbarItemProps {
  url: string;
  title: string;
}

const NavbarItem = ({ url, title }: NavbarItemProps) => {
  return (
    <li className="text-white hover:text-pink">
      <Link href={url}>{title}</Link>
    </li>
  );
};

export default NavbarItem;
