import React, { useState, useEffect } from "react";
import "./App.css";
import LiquidEther from "./LiquidEther";
import BorderGlow from "./BorderGlow";

function App() {
  // State untuk mengontrol hamburger menu pada tampilan mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State untuk mengontrol data proyek mana yang sedang aktif di pop-up modal
  const [activeProject, setActiveProject] = useState(null);

  // State melacak indeks gambar yang sedang dibuka di pop-up Full Preview (null artinya ditutup)
  const [previewImageIndex, setPreviewImageIndex] = useState(null);

  // Effect untuk mengunci scroll latar belakang utama saat modal aktif
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigasi Geser (Kanan/Kiri) menggunakan tombol panah di dalam Full Preview Modal
  const nextPreview = (e) => {
    e.stopPropagation(); // Mencegah popup tertutup tidak sengaja
    if (!activeProject) return;
    setPreviewImageIndex((prev) =>
      prev === activeProject.screenshots.length - 1 ? 0 : prev + 1,
    );
  };

  const prevPreview = (e) => {
    e.stopPropagation(); // Mencegah popup tertutup tidak sengaja
    if (!activeProject) return;
    setPreviewImageIndex((prev) =>
      prev === 0 ? activeProject.screenshots.length - 1 : prev - 1,
    );
  };

  // DATA PROJECT DENGAN TAHUN, IKON, DAN LINK YANG SEKARANG DINAMIS
  const popupDetails = {
    project1: {
      title: "UI/UX - Marvis Web",
      year: "2025",
      linkIcon: "bx bxl-behance",
      linkLabel: "Behance",
      linkUrl:
        "https://www.behance.net/gallery/247350499/Marketing-Management-Application",
      imgSrc: "asset/homeTimMarketing.jpg",
      longDesc:
        "MARVIS (Marketing & Visualization System) adalah aplikasi berbasis web yang dirancang untuk membantu Divisi Promosi dalam mengelola aktivitas marketing dan memvisualisasikan data penerimaan mahasiswa secara terintegrasi.",
      tags: ["UI Design", "Figma", "Prototype"],
      screenshots: [
        "asset/homeTimMarketing.jpg",
        "asset/taskMarketing.jpg",
        "asset/listLaporan.jpg",
        "asset/managerDashboard.jpg",
        "asset/scheduleAdmin.jpg",
        "asset/amaAdmin.jpg",
      ],
      features: [
        "Pengelolaan tugas promosi melalui fitur to-do list, monitoring status pekerjaan (scheduled, in progress, completed), serta detail task untuk mendukung aktivitas promosi lapangan.",
        "Pengelolaan jadwal kegiatan, distribusi tugas tim, CRM, dan monitoring workflow promosi agar operasional berjalan lebih terstruktur dan efisien.",
        "Dashboard analitik untuk memantau KPI utama seperti jumlah pendaftar, registrasi ulang, peserta seleksi, serta tren data berdasarkan fakultas, program studi, dan wilayah.",
        "Fitur Ask Me Anything untuk calon mahasiswa yang ingin bertanya langsung kepada tim promosi melalui chat interaktif.",
        "Halaman dashboard interaktif untuk menampilkan data laporan pemasaran dan pendaftaran mahasiswa baru secara real-time",
      ],
      challenges: [
        "Tantangan terbesar adalah mendesain tiga dashboard berbeda (Marketing Team, Admin, Manager) dengan kebutuhan dan alur kerja yang tidak sama",
        "Dashboard manager memiliki banyak data dan grafik, sehingga diperlukan visual hierarchy yang baik agar informasi tetap mudah dipahami dan tidak terlihat penuh.",
        "Mendesain tampilan yang menarik secara visual sambil memastikan navigasi tetap intuitif dan mudah digunakan menjadi tantangan utama selama proses UI design.",
        "Project ini mengajarkan bahwa memahami kebutuhan setiap role sangat membantu dalam menentukan layout, fitur, dan prioritas informasi pada dashboard.",
        "Saya belajar bahwa konsistensi pada warna, typography, spacing, dan komponen UI sangat penting untuk menciptakan pengalaman pengguna yang nyaman dan profesional.",
      ],
    },
    project2: {
      title: "UI/UX - SDG's Web",
      year: "2023",
      linkIcon: "bx bxl-behance",
      linkLabel: "Behance",
      linkUrl: "https://www.behance.net/gallery/247480075/UI-Design-SDGs-Web",
      imgSrc: "asset/sdgSWeb.png",
      longDesc:
        "User interface design for sustainable development goals and implemented to website using HTML CSS. Proyek ini memfokuskan pada visualisasi data yang ramah pengguna guna mendukung kampanye pembangunan berkelanjutan global.",
      tags: ["Figma", "UI Design", "HTML & CSS"],
      screenshots: [
        "asset/sdgSWeb.png",
        "asset/eventPage.jpg",
        "asset/aboutPage.jpg",
        "asset/newsPage.jpg",
      ],
      features: [
        "Designed a campaign website UI focused on Sustainable Development Goals (SDGs) to raise awareness and encourage public participation in social and environmental initiatives.",
        "Created a visually engaging landing page with impactful hero sections featuring strong imagery and bold typography to communicate the campaign’s mission clearly.",
        "Applied a clean and modern visual hierarchy using strategic spacing, contrast, and typography to improve readability and guide user attention to important campaign information.",
      ],
      challenges: [
        "Simplifying the presentation of dense SDGs infographic data so that it remains neat when accessed via mobile devices.",
        "Selecting visual elements that strongly represent SDGs values without overwhelming the content.",
        "Strong imagery and typography can significantly improve user engagement and message delivery.",
      ],
    },
    project3: {
      title: "Car Rental Website",
      year: "2024",
      linkIcon: "bx bx-code-alt",
      linkLabel: "Source Code",
      linkUrl: "https://github.com/Olovrelvino",
      imgSrc: "asset/carRental.png",
      longDesc:
        "A car rental website for users to browse, select, compare and book vehicles on daily or weekly basis. Dilengkapi database MySQL untuk manajemen pemesanan secara langsung.",
      tags: ["PHP", "MySQL"],
      screenshots: ["asset/carRental.png"],
      features: [
        "Katalog unit armada mobil real-time disertai dengan kalkulator biaya sewa otomatis.",
        "Sistem otentikasi login pengguna serta halaman dashboard khusus admin untuk memantau pemesanan sewa mobil.",
      ],
      challenges: [
        "Sinkronisasi ketersediaan mobil untuk mencegah bentroknya jadwal booking di hari yang sama.",
      ],
    },
    project4: {
      title: "E-commerce LilBro Store",
      year: "2024",
      linkIcon: "bx bx-code-alt",
      linkLabel: "Source Code",
      linkUrl: "https://github.com/Olovrelvino",
      imgSrc: "asset/lilBelanja.png",
      longDesc:
        "Lilbro Store is an e-commerce platform specialized in selling liquor products, offering a wide selection of alcoholic beverages such as whiskey, wine, beer, and vodka. The platform features a dynamic shopping cart system, automated shipping cost calculation, secure checkout, and integrated payment gateway simulation to provide a seamless and user-friendly online shopping experience.",
      tags: ["PHP", "MySQL"],
      screenshots: [
        "asset/lilLogin.png",
        "asset/lilHome.png",
        "asset/lilBelanja.png",
        "asset/lilOrder.png",
        "asset/lilProduk.png",
      ],
      features: [
        "Developed a full-stack e-commerce website for liquor sales called Lilbro Store using PHP for backend development and MySQL for database management, enabling users to browse and purchase various liquor products online.",
        "Allows users to explore various liquor categories with clear product information, pricing, and product images.",
        "Implemented a dynamic shopping cart system where users can add, remove, and update product quantities while automatically recalculating the total purchase cost.",
      ],
      challenges: [
        "Designing relational tables for products, users, orders, and transactions in MySQL while ensuring data consistency.",
        "Ensuring user input, order data, and transaction information are processed safely and reliably.",
        "Building an e-commerce platform taught me the importance of integrating UI, server-side logic, and database systems to deliver a complete user experience.",
      ],
    },
    project5: {
      title: "Smart Finance Tracker",
      year: "2025",
      linkIcon: "bx bx-link",
      linkLabel: "Live Demo",
      linkUrl: "https://yourfinancewebsite.com",
      imgSrc: "asset/sdgSWeb.png",
      longDesc:
        "Sistem pencatatan keuangan pribadi pintar berbasis web yang membantu pengguna melacak pemasukan, pengeluaran, serta menyusun target tabungan bulanan secara visual.",
      tags: ["Python", "Flask", "Chart.js", "SQLite"],
      screenshots: ["asset/sdgSWeb.png", "asset/carRental.png"],
      features: [
        "Visualisasi ringkasan laporan bulanan menggunakan diagram lingkaran (Pie Chart) dan diagram batang interaktif.",
        "Sistem pengingat otomatis (alert badge) jika pengeluaran salah satu kategori telah melewati batas anggaran (budget limit).",
      ],
      challenges: [
        "Merancang formula kalkulasi proyeksi keuangan masa depan berdasarkan data rata-rata pengeluaran historis pengguna.",
      ],
    },
    project6: {
      title: "Company Profile Logistics",
      year: "2026",
      linkIcon: "bx bx-code-alt",
      linkLabel: "Source Code",
      linkUrl: "https://github.com/Olovrelvino",
      imgSrc: "asset/carRental.png",
      longDesc:
        "Website profil perusahaan profesional untuk korporasi penyedia layanan logistik dan pengiriman barang internasional. Fokus utama diletakkan pada kecepatan load halaman dan SEO.",
      tags: ["HTML5", "Sass", "JavaScript", "GSAP"],
      screenshots: ["asset/carRental.png", "asset/homeTimMarketing.jpg"],
      features: [
        "Efek animasi transisi elemen dan teks yang mewah saat di-scroll memanfaatkan pustaka GSAP (GreenSock).",
        "Formulir pelacakan nomor resi pengiriman interaktif langsung di halaman beranda utama.",
      ],
      challenges: [
        "Memastikan semua animasi berjalan mulus 60 FPS di perangkat smartphone berspesifikasi rendah.",
      ],
    },
  };

  return (
    <>
      {/* NAVBAR SECTION */}
      <header className="header">
        <a href="#" className="logo">
          Portofolio.
        </a>
        <nav className="navbar">
          <div
            className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
            <li>
              <a
                href="#home"
                className="nav-links"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-links"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="nav-links"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="nav-links"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-links"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HOME SECTION */}
      <section id="home" className="home">
        <div className="liquid-bg-container">
          <LiquidEther
            colors={["#0b7aca", "#3091c8", "#e2dde6"]}
            mouseForce={25}
            cursorSize={90}
            isViscous
            viscous={30}
            iterationsViscous={16}
            iterationsPoisson={16}
            resolution={0.35}
            isBounce={false}
            autoDemo
            autoSpeed={0.2}
            autoIntensity={1.8}
            takeoverDuration={0.25}
            autoResumeDelay={2000}
            autoRampDuration={0.6}
            color0="#0b7aca"
            color1="#3091c8"
            color2="#e2dde6"
          />
        </div>

        <div className="home-center-content">
          {/* Badge Mini Promosi */}
          <div className="promo-badge">
            <span className="badge-tag">Hello</span>
            <span className="badge-text">Welcome to my portfolio</span>
          </div>

          <h1 className="hero-title">Oliver Elvino Putra Pratama</h1>

          <p className="hero-subtitle">
            I build interactive web experiences and transform data into
            meaningful insights. Passionate about clean UI, modern design
            systems, and data-driven solutions.
          </p>

          <div className="hero-action-buttons">
            <a href="#portfolio" className="btn-primary-white">
              Visit Works
            </a>
            <a
              href="/Resume - Oliver Elvino Putra Pratama.pdf"
              className="btn-secondary-outline"
              download="Resume - Oliver Elvino Putra Pratama.pdf"
            >
              <i className="bx bx-download"></i> Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/olovrelvino"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/olovrelvino/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://github.com/Olovrelvino"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="about-center-container">
          {/* Header Section dengan gaya minimalis serupa */}
          <div className="about-header">
            <span className="section-badge">Get To Know Me</span>
            <h2 className="section-title">About Me</h2>
          </div>

          {/* Utama: Liquid Glass Card */}
          <div className="about-glass-card">
            <p className="about-lead-text">
              I am a developer and designer driven by a passion for crafting
              flawless user interfaces and extracting meaningful insights from
              complex data structures.
            </p>

            <p className="about-body-text">
              With a robust foundation spanning front-end architectures and
              contemporary design systems, I bridge the gap between aesthetic
              design and functional engineering. My ultimate goal is to build
              fast, scalable, and beautifully interactive digital experiences.
            </p>

            {/* Statistik Angka yang Dibuat Seimbang di Tengah */}
            <div className="about-stats-grid">
              <div className="stat-item">
                <h3>3+</h3>
                <span>Years Academic Experience</span>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <span>Projects Completed</span>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <span>Tech Frameworks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills">
        <div className="skills-center-container">
          {/* Header Section terpusat */}
          <div className="skills-header">
            <span className="section-badge">My Expertise</span>
            <h2 className="section-title">Skills & Tech Stack</h2>
          </div>

          {/* Atas: Deskripsi Singkat Skills */}
          <div className="skills-brief-card">
            <p>
              I master a wide range of technologies spanning front-end
              development, scripting languages, and UI/UX prototyping tools to
              engineer fast, responsive, and robust digital solutions.
            </p>
          </div>

          {/* LOGO TECH STACK INFINITE LOOP TRACK */}
          <div className="tech-slider-container">
            <div className="tech-slide-track">
              {/* Set 1 */}
              <div className="slide-item">
                <i className="bx bxl-html5"></i>
                <span>HTML5</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-css3"></i>
                <span>CSS3</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-javascript"></i>
                <span>JavaScript</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-php"></i>
                <span>PHP</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-python"></i>
                <span>Python</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-figma"></i>
                <span>Figma</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-c-plus-plus"></i>
                <span>C Language</span>
              </div>
              <div className="slide-item">
                <i className="bx bxs-data"></i>
                <span>MySQL</span>
              </div>

              {/* Set 2 (Duplikasi Core untuk Infinite Loop Seamless) */}
              <div className="slide-item">
                <i className="bx bxl-html5"></i>
                <span>HTML5</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-css3"></i>
                <span>CSS3</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-javascript"></i>
                <span>JavaScript</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-php"></i>
                <span>PHP</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-python"></i>
                <span>Python</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-figma"></i>
                <span>Figma</span>
              </div>
              <div className="slide-item">
                <i className="bx bxl-c-plus-plus"></i>
                <span>C Language</span>
              </div>
              <div className="slide-item">
                <i className="bx bxs-data"></i>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Bawah: Progress Bar yang Dipersempit agar Seimbang di Tengah */}
          <div className="skills-metrics-grid">
            <div className="metric-card">
              <div className="metric-icon-wrap">
                <i className="bx bxl-figma"></i>
              </div>
              <div className="metric-info">
                <h4>UI/UX Design</h4>
                <p>Figma, Wireframing, Prototyping</p>
              </div>
              <div className="metric-percentage">90%</div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrap">
                <i className="bx bxl-javascript"></i>
              </div>
              <div className="metric-info">
                <h4>Frontend Engineering</h4>
                <p>HTML5, CSS3, Modern ES6+ JS</p>
              </div>
              <div className="metric-percentage">95%</div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrap">
                <i className="bx bxl-python"></i>
              </div>
              <div className="metric-info">
                <h4>Backend & Scripting</h4>
                <p>PHP, Python, SQL Database, C</p>
              </div>
              <div className="metric-percentage">70%</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-header">
          <h2>
            Selected <span className="highlight">Projects</span>
          </h2>
          <p>A collection of projects I've built recently.</p>
        </div>

        <div className="portfolio-grid">
          {/* Loop otomatis membaca key data dari objek popupDetails agar sinkron */}
          {Object.keys(popupDetails).map((key) => {
            const project = popupDetails[key];
            return (
              <BorderGlow
                key={key}
                borderRadius={16}
                glowColors={["#a78bfa", "#e879f9", "#38bdf8"]}
                glowIntensity={0.9}
                glowRadius={90}
                edgeSensitivity={65}
              >
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.imgSrc} alt={project.title} />
                    <div className="overlay">
                      <a
                        href="#portfolio"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveProject(project);
                        }}
                      >
                        <i className="bx bx-link-external"></i> View Project
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-top">
                      <h3>{project.title}</h3>
                      <span>{project.year}</span>
                    </div>
                    <p>{project.longDesc.substring(0, 110)}...</p>
                    <div className="tech-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </BorderGlow>
            );
          })}
        </div>
      </section>

      {/* POP-UP MODAL CONTAINER DETAIL */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{activeProject.title}</h2>
              <button
                className="modal-close-btn"
                onClick={() => setActiveProject(null)}
              >
                ×
              </button>
            </div>

            <div className="modal-scrollable-content">
              <div className="modal-body">
                <img
                  src={activeProject.imgSrc}
                  alt={activeProject.title}
                  className="modal-main-image"
                />

                {/* BAGIAN TAHUN DAN LOGO/LINK CUSTOM YANG DINAMIS */}
                <div className="modal-meta">
                  <span className="meta-item">
                    <i className="bx bx-calendar"></i> {activeProject.year}
                  </span>
                  {activeProject.linkUrl && (
                    <a
                      href={activeProject.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="meta-item modal-custom-link"
                    >
                      <i className={activeProject.linkIcon}></i>{" "}
                      {activeProject.linkLabel}
                    </a>
                  )}
                </div>

                <p className="modal-description">{activeProject.longDesc}</p>

                <div className="modal-tags">
                  {activeProject.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>

                <h3 className="modal-section-title">
                  <i className="bx bx-images"></i> Tangkapan Layar
                </h3>

                <div className="screenshot-horizontal-scroll">
                  {activeProject.screenshots.map((screen, idx) => (
                    <div
                      className="screenshot-scroll-card"
                      key={idx}
                      onClick={() => setPreviewImageIndex(idx)}
                    >
                      <img src={screen} alt={`Screenshot ${idx + 1}`} />
                      <div className="screenshot-hover-overlay">
                        <i className="bx bx-zoom-in"></i>
                        <span>Lihat Gambar</span>
                      </div>
                      <span className="screenshot-card-badge">
                        {idx + 1}/{activeProject.screenshots.length}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="modal-section-title">
                  <i className="bx bx-wrench"></i> Yang Saya Bangun
                </h3>
                <ul className="modal-list">
                  {activeProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <h3 className="modal-section-title">
                  <i className="bx bx-bulb"></i> Tantangan & Pelajaran
                </h3>
                <ul className="modal-list">
                  {activeProject.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POP-UP OVERLAY FULL SCREEN IMAGE PREVIEW */}
      {previewImageIndex !== null && activeProject && (
        <div
          className="image-preview-overlay"
          onClick={() => setPreviewImageIndex(null)}
        >
          <button
            className="preview-close-btn"
            onClick={() => setPreviewImageIndex(null)}
          >
            ×
          </button>

          {activeProject.screenshots.length > 1 && (
            <button
              className="preview-arrow p-arrow-left"
              onClick={prevPreview}
            >
              &#10094;
            </button>
          )}

          <div
            className="preview-image-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeProject.screenshots[previewImageIndex]}
              alt="Pratinjau Besar"
              className="preview-main-img"
            />
            <div className="preview-counter-badge">
              {previewImageIndex + 1} / {activeProject.screenshots.length}
            </div>
          </div>

          {activeProject.screenshots.length > 1 && (
            <button
              className="preview-arrow p-arrow-right"
              onClick={nextPreview}
            >
              &#10095;
            </button>
          )}
        </div>
      )}

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* KOLOM KIRI: Headings & Visual Typography */}
          <div className="contact-left-panel">
            <span className="section-badge">Get In Touch</span>
            <h2 className="contact-display-title">
              Let's Build <br />
              Something <span className="cyan-glow-text">Great</span> Together.
            </h2>
            <p className="contact-side-desc">
              Punya ide proyek menarik, tawaran kolaborasi, atau sekadar ingin
              berdiskusi? Pilih salah satu platform di samping untuk langsung
              terhubung dengan saya.
            </p>
          </div>

          {/* KOLOM KANAN: Floating Liquid Glass Action Cards */}
          <div className="contact-right-panel">
            {/* LINK EMAIL */}
            <a
              href="mailto:emailkamu@gmail.com"
              className="liquid-action-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-card-glow"></div>
              <div className="action-icon-box">
                <i className="bx bx-envelope"></i>
              </div>
              <div className="action-details">
                <span>Drop an Email</span>
                <h4>emailkamu@gmail.com</h4>
              </div>
              <div className="action-arrow">
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </a>

            {/* LINK WHATSAPP */}
            <a
              href="https://wa.me/6281234567890"
              className="liquid-action-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-card-glow"></div>
              <div className="action-icon-box">
                <i className="bx bxl-whatsapp"></i>
              </div>
              <div className="action-details">
                <span>Direct Chat</span>
                <h4>+62 855-6456-7890</h4>
              </div>
              <div className="action-arrow">
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </a>

            {/* LINK LINKEDIN */}
            <a
              href="https://linkedin.com/in/olovrelvino"
              className="liquid-action-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-card-glow"></div>
              <div className="action-icon-box">
                <i className="bx bxl-linkedin"></i>
              </div>
              <div className="action-details">
                <span>Professional Network</span>
                <h4>linkedin.com/in/olovrelvino</h4>
              </div>
              <div className="action-arrow">
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
