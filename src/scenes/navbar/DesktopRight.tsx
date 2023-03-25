import { LINKS_TYPE } from "@/utils/enums";
import { FLEXBETWEEN } from "@/utils/tailwindStyles";
import ActionButton from "@/components/ActionButton";
import ListLink from "@/components/ListLink";

type Props = {
  selectedPage: LINKS_TYPE;
  setSelectedPage: (value: LINKS_TYPE) => void;
};

const DesktopRight = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className={`${FLEXBETWEEN} w-full`}>
      <ListLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className={`${FLEXBETWEEN} gap-8`}>
        <p>Sign In</p>
        <ActionButton setSelectedPage={setSelectedPage}>
          Become a Member
        </ActionButton>
      </div>
    </div>
  );
};

export default DesktopRight;
