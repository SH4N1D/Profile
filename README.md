# Shanid P - Personal Portfolio

A modern, responsive, and professional personal portfolio website for Shanid P, an aspiring Data Scientist and AI Engineering Intern. 

Built strictly with HTML5, CSS3, Bootstrap 5, Vanilla JavaScript, and Font Awesome. No frontend frameworks like React or Tailwind were used, keeping the project lightweight and beginner-friendly.

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling, CSS variables, glassmorphism, flexbox/grid layout, and subtle animations
- **Bootstrap 5**: Responsive grid system, navbar, and utility classes
- **Vanilla JavaScript**: DOM manipulation, scroll animations, form validation
- **Google Fonts**: Inter & Poppins typography
- **Font Awesome**: Icons for skills, contact, and social links

## Folder Structure

```text
.
├── index.html      # Main HTML structure and content
├── style.css       # Custom styling, dark theme variables, responsive queries
├── script.js       # Animations, form validation, navbar effects
└── README.md       # Project documentation
```
*(Note: Create an `images` folder to add a profile picture later)*

## How to Run Locally

Since this is a static website, you can simply open `index.html` in your web browser. However, using a local server is highly recommended for the best experience.

### Option 1: Using VS Code Live Server
1. Open this project folder in Visual Studio Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The website will automatically open in your default browser and refresh when you make changes.

### Option 2: Preview in Antigravity IDE
If you are using Antigravity IDE, you can preview the file natively, or use Python to serve the directory:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

## Customization Guide

### How to Replace the Profile Image
1. Create an `images` folder in the root directory.
2. Place your professional square photo inside it and name it `profile.jpg`.
3. Open `index.html` and search for `<!-- ================= HERO SECTION ================= -->`.
4. Locate the `profile-img-container` div.
5. Delete or comment out the `<div class="avatar-placeholder">...</div>` block.
6. Uncomment the image tag: `<img src="images/profile.jpg" alt="Shanid P" class="img-fluid profile-img">`.

### How to Add Projects
1. Open `index.html` and scroll to the `<!-- ================= PROJECTS ================= -->` section.
2. Find the comment `<!-- Project Card 1 -->`.
3. Copy the entire `<div class="col-md-6 col-lg-4 fade-in-up">...</div>` block.
4. Paste it before the `<!-- Future Project Placeholder -->` block.
5. Update the icon, title, description, technology badges, and GitHub link in the newly pasted block.

### How to Modify Personal Information
- **Text & Details**: Search for specific text (e.g., "CGPA", "Softroniics") in `index.html` and edit it directly.
- **Social Links**: Search for `fa-linkedin`, `fa-github`, or `fa-hackerrank` in `index.html` and update the `href` attribute in the anchor tags `<a>`.

## Contact Form Note

The current contact form is visually complete and includes basic frontend validation (checking for empty fields and valid email formats). However, **it does not send real emails**. 

To make it functional, you will need to connect a backend service. 
**Easy no-code solutions include:**
- [Formspree](https://formspree.io/)
- [Web3Forms](https://web3forms.com/)

**How to connect Formspree:**
1. Create a Formspree account and get your endpoint URL.
2. Update the `<form>` tag in `index.html`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_ENDPOINT_HERE" method="POST">
   ```
3. Ensure your `<input>` and `<textarea>` elements have a `name` attribute (e.g., `name="email"`).
