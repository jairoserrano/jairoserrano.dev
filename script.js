/**
 * jairoserrano.dev - Interactive Engine
 * Handles bilingual translation (ES/EN), theme toggle (Dark/Light),
 * category filters, clipboard toast, and citation modal.
 */

// --- I18N Translations ---
const translations = {
  es: {
    // Nav
    nav_about: "Sobre mí",
    nav_leadership: "Liderazgo",
    nav_research: "Investigación",
    nav_publications: "Publicaciones",
    nav_projects: "Proyectos",
    nav_skills: "Stack",
    nav_contact: "Contacto",
    
    // Hero
    status_available: "Disponible para investigación, conferencias y proyectos",
    hero_role: "Director Académico • Emprendedor Tech • Investigador en IA & Multi-Agentes",
    hero_bio: "Doctor en Ingeniería de Sistemas y Computación (Pontificia Universidad Javeriana), Magíster en Software Libre (UOC) e Ingeniero de Sistemas (UTB). Apasionado por tender puentes entre la academia avanzada, la simulación social basada en agentes (ABSS), la Inteligencia Artificial y la educación mediada por tecnologías.",
    btn_publications: "Ver Publicaciones",
    btn_projects: "Explorar Proyectos",
    btn_copy_email: "Copiar Email",
    btn_vcard: "Guardar Contacto",
    
    // Metrics
    metric_phd_label: "Doctor en Ingeniería",
    metric_phd_sub: "Pontificia Univ. Javeriana",
    metric_pubs_label: "47 Registros en Scopus",
    metric_pubs_sub: "Indexación Científica Global",
    metric_savio_label: "Ecosistema SAVIO",
    metric_savio_sub: "LMS & Analítica Educativa",
    metric_ieee_label: "IEEE Senior Member",
    metric_ieee_sub: "Reconocimiento de Excelencia",
    metric_years_label: "25 Años de Experiencia",
    metric_years_sub: "Desde 2001 en Academia & Tech",

    // Leadership
    tag_leadership: "Trayectoria & Dirección",
    title_leadership: "Liderazgo Académico & Gestión de Programas",
    desc_leadership: "Impulsando la transformación de la educación superior, los posgrados y la investigación en ingeniería desde el Caribe Colombiano.",
    badge_current: "Cargo Actual",
    badge_previous: "Cargo Anterior",
    lead_1_role: "Universidad Tecnológica de Bolívar & UniCartagena",
    lead_1_title: "Coordinador Énfasis en Computación (Maestría & Doctorado)",
    lead_1_desc: "Coordinación académica del énfasis en computación para los programas conjuntos de Maestría y Doctorado en Ingeniería, articulando líneas de investigación de frontera.",
    lead_2_role: "Universidad Tecnológica de Bolívar",
    lead_2_title: "Director Especialización en Ingeniería de Software",
    lead_2_desc: "Liderazgo directivo y curricular del programa de posgrado, formando profesionales especializados en arquitectura de software, DevOps y aseguramiento de calidad.",
    lead_3_role: "Universidad Tecnológica de Bolívar",
    lead_3_title: "Líder de Creación: Maestría en Inteligencia Artificial",
    lead_3_desc: "Liderando activamente el diseño y sustentación curricular de la nueva Maestría en Inteligencia Artificial, orientada a modelos generativos, visión artificial y agentes.",
    lead_4_role: "Universidad Tecnológica de Bolívar",
    lead_4_title: "Director de Programa de Ingeniería de Sistemas y Computación",
    lead_4_desc: "Gestión directiva del programa de pregrado, liderando procesos de acreditación de alta calidad, innovación pedagógica y formación de nuevas generaciones de ingenieros.",
    lead_5_role: "Dirección de Educación Virtual UTB",
    lead_5_title: "Arquitecto Fundacional del Sistema SAVIO",
    lead_5_desc: "Pionero en la adopción de software libre y arquitecturas abiertas (Moodle) para el despliegue del ecosistema institucional de aprendizaje interactivo de la UTB.",

    // Research
    tag_research: "Líneas de Investigación",
    title_research: "Fronteras Científicas & Computacionales",
    desc_research: "Modelado computacional de sistemas complejos, toma de decisiones humanas, energías limpias e inteligencia artificial aplicada.",
    res_1_title: "Simulación Social Basada en Agentes (ABSS) & MicroLLMs",
    res_1_desc: "Modelado de sistemas socioecológicos con agentes cognitivos BDI (Belief-Desire-Intention) y emocionales (eBDI). Co-autor del simulador social WellProdSim para la resiliencia de familias rurales, y su integración con MicroLLMs y tableros en tiempo real.",
    res_2_title: "Inteligencia Artificial, NLP & Retrieval (RAG)",
    res_2_desc: "Investigación en procesamiento de lenguaje natural y modelos de lenguaje de gran escala. Participación en evaluaciones internacionales (CLEF 2025/2026, eRisk, TalentCLEF, JOKER) en tareas de salud mental, ontologías laborales ESCO y clasificación colaborativa Humano-IA.",
    res_3_title: "Gestión de Energías Renovables & Sistemas Inteligentes",
    res_3_desc: "Optimización telemétrica y modelado computacional de microredes fotovoltaicas y plantas solares. Arquitecturas de información inteligentes con IoT, analítica de series temporales y soporte a la decisión para la transición energética.",
    res_4_title: "Tecnología Educativa (EdTech) & Analítica",
    res_4_desc: "Investigación en ambientes virtuales de aprendizaje adaptativo, perfilamiento de usuarios para formación corporativa y estrategias basadas en experimentación física y documentos vivos para la retención académica.",
    res_5_title: "Visión Artificial & Sensores Distribuidos",
    res_5_desc: "Modelos de inferencia espacial con Vision Transformers para identificación de especies vegetales, sistemas de cámaras IoT con códigos QR y redes colaborativas de sensores ambientales.",
    res_6_title: "Computación de Alto Desempeño (HPC) & Cloud",
    res_6_desc: "Diseño de servicios web RESTful e interfaces ubicuas (GridUI, HPCFront) para democratizar el acceso y orquestación de recursos de supercómputo y clústeres científicos.",

    // Publications
    tag_publications: "Producción Científica",
    title_publications: "Conferencias 2026 & Trayectoria Científica",
    desc_publications: "Últimas publicaciones del 2026 y evolución histórica acumulando 47 registros indexados en Scopus y Google Scholar.",
    timeline_title: "Trayectoria de Publicaciones (Google Scholar & Scopus)",
    timeline_desc: "Evolución cronológica de la producción científica alcanzando 47 registros en Scopus.",
    filter_all: "Todas",
    filter_abss: "Simulación Social & ABSS",
    filter_ai: "Inteligencia Artificial & NLP",
    filter_edtech: "EdTech & Software Libre",
    filter_systems: "Energía, IoT & HPC",

    // Projects
    tag_projects: "Código & Plataformas",
    title_projects: "Proyectos Destacados & Sistemas Institucionales",
    desc_projects: "Sistemas institucionales, plataformas de código abierto y simuladores desarrollados para docencia e investigación.",
    proj_filter_all: "Todos",
    proj_filter_institutional: "Institucional & Móvil",
    proj_filter_sim: "Simulación & IA",
    proj_filter_edtech: "EdTech & Calidad",
    proj_filter_devops: "HPC & Cloud",

    // Skills
    tag_skills: "Capacidades Técnicas",
    title_skills: "Stack Tecnológico & Metodologías",
    desc_skills: "Herramientas y tecnologías aplicadas en investigación, docencia y desarrollo de software empresarial.",
    cat_languages: "Lenguajes & Frameworks",
    cat_ai: "Agentic AI, Modelado & LLMs",
    cat_infra: "Infraestructura & Cloud",
    cat_edtech: "Energías Renovables, EdTech & Datos",

    // Contact
    tag_contact: "Conversemos",
    title_contact: "Contacto & Colaboración",
    desc_contact: "¿Interesado en colaborar en investigación, conferencias, dirección de posgrados o consultoría tecnológica?",
    contact_inst_email: "Correo Institucional",
    contact_pers_email: "Correo Personal",
    contact_location: "Ubicación",
    collab_research: "Investigación & Publicaciones Conjuntas",
    collab_research_desc: "Sistemas multiagente, modelos LLM/RAG y simulación social.",
    collab_talks: "Conferencias, Charlas & Workshops",
    collab_talks_desc: "Inteligencia Artificial, Agentic AI, EdTech, Cloud Computing y Arquitectura de Software.",
    collab_academic: "Asesoría Académica & Posgrados",
    collab_academic_desc: "Tesis doctorales, maestrías y dirección de programas de software.",
    collab_tech: "Consultoría e Innovación Tecnológica",
    collab_tech_desc: "Energías renovables, plataformas de educación virtual y entornos cloud/HPC.",

    // Footer
    footer_quote: "\"Transformando la educación y la tecnología desde el Caribe Colombiano.\"",
    footer_rights: "Todos los derechos reservados. Desplegado en GitHub Pages."
  },
  en: {
    // Nav
    nav_about: "About",
    nav_leadership: "Leadership",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_projects: "Projects",
    nav_skills: "Stack",
    nav_contact: "Contact",
    
    // Hero
    status_available: "Available for research collaborations, keynotes & projects",
    hero_role: "Academic Director • Tech Entrepreneur • AI & Multi-Agent Researcher",
    hero_bio: "PhD in Systems & Computing Engineering (Pontificia Universidad Javeriana), MSc in Free Software (UOC), and Systems Engineer (UTB). Passionate about bridging advanced academia, Agent-Based Social Simulation (ABSS), Artificial Intelligence, and technology-mediated education.",
    btn_publications: "View Publications",
    btn_projects: "Explore Projects",
    btn_copy_email: "Copy Email",
    btn_vcard: "Save Contact",
    
    // Metrics
    metric_phd_label: "PhD in Engineering",
    metric_phd_sub: "Pontificia Univ. Javeriana",
    metric_pubs_label: "47 Scopus Records",
    metric_pubs_sub: "Global Scientific Indexing",
    metric_savio_label: "SAVIO Ecosystem",
    metric_savio_sub: "LMS & Learning Analytics",
    metric_ieee_label: "IEEE Senior Member",
    metric_ieee_sub: "Professional Excellence",
    metric_years_label: "25 Years Experience",
    metric_years_sub: "Since 2001 in Academia & Tech",

    // Leadership
    tag_leadership: "Leadership & Direction",
    title_leadership: "Academic Leadership & Program Governance",
    desc_leadership: "Leading higher education innovation, graduate studies, and engineering research in the Colombian Caribbean.",
    badge_current: "Current Role",
    badge_previous: "Previous Role",
    lead_1_role: "Universidad Tecnológica de Bolívar & UniCartagena",
    lead_1_title: "Computing Emphasis Coordinator (Master's & PhD)",
    lead_1_desc: "Academic coordination of the computing track for joint Master's and PhD programs in Engineering, articulating cutting-edge research lines.",
    lead_2_role: "Universidad Tecnológica de Bolívar",
    lead_2_title: "Director of Software Engineering Specialization",
    lead_2_desc: "Curricular and executive leadership for graduate engineers specializing in software architecture, DevOps, and quality assurance.",
    lead_3_role: "Universidad Tecnológica de Bolívar",
    lead_3_title: "Founding Lead: Master's in Artificial Intelligence",
    lead_3_desc: "Actively leading the curriculum design and institutional accreditation of the new Master's in AI, focused on generative models, computer vision, and agents.",
    lead_4_role: "Universidad Tecnológica de Bolívar",
    lead_4_title: "Director of Systems & Computing Engineering Program",
    lead_4_desc: "Executive academic management of the undergraduate program, spearheading high-quality national accreditation and mentoring engineering generations.",
    lead_5_role: "UTB Virtual Learning Directorate",
    lead_5_title: "Foundational Architect of SAVIO Learning System",
    lead_5_desc: "Pioneer in open source adoption (Moodle) and architectural design for UTB's institutional interactive virtual learning ecosystem.",

    // Research
    tag_research: "Research Interests",
    title_research: "Scientific Frontiers & Computation",
    desc_research: "Computational modeling of complex systems, human decision-making, renewable energies, and applied artificial intelligence.",
    res_1_title: "Agent-Based Social Simulation (ABSS) & MicroLLMs",
    res_1_desc: "Modeling socio-ecological systems using cognitive BDI (Belief-Desire-Intention) and emotional (eBDI) agents. Co-author of WellProdSim for rural family resilience, integrated with MicroLLMs and real-time visualization dashboards.",
    res_2_title: "Artificial Intelligence, NLP & Retrieval (RAG)",
    res_2_desc: "Research on NLP and Large Language Models. Active participant in international benchmarks (CLEF 2025/2026, eRisk, TalentCLEF, JOKER) in mental health, ESCO skill taxonomies, and Human-AI collaborative classification.",
    res_3_title: "Renewable Energy Management & Intelligent Systems",
    res_3_desc: "Telemetric optimization and computational modeling of photovoltaic microgrids and solar plants. Intelligent information systems, IoT architectures, and time-series analytics for green energy transition.",
    res_4_title: "Educational Technology (EdTech) & Analytics",
    res_4_desc: "Research on adaptive virtual learning environments, user profiling for corporate workforce training, and physical computing strategies for student retention.",
    res_5_title: "Computer Vision & Distributed Sensors",
    res_5_desc: "Spatial inference with Vision Transformers for plant multispecies identification, IoT camera recognition systems, and collaborative environmental sensor networks.",
    res_6_title: "High Performance Computing (HPC) & Cloud",
    res_6_desc: "Architecting RESTful web services and ubiquitous UIs (GridUI, HPCFront) to simplify access to supercomputing infrastructure and scientific clusters.",

    // Publications
    tag_publications: "Scientific Output",
    title_publications: "2026 Conferences & Scientific Trajectory",
    desc_publications: "Latest 2026 publications and historical research trajectory accumulating 47 indexed records in Scopus and Google Scholar.",
    timeline_title: "Publications Trajectory (Google Scholar & Scopus)",
    timeline_desc: "Chronological evolution of scientific research reaching 47 records in Scopus.",
    filter_all: "All",
    filter_abss: "Social Simulation & ABSS",
    filter_ai: "AI & NLP",
    filter_edtech: "EdTech & Open Source",
    filter_systems: "Energy, IoT & HPC",

    // Projects
    tag_projects: "Code & Platforms",
    title_projects: "Featured Projects & Institutional Systems",
    desc_projects: "Institutional systems, open source simulation toolkits, and platforms built for research and teaching.",
    proj_filter_all: "All",
    proj_filter_institutional: "Institutional & Mobile",
    proj_filter_sim: "Simulation & AI",
    proj_filter_edtech: "EdTech & Quality",
    proj_filter_devops: "HPC & Cloud",

    // Skills
    tag_skills: "Technical Capabilities",
    title_skills: "Tech Stack & Methodologies",
    desc_skills: "Core tools and frameworks applied in research, teaching, and production software engineering.",
    cat_languages: "Languages & Frameworks",
    cat_ai: "Agentic AI, Modeling & LLMs",
    cat_infra: "Infrastructure & Cloud",
    cat_edtech: "Renewable Energies, EdTech & Data",

    // Contact
    tag_contact: "Get in Touch",
    title_contact: "Contact & Collaboration",
    desc_contact: "Interested in academic collaboration, invited talks, graduate thesis mentoring, or technological advisory?",
    contact_inst_email: "Institutional Email",
    contact_pers_email: "Personal Email",
    contact_location: "Location",
    collab_research: "Joint Research & Publications",
    collab_research_desc: "Multi-agent systems, LLM/RAG models, and agent-based social simulation.",
    collab_talks: "Keynotes, Talks & Workshops",
    collab_talks_desc: "Artificial Intelligence, Agentic AI, EdTech, Cloud Computing, and Software Architecture.",
    collab_academic: "Academic Mentoring & Graduate Programs",
    collab_academic_desc: "PhD & Master's theses, academic curriculum, and software engineering specializations.",
    collab_tech: "Consulting & Technological Innovation",
    collab_tech_desc: "Renewable energy systems, virtual learning platforms, and cloud/HPC setups.",

    // Footer
    footer_quote: "\"Transforming education and technology from the Colombian Caribbean.\"",
    footer_rights: "All rights reserved. Hosted on GitHub Pages."
  }
};

