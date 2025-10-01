# Danny Nunez - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my work as a Full Stack Developer with over 10 years of experience. Built with Next.js 14, React, and Tailwind CSS, featuring stunning animations and interactive elements.

## 🌟 Features

- **Modern Hero Section** - Eye-catching hero with custom background and gradient effects
- **Interactive About Me** - Three.js animated background with floating code snippets
- **Experience Showcase** - Glassmorphism cards with hover effects displaying services and tech stack
- **Portfolio Carousel** - Swiper.js powered project showcase with coverflow effect
- **Contact Form** - Functional contact form integrated with MailerSend API
- **Smooth Animations** - Custom scroll animations and transitions throughout
- **Fully Responsive** - Optimized for all device sizes
- **Dark Theme** - Beautiful black-to-blue gradient background

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Three.js, Lottie, Framer Motion
- **Icons**: React Icons
- **Carousel**: Swiper.js

### Backend
- **API Routes**: Next.js API Routes
- **Email Service**: MailerSend
- **Environment**: Node.js

### Additional Tools
- **Image Optimization**: Next.js Image component
- **Font**: Libre Franklin (Google Fonts)
- **3D Graphics**: Three.js with custom particle system

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Danny-Nunez/danny-portfolio.git
   cd danny-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   MAILERSEND_API_KEY=your_mailersend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### MailerSend Setup

1. Sign up at [MailerSend](https://www.mailersend.com/)
2. Verify your domain (or use trial domain)
3. Generate an API key
4. Add the API key to your `.env.local` file
5. Update the sender email in `/src/app/api/contact/route.js` if needed

### Customization

- **Update Projects**: Edit `/src/app/components/Portfolio.js` - modify the `projects` array
- **Change Colors**: Update Tailwind classes throughout components
- **Modify Content**: Edit component files in `/src/app/components/`
- **Update Images**: Replace images in `/public/images/`

## 📁 Project Structure

```
danny-portfolio/
├── public/
│   ├── css/              # Custom CSS files
│   ├── images/           # Project images and assets
│   ├── img/              # Additional images and animations
│   └── js/               # Lottie animations
├── src/
│   └── app/
│       ├── api/
│       │   └── contact/  # Contact form API route
│       ├── components/   # React components
│       │   ├── AboutMe.js
│       │   ├── Contact.js
│       │   ├── HeroSection.js
│       │   ├── Navbar.js
│       │   ├── Portfolio.js
│       │   ├── Services.js
│       │   └── ThreeBackground.js
│       ├── globals.css   # Global styles
│       ├── layout.js     # Root layout
│       └── page.js       # Home page
├── .env.local           # Environment variables (not in repo)
├── next.config.mjs      # Next.js configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🎨 Sections

### 1. Hero Section
- Centered layout with person image
- Custom shadow effect
- Blue-to-purple gradient button
- Social media links
- Smooth scroll to About section

### 2. About Me
- Three.js animated code snippets background
- Glassmorphism containers
- Typing animation effect
- Personal information display
- Certification links
- Resume download button

### 3. Experience
- Service cards with glass hover effects
- Technologies & tools categorized display
- Frontend, Backend, and Design tech stacks
- Interactive hover animations

### 4. Portfolio
- Swiper carousel with coverflow effect
- Project cards with images, descriptions, and tech stacks
- Modal view for detailed project information
- Private code modal for confidential projects
- Year badges on each project
- Live demo and code repository links

### 5. Contact
- Two-column responsive form layout
- Name, Email, and Message fields
- MailerSend integration for email delivery
- Success/error status messages
- Blue-purple gradient submit button
- Copyright footer

## 🌐 Live Demo

Visit the live site: [https://dannyfullstack.dev](https://dannyfullstack.dev)

## 🎓 Certifications

- [**MITXPRO**](https://certificates.emeritus.org/3779189a-452b-4050-8c31-059ac6437d8e#gs.4d7xg9) - MIT Professional Education
- [**Harvard CS50**](https://certificates.cs50.io/9d6b2668-29cb-450b-8890-eab8050930c3.pdf?size=letter) - Introduction to Computer Science
- [**Google UX/UI**](https://www.coursera.org/account/accomplishments/certificate/3E3MHWM2PHU6) - User Experience Design
- [**Meta Frontend Developer**](https://www.coursera.org/account/accomplishments/certificate/2NAKJRD9XRSC) - Frontend Development
- [**Meta Programming with JavaScript**](https://www.coursera.org/account/accomplishments/certificate/6MSHPGVCLR9Y) - JavaScript Programming
- [**Google SEO Fundamentals**](https://www.coursera.org/account/accomplishments/certificate/W4XY953Z39WK) - Search Engine Optimization

## 📧 Contact

- **Email**: Dnunez22@gmail.com
- **Website**: [dannyfullstack.dev](https://dannyfullstack.dev)
- **LinkedIn**: [Danny Nunez](https://www.linkedin.com/in/danny-nunez-a7886b209)
- **GitHub**: [@Danny-Nunez](https://github.com/Danny-Nunez)
- **Twitter**: [@DannyFullstack](https://twitter.com/DannyFullstack)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Three.js for 3D graphics capabilities
- MailerSend for email delivery service
- All open-source contributors whose packages made this possible

---

**Built with ❤️ by Danny Nunez**

*Full Stack Developer | Based in Maryland*
