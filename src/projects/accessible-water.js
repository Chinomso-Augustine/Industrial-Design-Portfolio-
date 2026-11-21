function image(filename) {
  const projectPath = 'images/projects/accessible-water/';
  return import.meta.env.BASE_URL + projectPath + filename;
}

export const accessibleWaterProject = {
  id: 'accessible-water',
  slot: 4,
  title: 'Accessible Water Fountain',
  category: 'Product design',
  summary: 'Retrofitting public fountains for inclusive, everyday hydration.',
  cover: image('fountain-concept.png'),
  coverAlt: 'Accessible water fountain retrofit mouthpiece concept render',
  metadata: [
    ['Type', 'UI/UX + Product Design'],
    ['Project Type', 'Physical Product Concept'],
    ['Scope', 'Research + Prototyping'],
    ['Context', 'UC Davis'],
  ],
  hero: {
    src: image('fountain-concept.png'),
    alt: 'Accessible water fountain concept render',
    width: 1602,
    height: 1038,
  },
  overview: {
    title: 'Inclusive, everyday hydration.',
    paragraphs: [
      'A retrofit mouthpiece that makes existing fountains easier to use for direct drinking and reusable bottle filling.',
    ],
  },
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: 'A retrofit concept for making existing campus fountains more accessible, useful, and affordable to upgrade.',
      layout: 'split-reverse',
      images: [
        {
          src: image('prototyping-02.jpg'),
          alt: 'Water fountain process frame 2',
          width: 2200,
          height: 1650,
        },
      ],
    },
    {
      id: 'value-proposition',
      title: 'Value Proposition',
      body: 'The design improves everyday hydration without requiring full fountain replacement.',
      bullets: [
        'Fits existing fountain systems.',
        'Supports drinking and bottle filling.',
        'Encourages reusable bottle habits.',
      ],
      layout: 'grid',
      images: [
        {
          src: image('prototyping-01.jpg'),
          alt: 'Process and value framing visual 1',
          width: 2200,
          height: 1650,
        },
        {
          src: image('prototyping-03.jpg'),
          alt: 'Process and value framing visual 3',
          width: 2200,
          height: 1650,
        },
      ],
    },
    {
      id: 'ideation',
      title: 'How Might We',
      body: 'We focused ideation around access, refill behavior, and campus feasibility.',
      bullets: [
        'Improve access for more users.',
        'Add refill behavior cleanly.',
        'Keep adoption realistic.',
      ],
      layout: 'split',
      images: [
        {
          src: image('crazy-8.png'),
          alt: 'Crazy 8 ideation sheet',
          width: 980,
          height: 750,
        },
      ],
    },
    {
      id: 'prototypes',
      title: 'Design and Prototyping',
      body: 'Three prototype rounds tested form, fit, water flow, and installation clarity.',
      bullets: [
        'Prototype 1: basic geometry.',
        'Prototype 2: fit and comfort.',
        'Prototype 3: cleaner final form.',
      ],
      layout: 'grid',
      images: [
        {
          src: image('prototype-01-a.jpg'),
          alt: 'Prototype 1 - image 1',
          width: 1237,
          height: 2200,
        },
        {
          src: image('prototype-01-b.jpg'),
          alt: 'Prototype 1 - image 2',
          width: 1237,
          height: 2200,
        },
        {
          src: image('prototype-02-a.jpg'),
          alt: 'Prototype 2 - image 1',
          width: 2200,
          height: 1650,
        },
        {
          src: image('prototype-02-b.jpg'),
          alt: 'Prototype 2 - image 2',
          width: 2200,
          height: 1650,
        },
        {
          src: image('prototype-03-a.jpg'),
          alt: 'Prototype 3 - image 1',
          width: 2200,
          height: 1650,
        },
        {
          src: image('prototype-03-b.jpg'),
          alt: 'Prototype 3 - image 2',
          width: 2200,
          height: 1650,
        },
      ],
    },
    {
      id: 'validation',
      title: 'Validation and Next Step',
      body: 'Presented at a research conference and received strong feedback for campus relevance.',
      layout: 'grid',
      images: [
        {
          src: image('presentation-01.jpg'),
          alt: 'Presentation board at research conference',
          width: 2200,
          height: 1650,
        },
        {
          src: image('presentation-02.jpg'),
          alt: 'Presentation moment 2',
          width: 2200,
          height: 1650,
        },
        {
          src: image('presentation-03.jpg'),
          alt: 'Presentation moment 3',
          width: 2200,
          height: 1650,
        },
        {
          src: image('presentation-04.jpg'),
          alt: 'Team presenting project outcome',
          width: 1548,
          height: 2200,
        },
      ],
    },
    {
      id: 'team',
      title: 'Project Team',
      layout: 'team',
      images: [
        {
          src: image('team-chinomso.jpg'),
          alt: 'Project team member Chinomso Augustine',
          width: 2200,
          height: 1650,
        },
        {
          src: image('team-devin.jpg'),
          alt: 'Project team member Devin Bangayan',
          width: 2200,
          height: 1650,
        },
        {
          src: image('team-marilyn.jpg'),
          alt: 'Project team member Marilyn Bangayan',
          width: 2200,
          height: 1650,
        },
        {
          src: image('team-crow.jpg'),
          alt: 'Project team member Crow Raya',
          width: 2200,
          height: 1237,
        },
      ],
    },
  ],
};
