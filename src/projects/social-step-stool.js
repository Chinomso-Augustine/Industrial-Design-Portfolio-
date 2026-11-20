function image(filename) {
  const projectPath = 'images/projects/social-step-stool/';
  return import.meta.env.BASE_URL + projectPath + filename;
}


export const socialStepStoolProject = {
  id: 'social-step-stool',
  slot: 1,
  title: 'Social Step Stool',
  category: 'Industrial design',
  summary: 'Exploring and understandings how different types and dimensions of wooden material can be joined together using different tools, joinery methods, and fasteners.',
  cover: image('perspective.png'),
  coverAlt: 'Perspective view of the Social Step Stool model',
  metadata: [
    ['Type', 'Individual Class Project'],
    ['Tools', 'To be added'],
    ['Material', 'Lumber & Plywood'],
    ['Duration', '3 weeks'],
  ],
  hero: {
    src: image('perspective.png'),
    alt: 'Perspective view of the Social Step Stool model showing its two levels and slatted sides',
    width: 2546,
    height: 1632,
  },
  overview: {
    label: 'The concept',
    title: 'Project overview',
    paragraphs: ['Project background and goals coming soon.'],
  },
  sections: [
    {
      id: 'research',
      number: '01',
      label: 'Research',
      title: 'The starting point.',
      body: 'Research and project context coming soon.',
      layout: 'wide',
      images: [],
    },
    {
      id: 'sketching',
      number: '02',
      label: 'Form exploration',
      title: 'Sketches and ideas.',
      body: 'Concept sketches and design exploration coming soon.',
      layout: 'wide',
      model: {
        title: 'Social Step Stool — interactive Rhino model',
        src: image('final Step Stool.3dm'),
        initialZoom: 1.25,
        background: '#d7e2e8',
      },
      images: [],
    },
    {
      id: 'development',
      number: '03',
      label: 'Design development',
      title: 'Developing the design.',
      body: 'Design development and model details coming soon.',
      layout: 'split-reverse',
      images: [],
    },
    {
      id: 'fabrication',
      number: '04',
      label: 'Fabrication',
      title: 'Building the prototype.',
      body: 'Fabrication and prototyping details coming soon.',
      layout: 'grid',
      images: [],
    },
    {
      id: 'final-design',
      number: '05',
      label: 'Final design',
      title: 'Social Step Stool.',
      body: 'Final design details and reflections coming soon.',
      layout: 'grid',
      images: [],
    },
  ],
}
