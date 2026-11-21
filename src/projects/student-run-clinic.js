function image(filename) {
  const projectPath = 'images/projects/student-run-clinic/';
  return import.meta.env.BASE_URL + projectPath + filename;
}

export const studentRunClinicProject = {
  id: 'student-run-clinic',
  slot: 6,
  title: 'Student Run Clinic',
  category: 'UI/UX design',
  summary: 'A collaborative redesign of a UC Davis student-run clinic website with research, wireframes, and high-fidelity homepage work.',
  cover: image('HeroImage.png'),
  coverAlt: 'Student Run Clinic website redesign for Juvenile Caduceus Clinic at UC Davis',
  coverPosition: 'center top',
  metadata: [
    ['Type', 'Collaborative Website Redesign'],
    ['Duration', 'Two academic quarters'],
    ['Focus', 'Homepage design + prototyping'],
    ['Team', '#Include Davis'],
  ],
  hero: {
    src: image('HeroImage.png'),
    alt: 'Overview of the Student Run Clinic website redesign',
    width: 1512,
    height: 851,
  },
  overview: {
    title: 'Redesigning a student-run clinic website.',
    paragraphs: [
      'A redesigned website for Juvenile Caduceus Clinic, a student-run clinic at UC Davis that aims to deliver high-quality care and assistance to the underprivileged youth and older adolescents.',
      'I was responsible for creating the Home page from start to end alongside the #include Davis design team and design leads.',
    ],
    features: [
      { title: 'The goal', body: 'Create an accessible and trustworthy website experience that communicates who the clinic serves, their history, and how they aim to keep it alive.' },
      { title: 'The problem', body: "The clinic's existing website needed a clearer structure, consistent visual system, and a more approachable way for visitors to find important healthcare information." },
      { title: 'My responsibilities', body: 'My task included competitive analysis, user persona, Lo-fidelity, mid-fidelity, and hi-fidelity prototypes.' },
    ],
  },
  sections: [
    {
      id: 'meet-the-team',
      title: 'Meet the Team',
      body: 'These are the designers and developers involved in this project. A collaborative clinic website redesign by designers and developers at #Include, a design club at UC Davis.',
      layout: 'wide',
      images: [
        { src: image('Meet the Team.png'), alt: '#Include Davis designers and developers involved in the Student Run Clinic redesign', width: 1640, height: 923 },
      ],
    },
    {
      id: 'understanding-the-user',
      title: 'Understanding the User',
      body: 'Our research showed that many Davis students struggle to find free or affordable healthcare that meets the needs of a diverse community.',
      bullets: [
        'Many students struggle to find affordable healthcare plans around Davis.',
        'Students often do not know where to begin when looking for healthcare resources.',
        'Some students do not have insurance and are unsure where to start looking for coverage.',
      ],
      layout: 'split',
      images: [
        { src: image('Persona.png'), alt: 'User persona for the Student Run Clinic website redesign', width: 618, height: 586 },
      ],
    },
    {
      id: 'low-fidelity',
      title: 'Lo-Fi Wireframes',
      body: 'Early layouts helped define the page structure, content hierarchy, and main user paths before visual styling was added.',
      layout: 'grid',
      images: [
        { src: image('Lo-Fi.png'), alt: 'Low-fidelity homepage wireframes for the Student Run Clinic redesign', width: 1012, height: 1781 },
        { src: image('teamLoFi.png'), alt: 'Low-fidelity wireframe explorations by the Student Run Clinic design team', width: 1728, height: 972 },
      ],
    },
    {
      id: 'mid-fidelity',
      title: 'Mid-Fi Wireframes',
      body: 'The mid-fidelity stage refined spacing, navigation, and section placement so the experience could feel clearer and more usable.',
      layout: 'split-reverse',
      images: [
        { src: image('Mid-Fi.png'), alt: 'Mid-fidelity homepage wireframes with refined navigation and content hierarchy', width: 1463, height: 2945 },
      ],
    },
    {
      id: 'high-fidelity',
      title: 'Hi-Fi Wireframes',
      body: "The high-fidelity design brought the clinic's purple visual system into the interface with more polished components and page details.",
      layout: 'split',
      images: [
        { src: image('Hi-fi.png'), alt: "High-fidelity Student Run Clinic homepage using the clinic's purple visual system", width: 1512, height: 4093 },
      ],
    },
    {
      id: 'teammate-work',
      title: "Teammate's Work",
      body: 'Additional design artifacts from my teammates helped guide the structure, flow, and testing direction for the final experience.',
      layout: 'grid',
      images: [
        { src: image('Design Archetech.png'), alt: 'Design architecture artifact created by a teammate for the clinic redesign', width: 1512, height: 1530 },
        { src: image('User Flow.png'), alt: 'User flow created by a teammate for the Student Run Clinic website', width: 1674, height: 1474 },
        { src: image('usabilitytesting.png'), alt: 'Usability testing artifact from the clinic design team', width: 1707, height: 970 },
        { src: image('Teammate Hi-Fi.png'), alt: 'High-fidelity interface work contributed by a teammate', width: 2940, height: 1846 },
      ],
    },
    {
      id: 'refining-the-design',
      title: 'Refining the Design',
      body: "This stage brought together multiple homepage explorations and committee page iterations as the interface became more polished and aligned with the clinic's visual direction.",
      layout: 'grid',
      images: [
        { src: image('home1.png'), alt: 'Student Run Clinic homepage design iteration one', width: 2940, height: 1846 },
        { src: image('Home2.png'), alt: 'Student Run Clinic homepage design iteration two', width: 2940, height: 1846 },
        { src: image('Home3.png'), alt: 'Student Run Clinic homepage design iteration three', width: 2940, height: 1846 },
        { src: image('Home4.png'), alt: 'Student Run Clinic homepage design iteration four', width: 2940, height: 1846 },
        { src: image('committee.png'), alt: 'Student Run Clinic partnership page design', width: 1512, height: 3525 },
        { src: image('committee2.png'), alt: 'Student Run Clinic events page design', width: 1512, height: 4480 },
      ],
    },
    {
      id: 'presentation',
      title: 'Presentation',
      body: 'We presented the final design direction and shared our process with the organization and design team.',
      layout: 'grid',
      images: [
        { src: image('Presentation1.JPG'), alt: 'First presentation photograph from the Student Run Clinic project', width: 1616, height: 1080 },
        { src: image('presentation2.JPG'), alt: 'Second presentation photograph from the Student Run Clinic project', width: 1616, height: 1080 },
        { src: image('Clubimage.JPG'), alt: 'Club group after the Student Run Clinic presentation', width: 1616, height: 1080 },
      ],
    },
  ],
}
