import { LINKS, LINKS_TYPE } from "@/utils/enums";
import Link from "./Link";
import { FLEXBETWEEN } from "@/utils/tailwindStyles";
import ActionButton from "@/components/ActionButton";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  selectedPage: LINKS_TYPE;
  setSelectedPage: (value: LINKS_TYPE) => void;
  toggleMenu: () => void;
};

const MobileRight = ({ selectedPage, setSelectedPage, toggleMenu }: Props) => {
  return (
    <button className="rounded-full bg-secondary-500 p-2" onClick={toggleMenu}>
      <Bars3Icon className="h-6 w-6 text-white" />
    </button>
  );
};

export default MobileRight;
