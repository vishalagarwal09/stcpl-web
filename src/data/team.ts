export interface TeamMember {
  initials: string
  name: string
  role: string
  description: string
}

export const team: TeamMember[] = [
  {
    initials: 'MA',
    name: 'Mukesh Kumar Agarwal',
    role: 'Textile Industry Experience',
    description:
      'Brings extensive experience in the textile industry, with deep knowledge of fabric sourcing, manufacturing, processing and market requirements across multiple fibre categories and applications.',
  },
  {
    initials: 'BA',
    name: 'Bhavya Agarwal',
    role: 'Chartered Accountant | Textile Business Professional',
    description:
      'A Chartered Accountant with extensive experience in textile business operations, finance, commercial management and business development — bringing structured financial and operational discipline to the organization.',
  },
  {
    initials: 'CS',
    name: 'Chirag Somani',
    role: 'MBA & B.Tech | Textile Marketing & Technical',
    description:
      'Combines technical and management education with experience in textile marketing, product development and customer requirements — bridging technical fabric knowledge with market-facing business development.',
  },
]
