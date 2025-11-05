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
              {/*<div className="placeholder-icon">✂️</div>*/}
              {/*<p>Hero Image Placeholder</p>*/}
              <img
                src="/img/bg/carousel.jpg"
                className="placeholder-img hero-image"
                alt="hero image"
              />
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
