import React, { useState, useEffect } from "react";
import "./App.css";
import LiquidEther from "./LiquidEther";

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
          <li><a href="#home" className="nav-links" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className="nav-links" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#skills" className="nav-links" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#portfolio" className="nav-links" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#contact" className="nav-links" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>

      {/* HOME SECTION */}
      <section id="home" className="home">

        <div className="liquid-bg-container">
          <LiquidEther
            colors={["#0b7aca", "#3091c8", "#e2dde6"]}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            color0="#0b7aca"
            color1="#3091c8"
            color2="#e2dde6"
          />
        </div>

        <div className="home-content">
          <h3>Hi, Welcome to my page</h3>
          <h1>Oliver Elvino Putra Pratama</h1>
          <h3>
            And I'm{" "}
            <span className="highlight">
              UI/UX Designer & Frontend Enthusiast
            </span>
          </h3>
          <p>
            I build interactive web experiences and transform data into
            meaningful insights. Passionate about clean UI, modern design
            systems, and data-driven solutions.
          </p>
          <div className="home-buttons">
            <a href="#portfolio" className="btn">
              Visit Works
            </a>
            <a
              href="CV - Oliver Elvino Putra Pratama.pdf"
              className="btn btn-cv"
              download
            >
              <i className="text bx bx-download"></i> Download CV
            </a>
          </div>
          <div className="social-media">
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
        <div className="home-img">
          <div className="home-card">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>PHP</span>
              <span>Python</span>
              <span>C</span>
              <span>Figma</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-card">
            <h2>
              About <span className="highlight">Me</span>
            </h2>
            <p>
              I'm Oliver Elvino Putra Pratama, an IT student passionate about
              building elegant frontend interfaces and solving real-world
              problems through data science.
            </p>
            <div className="about-info">
              <div className="info-box">
                <h3>3+</h3>
                <span>Years Learning</span>
              </div>
              <div className="info-box">
                <h3>10+</h3>
                <span>Projects Built</span>
              </div>
              <div className="info-box">
                <h3>Frontend</h3>
                <span>Main Focus</span>
              </div>
            </div>
            <a href="#contact" className="btn">
              Let's Talk
            </a>
          </div>
          <div className="about-visual">
            <div className="about-glow"></div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills">
        <div className="skills-header">
          <h2>
            My <span className="highlight">Skills</span>
          </h2>
          <p>Technologies & tools I use to build modern digital experiences.</p>
        </div>
        <div className="skills-container">
          <div className="skills-card">
            <h3>Frontend & Data Focus</h3>
            <p>
              I focus on building clean, responsive, and interactive user
              interfaces while also exploring data science and machine learning
              workflows.
            </p>
            <div className="tech-stack-large">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>PHP</span>
              <span>Python</span>
              <span>Figma</span>
              <span>User Interface Design</span>
            </div>
          </div>
          <div className="skills-progress">
            <div className="progress-item">
              <div className="progress-info">
                <span>HTML & CSS</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-line html"></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-info">
                <span>Figma</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-line figma"></div>
              </div>
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
              <div className="project-card" key={key}>
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
    </>
  );
}

export default App;
