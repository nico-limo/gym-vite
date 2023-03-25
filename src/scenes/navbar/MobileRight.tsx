import { LINKS_TYPE } from "@/utils/enums";
import { MobileRightSelected } from "@/utils/types";
import { Bars3Icon } from "@heroicons/react/24/solid";

type Props = {
  selectedPage: LINKS_TYPE;
  setSelectedPage: (value: LINKS_TYPE) => void;
  toggleMenu: () => void;
};

const MobileRight = ({ toggleMenu }: MobileRightSelected) => {
  return (
    <button className="rounded-full bg-secondary-500 p-2" onClick={toggleMenu}>
      <Bars3Icon className="h-6 w-6 text-white" />
    </button>
  );
};

export default MobileRight;
