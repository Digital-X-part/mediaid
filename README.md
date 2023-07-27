# MediAid Project Setup Instructions

## Overview

Welcome to the MediAid Project! This guide will walk you through setting up the project and provide some essential instructions. Please follow the steps below to get started.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (https://nodejs.org) - Make sure to install the LTS version.
- Git (https://git-scm.com) - For version control.

## Clone the Repository

Clone the project repository from the main branch using the following command:
```bash
git clone <[repository_url](https://github.com/Digital-X-part/mediaid.git)>



## Project Structure
The project follows a specific folder structure. Please follow the guidelines mentioned below to ensure smooth development.

- src/app: Please avoid customizing anything in this folder, as Next.js is sensitive to changes here. You can create new routes in this folder if needed.
- components/shared: Edit components in this folder to make changes that will be reflected across the application.
- components/pages/Home: If you need to create components specific to the Home page, create them in this folder.
- components/pages: To add new pages to the project, create components in this folder. Remember to set the routes within app/(main-layout) group.



## Getting Started

Once you have cloned the repository, navigate to the project's root directory and follow the steps below:

1. Install dependencies by running the following command:
```bash
npm install
2. Start the development server with the command:
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## Pushing Code

When you are ready to push your changes, follow these steps:

1. Create a new branch with a descriptive name related to your task or feature:
```bash
git checkout -b your-branch-name

2. Commit your changes to the new branch.

3. Push your branch to the repository:
```bash
git push origin your-branch-name

4. Create a pull request from your branch to the stage branch on the repository.


Additional Notes
- Avoid customizing the src/app folder to prevent compatibility issues with Next.js.
- For any queries or assistance, feel free to contact Nahid Ahmed on Discord or WhatsApp.

# mediaid team