// --- App State ---
let currentLang = localStorage.getItem('site_lang') || 'es';
let currentTheme = localStorage.getItem('site_theme') || 'dark';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initFilters();
  initMobileMenu();
  initScrollSpy();
  initBibtexModal();
});

// --- Theme Controller ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('site_theme', currentTheme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;
  themeBtn.innerHTML = currentTheme === 'dark'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  themeBtn.setAttribute('title', currentTheme === 'dark' ? 'Modo claro' : 'Modo oscuro');
}

// --- Language Controller ---
function initLanguage() {
  applyLanguage(currentLang);

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('site_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.innerHTML = `<span>🌐</span> <span>${lang.toUpperCase()}</span>`;
    langBtn.setAttribute('title', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
  }

  document.documentElement.lang = lang;
}

// --- Category Filtering ---
function initFilters() {
  // Publications filter
  const pubButtons = document.querySelectorAll('.pub-filter-btn');
  const pubCards = document.querySelectorAll('.pub-card');

  pubButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pubButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      pubCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'grid';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // Projects filter
  const projButtons = document.querySelectorAll('.proj-filter-btn');
  const projCards = document.querySelectorAll('.project-card');

  projButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      projButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- Mobile Navigation ---
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

// --- Scroll Spy ---
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// --- Clipboard Toast ---
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || (currentLang === 'es' ? 'Copiado al portapapeles' : 'Copied to clipboard'));
  }).catch(() => {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(message || (currentLang === 'es' ? 'Copiado al portapapeles' : 'Copied to clipboard'));
  });
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// --- BibTeX Modal ---
function initBibtexModal() {
  const modal = document.getElementById('bibtexModal');
  const closeBtn = document.getElementById('closeBibtexModal');
  const copyBibtexBtn = document.getElementById('copyBibtexBtn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });

  if (copyBibtexBtn) {
    copyBibtexBtn.addEventListener('click', () => {
      const code = document.getElementById('bibtexCode').textContent;
      copyToClipboard(code, currentLang === 'es' ? 'BibTeX copiado' : 'BibTeX copied');
    });
  }
}

function showBibtex(bibtex) {
  const modal = document.getElementById('bibtexModal');
  const codeEl = document.getElementById('bibtexCode');
  if (modal && codeEl) {
    codeEl.textContent = bibtex;
    modal.classList.add('active');
  }
}
