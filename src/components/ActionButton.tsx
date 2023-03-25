import AnchorLink from "react-anchor-link-smooth-scroll";
import { LINKS_TYPE } from "@/utils/enums";
import { ActionButtonInterface } from "@/utils/types";

const ActionButton = ({ children, setSelectedPage }: ActionButtonInterface) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(LINKS_TYPE.ContactUs)}
      href={`#${LINKS_TYPE.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
