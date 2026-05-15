# Next.js 43 Chapters Learning Journey

A comprehensive learning project covering Next.js fundamentals through a complete blog application with MongoDB integration.

## 📊 Progress Tracker

**Completed: 3/43** | **Current: Chapter 4** | **Remaining: 40**

---

## 📚 Chapter Breakdown

### Foundation & Core Concepts (Chapters 1-12)

- [x] **Chapter 1** | 00:00 | Intro ✅
- [x] **Chapter 2** | 02:11 | What is Next JS ✅
- [x] **Chapter 3** | 03:11 | App Router vs Pages Router ✅
- [ ] **Chapter 4** | 04:31 | Creating Project (IN PROGRESS)
- [ ] **Chapter 5** | 08:33 | Running Project
- [ ] **Chapter 6** | 10:36 | Project Structure
- [ ] **Chapter 7** | 13:43 | Routing
- [ ] **Chapter 8** | 21:37 | Route Segments
- [ ] **Chapter 9** | 24:12 | Layouts
- [ ] **Chapter 10** | 32:55 | Linking and Navigating
- [ ] **Chapter 11** | 37:29 | useRouter Hook
- [ ] **Chapter 12** | 44:20 | Server Components vs Client Components

### Advanced Routing & API (Chapters 13-20)

- [ ] **Chapter 13** | 47:38 | Dynamic Routes
- [ ] **Chapter 14** | 53:05 | Multiple Dynamic Segments
- [ ] **Chapter 15** | 55:46 | Route Handlers
- [ ] **Chapter 16** | 1:05:51 | Getting Request Data
- [ ] **Chapter 17** | 1:10:22 | Blog Project using Next JS
- [ ] **Chapter 18** | 1:11:04 | Create & Setup Project
- [ ] **Chapter 19** | 1:15:32 | Creating Home Page
- [ ] **Chapter 20** | 1:21:52 | Creating Header & Footer

### Page Building & UI Components (Chapters 21-25)

- [ ] **Chapter 21** | 1:28:17 | Creating About and Contact Pages
- [ ] **Chapter 22** | 1:34:22 | Navigation Links
- [ ] **Chapter 23** | 1:39:09 | Creating Post List API
- [ ] **Chapter 24** | 1:41:28 | Connecting MongoDB
- [ ] **Chapter 25** | 1:47:09 | Creating Post Model using Mongoose

### Data Management & Display (Chapters 26-34)

- [ ] **Chapter 26** | 2:04:04 | Show Post List using API
- [ ] **Chapter 27** | 2:11:39 | Public Environment Variables
- [ ] **Chapter 28** | 2:15:54 | Custom Field Post Data
- [ ] **Chapter 29** | 2:25:21 | Create Post Details Page
- [ ] **Chapter 30** | 2:28:36 | Creating Post Details API
- [ ] **Chapter 31** | 2:37:16 | Changing Date Format
- [ ] **Chapter 32** | 2:42:51 | Showing Post Details using API
- [ ] **Chapter 33** | 2:50:11 | Implementing Post Search
- [ ] **Chapter 34** | 3:14:51 | Working with Contact Form

### Forms & Advanced Features (Chapters 35-43)

- [ ] **Chapter 35** | 3:16:01 | Creating Enquiry Model
- [ ] **Chapter 36** | 3:19:11 | Creating Enquiry API
- [ ] **Chapter 37** | 3:31:51 | Customizing Error Message
- [ ] **Chapter 38** | 3:34:21 | Integrating Contact Form with API
- [ ] **Chapter 39** | 3:45:16 | Testing Contact Form
- [ ] **Chapter 40** | 3:48:51 | Using Meta Data
- [ ] **Chapter 41** | 3:53:46 | Using Meta Data with Client Component
- [ ] **Chapter 42** | 3:57:16 | Dynamic MetaData
- [ ] **Chapter 43** | 4:06:23 | Conclusion

---

## 🎯 Learning Objectives

### Phase 1: Foundation
- Understand Next.js fundamentals
- Master App Router vs Pages Router
- Learn project structure and configuration

### Phase 2: Routing & Navigation
- Implement dynamic routes and route segments
- Work with layouts and navigation
- Create route handlers and APIs

### Phase 3: Blog Application
- Build a complete blog project from scratch
- Integrate MongoDB with Mongoose
- Create CRUD operations for blog posts

### Phase 4: Advanced Features
- Implement search functionality
- Build contact forms with validation
- Work with metadata and SEO
- Handle environment variables

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: PostCSS/Tailwind CSS
- **Database**: MongoDB
- **ODM**: Mongoose
- **Package Manager**: npm

---

## 📁 Project Structure

```
blogs-today/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/             # About page route
│   ├── contact/           # Contact page route
│   ├── api/               # API routes
│   └── blog/              # Blog routes
├── public/                # Static assets
├── package.json           # Dependencies
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── postcss.config.mjs     # PostCSS configuration
└── README.md              # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB account (Atlas)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 How to Track Progress

1. Complete a chapter following the video tutorial
2. Update this README file by:
   - Changing `[ ]` to `[x]` for completed chapters
   - Updating `(IN PROGRESS)` status for current chapter
3. Update the **Progress Tracker** at the top with current numbers
4. Commit changes with a message like: `docs: complete chapter X - [chapter title]`

**Example Update:**
```markdown
- [x] **Chapter 4** | 04:31 | Creating Project ✅
- [ ] **Chapter 5** | 08:33 | Running Project (IN PROGRESS)
```

---

## 📌 Key Concepts to Master

### By Chapter 12
- [ ] Next.js App Router structure
- [ ] Dynamic routing with segments
- [ ] Layout system and nesting
- [ ] Client vs Server components
- [ ] Navigation and routing

### By Chapter 25
- [ ] Full CRUD API operations
- [ ] MongoDB integration
- [ ] Mongoose schema modeling
- [ ] Environment variable management
- [ ] Data validation

### By Chapter 43
- [ ] Complete blog application
- [ ] Search and filtering
- [ ] Form handling with validation
- [ ] SEO with metadata
- [ ] Error handling
- [ ] Production-ready code

---

## 🔗 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose Documentation](https://mongoosejs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📅 Completion Timeline

Track your estimated completion date:

- **Started**: May 15, 2026
- **Current Chapter**: 4/43
- **Target Completion**: [To be determined]

---

## ✨ Notes

- Review previous chapters periodically
- Practice by building variations of projects
- Commit code after each major concept
- Test thoroughly before moving to next chapter

---

**Last Updated**: May 15, 2026 | **Status**: Active Learning
