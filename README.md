# jairoserrano.dev 🌐

Personal academic and engineering portfolio website of **Dr. Jairo Enrique Serrano Castañeda**, deployed directly to **GitHub Pages** with custom domain `jairoserrano.dev`.

[![Deploy to GitHub Pages](https://github.com/jairoserrano/jairoserrano.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/jairoserrano/jairoserrano.dev/actions/workflows/deploy.yml)
[![ORCID](https://img.shields.io/badge/ORCID-0000--0001--8165--7343-A6CE39?logo=orcid&logoColor=white)](https://orcid.org/0000-0001-8165-7343)
[![Google Scholar](https://img.shields.io/badge/Google-Scholar-4285F4?logo=googlescholar&logoColor=white)](https://scholar.google.com/citations?user=rW2nV5cAAAAJ)
[![Scopus](https://img.shields.io/badge/Scopus-57220927199-F59E0B?logo=elsevier&logoColor=white)](https://www.scopus.com/authid/detail.uri?authorId=57220927199)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌟 Highlights & Features

- **Bilingual Interface:** Instant seamless switching between Spanish (ES) and English (EN).
- **Dark / Light Modes:** Adaptive theme switching with glassmorphism aesthetics, ambient gradients, and system preference detection.
- **Academic Leadership & Graduate Programs:** Highlighting positions at Universidad Tecnológica de Bolívar (UTB) and Universidad de Cartagena (PhD & Master's Computing Emphasis Coordinator, Software Engineering Specialization Director, Master's in AI Lead; previous roles: Systems & Computing Engineering Program Director, SAVIO Founder).
- **Scientific Research Frontiers:** Showcasing work in Agent-Based Social Simulation (ABSS), WellProdSim, MicroLLMs, Renewable Energy Management & Intelligent Information Systems, and NLP / RAG benchmarks (CLEF 2025/2026).
- **Interactive Publications Showcase & Timeline:** Filterable 2026 releases + historical trajectory chart celebrating **47 Scopus-indexed records** with one-click BibTeX citation copying.
- **Institutional & Research Projects:** Showcases platforms including `App Móvil UTB`, `Gestión de Sistemas de Calidad Educativa`, `WellProdSim`, `wpsllm`, `SAVIO`, and `HPCFront`.
- **Advanced Tech Stack:** Agentic AI, Claude, Codex, Opencode, MicroLLMs, Flutter, FastAPI, Docker, and IoT renewable energy telemetry.
- **Contact & vCard:** Direct contact points, clipboard copy toasts, and downloadable contact vCard (`assets/jairo-serrano.vcf`).
- **Zero-Dependency & Lightning Fast:** Pure semantic HTML5, modern CSS3 (Custom Properties & Glassmorphic surfaces), and lightweight vanilla JavaScript.

---

## 🚀 Local Development

To preview the website locally, you can use any static HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx serve .

# Or simply open index.html directly in any browser
```

Then navigate to `http://localhost:8000`.

---

## 📦 Deployment to GitHub Pages

The repository is configured for automated deployment via GitHub Actions:

1. Push commits to `main`.
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will build and publish the site.
3. In your repository settings at **Settings > Pages**:
   - **Source**: Select `GitHub Actions`.
   - **Custom Domain**: Set to `jairoserrano.dev` (already pre-configured via the `CNAME` file).
   - Enforce **HTTPS**.

---

## 📄 License

This project is licensed under the MIT License.
