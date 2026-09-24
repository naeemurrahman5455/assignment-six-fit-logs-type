## FitLog — Workout Library

FitLog is a modern, responsive workout library built for people who want to discover exercises, build a daily workout plan, save workouts for later, and keep track of their progress. The application provides a clean dark-themed interface with essential workout information such as duration, calories, difficulty, equipment, sets, reps, and ratings.

## 🚀 Live Project

## FitLog — Workout Library

## 📌 Project Overview

FitLog is a workout management web application where users can explore a curated workout library and organize exercises into their personal workout plan.

The project focuses on a clean user experience, responsive design, reusable React components, and efficient state management with Next.js and TypeScript.

## 🛠️ Technologies Used
- Next.js — React framework with App Router
- TypeScript — Type-safe development
- React — Component-based UI development
- Tailwind CSS — Responsive and utility-first styling
- Lucide React & React Icons  — Modern icons
- Context API — Global workout state management
- Local Storage — Persisting workout plans and saved workouts
- REST API — Fetching workout data


## ✨ Key Features
### - 1. 🏋️ Workout Library

Browse a collection of workouts covering different major muscle groups. Each workout card provides important information including:

- Workout name
- Muscle groups
- Equipment
- Difficulty level
- Duration
- Calories burned
- Rating

### 2. 📋 Personal Workout Plan

Users can add workouts to Today's Plan and organize the exercises they want to complete. The plan also provides live workout statistics such as:

- Total exercises
- Total workout minutes
- Estimated calories


### 3. 🔖 Save Workouts for Later

Users can save their favorite workouts and access them from the Saved section whenever they want.

### 4. 📊 Workout Details

Each workout has a dedicated details page containing:

- Exercise description
- Muscle groups
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions

Users can also add the workout to their plan or save it for later directly from the details page.

### 5. 📱 Responsive & Modern UI

FitLog is designed to work smoothly across:

- 📱 Mobile devices
- 📱 Tablets
- 💻 Desktop screens

The application uses a modern dark-themed interface with responsive layouts, interactive buttons, loading states, toast notifications, and clean workout cards.

## 📈 Project Goals

The main goals of FitLog are to provide:

- A simple workout discovery experience
- Easy workout planning
- Saved workout management
- Detailed exercise information
- Responsive and accessible UI
- Clean and reusable code architecture

## Project Structure
```text 
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── my-plan/
│   │   └── page.tsx
│   └── workouts/
│       └── [id]/
│           ├── page.tsx
│           └── loading.tsx
│
├── components/
│   ├── ButtonsComponent/
│   │   ├── TodayPlanButton.tsx
│   │   └── SavePlanButton.tsx
│   │
│   ├── GlobalCard/
│   │   ├── WorkoutStatsSummary.tsx
│   │   ├── SavePlanListCard.tsx
│   │   ├── PlanListCard.tsx
│   │   └── EmptyCard.tsx
│   │
│   ├── Home/
│   │   ├── LibrarySection.tsx
│   │   ├── Library.tsx
│   │   └── WorkoutCard.tsx
│   │
│   ├── Navbar.tsx
│   └── Hero.tsx
│
├── context/
│   └── WorkoutContext.tsx
│
├── hooks/
│   └── useLocalStorage.ts
│
├── lib/
│   └── api.ts
│
└── type/
    └── fitlogType.ts
│
public/
└── images/
│
README.md
package.json
tsconfig.json
next.config.ts
```


## 📄 Main Routes
/ — Home page and workout library
/workouts/[id] — Individual workout details
/my-plan — Today's workout plan and saved workouts




## 👨‍💻 Developer

### Naeemur Rahman
Built with ❤️ using Next.js, React, TypeScript & Tailwind CSS.

