import { LINKS, LINKS_TYPE } from "@/utils/enums";
import { FLEXBETWEEN } from "@/utils/tailwindStyles";
import Link from "@/scenes/navbar/Link";

type Props = {
  selectedPage: LINKS_TYPE;
  setSelectedPage: (value: LINKS_TYPE) => void;
  isMobile?: boolean;
};

const ListLink = ({
  selectedPage,
  setSelectedPage,
  isMobile = false,
}: Props) => {
  const className = isMobile
    ? "ml-[33%] flex flex-col gap-10 text-2xl"
    : `${FLEXBETWEEN} gap-8 text-sm`;
  return (
    <div className={className}>
      {LINKS.map((link) => (
        <Link
          key={link}
          page={link}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </div>
  );
};

export default ListLink;
