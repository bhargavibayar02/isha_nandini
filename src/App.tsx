import { useEffect, useState } from 'react';
import {
  BadgeCheck,
  Camera,
  Factory,
  Heart,
  IceCreamCone,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Snowflake,
  Store,
  Truck,
  Users,
  Warehouse,
  X,
} from 'lucide-react';
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { defaultProducts, siteConfig, storageKeys, type ProductItem } from './data/siteConfig';

function BrandLogo({ compact = false }: { compact?: boolean }) {
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <div className={`brand-lockup ${compact ? 'compact' : ''}`} aria-label={siteConfig.companyName}>
      <span className={`brand-logo-slot ${logoLoaded ? 'has-logo' : ''}`}>
        <img
          src={siteConfig.logoPath}
          alt="Official ISHA NANDINI logo"
          onLoad={() => setLogoLoaded(true)}
          onError={() => setLogoLoaded(false)}
        />
      </span>
      <span className="brand-copy">
        <strong>ISHA NANDINI</strong>
        <small>ICE CREAM DISTRIBUTORS</small>
      </span>
    </div>
  );
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function CowIllustration({ footer = false }: { footer?: boolean }) {
  return (
    <figure className={`nandini-cow-artwork ${footer ? 'footer-cow-artwork' : ''}`}>
      <img src="/nandini-brand-mark.png" alt="Nandini dairy logo with its original cow, colours and wordmark" />
      <figcaption>THE COW AND COLOURS YOU KNOW</figcaption>
    </figure>
  );
}

