
export enum EventStatus {
  Past = 'Past',
  Ongoing = 'Ongoing',
  Upcoming = 'Upcoming',
}

export type EventCategory = 'Technical' | 'Cultural' | 'Workshop' | 'Sports';

export interface LeadershipMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  quote: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  rules: string[];
  imageUrl: string;
  status: EventStatus;
  category: EventCategory;
  isFeatured?: boolean;
  registrationFee?: number;
  organizerClubId: string;
  coordinators: { name: string; contact: string }[];
}

export interface ClubTeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

export interface Club {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoUrl: string;
  bannerUrl: string;
  eventIds: string[];
  achievements: string[];
  team: ClubTeamMember[];
}

export interface ExternalEvent {
    id: string;
    name: string;
    organizer: string;
    description: string;
    link: string;
    category: 'Hackathon' | 'Tech Fest' | 'Internship' | 'Workshop';
}

export type View =
  | { type: 'home' }
  | { type: 'all-events' }
  | { type: 'all-clubs' }
  | { type: 'external-events' }
  | { type: 'club'; clubId: string }
  | { type: 'event-detail'; eventId: string };
