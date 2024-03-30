export type SidebarItemProps = {
  title?: string;
  path?: string;
  defaultIcon?: React.ReactNode; // ReactNode is a type that can be anything that can be rendered in React (string, number, element, fragment, html, jsx etc)
  activeIcon?: React.ReactNode;
  nestedItems?: SidebarItemProps[]; // Nested items for dropdown menu in sidebar
  sectionTitle?: string;
};
