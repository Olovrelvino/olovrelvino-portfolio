import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State untuk mengontrol hamburger menu pada tampilan mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // STATE BARU: Untuk mengontrol data proyek mana yang sedang aktif di pop-up modal
  const [activeProject, setActiveProject] = useState(null);

  // State melacak indeks gambar yang sedang dibuka di pop-up Full Preview (null artinya ditutup)
  const [previewImageIndex, setPreviewImageIndex] = useState(null);

  // EFFECT BARU: Mengunci scroll latar belakang utama saat modal aktif
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function jika komponen unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigasi Geser (Kanan/Kiri) menggunakan tombol panah di dalam Full Preview Modal
  const nextPreview = (e) => {
    e.stopPropagation(); // Mencegah popup tertutup tidak sengaja saat klik panah
    if (!activeProject) return;
    setPreviewImageIndex((prev) =>
      prev === activeProject.screenshots.length - 1 ? 0 : prev + 1,
    );
  };

  const prevPreview = (e) => {
    e.stopPropagation(); // Mencegah popup tertutup tidak sengaja saat klik panah
    if (!activeProject) return;
    setPreviewImageIndex((prev) =>
      prev === 0 ? activeProject.screenshots.length - 1 : prev - 1,
    );
  };

  const popupDetails = {
    project1: {
      title: "UI/UX - Marvis Web",
      year: "2024",
      imgSrc: "asset/homeTimMarketing.jpg",
      longDesc:
        "Platform reservasi fasilitas Taman Cerdas Salatiga — taman kota yang dikelola Pemerintah Kota Salatiga. Warga bisa mengecek ketersediaan, memesan fasilitas, hingga berinteraksi lewat forum komunitas, semua dalam satu platform.",
      tags: ["UI Design", "Figma", "Prototype"],
      screenshots: [
        "asset/homeTimMarketing.jpg",
        "asset/taskMarketing.jpg",
        "asset/listLaporan.jpg",
      ],
      features: [
        "Halaman informasi fasilitas yang menjelaskan detail tiap area dan apa saja yang didapat pengunjung saat melakukan reservasi",
        "Fitur cek ketersediaan tanggal sebelum login — calon pengunjung bisa melihat jadwal kosong tanpa perlu membuat akun terlebih dahulu",
        "Alur reservasi end-to-end dengan batas waktu pembayaran 1×24 jam; sistem otomatis membatalkan reservasi jika bukti transfer tidak diunggah tepat waktu",
        "Dashboard admin untuk verifikasi bukti transfer, serta fitur terima atau tolak reservasi yang masuk",
        "Forum komunitas dengan nested reply — pengguna bisa membuat post, membalas komentar satu sama lain, dan admin dapat menghapus konten yang tidak sesuai",
        "Autentikasi dua peran (user & admin) dengan tampilan login/register sliding panel",
      ],
      challenges: [
        "Membangun logika cek ketersediaan tanggal tanpa framework — murni PHP dan query MySQL dengan penanganan konflik slot yang akurat",
        "Merancang sistem auto-cancel berbasis deadline 24 jam yang berjalan andal tanpa job scheduler eksternal",
        "Mengimplementasikan nested reply forum menggunakan recursive query SQL tanpa library tambahan",
      ],
    },
    project2: {
      title: "UI/UX - SDG's Web",
      year: "2024",
      imgSrc: "asset/sdgSWeb.png",
      longDesc:
        "User interface design for sustainable development goals and implemented to website using HTML CSS. Proyek ini memfokuskan pada visualisasi data yang ramah pengguna guna mendukung kampanye pembangunan berkelanjutan global.",
      tags: ["Figma", "UI Design", "HTML & CSS"],
      screenshots: [
        "asset/sdgsHome.png",
        "asset/sdgsEvent.png",
        "asset/sdgsAbout.png",
        "asset/sdgsInfo.png",
      ],
      features: [
        "Perancangan wireframe dan high-fidelity prototype interaktif menggunakan aplikasi Figma.",
        "Implementasi desain ke dalam kode HTML5 dan CSS3 yang responsif untuk berbagai ukuran layar perangkat.",
      ],
      challenges: [
        "Menyederhanakan penyajian data infografis SDGs yang cukup padat agar tetap rapi saat diakses melalui perangkat mobile.",
      ],
    },
    project3: {
      title: "Car Rental Website",
      year: "2024",
      imgSrc: "asset/carRental.png",
      longDesc:
        "A car rental website for users to browse, select, compare and book vehicles on daily or weekly basis. Dilengkapi database MySQL untuk manajemen pemesanan secara langsung.",
      tags: ["PHP", "MySQL"],
      screenshots: [
        "asset/loginRental.png",
        "asset/carRental.png",
        "asset/listRental.png",
        "asset/detailRental.png",
        "asset/pesanRental.png",
      ],
      features: [
        "Katalog unit armada mobil real-time disertai dengan kalkulator biaya sewa otomatis.",
        "Sistem otentikasi login pengguna serta halaman dashboard khusus admin untuk memantau pemesanan sewa mobil.",
      ],
      challenges: [
        "Sinkronisasi ketersediaan mobil untuk mencegah bentroknya jadwal booking di hari yang sama.",
      ],
    },
    project4: {
      title: "LiL Bro Web Store",
      year: "2025",
      imgSrc: "asset/lilHome.png",
      longDesc: "Aplikasi toko online khusus penjualan gadget dan aksesoris elektronik. Dilengkapi sistem keranjang belanja dinamis, kalkulasi otomatis ongkos kirim melalui API, serta integrasi payment gateway tiruan.",
      tags: ["PHP", "MySQL"],
      screenshots: [
        "asset/lilLogin.png",
        "asset/lilHome.png", 
        "asset/lilProduk.png",
        "asset/lilBelanja.png",
        "asset/lilOrder.png",
      ],
      features: [
        "Manajemen status keranjang (Cart State) realtime menggunakan React Context API.",
        "Fitur pencarian multi-filter berdasarkan rentang harga, rating, kategori, dan brand produk.",
        "Halaman checkout aman terintegrasi dengan validasi data alamat pengguna."
      ],
      challenges: [
        "Mengoptimalkan performa rendering list produk berskala ratusan item menggunakan teknik lazy loading gambar."
      ]
    },
    project5: {
      title: "Smart Finance Tracker",
      year: "2025",
      imgSrc: "asset/sdgSWeb.png",
      longDesc: "Sistem pencatatan keuangan pribadi pintar berbasis web yang membantu pengguna melacak pemasukan, pengeluaran, serta menyusun target tabungan bulanan secara visual.",
      tags: ["Python", "Flask", "Chart.js", "SQLite"],
      screenshots: ["asset/sdgSWeb.png", "asset/carRental.png"],
      features: [
        "Visualisasi ringkasan laporan bulanan menggunakan diagram lingkaran (Pie Chart) dan diagram batang interaktif.",
        "Sistem pengingat otomatis (alert badge) jika pengeluaran salah satu kategori telah melewati batas anggaran (budget limit)."
      ],
      challenges: [
        "Merancang formula kalkulasi proyeksi keuangan masa depan berdasarkan data rata-rata pengeluaran historis pengguna."
      ]
    },
    project6: {
      title: "Company Profile Logistics",
      year: "2026",
      imgSrc: "asset/carRental.png",
      longDesc: "Website profil perusahaan profesional untuk korporasi penyedia layanan logistik dan pengiriman barang internasional. Fokus utama diletakkan pada kecepatan load halaman dan SEO.",
      tags: ["HTML5", "Sass", "JavaScript", "GSAP"],
      screenshots: ["asset/carRental.png", "asset/homeTimMarketing.jpg"],
      features: [
        "Efek animasi transisi elemen dan teks yang mewah saat di-scroll memanfaatkan pustaka GSAP (GreenSock).",
        "Formulir pelacakan nomor resi pengiriman interaktif langsung di halaman beranda utama."
      ],
      challenges: [
        "Memastikan semua animasi berjalan mulus 60 FPS di perangkat smartphone berspesifikasi rendah."
      ]
    }
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
            <a href="#" className="btn">
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

            <p>
              My academic journey has introduced me to web development, machine
              learning, human-computer interaction, deep learning and software
              engineering. I enjoy combining logic with creativity to build
              meaningful digital products.
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
          {/* LEFT SIDE - DESCRIPTION */}
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

          {/* RIGHT SIDE - PROGRESS BARS */}
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
                <span>PHP</span>
                <span>70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-line js"></div>
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

            <div className="progress-item">
              <div className="progress-info">
                <span>Python</span>
                <span>70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-line python"></div>
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
          {/* PROJECT CARD 1 */}
          <div className="project-card">
            <div className="project-image">
              <img src="asset/homeTimMarketing.jpg" alt="Marvis Web" />
              <div className="overlay">
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveProject(popupDetails.project1);
                  }}
                >
                  <i className="bx bx-link-external"></i> View Project
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-top">
                <h3>UI/UX - Marvis Web</h3>
                <span>2025</span>
              </div>
              <p>
                User interface design marketing management application and
                admission data visualization.
              </p>
              <div className="tech-tags">
                <span>Figma</span>
                <span>UI Design</span>
                <span>Prototype</span>
              </div>
            </div>
          </div>

          {/* PROJECT CARD 2 */}
          <div className="project-card">
            <div className="project-image">
              <img src="asset/sdgSWeb.png" alt="SDG's Web" />
              <div className="overlay">
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveProject(popupDetails.project2);
                  }}
                >
                  <i className="bx bx-link-external"></i> View Project
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-top">
                <h3>UI/UX - SDG's Web</h3>
                <span>2024</span>
              </div>
              <p>
                User interface design for sustainable development goals and
                implemented to website using HTML CSS.
              </p>
              <div className="tech-tags">
                <span>Figma</span>
                <span>UI Design</span>
                <span>HTML & CSS</span>
              </div>
            </div>
          </div>

          {/* PROJECT CARD 3 */}
          <div className="project-card">
            <div className="project-image">
              <img src="asset/carRental.png" alt="Car Rental Website" />
              <div className="overlay">
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveProject(popupDetails.project3);
                  }}
                >
                  <i className="bx bx-link-external"></i> View Project
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-top">
                <h3>Car Rental Website</h3>
                <span>2024</span>
              </div>
              <p>
                A car rental website for users to browse, select, compare and
                book vehicles on daily or weekly basis.
              </p>
              <div className="tech-tags">
                <span>PHP</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* PROJECT CARD 4 (BARU ditambahkan agar sinkron) */}
          <div className="project-card">
            <div className="project-image">
              <img src="asset/lilHome.png" alt="LiL Bro Web Store" />
              <div className="overlay">
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveProject(popupDetails.project4);
                  }}
                >
                  <i className="bx bx-link-external"></i> View Project
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-top">
                <h3>LiL Bro Web Store</h3>
                <span>2024</span>
              </div>
              <p>
                Aplikasi toko online khusus penjualan gadget dan aksesoris elektronik dengan dynamic cart state.
              </p>
              <div className="tech-tags">
                <span>PHP</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* PROJECT CARD 5 (BARU ditambahkan agar sinkron) */}
          <div className="project-card">
            <div className="project-image">
              <img src="asset/sdgSWeb.png" alt="Smart Finance Tracker" />
              <div className="overlay">
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveProject(popupDetails.project5);
                  }}
                >
                  <i className="bx bx-link-external"></i> View Project
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-top">
                <h3>Smart Finance Tracker</h3>
                <span>2025</span>
              </div>
              <p>
                Sistem pencatatan keuangan pribadi pintar berbasis web untuk melacak finansial secara visual.
              </p>
              <div className="tech-tags">
                <span>Python</span>
                <span>Flask</span>
                <span>Chart.js</span>
                <span>SQLite</span>
              </div>
            </div>
          </div>

          {/* PROJECT CARD 6 (BARU ditambahkan agar sinkron) */}
          <div className="project-card">
            <div className="project-image">
              <img src="asset/carRental.png" alt="Company Profile Logistics" />
              <div className="overlay">
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveProject(popupDetails.project6);
                  }}
                >
                  <i className="bx bx-link-external"></i> View Project
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-top">
                <h3>Company Profile Logistics</h3>
                <span>2026</span>
              </div>
              <p>
                Website profil perusahaan profesional untuk korporasi penyedia layanan logistik internasional.
              </p>
              <div className="tech-tags">
                <span>HTML5</span>
                <span>Sass</span>
                <span>JavaScript</span>
                <span>GSAP</span>
              </div>
            </div>
          </div>
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

                <div className="modal-meta">
                  <span>
                    <i className="bx bx-calendar"></i> {activeProject.year}
                  </span>
                  <span>
                    <i className="bx bx-code-alt"></i> Kode
                  </span>
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
                  {/* FIX LOGIKA: Mengubah reading data yang salah dari .features menjadi .challenges */}
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
        <div className="image-preview-overlay" onClick={() => setPreviewImageIndex(null)}>
          <button className="preview-close-btn" onClick={() => setPreviewImageIndex(null)}>×</button>
          
          {activeProject.screenshots.length > 1 && (
            <button className="preview-arrow p-arrow-left" onClick={prevPreview}>&#10094;</button>
          )}

          <div className="preview-image-box" onClick={(e) => e.stopPropagation()}>
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
            <button className="preview-arrow p-arrow-right" onClick={nextPreview}>&#10095;</button>
          )}
        </div>
      )}
    </>
  );
}

export default App;