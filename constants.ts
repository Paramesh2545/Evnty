
import { LeadershipMember, Event, Club, EventStatus, ExternalEvent, EventCategory } from './types';

export const LEADERSHIP: LeadershipMember[] = [
  {
    id: 1,
    name: 'Dr. Evelyn Reed',
    title: 'Principal',
    imageUrl: 'https://picsum.photos/seed/principal/400/400',
    quote: 'Fostering an environment of innovation and excellence for all students is my highest priority.',
  },
  {
    id: 2,
    name: 'Mr. Samuel Chen',
    title: 'Chairman',
    imageUrl: 'https://picsum.photos/seed/chairman/400/400',
    quote: 'We are dedicated to aligning our curriculum with the future needs of the industry.',
  },
  {
    id: 3,
    name: 'Prof. Anika Sharma',
    title: 'Dean of Academics',
    imageUrl: 'https://picsum.photos/seed/dean/400/400',
    quote: 'Our commitment is to ensure the highest standards of education and student success are met.',
  },
  {
    id: 4,
    name: 'Dr. Ben Carter',
    title: 'Director of Student Affairs',
    imageUrl: 'https://picsum.photos/seed/director/400/400',
    quote: 'A vibrant campus life is crucial for holistic development and creating lasting memories.',
  },
];

export const EVENTS: Event[] = [
  {
    id: 'ev101',
    name: 'Annual Tech Symposium 2024',
    date: 'October 26, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Auditorium',
    description: 'A full day of talks and workshops from industry leaders on the future of technology, AI, and software development.',
    rules: ["All attendees must register online.", "Bring a valid college ID for entry.", "Sessions are on a first-come, first-served basis."],
    imageUrl: 'https://picsum.photos/seed/techsymposium/800/400',
    status: EventStatus.Upcoming,
    category: 'Technical',
    isFeatured: true,
    registrationFee: 0,
    organizerClubId: 'coding',
    coordinators: [{name: 'Alice Johnson', contact: 'alice.j@college.edu'}]
  },
  {
    id: 'ev102',
    name: 'Robotics Design Challenge',
    date: 'November 5, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Engineering Block, Lab 5',
    description: 'Build and battle robots in our annual design challenge. Prizes for the most innovative and effective designs. Open to all students.',
    rules: ["Teams can have 2-4 members.", "All materials will be provided.", "Judging criteria will be shared at the event start."],
    imageUrl: 'https://picsum.photos/seed/roboticschallenge/800/400',
    status: EventStatus.Upcoming,
    category: 'Technical',
    isFeatured: true,
    registrationFee: 10,
    organizerClubId: 'robotics',
    coordinators: [{name: 'Bob Williams', contact: 'bob.w@college.edu'}]
  },
  {
    id: 'ev103',
    name: 'AI & Machine Learning Summit',
    date: 'September 15-20, 2024',
    time: 'Ongoing This Week',
    location: 'Virtual Event',
    description: 'A week-long series of virtual keynotes and panel discussions on the latest trends in AI and Machine Learning.',
    rules: ["Register to receive the streaming links.", "Q&A will be held after each session via chat."],
    imageUrl: 'https://picsum.photos/seed/aisummit/800/400',
    status: EventStatus.Ongoing,
    category: 'Workshop',
    organizerClubId: 'aiml',
    coordinators: [{name: 'Carol White', contact: 'carol.w@college.edu'}]
  },
   {
    id: 'ev104',
    name: 'Culturals Night 2024',
    date: 'November 15, 2024',
    time: '6:00 PM onwards',
    location: 'College Amphitheatre',
    description: 'An evening of music, dance, and drama performances by our talented students. A celebration of art and culture.',
    rules: ["Entry is free for all students and faculty.", "Seating is limited."],
    imageUrl: 'https://picsum.photos/seed/culturals/800/400',
    status: EventStatus.Upcoming,
    category: 'Cultural',
    isFeatured: true,
    registrationFee: 0,
    organizerClubId: 'cultural',
    coordinators: [{name: 'David Green', contact: 'david.g@college.edu'}]
  },
  {
    id: 'ev201',
    name: 'CodeFest 2023',
    date: 'May 12, 2023',
    time: 'All Day',
    location: 'Computer Labs 1-5',
    description: 'A competitive programming event where students solved algorithmic challenges. The event saw over 200 participants.',
    rules: [],
    imageUrl: 'https://picsum.photos/seed/codefest/800/400',
    status: EventStatus.Past,
    category: 'Technical',
    organizerClubId: 'coding',
    coordinators: []
  },
  {
    id: 'ev202',
    name: 'Intro to Drone Building',
    date: 'April 20, 2023',
    time: '1:00 PM - 5:00 PM',
    location: 'Robotics Lab',
    description: 'A hands-on workshop led by the Robotics Club, teaching the fundamentals of drone mechanics and assembly.',
    rules: [],
    imageUrl: 'https://picsum.photos/seed/droneworkshop/800/400',
    status: EventStatus.Past,
    category: 'Workshop',
    organizerClubId: 'robotics',
    coordinators: []
  },
  {
    id: 'ev203',
    name: 'Guest Lecture: The Ethics of AI',
    date: 'March 5, 2023',
    time: '4:00 PM',
    location: 'Seminar Hall B',
    description: 'The AI/ML Club hosted a thought-provoking lecture by a leading AI ethicist on the societal impact of intelligent systems.',
    rules: [],
    imageUrl: 'https://picsum.photos/seed/aiethics/800/400',
    status: EventStatus.Past,
    category: 'Technical',
    organizerClubId: 'aiml',
    coordinators: []
  },
];

