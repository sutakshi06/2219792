# React URL Shortener – Design Document

## Technologies Used
- **React**: Frontend framework
- **JavaScript**: For logic and DOM manipulation
- **Custom Logging Middleware**: Logs request URL, body, response, and time
- **Fetch API**: To simulate API calls
- **CSS**: Inline styling for layout

## Architecture
- App is built as a **Single Page Application (SPA)** using React.
- Logging middleware handles all outgoing API calls.
- No backend server is used – API responses are simulated.

## Folder Structure

## Design Decisions
- **React** provides reusable components and fast UI rendering.
- **Mock API** used to simulate URL shortening, reducing backend dependencies.
- **Console logging** improves transparency for debugging and evaluation.

## Assumptions
- No database is used.
- API endpoint used is only for demonstration.
- URL shortening logic is simulated using random strings.
