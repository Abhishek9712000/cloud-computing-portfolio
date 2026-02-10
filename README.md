# Cloud Computing Portfolio - Abhishek Kumar Patel

A modern, dark-theme **cloud computing & DevOps portfolio website** built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

* ☁️ Modern cloud-inspired dark UI with glassmorphism effects
* ⚡ Built with Next.js 14 App Router for high performance
* 🎭 Smooth UI animations using Framer Motion
* 📱 Fully responsive (mobile, tablet, desktop)
* 📩 Contact form with Formspree integration
* 🌐 SEO optimized for better visibility
* ♿ Accessible and user-friendly design
* 🚀 Ready for deployment on Vercel

## 🛠️ Tech Stack

* **Framework:** Next.js 14
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Form Handling:** Formspree
* **Deployment:** Vercel
* **Domain Focus:** Cloud Computing, DevOps, AWS, Azure

## 📦 Installation

### Prerequisites

* Node.js 18+ installed
* npm or yarn package manager

### Setup Steps

1. **Clone or download this repository**

```bash
cd cloud-computing-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**

Visit `http://localhost:3000` to view the portfolio.

## 🔧 Configuration

### 1. Update Personal Information

Edit the following components to personalize the portfolio:

* `components/Hero.tsx` – Intro and headline
* `components/About.tsx` – About you and career focus
* `components/Projects.tsx` – Cloud & DevOps projects
* `components/Education.tsx` – Education details
* `components/Skills.tsx` – Cloud, DevOps & tools
* `components/Contact.tsx` – Contact details

### 2. Contact Form Setup (Formspree)

This project uses **Formspree** to handle contact form submissions without a backend.

**Steps:**

1. Visit [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy your form endpoint (example: `https://formspree.io/f/xyzabcde`)
5. Replace the endpoint in `components/Contact.tsx`

```ts
const response = await fetch('https://formspree.io/f/XXXXXXX', {
```

Replace `XXXXXXX` with your actual Formspree ID.

### 3. Update Cloud Project Links

Edit `components/Projects.tsx` and update demo links:

```ts
demo: 'https://your-cloud-project-url.com',
```

### 4. Add Resume

1. Place your resume PDF in the `/public` folder (e.g. `resume.pdf`)
2. Update links in:

   * `components/Navbar.tsx`
   * `components/Hero.tsx`

Change from:

```ts
<a href="#contact">
```

To:

```ts
<a href="/resume.pdf" download>
```

## 🚀 Deployment on Vercel

### Method 1: GitHub + Vercel (Recommended)

1. Push your code to GitHub:

```bash
git add .
git commit -m "Initial cloud portfolio commit"
git branch -M main
git remote add origin https://github.com/your-username/cloud-computing-portfolio.git
git push -u origin main
```

2. Go to [https://vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click **Deploy**

🎉 Your cloud portfolio will be live in minutes.

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Method 3: Manual Build

```bash
npm run build
```

Upload the generated output to Vercel.

## 🌐 Environment Variables

To hide Formspree endpoint:

Create `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXX
```

Use it in `Contact.tsx`:

```ts
process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
```

## 🎨 Customization

### Cloud Color Theme

Modify in `tailwind.config.js`:

```js
colors: {
  cloud: {
    dark: '#0f172a',
    slate: '#1e293b',
    blue: '#38bdf8',
    cyan: '#22d3ee',
    green: '#22c55e',
    purple: '#8b5cf6',
  },
}
```

### Fonts

* **Headings:** Syne
* **Body:** DM Sans
* **Code:** JetBrains Mono

Change in `app/globals.css` and `tailwind.config.js` if needed.

## 📁 Project Structure

```
cloud-computing-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Hero.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🐛 Troubleshooting

### Build Issues

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

* Ensure images are in `/public`
* Use absolute paths: `/image.png`

## 📄 License

Open-source and free for personal and educational use.

---

Built with ☁️, ❤️, and
