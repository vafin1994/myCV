export interface Resume {
  basics: BasicsSection;
  work: WorkItem[];
  skills: SkillItem[];
  education: EducationItem[];
  languages: LanguageItem[];
  interests: InterestItem[];
}

interface BasicsSection {
  "name": string,
  "label": string,
  "email": string,
  "phone": string,
  "summary": string,
  "bio"?: string[],
  "location": Location,
  "profiles": ProfileItem[]
}

interface Location {
  "city": string,
  "countryCode": string,
  "region": string,
  "country"?: string,
}

interface ProfileItem {
  "network": string,
  "username": string,
  "url": string,
}

interface InterestItem {
  "desiredRole": string,
  "status": string,
  "workType": string[],
  "experience"?: string,
  "focusPrimary"?: string[],
  "focusSecondary"?: string[],
}

interface WorkItem {
  "name": string,
  "position": string,
  "url"?: string,
  "startDate": string,
  "endDate"?: string,
  "location"?: string,
  "summary": string,
  "highlights": string[]
}

interface SkillItem {
  "name": string,
  "level": string,
  "keywords": string[]
}

interface EducationItem {
  "institution": string,
  "area": string,
  "studyType": string,
  "startDate": string,
  "endDate": string,
}

interface LanguageItem {
  "language": string,
  "fluency": string,
}
