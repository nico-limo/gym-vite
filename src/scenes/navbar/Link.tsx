import AnchorLink from "react-anchor-link-smooth-scroll";
import { LINKS_TYPE } from "@/utils/enums";

type Props = {
  page: string;
  selectedPage: LINKS_TYPE;
  setSelectedPage: (value: LINKS_TYPE) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as LINKS_TYPE;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
