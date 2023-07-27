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

```bash
npm install
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `components/shared` or `components/pages/Home`. If you need create components for home page you can create in `components/pages/Home` folder for only home page components. If you need create any pages in this projects. You can create `components/pages` folder. And set route `app/(main-layout)` group.

## Where you push code? 
First of all, you create a branch in this repo following your own name. After your successfully complete clone code then you need to switch your branch and then push your code. After complete your distribute task and push then you create pull request in your branch to stage branch.

### for any query feel free to knock me `Nahid Ahmed` in Discord or whatsapp.
# mediaid team
