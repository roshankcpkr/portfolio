const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://roshankc.info.np',
  title: 'Blog',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Roshan K.C',
  role: 'Software Engineer',
  description:
    'I am Javascript developer with experience in web and mobile development with javascript based stacks. Eager to learn new things and comfortable with fast paced environment. I am currently exploring Machine learning',

  resume: '/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/theroshankc',
    github: 'https://github.com/roshankcpkr',
    facebook: 'https://www.facebook.com/roshan.phtml',
    instagram: 'https://www.instagram.com/notroshankc',
    tweet: 'https://twitter.com/notroshankc',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Physicalli',
    description:
      'Physicalli is a platform for finding experts or personals for physical presence demanding jobs. Platform made using reactjs, aws amplify designed to connected professionals with clients.',
    stack: ['Graphql', 'DynamoDB', 'Reactjs'],
    sourceCode: 'https://github.com/roshankcpkr/physicalli',
  },
  {
    name: 'LeftOverLift',
    description:
      'LeftOverLift is a web application that aims to revolutionize the way we manage food waste, allowing users to track their food waste, and it also provides a way to redistribute surplus food to those in need',
    stack: ['Nextjs', 'Thirdweb', 'Leaflet', 'Mantine'],
    sourceCode: 'https://github.com/projectashik/meta-goblins-vertex',
  },
  {
    name: 'GetChatGpt',
    description:
      'NPM package that enable users to easily add chatgpt api in their application',
    stack: ['JavaScript', 'Nodejs'],
    sourceCode: 'https://github.com/roshankcpkr/chatgptapi',
  },
]

const certifications = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Certificate 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Certificate 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Certificate 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Javascript',
  'Full stack development',
  'Mobile Development',
  'Penetration Testing',
  'Search engine optimization',
  'Cloud Computing',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'roshankcpkr123@gmail.com',
  phone: '+9779864432137',
  address: 'Pokhara, Nepal',
}

export { header, about, projects, skills, contact, certifications }
