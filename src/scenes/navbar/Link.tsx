import AnchorLink from "react-anchor-link-smooth-scroll";
import { LINKS_TYPE } from "@/utils/enums";
import { LinkSelected } from "@/utils/types";

const Link = ({ page, selectedPage, setSelectedPage }: LinkSelected) => {
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
