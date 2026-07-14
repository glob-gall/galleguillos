export type DictionaryHero = {
  title: string;
  description: string;
  banner_title: string;
  banner_sub: string;
  contacts: string;
};

export type DictionaryProjects = {
  title: string;
  subtitle: string;
};

export type DictionaryFooter = {
  rights1: string;
  rights2: string;
};
export type DictionaryTechs = {
  title: string;
};

export type Dictionary = {
  hero: DictionaryHero;
  projects: DictionaryProjects;
  techs: DictionaryTechs;
  footer: DictionaryFooter;
  meta: {
    title: string;
    description: string;
    openGraph: {
      title: string;
      description: string;
      url: string;
      siteName: "Galleguillos";
      images: [
        {
          url: string;
          width: number;
          height: number;
          alt: string;
        }
      ];
      type: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      images: [string];
    };
  };
};
