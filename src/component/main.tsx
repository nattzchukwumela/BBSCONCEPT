import React, { useState } from "react";

export default function BarbershopWebsite() {
  const [activeSection, setActiveSection] = useState("home");

  const services = [
    {
      icon: "💈",
      title: "Haircut",
      description:
        "From precision buzz cuts to stylish fades and tapers, then to luxurious low cuts and bold high hair styling, our skilled barbers deliver haircuts ensuring you walk out with a cut that complements your face shape and lifestyle.",
    },
    {
      icon: "🪒",
      title: "Beard Shaving",
      description:
        "Whether you want a clean shave or a sculpted masterpiece, our barbers are razor-sharp specialists. Experience the precision of our shaves and sculpting claims, making the proposal for your look.",
    },
    {
      icon: "💇",
      title: "Hair Dyeing",
      description:
        "Bold highlights, vibrant dye jobs, or natural looking balayage. Our colorists are experts at creating custom hues and using premium products that won't damage your locks, ensuring a vibrant and long-lasting result.",
    },
    {
      icon: "🔌",
      title: "Charge your Devices",
      description:
        "Don't worry about a dying phone while you get pampered. Charge your devices with our complimentary phone charging stations.",
    },
    {
      icon: "🔒",
      title: "Dread Locks",
      description:
        "Whether you're rocking natural locks or need maintenance, our talented barbers are experts in dreadlock care and styling. Leave with healthy, nourished, and perfectly refined dreads.",
    },
    {
      icon: "✨",
      title: "Face Care",
      description:
        "Looking for a glow up? We offer a range of face care services. From proper cleansing and steam masks to beard facials and massages.",
    },
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #ffffff;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%);
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 2rem;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          background: #ffffff;
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          color: #d4a574;
        }

        .logo-sub {
          font-size: 0.875rem;
          color: #666;
        }

        .nav-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .nav-btn {
          padding: 0.75rem 1.5rem;
          background: #d4a574;
          color: #1a1a1a;
          border: none;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: #c89960;
          transform: translateY(-2px);
        }

        /* Hero Section */
        .hero {
          padding: 8rem 2rem 5rem;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
          line-height: 1.2;
          color: #d4a574;
        }

        .hero-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: #cccccc;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .icon {
          color: #d4a574;
          flex-shrink: 0;
        }

        .placeholder-img {
          height: 400px;
          background: #2a2a2a;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: #666;
          border: 2px solid #d4a574;
        }

        .placeholder-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        /* Testimonials */
        .testimonials {
          padding: 5rem 2rem;
          background: rgba(0, 0, 0, 0.3);
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 4rem;
          color: #d4a574;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .testimonial-card {
          background: rgba(212, 165, 116, 0.1);
          padding: 2rem;
          border-radius: 12px;
          border: 2px solid #d4a574;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
        }

        .testimonial-img {
          height: 200px;
          background: #2a2a2a;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: #666;
        }

        .testimonial-quote {
          font-size: 0.9rem;
          font-style: italic;
          margin-bottom: 1rem;
          color: #cccccc;
        }

        .testimonial-author {
          color: #d4a574;
          font-weight: 600;
        }

        /* Services */
        .services {
          padding: 5rem 2rem;
        }

        .services-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .services-btn {
          padding: 1rem 2.5rem;
          background: #d4a574;
          color: #1a1a1a;
          border: none;
          border-radius: 8px;
          font-size: 1.25rem;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .services-btn:hover {
          background: #c89960;
          transform: scale(1.05);
        }

        .services-subtitle {
          color: #cccccc;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: linear-gradient(135deg, #2a2a2a 0%, #3d2818 100%);
          padding: 2rem;
          border-radius: 12px;
          border: 2px solid #d4a574;
          text-align: center;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: scale(1.05);
          border-color: #c89960;
          box-shadow: 0 10px 30px rgba(212, 165, 116, 0.3);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #d4a574;
        }

        .service-description {
          font-size: 0.9rem;
          color: #cccccc;
        }

        /* Service Hours */
        .service-hours {
          padding: 5rem 2rem;
          background: rgba(0, 0, 0, 0.3);
        }

        .hours-container {
          max-width: 1000px;
          margin: 0 auto;
          background: linear-gradient(135deg, #2a2a2a 0%, #3d2818 100%);
          padding: 3rem;
          border-radius: 12px;
          border: 2px solid #d4a574;
        }

        .hours-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hours-text h3 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #d4a574;
        }

        .hours-text p {
          color: #cccccc;
          margin-bottom: 1rem;
        }

        .highlight {
          color: #d4a574;
          font-weight: 600;
        }

        /* Footer */
        .footer {
          background: #000000;
          padding: 4rem 2rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .footer-section h4 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #d4a574;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-btn {
          padding: 0.75rem 1rem;
          background: #d4a574;
          color: #1a1a1a;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          text-align: left;
        }

        .footer-btn:hover {
          background: #c89960;
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .facebook-btn {
          background: #1877f2;
          color: white;
        }

        .facebook-btn:hover {
          background: #1664d9;
        }

        .instagram-btn {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: white;
        }

        .instagram-btn:hover {
          opacity: 0.9;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 0.9rem;
        }

        .contact-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .footer-text {
          color: #999;
          margin-bottom: 1rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container,
          .hours-content {
            grid-template-columns: 1fr;
          }

          .testimonials-grid,
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .testimonials-grid,
          .services-grid,
          .footer-container {
            grid-template-columns: 1fr;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="container">
        {/* Navigation */}
        <nav className="nav">
          <div className="nav-container">
            <div className="logo">
              <span className="logo-text">BBS</span>
              <span className="logo-sub">Concepts</span>
            </div>
            <div className="nav-links">
              <button
                className="nav-btn"
                onClick={() => setActiveSection("home")}
              >
                Home
              </button>
              <button
                className="nav-btn"
                onClick={() => setActiveSection("service")}
              >
                Service
              </button>
              <button
                className="nav-btn"
                onClick={() => setActiveSection("contact")}
              >
                Contact Us
              </button>
              <button
                className="nav-btn"
                onClick={() => setActiveSection("home-service")}
              >
                Home Service
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <h1>Luxury Haircut at affordable price</h1>
              <div className="hero-info">
                <div className="info-item">
                  <span className="icon">📍</span>
                  <p>
                    Bladel Fuel Station, Iwofe Road UoE, Rumuritameni Port
                    Harcourt Rivers State.
                  </p>
                </div>
                <div className="info-item">
                  <span className="icon">📞</span>
                  <p>Call us +2348 1011 543432</p>
                </div>
              </div>
            </div>
            <div className="placeholder-img">
              <div className="placeholder-icon">✂️</div>
              <p>Hero Image Placeholder</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="section-container">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="testimonials-grid">
              {[
                {
                  quote:
                    "Your hair is more than just strands; it's a living tapestry woven with your experiences, memories, and your own unique spirit. We don't just cut hair; we here you tell your story through it and nurture it with care tailored to your own style, own your dream.",
                  author: "~BBS Concepts~",
                },
                {
                  quote:
                    "More than just strands, it's an expression of your inner artist. We provide the canvas, the tools, and the expertise to help you craft a masterpiece that radiates both confidence and individuality. Step into our salon ready to transform, and leave ready to conquer your truly life.",
                  author: "~BBS Concepts~",
                },
                {
                  quote:
                    "Escape the everyday hustle and bustle and indulge in a transformative cut that transcends the ordinary. Step into our sanctuary where our expert guided hands and soothing products work their magic. Let our artists craft a style that not only reflects your inner peace and leaves you feeling pampered and revitalized.",
                  author: "~BBS Concepts~",
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="testimonial-card">
                  <div className="testimonial-img">
                    <div className="placeholder-icon">✂️</div>
                    <p>Image {idx + 1}</p>
                  </div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <p className="testimonial-author">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services">
          <div className="section-container">
            <div className="services-header">
              <button className="services-btn">Services</button>
              <p className="services-subtitle">What we offer</p>
            </div>
            <div className="services-grid">
              {services.map((service, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Hours */}
        <section className="service-hours">
          <div className="hours-container">
            <div className="hours-content">
              <div className="placeholder-img" style={{ height: "300px" }}>
                <div className="placeholder-icon">🛠️</div>
                <p>Tools Image Placeholder</p>
              </div>
              <div className="hours-text">
                <h3>Service Hours</h3>
                <p>
                  <span className="highlight">
                    We're open Monday - Saturday
                  </span>
                  <br />
                  Come and let our professionals offer stylish take care of you!
                </p>
                <p style={{ fontSize: "0.9rem" }}>
                  Experience the future of hair care with our exclusive at-home
                  salon service! We utilize innovative tools and techniques to
                  deliver stunning results, exceptional care, and a premium
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <button className="footer-btn">Home</button>
                <button className="footer-btn">Service</button>
                <button className="footer-btn">Home Service</button>
              </div>
            </div>

            <div className="footer-section">
              <h4>Follow Us</h4>
              <p className="footer-text">
                Follow us on our social media handles
              </p>
              <div className="footer-links">
                <button className="social-btn facebook-btn">
                  <span>f</span> Facebook
                </button>
                <button className="social-btn instagram-btn">
                  <span>📷</span> Instagram
                </button>
              </div>
            </div>

            <div className="footer-section">
              <h4>Get In Touch</h4>
              <p className="footer-text">Our Contacts:</p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="icon">📍</span>
                  <p>
                    Bladel Fuel Station, Iwofe Road UoE, Rumuritameni Port
                    Harcourt Rivers State.
                  </p>
                </div>
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <p>Call us +2348 1011 543432</p>
                </div>
                <div className="contact-item">
                  <span className="icon">✉️</span>
                  <p>thebbsyourview@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
