# Jahidul ARAFAT - Portfolio Website

🚀 **Live Site:** [https://jahidularafat.github.io](https://jahidularafat.github.io)

A modern, responsive portfolio website showcasing the work of Jahidul Arafat - PhD Candidate, Presidential Fellow, DevSecOps Architect, and AI Team Lead.

## 🎯 **About**

This portfolio showcases:
- **10+ years** of software engineering and DevSecOps experience
- **NSF-funded research** in Kubernetes operator security
- **World's 2nd highest AWS Solutions Architect score** (97%)
- **500+ GitHub stars** across 20+ open source repositories
- **15+ peer-reviewed publications** in top-tier venues
- **Critical security discoveries** at Oracle and major platforms

## 🏗️ **Architecture**

### **Technology Stack**
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS with CSS Variables, Flexbox, Grid
- **Animations:** Intersection Observer API, CSS Transforms
- **Icons:** Font Awesome 6.0
- **Fonts:** Google Fonts (Inter)
- **Hosting:** GitHub Pages

### **Key Features**
- 📱 **Fully Responsive** - Mobile-first design
- 🎨 **Modern UI/UX** - Clean, professional interface
- ⚡ **Performance Optimized** - Fast loading, smooth animations
- 🔍 **Searchable Content** - Find projects, skills, publications
- 🌙 **Theme Switching** - Light/dark mode support
- 📊 **Interactive Elements** - Hover effects, smooth scrolling
- 🔒 **Security Focused** - No external dependencies for core functionality

## 📂 **Project Structure**

```
├── index.html                 # Main HTML structure
├── assets/
│   ├── css/
│   │   ├── styles.css         # Core styles and layout
│   │   ├── animations.css     # Animation definitions
│   │   └── responsive.css     # Mobile-responsive styles
│   ├── js/
│   │   ├── data-complete.js   # Portfolio data configuration
│   │   ├── components.js      # Component generation functions
│   │   ├── animations.js      # Animation controller
│   │   └── main.js           # Main application logic
│   └── files/
│       └── resume.pdf        # Downloadable resume
└── README.md                 # This file
```

## 🚀 **Quick Start**

### **Local Development**
```bash
# Clone repository
git clone https://github.com/jahidularafat/jahidularafat.github.io.git
cd jahidularafat.github.io

# Start local server (Python)
python -m http.server 8000

# Or with Node.js
npx live-server

# Open browser
open http://localhost:8000
```

### **GitHub Pages Deployment**
1. Push all files to `main` branch
2. Enable GitHub Pages in repository settings
3. Site automatically deploys to `https://jahidularafat.github.io`

## 🎨 **Customization**

### **Update Content**
Edit `assets/js/data-complete.js` to modify:
- Personal information and contact details
- Professional experience and education
- Skills and certifications
- Projects and repositories
- Research publications

### **Styling**
Modify CSS custom properties in `assets/css/styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary brand color */
    --text-dark: #1f2937;          /* Primary text color */
    /* ... other variables */
}
```

### **Add Resume PDF**
1. Add your PDF file to `assets/files/`
2. Update the resume URL in `assets/js/main.js`:
```javascript
this.resumeURL = 'assets/files/your-resume.pdf';
```

## 📊 **Performance**

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Cumulative Layout Shift:** < 0.1
- **Mobile Responsive:** 100% compatible
- **Cross-browser Support:** Chrome, Firefox, Safari, Edge

## 🔧 **Browser Support**

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 **Contributings**

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📝 **License**

© 2025 Jahidul Arafat. All rights reserved.

This project is for portfolio purposes. Please respect intellectual property and give appropriate credit if using any code or design elements.

## 📧 **Contact**

- **Email:** jahidapon@gmail.com
- **LinkedIn:** [jahidul-arafat-791a7490](https://linkedin.com/in/jahidul-arafat-791a7490)
- **GitHub:** [jahidul-arafat](https://github.com/jahidul-arafat)
- **Research:** [EASE 2025 Profile](https://conf.researchr.org/profile/ease-2025/jahidularafat)

---

**Built with ❤️ by Jahidul Arafat - Presidential Fellow & DevSecOps Architect**