# 🎬 Movie Directory App

A React application for exploring famous movie directors and their films. Users can browse, create, and view details about directors and their movies using nested routes powered by React Router v6.

---

## 🚀 Features

- 🧭 Client-side routing with nested and dynamic paths
- 📄 View a list of directors and their bios
- 🎥 Browse and view details about individual movies
- ➕ Add new directors and movies
- ❌ Gracefully handles invalid routes or missing data
- 🧪 Fully tested with Vitest and Testing Library

---

## 🛠️ Technologies Used

- React
- React Router v6
- JSON Server (mock backend)
- Vitest + React Testing Library

---

## 📁 Folder Structure

```
src/
├── App.jsx
├── main.jsx
├── components/
│   └── NavBar.jsx
├── pages/
│   ├── About.jsx
│   ├── DirectorCard.jsx
│   ├── DirectorContainer.jsx
│   ├── DirectorForm.jsx
│   ├── DirectorList.jsx
│   ├── ErrorPage.jsx
│   ├── Home.jsx
│   ├── MovieCard.jsx
│   └── MovieForm.jsx
├── __tests__/
│   └── App.test.jsx
└── index.css
```

---

## 📷 Screenshot

![App Screenshot](./src/assets/Screenshot%202025-06-12%20at%209.40.59 PM.png)

---

## 🧪 Running Tests

```bash
npm run test
```

---

## 🚦 Starting the App

1. Start JSON Server backend:

   ```bash
   npm run server
   ```

2. Start the frontend dev server:
   ```bash
   npm run dev
   ```

---

## 🔁 Routing Overview

| Route                            | Component      | Description                        |
| -------------------------------- | -------------- | ---------------------------------- |
| `/`                              | `Home`         | Landing page                       |
| `/about`                         | `About`        | Project description                |
| `/directors`                     | `DirectorList` | List of all directors              |
| `/directors/new`                 | `DirectorForm` | Form to add a new director         |
| `/directors/:id`                 | `DirectorCard` | Details and movies for a director  |
| `/directors/:id/movies/new`      | `MovieForm`    | Form to add a movie for a director |
| `/directors/:id/movies/:movieId` | `MovieCard`    | Details for a specific movie       |
| `*`                              | `ErrorPage`    | Catch-all for invalid routes (404) |

---

## 💡 Future Improvements

- Edit/delete functionality for directors and movies
- Enhanced form validation
- Global error handling UI
- Real backend API integration
- Add filtering or sorting for movies
