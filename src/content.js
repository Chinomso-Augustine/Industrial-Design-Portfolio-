import { socialStepStoolProject } from './projects/social-step-stool'
import { parkletProject } from './projects/parklet'
import { accessibleWaterProject } from './projects/accessible-water'
import { studentRunClinicProject } from './projects/student-run-clinic'

// Your personal details. Change the introduction and links whenever you like.
// Asset paths use Vite's base URL so they also work when hosted in a subfolder.
const asset = (path) => `${import.meta.env.BASE_URL}images/${path}`

export const profile = {
  name: 'Chinomso Augustine',
  greeting: 'Hi, I’m Chinomso!',
  discipline: 'Industrial design & physical experiences',
  email: 'chinomsoaugustine073@gmail.com',
  about: [
    'I’m a designer working across physical products and digital experiences. I’m interested in the way objects feel, function, and fit into everyday life.',
    'Outside of design, you’ll usually find me behind a camera—photographing sports, people, and the small details around me.',
  ],
  portrait: {
    src: asset('about/Me.jpg'),
    alt: 'Chinomso Augustine with his camera at a sports event',
    width: 1066,
    height: 1600,
  },
  socials: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/chinomso-augustine-ba9a29258/',
    },
    { label: 'Instagram', url: 'https://www.instagram.com/chino_clickss/' },
  ],
}

// The slot property places a project in a numbered position in the Work grid.
// Unfilled positions remain available for the projects you add later.
export const projects = [socialStepStoolProject, parkletProject, accessibleWaterProject, studentRunClinicProject]

// About images load directly from their existing folder.
export const aboutPhotos = [
  {
    src: asset('about/Buildnig.png'),
    alt: 'Assembling a plywood structure with a cordless drill in the workshop',
    width: 3024,
    height: 4032,
  },
  {
    src: asset('about/Stool.png'),
    alt: 'Working on a wooden stool in the workshop',
    width: 3024,
    height: 4032,
  },
  {
    src: asset('about/art-01.jpg'),
    alt: 'Finished colored illustration of a man with prison bars inside his head',
    width: 1271,
    height: 1800,
  },
  {
    src: asset('about/backpacks.jpg'),
    alt: 'Detailed pencil drawing of a backpack with pockets, straps, and a front buckle',
    width: 2391,
    height: 3092,
  },
  {
    src: asset('about/IMG_5653.png'),
    alt: 'Sitting on pink wooden crates during a studio project presentation',
    width: 3024,
    height: 4032,
  },
  {
    src: asset('about/IMG_6711.JPEG'),
    alt: 'Students sitting on a colorful structure assembled from wooden crates',
    width: 3024,
    height: 4032,
  },
]

// Sports photography appears below the studio gallery.
export const aboutPhotography = [
  {
    src: asset('about/WS1.jpg'),
    alt: 'Black-and-white portrait of a volleyball player holding the ball before a serve',
    width: 2636,
    height: 4425,
  },
  {
    src: asset('about/WS2.jpg'),
    alt: 'A volleyball player jumping to serve during a match',
    width: 2997,
    height: 5155,
  },
  {
    src: asset('about/WS3.JPG'),
    alt: 'Black-and-white action photograph of a UC Davis volleyball player spiking at the net',
    width: 3549,
    height: 5758,
  },
]