function FloatingTreats() {
  return (
    <div className="ambient-treats" aria-hidden="true">
      <IceCreamCone className="ambient-treat treat-left-one" />
      <IceCreamCone className="ambient-treat treat-right-one" />
      <IceCreamCone className="ambient-treat treat-left-two" />
      <IceCreamCone className="ambient-treat treat-right-two" />
      <IceCreamCone className="ambient-treat treat-center" />
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Partners', href: '#partners' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link to="/" className="brand-nav" aria-label="ISHA NANDINI home">
          <BrandLogo compact />
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}

function Loader() {
  return (
    <div className="loader-screen" aria-live="polite" aria-busy="true">
      <div className="loader-core">
        <div className="loader-logo-wrap">
          <BrandLogo />
        </div>
        <div className="speckle-wrap" aria-hidden="true">
          <IceCreamCone className="speckle speckle-one" size={22} />
          <IceCreamCone className="speckle speckle-two" size={28} />
          <IceCreamCone className="speckle speckle-three" size={20} />
          <IceCreamCone className="speckle speckle-four" size={25} />
        </div>
        <div className="loading-bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-watercolor" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow"><IceCreamCone size={15} /> A little joy, made to share</span>
          <p className="hero-kannada">ಸಿಹಿ ಕ್ಷಣಗಳು, ಸದಾ ಹತ್ತಿರ</p>
          <h1>
            <span className="hero-title-brand">ISHA NANDINI</span>
            <span className="hero-title-product">ICE CREAM</span>
            <em className="hero-title-distributor">DISTRIBUTORS</em>
          </h1>
          <p>
            Bringing trusted ice cream distribution and thoughtful service to retail and business partners.
          </p>
          <div className="hero-actions">
            <a href="#services" className="button primary">
              Explore our services
            </a>
            <a href="#contact" className="button secondary">
              Let’s connect
            </a>
          </div>
          <div className="district-tag">
            <MapPin size={16} />
            <span>ROOTED IN</span>
            <strong>KUMBHASHI, KUNDAPURA</strong>
            <span className="district-kannada">ಕುಂಭಾಶಿ · ಕುಂದಾಪುರ</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Nandini logo and ice cream illustrations">
          <div className="hero-sun" />
          <div className="hero-emblem-orbit orbit-back" />
          <div className="hero-emblem-orbit orbit-front" />
          <div className="nandini-emblem-stage">
            <div className="emblem-topline"><span /> A NAME YOU KNOW <span /></div>
            <CowIllustration />
            <div className="emblem-bottomline">A LITTLE JOY IN EVERY DAY</div>
          </div>
          <div className="floating-ice float-one" aria-hidden="true"><IceCreamCone size={35} /></div>
          <div className="floating-ice float-two" aria-hidden="true"><IceCreamCone size={26} /></div>
          <div className="floating-ice float-three" aria-hidden="true"><IceCreamCone size={21} /></div>
          <div className="hero-seal">
            <span>ಸಿಹಿ</span>
            <small>HAPPY<br />MOMENTS</small>
          </div>
          <div className="hero-fact">
            <Snowflake size={18} />
            <span>Made for<br />sweet moments</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="site-section alt-bg">
      <div className="container about-grid">
        <div className="about-visual" data-reveal>
          <div className="about-art">
            <div className="about-art-ring ring-one" />
            <div className="about-art-ring ring-two" />
            <div className="about-pink-treat" aria-hidden="true">
              <span className="icecream-scoop scoop-pink" />
              <span className="icecream-scoop scoop-vanilla" />
              <span className="icecream-cone" />
              <span className="icecream-shine" />
            </div>
            <div className="about-floating-icon icon-snow"><Snowflake size={24} /></div>
            <div className="about-floating-icon icon-scoop"><IceCreamCone size={22} /></div>
            <span className="about-art-caption">ಕುಂಭಾಶಿ · ಕುಂದಾಪುರ</span>
          </div>
        </div>

        <div className="about-copy" data-reveal>
          <SectionHeading
            eyebrow="About us"
            title="Local warmth. A cooler kind of connection."
            text="Ice cream brings people together. We bring a thoughtful, dependable approach to the businesses that share those moments."
          />

          <div className="text-columns">
            <p>
              Based in Kumbhashi, Kundapura, ISHA NANDINI ICE CREAM DISTRIBUTORS connects retail and business
              partners with a service-minded distribution approach.
            </p>
            <p>
              Thoughtful handling, clear communication and dependable relationships guide every interaction. Our
              story is still being written — one local partnership and one sweet moment at a time.
            </p>
          </div>

          <ul className="feature-list">
            <li>
              <BadgeCheck size={18} />
              <span>Careful product handling, with quality in mind</span>
            </li>
            <li>
              <ShieldCheck size={18} />
              <span>People-first support for retail and business partners</span>
            </li>
            <li>
              <MapPin size={18} />
              <span>Local knowledge, with a partner-first perspective</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const items = siteConfig.partners.length ? siteConfig.partners : [
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ];

  return (
    <section id="partners" className="site-section">
      <div className="container">
        <SectionHeading
          eyebrow="Our partners"
          title="Good people make great partnerships."
          text="Meet the people behind the business. Partner names and portraits can be added when you are ready."
        />

        <div className="partner-grid">
          {items.map((partner, index) => (
            <article key={`partner-${index}`} className="partner-card" data-reveal>
              <div className="partner-visual" aria-label={partner.name || `Partner ${index + 1}`}>
                {partner.image ? <img src={partner.image} alt={partner.name || `Partner ${index + 1}`} /> : <span>{partner.name ? partner.name.slice(0, 2).toUpperCase() : `P${index + 1}`}</span>}
              </div>
              <div className="partner-meta">
                <h3>{partner.name || `Partner ${index + 1}`}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: <IceCreamCone size={26} />, title: 'Ice Cream Distribution', kannada: 'ಐಸ್ ಕ್ರೀಮ್ ವಿತರಣೆ', text: 'Distribution and supply for retail outlets and business partners.' },
    { icon: <Store size={26} />, title: 'Retail Supply', kannada: 'ಚಿಲ್ಲರೆ ಪೂರೈಕೆ', text: 'Product supply designed around the needs of local shops and counters.' },
    { icon: <Snowflake size={26} />, title: 'Cold Chain Care', kannada: 'ಶೀತ ಸರಪಳಿ ಕಾಳಜಿ', text: 'Careful cold-storage and handling across the supply journey.' },
    { icon: <Truck size={26} />, title: 'Delivery & Logistics', kannada: 'ವಿತರಣೆ ಮತ್ತು ಸಾಗಣೆ', text: 'Thoughtful delivery coordination for dependable day-to-day service.' },
    { icon: <Users size={26} />, title: 'Business Support', kannada: 'ವ್ಯಾಪಾರ ಸಹಕಾರ', text: 'Responsive support for retail, franchise and business relationships.' },
  ];

  return (
    <section id="services" className="site-section alt-bg">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="The right support, from first hello to every delivery."
          text="Practical distribution services, guided by care, communication and a genuine understanding of local business."
        />

        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card" data-reveal>
              <div className="service-icon">{service.icon}</div>
              <div>
                <h3>{service.title}</h3>
                <span className="service-kannada">{service.kannada}</span>
                <p>{service.text}</p>
              </div>
              <span className="service-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [images] = useState<string[]>(() => {
    const stored = localStorage.getItem(storageKeys.gallery);
    if (stored) {
      try {
        return JSON.parse(stored) as string[];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(storageKeys.gallery, JSON.stringify(images));
  }, [images]);

  return (
    <section id="gallery" className="site-section alt-bg">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A little window into what we do."
          text="Real moments from the business will live here. Photos can be added when you are ready."
        />

        {images.length ? (
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={`${image}-${index}`} className="gallery-item" data-reveal>
                <img src={image} alt={`Gallery view ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state gallery-coming-soon" data-reveal>
            <IceCreamCone size={28} aria-hidden="true" />
            <strong>Gallery updating soon</strong>
            <span>No gallery images available yet.</span>
          </div>
        )}
      </div>
    </section>
  );
}

function ContactSection() {
  const contactList = [
    { icon: <Phone size={20} />, label: 'Phone', value: siteConfig.phone || '[INSERT CONTACT NUMBER]', href: siteConfig.phone ? `tel:${siteConfig.phone}` : '#' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: siteConfig.whatsapp || '[INSERT WHATSAPP NUMBER]', href: siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hello, I would like to know more about ISHA NANDINI ICE CREAM DISTRIBUTORS.')}` : '#' },
    { icon: <Mail size={20} />, label: 'Email', value: siteConfig.email || '[INSERT EMAIL ADDRESS]', href: siteConfig.email ? `mailto:${siteConfig.email}` : '#' },
    { icon: <MapPin size={20} />, label: 'Location', value: siteConfig.address || '[INSERT BUSINESS ADDRESS]', href: siteConfig.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}` : '#' },
    { icon: <InstagramGlyph />, label: 'Instagram', value: siteConfig.instagram || '[INSERT INSTAGRAM ID]', href: siteConfig.instagram ? `https://instagram.com/${siteConfig.instagram.replace(/^@/, '')}` : '#' },
  ];

  return (
    <section id="contact" className="site-section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s make something good happen."
          text="For a retail enquiry, a partnership conversation or just to say namaskara — we’d love to hear from you."
        />

        <div className="contact-layout" data-reveal>
          <div className="contact-panel">
            {contactList.map((item) => (
              <a key={item.label} className="contact-item" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                <span className="contact-icon">{item.icon}</span>
                <span>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </a>
            ))}
          </div>

          <div className="contact-card">
            <h3>Business information</h3>
            <p>GSTIN: {siteConfig.gstNumber || '[INSERT GST NUMBER]'}</p>
            <div className="mini-list">
              <div>
                <Factory size={18} />
                <span>Distribution support</span>
              </div>
              <div>
                <Warehouse size={18} />
                <span>Cold chain handling</span>
              </div>
              <div>
                <Truck size={18} />
                <span>Logistics coordination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const mapQuery = siteConfig.address || 'ISHA NANDINI ICE CREAM DISTRIBUTORS';
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  return (
    <section id="location" className="site-section alt-bg">
      <div className="container location-box">
        <div data-reveal>
          <SectionHeading
            eyebrow="Location"
            title="Find us in Kumbhashi, Kundapura."
            text="Opposite to Anegudde Temple, Kumbhashi."
          />
          <div className="location-details">
            <MapPin size={20} />
            <p>{siteConfig.address || '[INSERT BUSINESS ADDRESS]'}</p>
          </div>
          <a className="button primary" href={mapLink} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>

        <div className="map-shell" aria-label="Business location preview" data-reveal>
          <iframe
            title="Business location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <BrandLogo compact />
          <CowIllustration footer />
          <p className="footer-copy">
            Kumbhashi roots. Cool moments. Thoughtful ice cream distribution.
          </p>
          <p className="footer-kannada">ಸಿಹಿ ಕ್ಷಣಗಳು, ಸದಾ ಹತ್ತಿರ</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a className="footer-contact-link" href={siteConfig.phone ? `tel:${siteConfig.phone}` : '#'} aria-label="Call ISHA NANDINI">
                <Phone size={17} /> <span>{siteConfig.phone || '[INSERT CONTACT NUMBER]'}</span>
              </a>
            </li>
            <li>
              <a className="footer-contact-link" href={siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}` : '#'} aria-label="Contact ISHA NANDINI on WhatsApp">
                <MessageCircle size={17} /> <span>{siteConfig.whatsapp || '[INSERT WHATSAPP NUMBER]'}</span>
              </a>
            </li>
            <li>
              <a className="footer-contact-link" href={siteConfig.email ? `mailto:${siteConfig.email}` : '#'} aria-label="Email ISHA NANDINI">
                <Mail size={17} /> <span>{siteConfig.email || '[INSERT EMAIL ADDRESS]'}</span>
              </a>
            </li>
            <li>
              <a className="footer-contact-link" href={siteConfig.instagram ? `https://instagram.com/${siteConfig.instagram.replace(/^@/, '')}` : '#'} target={siteConfig.instagram ? '_blank' : undefined} rel={siteConfig.instagram ? 'noreferrer' : undefined} aria-label="Visit ISHA NANDINI on Instagram">
                <InstagramGlyph /> <span>{siteConfig.instagram || '[INSERT INSTAGRAM ID]'}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Business info</h4>
          <ul>
            <li>{siteConfig.address || '[INSERT BUSINESS ADDRESS]'}</li>
            <li>GSTIN: {siteConfig.gstNumber || '[INSERT GST NUMBER]'}</li>
          </ul>
        </div>
      </div>
      <div className="copyright container">
        <span>© {new Date().getFullYear()} {siteConfig.companyName}. All Rights Reserved.</span>
        <span className="made-by">Made by <strong>Bhargavi</strong> <Heart className="credit-heart" size={14} fill="#ffffff" strokeWidth={2.5} aria-label="white heart" /></span>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const message = encodeURIComponent('Hello, I would like to know more about ISHA NANDINI ICE CREAM DISTRIBUTORS.');
  const href = siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${message}` : '#';

  return (
    <a className="whatsapp-float" href={href} target="_blank" rel="noreferrer" aria-label="Chat via WhatsApp">
      <MessageCircle size={24} />
    </a>
  );
}

function AdminLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const envUsername = import.meta.env.VITE_ADMIN_USERNAME;
  const envPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!envUsername || !envPassword) {
      setError('Authentication is not configured for this deployment. Set VITE_ADMIN_USERNAME and VITE_ADMIN_PASSWORD in your environment or connect a secure backend.');
      return;
    }

    if (username === envUsername && password === envPassword) {
      localStorage.setItem(storageKeys.adminSession, 'true');
      navigate('/admin/dashboard');
      return;
    }

    setError('Invalid username or password.');
  };

  const isConfigured = Boolean(envUsername && envPassword);

  if (localStorage.getItem(storageKeys.adminSession) === 'true') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="admin-page-shell">
      <div className="admin-panel login-panel">
        <BrandLogo />
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <label>
            <span>Username / Email</span>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter admin username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" />
          </label>
          {error ? <p className="form-error">{error}</p> : null}
          <button type="submit" className="button primary" disabled={!isConfigured}>
            Login
          </button>
          {!isConfigured ? (
            <p className="helper-copy">This deployment is frontend-only. Configure secure admin credentials before enabling login.</p>
          ) : null}
        </form>
      </div>
    </div>
  );
}

function AdminDashboardPage() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [products, setProducts] = useState<ProductItem[]>(defaultProducts);
  const [formValues, setFormValues] = useState({
    name: '',
    category: '',
    description: '',
    image: '',
    price: '',
    availability: 'Available',
    displayOrder: '1',
  });

  useEffect(() => {
    const hasSession = localStorage.getItem(storageKeys.adminSession) === 'true';
    if (!hasSession) {
      navigate('/admin', { replace: true });
      return;
    }

    const storedGallery = localStorage.getItem(storageKeys.gallery);
    const storedProducts = localStorage.getItem(storageKeys.products);

    setGalleryImages(storedGallery ? JSON.parse(storedGallery) : []);
    setProducts(storedProducts ? JSON.parse(storedProducts) : defaultProducts);
    setIsReady(true);
  }, [navigate]);

  const updateField = (key: string, value: string) => {
    setFormValues((current) => ({ ...current, [key]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFormValues((current) => ({ ...current, image: reader.result as string }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formValues.name.trim() || !formValues.category.trim()) return;

    const nextProduct: ProductItem = {
      id: `${formValues.name.trim().toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      name: formValues.name.trim(),
      category: formValues.category.trim(),
      description: formValues.description.trim() || 'Add a short description for this product.',
      image: formValues.image,
      price: formValues.price.trim() || 'Price on request',
      availability: formValues.availability || 'Available',
      displayOrder: Number(formValues.displayOrder) || 1,
    };

    const updatedProducts = [...products, nextProduct].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    setProducts(updatedProducts);
    localStorage.setItem(storageKeys.products, JSON.stringify(updatedProducts));
    setFormValues({ name: '', category: '', description: '', image: '', price: '', availability: 'Available', displayOrder: '1' });
  };

  const handleDeleteProduct = (productId: string) => {
    const updated = products.filter((item) => item.id !== productId);
    setProducts(updated);
    localStorage.setItem(storageKeys.products, JSON.stringify(updated));
  };

  const handleDeleteGallery = (image: string) => {
    const updated = galleryImages.filter((entry) => entry !== image);
    setGalleryImages(updated);
    localStorage.setItem(storageKeys.gallery, JSON.stringify(updated));
  };

  const handleUploadGalleryImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const updated = [reader.result, ...galleryImages];
        setGalleryImages(updated);
        localStorage.setItem(storageKeys.gallery, JSON.stringify(updated));
      }
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  };

  const handleLogout = () => {
    localStorage.removeItem(storageKeys.adminSession);
    navigate('/admin');
  };

  if (!isReady) return null;

  return (
    <div className="admin-page-shell dashboard-shell">
      <div className="dashboard-topbar">
        <BrandLogo compact />
        <button type="button" className="button secondary" onClick={handleLogout}>
          Log out
        </button>
      </div>

      <div className="admin-grid">
        <aside className="admin-panel">
          <h2>Admin Dashboard</h2>
          <div className="stacked-actions">
            <label className="upload-button">
              <Camera size={16} />
              <span>Upload gallery image</span>
              <input type="file" accept="image/*" onChange={handleUploadGalleryImage} />
            </label>
            <div className="small-stat">
              <strong>{galleryImages.length}</strong>
              <span>gallery items</span>
            </div>
            <div className="small-stat">
              <strong>{products.length}</strong>
              <span>product listings</span>
            </div>
          </div>
        </aside>

        <main className="admin-content">
          <section className="admin-panel">
            <h3>Add product</h3>
            <form onSubmit={handleAddProduct} className="admin-form">
              <div className="two-col">
                <label>
                  <span>Product name</span>
                  <input value={formValues.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Product name" />
                </label>
                <label>
                  <span>Product category</span>
                  <input value={formValues.category} onChange={(event) => updateField('category', event.target.value)} placeholder="Category" />
                </label>
              </div>

              <label>
                <span>Description</span>
                <textarea rows={4} value={formValues.description} onChange={(event) => updateField('description', event.target.value)} placeholder="Product description" />
              </label>

              <div className="two-col">
                <label>
                  <span>Price</span>
                  <input value={formValues.price} onChange={(event) => updateField('price', event.target.value)} placeholder="Optional price" />
                </label>
                <label>
                  <span>Availability</span>
                  <select value={formValues.availability} onChange={(event) => updateField('availability', event.target.value)}>
                    <option>Available</option>
                    <option>In stock</option>
                    <option>Low stock</option>
                    <option>Coming soon</option>
                  </select>
                </label>
              </div>

              <div className="two-col">
                <label>
                  <span>Display order</span>
                  <input type="number" min="1" value={formValues.displayOrder} onChange={(event) => updateField('displayOrder', event.target.value)} />
                </label>
                <label>
                  <span>Image</span>
                  <input type="file" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>

              {formValues.image ? <img className="preview-image" src={formValues.image} alt="Product upload preview" /> : null}

              <button type="submit" className="button primary">Add product</button>
            </form>
          </section>

          <section className="admin-panel">
            <h3>Gallery management</h3>
            {galleryImages.length ? (
              <div className="admin-gallery-grid">
                {galleryImages.map((image, index) => (
                  <div key={`${image}-${index}`} className="admin-gallery-item">
                    <img src={image} alt={`Gallery item ${index + 1}`} />
                    <button type="button" onClick={() => handleDeleteGallery(image)}>Delete</button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-state small">No gallery images uploaded yet.</p>
            )}
          </section>

          <section className="admin-panel">
            <h3>Existing products</h3>
            <div className="admin-product-list">
              {products.map((product) => (
                <div key={product.id} className="admin-product-row">
                  <div className="info-box">
                    <strong>{product.name}</strong>
                    <span>{product.category}</span>
                  </div>
                  <button type="button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -24px 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <FloatingTreats />
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
