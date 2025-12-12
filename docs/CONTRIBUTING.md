# Contributing to RetinaCare Frontend

Thank you for considering contributing to **RetinaCare**!  
Please follow the guidelines below to ensure a smooth contribution process.

## Development Setup

1. Clone the repository

   On the GitHub repo page, click the green **Code** button and copy the HTTPS link.  
   Then, in your terminal, run:

```sh
   git clone https://github.com/RetinaCare/Frontend.git
```

2. Navigate to the project

```sh
   cd Frontend
```

3. Install dependencies

```sh
   npm install
```

4. Start the development server

```sh
   npm run dev
```

## Creating a New Branch

Before making any changes, create a new branch:

```sh
git checkout -b feature/your-feature-name
```

Branch naming suggestions based on the type of work:

- `feat/` → new features
- `fix/` → bug fixes
- `refactor/` → code restructuring without changing functionality
- `chore/` → routine tasks (e.g., updating dependencies or configs)
- `docs/` → documentation updates

## Committing Changes

Make your changes, then commit with a descriptive message:

```sh
git commit -m "feat: add password reset flow"
```

Commit message format:

type(scope): short description

- type → feat, fix, docs, style, refactor, test, chore
- scope → optional (e.g., auth, ui, api)
- Example:

```sh
feat(auth): add password reset flow
```

## Submitting Your Changes

1. Push your branch

```sh
git push origin feature/your-feature-name
```

2. Open a Pull Request (PR) on GitHub.

3.Ensure your PR includes:

- A clear description of the change
- Screenshots (for UI-related updates)

A project maintainer will review your PR and may request updates before merging.
