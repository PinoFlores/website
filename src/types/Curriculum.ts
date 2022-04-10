export interface NormalContact {
  type: "phone" | "email";
}

export interface SocialMediaContact {
  type: "social";
  link: string;
}

export type Contact = { label: string } & (NormalContact | SocialMediaContact);

export interface Company {
  name: string;
  location: string;
}

export interface IExperience {
  job: string;
  title: string;
  date: Date | string;
  company: Company;
  description: string;
  resposabilities: string[];
}

export interface ICurriculum {
  img?: string;
  firstName: string;
  lastName: string;
  professionTitle: string;
  presentationText: string;
  contacts: Contact[];
  experiences: IExperience[];
}
