export interface NavLink {
    label: string;
    href: string;
  }
  
  export interface SocialLink {
    id: string;
    href: string;
    label: string;
  }
  
  export interface FooterProps {
    logoText: string;
    footerText: string;
    socialLinks: SocialLink[];
    navLinks: NavLink[];
  }
  