# Developer Portfolio Website

A premium, responsive, glassmorphism developer portfolio website designed to host on **GitHub Pages**. 

Built with pure **HTML5**, **Vanilla CSS**, and **modern JavaScript** for lightning-fast loading speeds, zero build steps, and absolute reliability.

## 🚀 Quick Deployment to GitHub Pages

Since you already have this repository cloned, follow these steps to deploy it live immediately:

1. **Commit and Push the Files:**
   Open your terminal in this repository directory and run:
   ```bash
   git add .
   git commit -m "Bootstrap premium developer portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   * Go to your repository on GitHub: `https://github.com/<your-username>/nextyogesh.github.io`
   * Click on the **Settings** tab.
   * On the left sidebar, under "Code and automation", click **Pages**.
   * Under **Build and deployment** -> **Source**, make sure **Deploy from a branch** is selected.
   * Under **Branch**, select `main` and `/ (root)`, then click **Save**.
   * *Within 1–2 minutes, your website will be live at `https://<your-username>.github.io/nextyogesh.github.io/`!*

---

## 🛠️ How to Customize Your Content

All website content is located in the `index.html` file. You can open `index.html` in your text editor and modify the following details to match your background:

### 1. Personal Details
* **Navigation Logo/Title:** Edit lines 28–35 to change the name and tagline in the header.
* **Hero Headline & Paragraph:** Edit lines 95–104 to change your introductory greeting.
* **Terminal Stats Widget:** Edit lines 112–129 to modify the visual mockup dashboard code.
* **About Cards:** Edit lines 152–184 to update your core professional traits.
* **Badges / Metrics:** Edit lines 197–214 to update your years of experience, project counts, etc.

### 2. Technical Stack
* **Skills Sections:** Modify lines 225–342 to list your exact programming languages, frameworks, and tooling. Adjust the `style="width: XX%"` elements to represent your skill confidence.

### 3. Project Showcase
* **Project Cards:** Modify lines 366–490 to list your personal projects. Update the tags, descriptions, lists, and live/repository links.
* If you want to change categories for filters, edit the `data-category` attribute on the `<article class="project-card" data-category="...">` tags (options are: `frontend`, `backend`, `fullstack`).

### 4. Contact Information & Links
* **Social Links:** Update the email address, GitHub link, and LinkedIn URLs on lines 504–545 and lines 578–589.

---

## ✨ Features Implemented
* 🌓 **Dark / Light Theme Toggle** with persistence using `localStorage`.
* 📱 **Fully Responsive Layout** designed with CSS Flexbox & CSS Grid, supporting mobile, tablet, and widescreen layouts.
* 🧩 **Interactive Project Filters** to dynamically show/hide work categories instantly without page refreshes.
* 🌊 **Scroll Reveal Animations** that fade elements in gracefully as the user scrolls.
* 📦 **Zero External Dependency Overhead** using embedded SVG icons and Google Fonts for fast SEO scores.
* 📬 **Stylized Contact Form** with loading states and custom success checks.
