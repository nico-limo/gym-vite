import { XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { LINKS_TYPE, MEDIA_QUERYS } from "@/utils/enums";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileRight from "./MobileRight";
import DesktopRight from "./DesktopRight";
import { FLEXBETWEEN } from "@/utils/tailwindStyles";
import { useState } from "react";
import ListLink from "@/components/ListLink";

type Props = {
  selectedPage: LINKS_TYPE;
  setSelectedPage: (value: LINKS_TYPE) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery(MEDIA_QUERYS.desktop);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <nav>
      <div
        className={`${navbarBackground} ${FLEXBETWEEN} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${FLEXBETWEEN} mx-auto w-5/6`}>
          <div className={`${FLEXBETWEEN} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" />

            {/* Right Side */}
            {isAboveMediumScreens ? (
              <DesktopRight
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
            ) : (
              <MobileRight
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
                toggleMenu={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-lg">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={toggleMenu}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <ListLink
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isMobile
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
