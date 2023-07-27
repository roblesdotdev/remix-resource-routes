import type { Prisma } from '@prisma/client'

function tagsList(list: string[]): Prisma.TagCreateNestedManyWithoutJobsInput {
  return {
    connectOrCreate: list.map(tag => ({
      where: { name: tag },
      create: { name: tag },
    })),
  }
}

export const dumbData: Prisma.JobCreateInput[] = [
  {
    title: 'Frontend Developer',
    slug: 'frontend-developer',
    description:
      'We are looking for a frontend developer with experience in HTML, CSS, and JavaScript.',
    location: 'Mexico City',
    remote: false,
    category: 'Development',
    tags: tagsList(['HTML', 'JavaScript', 'CSS']),
  },
  {
    title: 'Graphic Designer',
    slug: 'graphic-designer',
    description:
      'Design company seeking a creative graphic designer for exciting projects.',
    location: 'Buenos Aires, Argentina',
    remote: false,
    category: 'Design',
    tags: tagsList(['Adobe Illustrator', 'Adobe Photoshop', 'Graphic Design']),
  },
  {
    title: 'Fullstack Developer',
    slug: 'fullstack-developer',
    description:
      'Tech startup looking for a fullstack developer to join a dynamic team.',
    location: 'San Francisco, USA',
    remote: true,
    category: 'Development',
    tags: tagsList(['JavaScript', 'Node.js', 'React', 'MongoDB']),
  },
  {
    title: 'UI/UX Designer',
    slug: 'ui-ux-designer',
    description:
      'Digital design agency seeks a UI/UX designer to create amazing user experiences.',
    location: 'San Francisco, USA',
    remote: false,
    category: 'Design',
    tags: tagsList(['UI Design', 'UX Design', 'Adobe XD', 'Figma']),
  },
  {
    title: 'Python Programmer',
    slug: 'python-programmer',
    description:
      'Tech company looking for a Python programmer for application development.',
    location: 'Buenos Aires, Argentina',
    remote: true,
    category: 'Development',
    tags: tagsList(['Python', 'Django', 'Flask', 'PostgreSQL']),
  },
  {
    title: 'Video Game Developer',
    slug: 'video-game-developer',
    description:
      'Game development studio seeking a talented programmer to create exciting games.',
    location: 'Los Angeles, USA',
    remote: true,
    category: 'Development',
    tags: tagsList(['C#', 'Unity', 'Game Development', '3D Modeling']),
  },
  {
    title: 'Backend Developer',
    slug: 'backend-developer',
    description:
      'Tech startup hiring a backend developer to work on infrastructure.',
    location: 'Tokyo, Japan',
    remote: true,
    category: 'Development',
    tags: tagsList(['Java', 'Spring Boot', 'RESTful APIs', 'MySQL']),
  },
  {
    title: 'iOS Developer',
    slug: 'ios-developer',
    description:
      'Tech company looking for an iOS developer to create mobile applications.',
    location: 'San Francisco, USA',
    remote: true,
    category: 'Development',
    tags: tagsList(['Swift', 'iOS Development', 'Core Data', 'Xcode']),
  },
  {
    title: 'Information Security Analyst',
    slug: 'information-security-analyst',
    description:
      'Cybersecurity company seeks an analyst to protect the infrastructure.',
    location: 'Buenos Aires, Argentina',
    remote: true,
    category: 'Development',
    tags: tagsList([
      'Information Security',
      'Ethical Hacking',
      'Firewalls',
      'SIEM',
    ]),
  },
  {
    title: 'Android Developer',
    slug: 'android-developer',
    description:
      'Tech company looking for an Android developer for mobile applications.',
    location: 'Lima, Peru',
    remote: true,
    category: 'Development',
    tags: tagsList(['Java', 'Kotlin', 'Android Studio', 'SQLite']),
  },
  {
    title: 'Web Designer',
    slug: 'web-designer',
    description:
      'Digital marketing agency seeking a web designer with UI and UX experience.',
    location: 'Mexico City',
    remote: true,
    category: 'Design',
    tags: tagsList(['HTML', 'CSS', 'JavaScript', 'Adobe XD']),
  },
  {
    title: 'React Frontend Developer',
    slug: 'react-frontend-developer',
    description:
      'Tech company looking for a frontend developer with React experience.',
    location: 'Lima, Peru',
    remote: true,
    category: 'Development',
    tags: tagsList(['React', 'JavaScript', 'CSS', 'RESTful APIs']),
  },
  {
    title: 'Senior Graphic Designer',
    slug: 'senior-graphic-designer',
    description:
      'Design company seeking a senior graphic designer to lead creative projects.',
    location: 'Madrid, Spain',
    remote: false,
    category: 'Design',
    tags: tagsList(['Adobe Creative Suite', 'Illustration', 'Brand Design']),
  },
  {
    title: 'Java Developer',
    slug: 'java-developer',
    description:
      'Tech company looking for a Java developer for enterprise applications.',
    location: 'Sao Paulo, Brazil',
    remote: false,
    category: 'Development',
    tags: tagsList(['Java', 'Spring Framework', 'Hibernate', 'Oracle']),
  },
  {
    title: 'Freelance UI Designer',
    slug: 'freelance-ui-designer',
    description: 'Talented UI designer needed for remote freelance projects.',
    location: 'Any Location',
    remote: true,
    category: 'Design',
    tags: tagsList(['UI Design', 'Adobe XD', 'Figma', 'Responsive Design']),
  },
  {
    title: 'PHP Developer',
    slug: 'php-developer',
    description:
      'Web development company seeking a PHP programmer with Laravel experience.',
    location: 'Bogota, Colombia',
    remote: true,
    category: 'Development',
    tags: tagsList(['PHP', 'Laravel', 'MySQL', 'JavaScript']),
  },
  {
    title: 'User Experience Designer',
    slug: 'user-experience-designer',
    description:
      'Tech startup seeking a designer focused on creating exceptional user experiences.',
    location: 'Buenos Aires, Argentina',
    remote: true,
    category: 'Design',
    tags: tagsList(['UX Design', 'User Research', 'User Interface']),
  },
  {
    title: 'Ruby on Rails Developer',
    slug: 'ruby-on-rails-developer',
    description:
      'Web development company seeking a Ruby on Rails programmer for diverse projects.',
    location: 'Mexico City',
    remote: true,
    category: 'Development',
    tags: tagsList(['Ruby on Rails', 'JavaScript', 'PostgreSQL', 'Heroku']),
  },
  {
    title: 'Animation Designer',
    slug: 'animation-designer',
    description:
      'Creative studio seeking a designer specialized in animation for audiovisual projects.',
    location: 'Los Angeles, USA',
    remote: true,
    category: 'Design',
    tags: tagsList([
      '2D Animation',
      'Adobe After Effects',
      'Motion Graphics',
      'Illustration',
    ]),
  },
  {
    title: 'C++ Developer',
    slug: 'cpp-developer',
    description:
      'Tech company seeking a C++ programmer for high-quality software development.',
    location: 'Tokyo, Japan',
    remote: true,
    category: 'Development',
    tags: tagsList(['C++', 'STL', 'Object-Oriented Programming']),
  },
  {
    title: 'Responsive Web Designer',
    slug: 'responsive-web-designer',
    description:
      'Web development company seeking a designer with experience in responsive designs.',
    location: 'Sao Paulo, Brazil',
    remote: true,
    category: 'Design',
    tags: tagsList(['Web Design', 'Responsive Design', 'HTML', 'CSS']),
  },
  {
    title: 'Unity Video Game Developer',
    slug: 'unity-video-game-developer',
    description:
      'Game development studio seeking a developer with experience in Unity.',
    location: 'Madrid, Spain',
    remote: true,
    category: 'Development',
    tags: tagsList(['Unity', 'C#', 'Game Development', '3D Modeling']),
  },
  {
    title: 'Mobile Interfaces Designer',
    slug: 'mobile-interfaces-designer',
    description:
      'Tech company seeking a designer focused on user interfaces for mobile apps.',
    location: 'London, UK',
    remote: true,
    category: 'Design',
    tags: tagsList(['UI Design', 'iOS', 'Android', 'Material Design']),
  },
  {
    title: 'Vue.js Frontend Developer',
    slug: 'vue-js-frontend-developer',
    description:
      'Tech company seeking a frontend developer with experience in Vue.js.',
    location: 'Bogota, Colombia',
    remote: false,
    category: 'Development',
    tags: tagsList(['Vue.js', 'JavaScript', 'HTML', 'CSS']),
  },
  {
    title: 'Packaging Designer',
    slug: 'packaging-designer',
    description:
      'Company seeking a designer specialized in creating attractive packaging.',
    location: 'San Francisco, USA',
    remote: true,
    category: 'Design',
    tags: tagsList(['Packaging Design', 'Illustration', 'Adobe Illustrator']),
  },
  {
    title: 'Node.js Backend Developer',
    slug: 'node-js-backend-developer',
    description:
      'Tech startup seeking a backend developer with experience in Node.js.',
    location: 'Berlin, Germany',
    remote: true,
    category: 'Development',
    tags: tagsList(['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs']),
  },
  {
    title: 'User Experience Designer',
    slug: 'user-experience-designer-remote',
    description:
      'Tech company seeking a designer focused on creating an exceptional user experience.',
    location: 'Lima, Peru',
    remote: true,
    category: 'Design',
    tags: tagsList(['UX Design', 'User Research', 'User Interface']),
  },
]
