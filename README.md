# Ratiba

Ratiba is a simple, yet powerful scheduling application built with modern web technologies. The name "Ratiba" means "schedule" in Swahili, reflecting the app's core purpose of helping you organize your time effectively.

## ✨ Features

*   **Create, Read, Update, Delete (CRUD):** Full CRUD functionality for managing your schedules.
*   **User-Friendly Interface:** A clean and intuitive UI for a seamless user experience.
*   **Real-time Updates:** Schedules are updated in real-time.
*   **Supabase Integration:** Utilizes [Supabase](https://supabase.io/) for the backend, providing a scalable and secure database.

## 🚀 Technologies Used

*   [Next.js](https://nextjs.org/) - The React framework for production.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   [Supabase](https://supabase.io/) - The open-source Firebase alternative for building secure and scalable backends.
*   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18.x or later)
*   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/csdistsys.git
    cd csdistsys/ratiba
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the `ratiba` directory and add your Supabase credentials:
    ```
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```

4.  **Set up the database:**
    Run the SQL schema from `ratiba/schema.sql` in your Supabase project's SQL editor to create the `schedules` table.

5.  **Run the development server:**
    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.