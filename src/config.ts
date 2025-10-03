export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Cooptacular Studios",
  description: "Bryan Cooper's personal portfolio.",
  author: {
    name: "Bryan Cooper",
    bio: "A stream of consciousness performed with random precision.",
    avatar: "../avatar-pic.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    github: "https://github.com/cooptacular",
    //twitter: "https://twitter.com/cooptacular",
    linkedin: "https://linkedin.com/in/bryanrcooper",
    email: "bryanrcooper7@gmail.com"
  },
  siteUrl: "https://volks-typo.example.com"
  // note to self: Replace with your actual site URL
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;