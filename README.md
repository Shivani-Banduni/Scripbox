# Scripbox

# Hack Ideas

## Introduction

Hack Ideas is a web application that allows employees to add and manage challenges for internal hackathons. This document provides an overview of the application, how to set it up, its features, and additional information.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Setup](#project-setup)
- [Responsive Design](#responsive-design)
- [Folder Structure](#folder-structure)
- [How to Test](#how-to-test)
- [Additional Notes](#additional-notes)

## Features

- Allow users to enter into the application with 'employee id' (password is not necessary).
- Allow users to add a new challenge/idea.
- A challenge will have a title, description, and tags.
- Fixed pre-defined tags (like 'feature', 'tech', etc.).
- Users can upvote a challenge.
- Show the list of all challenges on the home page.
- Allow users to sort challenges with vote count, creation date.

## Technologies

- React for the frontend.
- Simulated API service with local storage.
- Basic styling with CSS.

## Project Setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the application:

    ```bash
    npm start
    ```

   Visit `http://localhost:3000` in your browser to view the application.

## Responsive Design

This application is designed to be responsive to different screen sizes.

## Folder Structure

- `src/components`: React components.
- `src/services`: Simulated API service.
- `src/utils`: Utility functions.
- `src/styles`: CSS styles.

## How to Test

Run the following command to execute unit tests:

```bash
npm test
