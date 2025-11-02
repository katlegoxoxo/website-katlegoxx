// FIX: Removed constants and circular self-import. Defined and exported all required type interfaces.
export interface Project {
  name: string;
  date: string;
  description: string;
  detailedDescription: {
    title: string;
    icon: string;
    content: string;
  }[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  demoComponent?: string;
}

export interface ProjectCategory {
  title: string;
  projects: Project[];
}

export interface Skill {
    name: string;
    icon: string;
    description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Technology {
    name: string;
    icon: string;
}

export interface TechStackCategory {
  title: string;
  technologies: Technology[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  dateRange: string;
  certificateUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  dateRange: string;
  description: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    imageUrl?: string;
    verifyUrl: string;
    isBadge?: boolean;
    certificateUrl?: string;
}

export interface CertificationCategory {
    title: string;
    certifications: Certification[];
}

