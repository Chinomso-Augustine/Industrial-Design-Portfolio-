# Chinomso Augustine — Industrial Portfolio

A React portfolio inspired by the structure of [Daniel Ha’s portfolio](https://danielha.design/contact): a centered name, simple Work/About navigation, a two-column project grid, and an About page with an introduction, portrait, and contact details. The layout adapts to phones and tablets.

## Local preview

From this `Industrial` directory:

```sh
npm run dev
```

Open **http://localhost:5173/**, using the URL Vite prints if that port is occupied. If dependencies are missing on a new machine, run `npm install` first.

- Work: `/#/work` (also the homepage)
- About: `/#/about`
- Contact alias: `/#/contact`
- Individual projects: `/#/project/your-project-id`

Social Step Stool is **Project 01**, at `/#/project/social-step-stool`. It uses the same case-study layout as the other projects, with temporary copy in `src/projects/social-step-stool.js`. Add its photos to `public/images/projects/social-step-stool/`; `perspective.png` is already there and supplies the cover and hero image. Add photo entries to the relevant section’s `images` array when ready.

Parklet Design is **Project 03**, at `/#/project/parklet-design`. Its case-study text is in `src/projects/parklet.js` and its independent image copies are in `public/images/projects/parklet/`.

Accessible Water Fountain is **Project 04**, at `/#/project/accessible-water`. Its case study is copied from the UI/UX portfolio into `src/projects/accessible-water.js`, with independent, optimized images in `public/images/projects/accessible-water/`.

Student Run Clinic is **Project 06**, at `/#/project/student-run-clinic`. Its content is copied from the UI/UX portfolio into `src/projects/student-run-clinic.js`, using the Industrial case-study layout. All 20 project images have independent copies in `public/images/projects/student-run-clinic/`.

## Interactive Rhino models

Social Step Stool’s “Sketches and ideas” section displays `public/images/projects/social-step-stool/final Step Stool.3dm` in the same interactive viewer, with room to rotate, zoom, reset, expand to full screen, or download the model.

Parklet’s “Translating the concept into Rhino” section displays `public/images/projects/parklet/DES51Parklet RhinoFile.3dm` in an interactive Three.js viewer, with a closer initial view and a blue-gray background. Drag to rotate, scroll or pinch to zoom, reset the view, expand to full screen, or download the Rhino file. The model loads when the section approaches the viewport.

To add a Rhino model to another case-study section, put its `.3dm` file in that project’s asset folder and add a `model` object alongside the section’s text:

```js
model: {
  title: 'Your interactive model',
  src: `${import.meta.env.BASE_URL}images/projects/your-project/model.3dm`,
  initialZoom: 1.5,
  background: '#d7e2e8',
},
```

Update `src` if you rename a model file. `initialZoom` controls its starting magnification, and `background` sets the viewer color.

The viewer uses `three` and `rhino3dm`, including bundled local JavaScript and WebAssembly for the Rhino reader. Its reusable React wrapper is `src/components/RhinoModel.jsx` and its rendering code is `src/lib/rhino-viewer.js`.

## Add projects when ready

1. Add your images to `public/images/projects/`. Each project can have its own subfolder.
2. Add a project object to the `projects` array in **`src/content.js`**.

For example, once the corresponding image files exist:

```js
export const projects = [
  parkletProject,
  accessibleWaterProject,
  {
    id: 'your-project-id',
    slot: 1,
    title: 'Your project title',
    category: 'Industrial design',
    year: '2026',
    role: 'Design and prototyping',
    tools: 'Rhino, model making',
    summary: 'Describe the problem, your design process, and the outcome.\n\nUse a blank line to start another paragraph.',
    cover: asset('projects/your-project/cover.jpg'),
    coverAlt: 'Describe the product in the cover image',
    images: [
      {
        src: asset('projects/your-project/cover.jpg'),
        alt: 'Describe the finished product',
      },
      {
        src: asset('projects/your-project/process.jpg'),
        alt: 'Describe the sketches or prototypes shown',
      },
    ],
  },
]
```

The `asset()` helper is already defined in `src/content.js`. It looks inside `public/images/` and supports hosting in a subfolder. Give every project a unique `id` and every image descriptive `alt` text.

The Work grid and project detail pages are created from this array. Set `slot` to choose a numbered position; unused positions remain “Coming soon” placeholders. Keep `socialStepStoolProject`, `parkletProject`, `accessibleWaterProject`, and `studentRunClinicProject` in the list to preserve Projects 01, 03, 04, and 06. Projects without a slot use the next available position.

A project page includes the title, summary, metadata, image gallery, and a link to the next project. Parklet also uses `overview` and `sections` to arrange its story into wide images, paired photographs, and text beside images. Click any image to enlarge it; use the arrow keys to browse the full case study and Escape to close.

The example is documentation only. The portfolio contains no sample projects presented as your work.

## Edit your About page

Your introduction, email, social links, and portrait are in the `profile` object in `src/content.js`. The portrait uses `public/images/about/Me.jpg` directly.

The About gallery follows the paired images and generous spacing of Daniel Ha’s About page. It displays `art-01.jpg`, `backpacks.jpg`, `Stool.png`, `Buildnig.png`, `IMG_5653.png`, and `IMG_6711.JPEG` directly from `public/images/about/`. Images keep their natural proportions and open in the image preview with keyboard navigation. About and project images have no descriptive captions.

Below the studio gallery, `aboutPhotography` displays `WS1.jpg`, `WS2.jpg`, and `WS3.JPG` in one row. These photos also keep their natural proportions and open in the same image preview. On phones, both galleries stack into one column.

To add more images to the gallery, put photos in `public/images/about/` and append entries to `aboutPhotos`:

```js
export const aboutPhotos = [
  { src: asset('about/studio.jpg'), alt: 'Working on a prototype in the studio' },
]
```

## Files

- `src/content.js`: personal details, projects, and About photos.
- `src/projects/social-step-stool.js`: Project 01, with temporary copy and image arrays ready for new photos.
- `src/projects/parklet.js`: Project 03, including the overview, process, fabrication, and final result.
- `src/projects/accessible-water.js`: Project 04, including the concept, ideation, prototypes, validation, and team.
- `src/projects/student-run-clinic.js`: Project 06, including the team, research, wireframes, design iterations, and presentation.
- `src/App.jsx`: navigation, pages, project templates, and image preview.
- `src/App.css`: layout and responsive styles.
- `src/index.css`: typography, colors, and global styles.
- `public/images/`: your images.

## Production build

```sh
npm run build
npm run preview
```

Vite creates `dist/` for static hosting. Hash navigation works without server rewrite rules.

In the repository's **Settings → Pages**, set the publishing source to **GitHub Actions**. The **Deploy to GitHub Pages** workflow builds and publishes `dist/` on pushes to `main`. You can also run it from the **Actions** tab.
