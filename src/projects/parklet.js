function image(filename) {
  const projectPath = 'images/projects/parklet/';
  return import.meta.env.BASE_URL + projectPath + filename;
}


export const parkletProject = {
  id: 'parklet-design',
  slot: 3,
  title: 'Parklet Design',
  category: 'Industrial design',
  summary: 'A modular streetside parklet concept designed for studying and gathering.',
  cover: image('parklet-context.jpg'),
  coverAlt: 'A rendering of the ribbed parklet concept with standing and seated workspaces outside Temple Coffee',
  coverPosition: '65% center',
  metadata: [
    ['Type', 'Industrial design + fabrication'],
    ['Tools', 'Sketching, Rhino 8, laser cutting'],
    ['Focus', 'Public seating + spatial experience'],
    ['Material', 'Layered cardboard'],
  ],
  hero: {
    src: image('parklet-context.jpg'),
    alt: 'Rendered parklet concept on the sidewalk outside Temple Coffee in Downtown Davis',
    width: 2200,
    height: 1423,
  },
  overview: {
    title: 'An additional study space for students.',
    paragraphs: [
      'Have you ever visited your favorite coffee shop to study, only to realize there’s no space left and wish you could create more? When an opportunity to design additional seating for a public space came up in my design class, I convinced my team to focus on Temple Coffee in Downtown Davis, my favorite study spot.',
      'Using Rhino 8 for 3D modeling, my team and I designed a cardboard structure that provides seating and shade while feeling architectural.',
    ],
    features: [
      { title: 'Seating', body: 'Layered surfaces support individual studying and small-group collaboration.' },
      { title: 'Accessibility', body: 'A clear circulation path keeps the sidewalk edge open and approachable.' },
      { title: 'Experience', body: 'Rhythmic ribs create shade, enclosure, and a stronger street presence.' },
    ],
  },
  sections: [
    {
      id: 'sketching',
      title: 'Sketching the spatial language.',
      body: 'Each member started with individual sketches exploring different ideas. Some of my sketches were inspired by objects around me, such as my mouse. After modeling our top three concepts, we selected one to develop further.',
      layout: 'split',
      images: [
        { src: image('concept-sketches.jpg'), alt: 'Sketchbook pages showing parklet form explorations and early dimensions', width: 1245, height: 2200 },
      ],
    },
    {
      id: 'rhino',
      title: 'Translating the concept into Rhino.',
      body: 'Collaborating as a team, we iterated on the selected model, applying our professor’s feedback. The iteration phase allowed us to test user circulation, seating rhythm, and potential materials.',
      layout: 'wide',
      model: {
        title: 'Parklet — interactive Rhino model',
        src: image('DES51Parklet RhinoFile.3dm'),
        initialZoom: 1.25,
        background: '#d7e2e8',
      },
    },
    {
      id: 'dimensions',
      title: 'Making room for the details.',
      body: 'To develop a feasible solution that could be translated into reality, we included dimensions. The plan brings the modules, seating, and circulation into one coordinated layout.',
      layout: 'split-reverse',
      images: [
        { src: image('dimensioned-plan.png'), alt: 'Dimensioned parklet floor plan showing the seven-foot width, twenty-foot length, and seating modules', width: 1259, height: 867 },
      ],
    },
    {
      id: 'fabrication',
      title: 'From digital model to physical prototype.',
      body: 'Due to limited materials, we were only able to build one side of the full-scale model. With the cardboard pieces precisely cut, the fun part began. We assembled the small-scale model first, followed by the full-scale prototype. After a few days, our model was ready for presentation.',
      layout: 'grid-three',
      images: [
        { src: image('laser-cutting.jpg'), alt: 'Chinomso checking cardboard parklet components at the laser cutter', width: 1650, height: 2200 },
        { src: image('prototype-assembly.jpg'), alt: 'Large cardboard parklet pieces during prototype assembly', width: 1650, height: 2200 },
        { src: image('Assemly.png'), alt: 'Chinomso using a hot glue gun to assemble the layered cardboard parklet prototype', width: 3024, height: 4032 },
        { src: image('team-fabrication.jpg'), alt: 'Team members collaborating on the parklet prototype', width: 1650, height: 2200 },
        { src: image('assembly-progress.jpg'), alt: 'The layered cardboard parklet structure taking shape during assembly', width: 1650, height: 2200 },
      ],
    },
    {
      id: 'final-design',
      title: 'A place to study. A little room to gather.',
      body: 'The final model communicated our idea: extending public space so more people can enjoy it. The concept considers different ways of working, including seated and standing use, as well as space for wheelchair users.',
      layout: 'grid',
      images: [
        { src: image('final-prototype-01.jpg'), alt: 'The full-scale parklet prototype showing the layered cardboard ribs, seating, and canopy', width: 1650, height: 2200 },
        { src: image('final-prototype-02.jpg'), alt: 'A second view of the finished cardboard parklet prototype', width: 1650, height: 2200 },
        { src: image('scale-model.jpg'), alt: 'Small-scale parklet model showing the complete arrangement of seating modules', width: 2200, height: 1650 },
      ],
    },
  ],
}
