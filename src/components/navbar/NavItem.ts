export interface NavItem {
  label: string;
  subLabel?: string;
  href?: string;
  children?: NavItem[];
}
