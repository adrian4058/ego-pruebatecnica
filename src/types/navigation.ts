export interface MenuItem {
  label: string;
  href: string;
}

export interface MenuGroup {
  items: MenuItem[];
  background?: "white" | "gray";
}

export interface NavigationData {
  groups: MenuGroup[];
}
