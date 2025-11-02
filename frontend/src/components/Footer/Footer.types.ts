export interface SocialLink {
    id: string | number;
    href: string;
    label: string;
  }
  
  export interface NavLink {
    href: string;
    label: string;
  }
  
  export interface FooterProps {
    logoText: string;
    footerText: string;
    socialLinks: SocialLink[];
    navLinks: NavLink[];
  }
  