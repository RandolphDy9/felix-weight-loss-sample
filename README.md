# ⚕️ Felix Weight Loss - A Modern Medical Platform

A responsive web application for weight loss consultations, built to showcase a **high-performance, scalable architecture** using **Next.js** and **Contentful**.

---

## ✨ Key Features
- ⚡ **Dynamic Content** – FAQs and practitioner profiles managed by **Contentful**.  
- 🚀 **Fast Performance** – Optimized with **Server-Side Rendering (SSR)**.  
- 🛠️ **Modern Stack** – Built with **Next.js**, **React**, and **TypeScript**.  
- 🎨 **Clean UI** – Styled with **Tailwind CSS** and accessible components from **Shadcn UI**.  
- 📊 **Analytics & A/B Testing** – Integrated with **Google Analytics 4** and supports A/B testing of UI elements such as the Hero CTA button.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 15  
- **UI**: React 19, Shadcn UI, Tailwind CSS  
- **CMS**: Contentful  
- **Language**: TypeScript  
- **Analytics**: Google Analytics 4 (with A/B testing support)

---

## 📦 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repo
```bash
git clone <repository-url>
cd felix-weight-loss
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root of your project and add your **Contentful credentials**:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_access_token
NEXT_PUBLIC_GA_ID=google_analytics_id
```

### 4. Run the app
```bash
npm run dev
```

Your app should now be running at:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deployment

### GitHub & Netlify Setup

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Configure environment variables in Netlify dashboard

### Google Analytics Integration & A/B Testing

After deployment, set up **Google Analytics 4 (GA4)**:

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property for your website
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Configure Environment Variables**
   - Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to your Netlify environment variables
   - The app will automatically load Google Analytics on all pages

3. **Hero CTA A/B Testing**
   - Two variants of the Hero button are tracked:
     - Variant A: "Find out if you're eligible"
     - Variant B: "Find Out Now"
   - Clicks on each variant are tracked via GA4 events with parameters:
     - `variant` → "A" or "B"
     - `button_text` → actual button text
     - `experiment_name` → "hero_button_text"
     - `event_category` → "A/B Testing"
   - You can analyze performance using **Custom Definitions** and **Exploration reports** in GA4

4. **Verify Integration**
   - Visit your deployed site
   - Click the Hero CTA button
   - Check **Realtime** or **Exploration reports** in GA4 to see variant performance

---

## 📂 Project Structure
A clean, modern structure using the **Next.js App Router** for organized and scalable development.

```
felix-weight-loss/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # Reusable UI components
│   └── lib/                 # Utility functions & API clients
└── ... (config files)
```

---

## 🤝 Contributing
Contributions are welcome! If you’d like to improve this project, feel free to fork the repo and submit a pull request.  

---

## 📜 License
This project is licensed under the **MIT License** – feel free to use it for your own projects.  

---

## 👨‍💻 Author
**Randolph Mayson Dy**  
Frontend Developer | React | Next.js | TailwindCSS  

- [LinkedIn](https://www.linkedin.com/in/maysondy/)  
- [Portfolio](https://www.randolphdy.com/)