export const CLUBS: Club[] = [
  {
    id: 'robotics',
    name: 'Robotics Club',
    tagline: 'Building the future, one robot at a time.',
    description: 'Dedicated to the design, construction, and operation of robots. We participate in national competitions and host workshops to spread the passion for automation and mechatronics.',
    logoUrl: 'https://picsum.photos/seed/roboticslogo/200/200',
    bannerUrl: 'https://picsum.photos/seed/roboticsbanner/1200/400',
    eventIds: ['ev102', 'ev202'],
    achievements: [
        'Winners at National Robotics Competition 2023',
        'Runners-up at Inter-College Tech Fest 2023',
        'Developed an autonomous campus delivery bot prototype'
    ],
    team: [
        { name: 'John Doe', position: 'President', imageUrl: 'https://picsum.photos/seed/john/200/200' },
        { name: 'Jane Smith', position: 'Vice President', imageUrl: 'https://picsum.photos/seed/jane/200/200' },
        { name: 'Dr. Alan Grant', position: 'Faculty Advisor', imageUrl: 'https://picsum.photos/seed/grant/200/200' }
    ]
  },
  {
    id: 'coding',
    name: 'Coding Club',
    tagline: 'The official coding club of the college.',
    description: 'A community for programmers to learn, collaborate, and compete. We organize hackathons, coding contests, and tech talks to foster a strong coding culture on campus.',
    logoUrl: 'https://picsum.photos/seed/codinglogo/200/200',
    bannerUrl: 'https://picsum.photos/seed/codingbanner/1200/400',
    eventIds: ['ev101', 'ev201'],
    achievements: [
        'Top 10 in National Smart India Hackathon 2023',
        'Hosted CodeFest with over 200 participants'
    ],
    team: [
        { name: 'Emily White', position: 'President', imageUrl: 'https://picsum.photos/seed/emily/200/200' },
        { name: 'Michael Brown', position: 'Lead Coordinator', imageUrl: 'https://picsum.photos/seed/michael/200/200' },
        { name: 'Prof. Ada Lovelace', position: 'Faculty Advisor', imageUrl: 'https://picsum.photos/seed/ada/200/200' }
    ]
  },
  {
    id: 'aiml',
    name: 'AI/ML Club',
    tagline: 'Exploring the frontiers of intelligence.',
    description: 'Exploring the frontiers of Artificial Intelligence and Machine Learning. Join us for study groups, hands-on projects, and expert sessions to delve into the world of data.',
    logoUrl: 'https://picsum.photos/seed/aimllogo/200/200',
    bannerUrl: 'https://picsum.photos/seed/aimlbanner/1200/400',
    eventIds: ['ev103', 'ev203'],
    achievements: [
        'Published a research paper on sentiment analysis',
        'Developed a chatbot for the college website'
    ],
    team: [
        { name: 'Sophia Rodriguez', position: 'President', imageUrl: 'https://picsum.photos/seed/sophia/200/200' },
        { name: 'Dr. Ian Malcolm', position: 'Faculty Advisor', imageUrl: 'https://picsum.photos/seed/ian/200/200' }
    ]
  },
  {
    id: 'cultural',
    name: 'Cultural Club',
    tagline: 'Celebrating creativity and diversity.',
    description: 'The hub for all cultural activities on campus. We organize events that celebrate music, dance, drama, and fine arts, providing a platform for students to showcase their talents.',
    logoUrl: 'https://picsum.photos/seed/culturallogo/200/200',
    bannerUrl: 'https://picsum.photos/seed/culturalbanner/1200/400',
    eventIds: ['ev104'],
    achievements: [
        'Organized the largest-ever Culturals Night',
        'Won first place in inter-college dance competition'
    ],
    team: [
        { name: 'Leo Martinez', position: 'President', imageUrl: 'https://picsum.photos/seed/leo/200/200' },
        { name: 'Mia Wong', position: 'Events Head', imageUrl: 'https://picsum.photos/seed/mia/200/200' }
    ]
  },
];

export const EXTERNAL_EVENTS: ExternalEvent[] = [
    {
        id: 'ex01',
        name: 'Innovate India Hackathon 2024',
        organizer: 'Tech giant Inc.',
        description: 'A national-level hackathon with exciting prizes and internship opportunities. Form a team and build solutions for real-world problems.',
        link: '#',
        category: 'Hackathon'
    },
    {
        id: 'ex02',
        name: 'Summer Internship Program',
        organizer: 'Future Systems Ltd.',
        description: 'A 2-month paid internship program for pre-final year students in software development and data science roles.',
        link: '#',
        category: 'Internship'
    },
    {
        id: 'ex03',
        name: 'Nexus Tech Fest',
        organizer: 'IIT Bombay',
        description: 'One of the biggest tech fests in the country, featuring competitions, workshops, and lectures from renowned speakers.',
        link: '#',
        category: 'Tech Fest'
    }
];
