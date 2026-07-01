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

  // Tambahkan state bahasa di sini (Default: ID)
  const [language, setLanguage] = useState("ID");

  
  const t = {
    // NAVBAR
    nav: {
      home:     language === "ID" ? "Beranda"  : "Home",
      about:    language === "ID" ? "Tentang"  : "About",
      projects: language === "ID" ? "Proyek"   : "Projects",
      contact:  language === "ID" ? "Kontak"   : "Contact",
    },

    // HOME SECTION
    home: {
      badgeHello:   language === "ID" ? "Halo"                         : "Hello",
      badgeWelcome: language === "ID" ? "Selamat datang di portofolio saya" : "Welcome to my portfolio",
      subtitle:     language === "ID"
        ? "Saya membangun pengalaman web interaktif dan mengubah data menjadi wawasan bermakna. Bersemangat tentang UI yang bersih, sistem desain modern, dan solusi berbasis data."
        : "I build interactive web experiences and transform data into meaningful insights. Passionate about clean UI, modern design systems, and data-driven solutions.",
      visitWorks:   language === "ID" ? "Lihat Karya"  : "Visit Works",
      downloadCV:   language === "ID" ? "Unduh CV"     : "Download CV",
    },

    // ABOUT SECTION
    about: {
      badge:    language === "ID" ? "Kenali Saya"   : "Get To Know Me",
      title:    language === "ID" ? "Tentang Saya"  : "About Me",
      lead:     language === "ID"
        ? "Saya adalah pengembang dan desainer yang didorong oleh semangat untuk menciptakan antarmuka pengguna yang sempurna dan mengekstrak wawasan bermakna dari struktur data yang kompleks."
        : "I am a developer and designer driven by a passion for crafting flawless user interfaces and extracting meaningful insights from complex data structures.",
      body:     language === "ID"
        ? "Dengan fondasi kuat yang mencakup arsitektur front-end dan sistem desain modern, saya menjembatani kesenjangan antara desain estetis dan rekayasa fungsional. Tujuan akhir saya adalah membangun pengalaman digital yang cepat, skalabel, dan interaktif."
        : "With a robust foundation spanning front-end architectures and contemporary design systems, I bridge the gap between aesthetic design and functional engineering. My ultimate goal is to build fast, scalable, and beautifully interactive digital experiences.",
      stat1Label: language === "ID" ? "Tahun Pengalaman Akademik" : "Years Academic Experience",
      stat2Label: language === "ID" ? "Proyek Selesai"            : "Projects Completed",
      stat3Label: language === "ID" ? "Framework Teknologi"       : "Tech Frameworks",
    },

    // SKILLS SECTION
    skills: {
      badge:       language === "ID" ? "Keahlian Saya"        : "My Expertise",
      title:       language === "ID" ? "Keahlian & Tech Stack" : "Skills & Tech Stack",
      brief:       language === "ID"
        ? "Saya menguasai berbagai teknologi mulai dari front-end development, bahasa scripting, hingga alat prototyping UI/UX untuk membangun solusi digital yang cepat, responsif, dan tangguh."
        : "I master a wide range of technologies spanning front-end development, scripting languages, and UI/UX prototyping tools to engineer fast, responsive, and robust digital solutions.",
      skill1Title: language === "ID" ? "Desain UI/UX"           : "UI/UX Design",
      skill1Sub:   language === "ID" ? "Figma, Wireframe, Prototipe" : "Figma, Wireframing, Prototyping",
      skill2Title: language === "ID" ? "Rekayasa Frontend"      : "Frontend Engineering",
      skill2Sub:   language === "ID" ? "HTML5, CSS3, JS Modern ES6+" : "HTML5, CSS3, Modern ES6+ JS",
      skill3Title: language === "ID" ? "Backend & Scripting"    : "Backend & Scripting",
      skill3Sub:   language === "ID" ? "PHP, Python, Database SQL, C" : "PHP, Python, SQL Database, C",
    },

    // PORTFOLIO SECTION
    portfolio: {
      title:      language === "ID" ? "Proyek" : "Projects",
      titleHighlight: language === "ID" ? "Pilihan" : "Selected",
      subtitle:   language === "ID" ? "Kumpulan proyek yang baru-baru ini saya bangun." : "A collection of projects I've built recently.",
      viewProject: language === "ID" ? "Lihat Proyek" : "View Project",
    },

    // MODAL
    modal: {
      screenshots:  language === "ID" ? "Tangkapan Layar"     : "Screenshots",
      built:        language === "ID" ? "Yang Saya Bangun"     : "What I Built",
      challenges:   language === "ID" ? "Tantangan & Pelajaran": "Challenges & Lessons",
      viewImage:    language === "ID" ? "Lihat Gambar"         : "View Image",
    },

    // CONTACT SECTION
    contact: {
      badge:    language === "ID" ? "Hubungi Saya"  : "Get In Touch",
      title1:   language === "ID" ? "Ayo Bangun"    : "Let's Build",
      title2:   language === "ID" ? "Sesuatu yang"  : "Something",
      titleHighlight: language === "ID" ? "Luar Biasa" : "Great",
      title3:   language === "ID" ? "Bersama."      : "Together.",
      desc:     language === "ID"
        ? "Punya ide proyek menarik, tawaran kolaborasi, atau sekadar ingin berdiskusi? Pilih salah satu platform di samping untuk langsung terhubung dengan saya."
        : "Have an exciting project idea, collaboration offer, or just want to chat? Pick one of the platforms on the side to connect with me directly.",
      emailLabel:    language === "ID" ? "Kirim Email"          : "Drop an Email",
      waLabel:       language === "ID" ? "Chat Langsung"        : "Direct Chat",
      linkedinLabel: language === "ID" ? "Jaringan Profesional" : "Professional Network",
    },

    // FOOTER
    footer: {
      home:     language === "ID" ? "Beranda" : "Home",
      about:    language === "ID" ? "Tentang" : "About",
      projects: language === "ID" ? "Proyek"  : "Projects",
      contact:  language === "ID" ? "Kontak"  : "Contact",
    },
  };

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
        "MARVIS (Marketing & Visualization System) is a web-based application designed to assist the Promotion Division in managing marketing activities and visualizing student enrollment data in an integrated system.",
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
        "Promotion task management through a to-do list feature, job status monitoring (scheduled, in progress, completed), and detailed task information to support field promotion activities.",
        "Management of activity schedules, team task distribution, CRM, and promotion workflow monitoring to ensure operations run in a more structured and efficient manner.",
        "Analytics dashboard to monitor key KPIs such as the number of applicants, re-registrations, selection participants, and data trends based on faculty, study program, and region.",
        "Ask Me Anything feature for prospective students to ask questions directly to the promotion team through an interactive chat.",
        "Interactive dashboard page to display marketing reports and new student registration data in real-time.",
      ],
      challenges: [
        "The biggest challenge was designing three different dashboards (Marketing Team, Admin, Manager) with varying needs and workflows.",
        "The manager dashboard contains a large amount of data and charts, requiring a well-structured visual hierarchy to ensure the information remains easy to understand and does not appear cluttered.",
        "Designing a visually appealing interface while ensuring navigation remains intuitive and easy to use was a major challenge during the UI design process.",
        "This project taught me that understanding the needs of each role is crucial for determining the layout, features, and information priorities on the dashboard.",
        "I learned that consistency in color, typography, spacing, and UI components is essential for creating a comfortable and professional user experience.",
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
        {/* Kiri: Logo */}
        <a href="#home" className="logo">
          Portfolio.
        </a>

        {/* Tengah: Navigasi Menu dengan Key Multi-Bahasa */}
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <a
            href="#home"
            key={`home-${language}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.home}
          </a>
          <a
            href="#about"
            key={`about-${language}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.about}
          </a>
          <a
            href="#portfolio"
            key={`port-${language}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.projects}
          </a>
          <a
            href="#contact"
            key={`cont-${language}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Kanan: Single Toggle Language & Hamburger */}
        <div className="header-right-wrapper">
          <button
            className="lang-toggle-glass"
            onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
            title={
              language === "ID"
                ? "Switch to English"
                : "Ubah ke Bahasa Indonesia"
            }
          >
            {/* Jika aktif ID, tampilkan opsi EN untuk diklik, dan sebaliknya */}
            <i
              className="bx bx-globe"
              style={{ marginRight: "5px", fontSize: "0.9rem" }}
            ></i>
            {language === "ID" ? "EN" : "ID"}
          </button>

          <div
            className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
            id="menu-icon"
            onClick={toggleMenu}
          ></div>
        </div>
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
            <span className="badge-tag">{t.home.badgeHello}</span>
            <span className="badge-text">{t.home.badgeWelcome}</span>
          </div>

          <h1 className="hero-title">Oliver Elvino Putra Pratama</h1>

          <p className="hero-subtitle">
            {t.home.subtitle}
          </p>

          <div className="hero-action-buttons">
            <a href="#portfolio" className="btn-primary-white">
              {t.home.visitWorks}
            </a>
            <a
              href="/Resume - Oliver Elvino Putra Pratama.pdf"
              className="btn-secondary-outline"
              download="Resume - Oliver Elvino Putra Pratama.pdf"
            >
              <i className="bx bx-download"></i> {t.home.downloadCV}
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
            <span className="section-badge">{t.about.badge}</span>
            <h2 className="section-title">{t.about.title}</h2>
          </div>

          {/* Utama: Liquid Glass Card */}
          <div className="about-glass-card">
            <p className="about-lead-text">
              {t.about.lead}
            </p>

            <p className="about-body-text">
              {t.about.body}
            </p>

            {/* Statistik Angka yang Dibuat Seimbang di Tengah */}
            <div className="about-stats-grid">
              <div className="stat-item">
                <h3>3+</h3>
                <span>{t.about.stat1Label}</span>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <span>{t.about.stat2Label}</span>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <span>{t.about.stat3Label}</span>
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
            <span className="section-badge">{t.skills.badge}</span>
            <h2 className="section-title">{t.skills.title}</h2>
          </div>

          {/* Atas: Deskripsi Singkat Skills */}
          <div className="skills-brief-card">
            <p>
              {t.skills.brief}
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
                <h4>{t.skills.skill1Title}</h4>
                <p>{t.skills.skill1Sub}</p>
              </div>
              <div className="metric-percentage">90%</div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrap">
                <i className="bx bxl-javascript"></i>
              </div>
              <div className="metric-info">
                <h4>{t.skills.skill2Title}</h4>
                <p>{t.skills.skill2Sub}</p>
              </div>
              <div className="metric-percentage">95%</div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrap">
                <i className="bx bxl-python"></i>
              </div>
              <div className="metric-info">
                <h4>{t.skills.skill3Title}</h4>
                <p>{t.skills.skill3Sub}</p>
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
            {t.portfolio.titleHighlight} <span className="highlight">{t.portfolio.title}</span>
          </h2>
          <p>{t.portfolio.subtitle}</p>
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
                        <i className="bx bx-link-external"></i> {t.portfolio.viewProject}
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
                  <i className="bx bx-images"></i> {t.modal.screenshots}
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
                        <span>{t.modal.viewImage}</span>
                      </div>
                      <span className="screenshot-card-badge">
                        {idx + 1}/{activeProject.screenshots.length}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="modal-section-title">
                  <i className="bx bx-wrench"></i> {t.modal.built}
                </h3>
                <ul className="modal-list">
                  {activeProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <h3 className="modal-section-title">
                  <i className="bx bx-bulb"></i> {t.modal.challenges}
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
            <span className="section-badge">{t.contact.badge}</span>
            <h2 className="contact-display-title">
              {t.contact.title1} <br />
              {t.contact.title2} <span className="cyan-glow-text">{t.contact.titleHighlight}</span> {t.contact.title3}
            </h2>
            <p className="contact-side-desc">
              {t.contact.desc}
            </p>
          </div>

          {/* KOLOM KANAN: Floating Liquid Glass Action Cards */}
          <div className="contact-right-panel">
            {/* LINK EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=oloberelvino11@gmail.com"
              className="liquid-action-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-card-glow"></div>
              <div className="action-icon-box">
                <i className="bx bx-envelope"></i>
              </div>
              <div className="action-details">
                <span>{t.contact.emailLabel}</span>
                <h4>oloberelvino11@gmail.com</h4>
              </div>
              <div className="action-arrow">
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </a>

            {/* LINK WHATSAPP */}
            <a
              href="https://wa.me/6285156672422"
              className="liquid-action-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-card-glow"></div>
              <div className="action-icon-box">
                <i className="bx bxl-whatsapp"></i>
              </div>
              <div className="action-details">
                <span>{t.contact.waLabel}</span>
                <h4>+62 851-56672-422</h4>
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
                <span>{t.contact.linkedinLabel}</span>
                <h4>linkedin.com/in/olovrelvino</h4>
              </div>
              <div className="action-arrow">
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ULTRA-MINIMALIST FOOTER SECTION */}
      <footer className="footer-section">
        <div className="footer-glass-backdrop"></div>
        <div className="footer-container">
          {/* Sisi Kiri: Logo & Copyright menjadi satu baris */}
          <div className="footer-left">
            <a href="#home" className="footer-logo">
              Portfolio.
            </a>
            <span className="footer-divider">|</span>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} olovrelvino.
            </p>
          </div>

          {/* Sisi Kanan: Menu Navigasi & Sosial Media Ringkas */}
          <div className="footer-right">
            <div className="footer-mini-nav">
              <a href="#home">{t.footer.home}</a>
              <a href="#about">{t.footer.about}</a>
              <a href="#portfolio">{t.footer.projects}</a>
              <a href="#contact">{t.footer.contact}</a>
            </div>

            <div className="footer-mini-socials">
              <a
                href="https://github.com/Olovrelvino"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/olovrelvino"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=oloberelvino11@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Email"
              >
                <i className="bx bx-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;