import { LINKS_TYPE } from "@/enums";

export interface SelectedPageInterface {
  selectedPage: LINKS_TYPE;
  setSelectedPage: (value: LINKS_TYPE) => void;
}

export type SelectedPageType = Omit<SelectedPageInterface, "setSelectedPage">;
export type SetSelectedPageType = Omit<SelectedPageInterface, "selectedPage">;
export type ChildrenType = { children: React.ReactNode };

export interface NavbarSelected extends SelectedPageInterface {
  isTopOfPage: boolean;
}
export interface LinkSelected extends SelectedPageInterface {
  page: string;
}
export interface ListLinkSelected extends SelectedPageInterface {
  isMobile?: boolean;
}

export interface MobileRightSelected {
  toggleMenu: () => void;
}

export interface ActionButtonInterface extends SetSelectedPageType {
  children: React.ReactNode;
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface BenefitPage extends BenefitType {
  setSelectedPage: (value: LINKS_TYPE) => void;
}

export interface ClassInterface {
  name: string;
  description?: string;
  image: string;
}
