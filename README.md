# Developer Portfolio v2

Second version of a personal developer portfolio: a React single-page site with sections for an intro, services, projects, resume and a contact form that sends email through EmailJS.

**Status:** Working demo. The page runs end to end and the contact form sends through EmailJS, but the repo has no tests, no live URL is recorded, and the project list comes from a local JSON file.

## The problem

A developer needs a public page that shows what they do, lists client work and lets visitors send an inquiry without a back end. This version was a rebuild of the first portfolio in React.

## What it does

- Hero section (`src/components/main/jumbotron/`) at the top of the page.
- About and services sections describing the work offered (`about/`, `services/`).
- Portfolio section that renders project cards from `src/data/data.json`.
- Resume section (`src/components/main/resume/`).
- Contact form that calls `emailjs.sendForm` with a service and template ID (`contact/Contact.js`).

## How it's built

- React 18 with React Router DOM v6 and SCSS for styling, with one `.scss` file next to each component.
- Components live under `src/components/main/`, one folder per section, and `Main.js` composes them.
- Content is kept in `src/data/data.json`, so the portfolio cards are driven by data rather than markup.
- The contact form sends from the browser with `emailjs-com`, so no server is needed.
- Create React App (`react-scripts` 5) handles the build, and Firebase Hosting is configured with `firebase.json`.

## Running it locally

```bash
pnpm install   # or npm install
pnpm start     # or npm start, then open http://localhost:3000
```

Other scripts: `npm run build` (production bundle), `npm test` (react-scripts test runner), `npm run format` (Prettier).

## What's left

- No test files exist even though the test script is configured.
- Project and service content is hard-coded in the JSON and components, with no CMS or admin.
- The EmailJS IDs are written in `Contact.js` rather than read from configuration.
- No live URL is recorded in the repo.
- No deploy script is defined in `package.json`; Firebase deployment has to be run by hand with `firebase deploy`.
