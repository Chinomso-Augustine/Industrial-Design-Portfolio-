function image(filename) {
  const projectPath = 'images/projects/social-step-stool/';
  return import.meta.env.BASE_URL + projectPath + filename;
}


export const socialStepStoolProject = {
  id: 'social-step-stool',
  slot: 1,
  title: 'Social Step Stool',
  category: 'Industrial design',
  summary: 'Exploring and understanding how different types of wooden material can be joined together using different tools, joinery methods, and fasteners.',
  cover: image('perspective.png'),
  coverAlt: 'Perspective view of the Social Step Stool model',
  metadata: [
    ['Type', 'Individual Class Project'],
    ['Tools', 'Rhino, miter saw, drill'],
    ['Material', 'Lumber & Plywood'],
    ['Duration', '3+ weeks'],
  ],
  hero: {
    src: image('perspective.png'),
    alt: 'Perspective view of the Social Step Stool model showing its two levels and slatted sides',
    width: 2546,
    height: 1632,
  },
  overview: {
    title: 'Project overview',
    layout: 'centered',
    paragraphs: [
      'For my first woodshop project, I designed and built a wooden stool that could serve as a step or seat at home and fit with 23 others in a class furniture installation.',
      'Each stool had to measure 14 × 14 × 14 inches, with a 7-inch rise and run for each step. Three other faces each needed at least 50% coverage. Within those limits, we could each design our own stool.',
    ],
  },
  sections: [
    {
      id: 'development',
      title: 'Developing the design.',
      body: 'I was already familiar with Rhino, so I immediately starting ideating from there. I started building my frame',
      layout: 'row',
      images: [
        { src: image('frame1.png'), alt: 'Rhino perspective view of the open, two-level step stool frame', width: 3243, height: 1298 },
        { src: image('frame2.png'), alt: 'Rhino model of the stool frame with slats along its sides and back', width: 3243, height: 1298 },
        { src: image('Frame3.png'), alt: 'Rhino model of the stool with solid plywood steps over the slatted frame', width: 3243, height: 1298 },
      ],
    },
    {
      id: 'sketching',
      title: 'Rhino Model',
      body: 'interactive Rhino model',
      layout: 'wide',
      model: {
        src: image('final Step Stool.3dm'),
        initialZoom: 1.25,
        background: '#d7e2e8',
      },
      images: [],
    },
    {
      id: 'fabrication',
      title: 'Building the stool.',
      body: 'I started by cutting 29 pieces of lumber on a miter saw for the frame.',
      cutList: [
        ['13¼ × 1½', 2],
        ['11 × 1½', 9],
        ['10¼ × 1½', 4],
        ['9¾ × 1½', 2],
        ['6¼ × 1½', 2],
        ['5½ × 1½', 2],
        ['3¼ × 1½', 8],
      ],
      layout: 'split-reverse',
      images: [
        { src: image('Cutting wood.png'), alt: 'Chinomso cutting lumber with a miter saw', width: 3024, height: 4032 },
        { src: image('Cut woods.png'), alt: 'Cut lumber pieces arranged on a workbench', width: 3977, height: 1834 },
        { src: image('materials.png'), alt: 'Lumber, clamps, and drills laid out on the workbench', width: 4032, height: 3024 },
        { src: image('clamping.png'), alt: 'Chinomso securing the wooden frame to the workbench with a bar clamp', width: 3024, height: 4032 },
        { src: image('Clamping and screwing.png'), alt: 'Chinomso fastening the clamped lumber with a drill', width: 3024, height: 4032 },
        { src: image('Frame Assemble.png'), alt: 'Assembled wooden stool frame before the plywood panels were attached', width: 3024, height: 4032 },
      ],
    },
    {
      id: 'final-design',
      title: 'Shared seating.',
      body: 'At the class presentation, I started arranging the stools into different shapes, and we stacked them into stepped seating. If I built the stool again, I’d use fewer pieces and standardize their lengths to make assembly easier.',
      layout: 'grid',
      images: [],
    },
  ],
}
