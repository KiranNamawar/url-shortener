# Project: URL Shortener

## Overview
This is a lightweight and efficient URL shortener designed to make managing and sharing links easier. Built with scalability and user-friendliness in mind, this project is being developed in public to promote transparency, learning, and community feedback.

---

## Features
- **Shorten Long URLs:** Convert lengthy links into compact, shareable URLs.
- **Customizable Links:** Allow users to create custom slugs for their shortened URLs.
- **User Authentication:** Enable users to log in and manage their links.
- **Analytics Dashboard:** Provide insights on click rates, referrers, and more.
- **Expiration Dates:** Set optional expiration dates for temporary links.

---

## Tech Stack
- **Backend:** Bun with Elysia.js
- **Database:** PostgreSQL managed via Prisma ORM
- **Frontend:** Coming soon (will explore frameworks like React or Svelte)
- **Hosting:** TBD (potentially Vercel or AWS)

---

## Getting Started

### Prerequisites
- Node.js/Bun installed
- PostgreSQL database setup
- Git for version control

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/KiranNamawar/url-shortener.git
   cd url-shortener
   ```
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=your_database_url
     ```
4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   bun run dev
   ```

---

## Contributing
Contributions are welcome! If you’d like to help improve this URL shortener, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear explanation of your changes.

---

## Roadmap
- [ ] Set up project structure and basic URL shortening.
- [ ] Implement user authentication.
- [ ] Add analytics and reporting features.
- [ ] Design and build a frontend UI.
- [ ] Launch MVP version.

---

## License
This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- Thanks to the developer community for inspiration and support.
- Special shoutout to everyone building projects in public!

---

## Contact
Feel free to reach out or follow the journey:
- **LinkedIn:** [Kiran Namawar](https://www.linkedin.com/in/kirannamawardev)

Let’s build something amazing together! 🚀
