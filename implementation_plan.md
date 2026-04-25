# 🚀 Portfolio Website - Tuấn Dev (Fullstack Developer)

Xây dựng portfolio website cá nhân cực kỳ ấn tượng với dark mode, hiệu ứng mượt mà, thiết kế hiện đại cho Fullstack Developer.

## 📋 Tổng Quan Dự Án

| Thông tin | Chi tiết |
|-----------|----------|
| **Framework** | Vue 3 + TypeScript |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **Thiết kế** | Dark mode mặc định, glassmorphism, gradient neon |
| **Animation** | GSAP + ScrollTrigger |
| **Particles** | tsParticles (hiệu ứng hạt nền) |
| **Icons** | Lucide Icons |
| **Font** | Inter + JetBrains Mono (Google Fonts) |

---

## 🎨 Concept Thiết Kế

### Color Palette (Dark Mode)
| Vai trò | Màu | Mã |
|---------|-----|-----|
| Background chính | Đen đậm | `#0a0a0f` |
| Background card | Xám đậm | `#12121a` |
| Primary gradient | Tím → Xanh dương | `#8b5cf6` → `#06b6d4` |
| Accent | Xanh lá neon | `#22d3ee` |
| Text chính | Trắng sáng | `#f1f5f9` |
| Text phụ | Xám nhạt | `#94a3b8` |
| Border | Trắng mờ | `rgba(255,255,255,0.08)` |

### Phong cách thiết kế
- **Glassmorphism**: Card với `backdrop-blur`, border mờ, nền bán trong suốt
- **Neon Glow**: Text và icon phát sáng nhẹ
- **Gradient Mesh**: Background gradient nhiều lớp chuyển động
- **Floating Particles**: Hạt sáng trôi nổi ở background
- **Smooth Scroll Animations**: Mọi element xuất hiện mượt mà khi scroll

---

## 📦 Thư Viện Cần Cài Đặt

### Dependencies (Production)
```
gsap                    → Animation engine mạnh mẽ nhất (scroll, timeline, morphing)
@tsparticles/vue3       → Component particles cho Vue 3
tsparticles             → Engine particles (hiệu ứng hạt bay)
lucide-vue-next         → Bộ icon SVG hiện đại, nhẹ
@vueuse/core            → Composables tiện ích (useIntersectionObserver, useMouseInElement...)
vue-router              → Routing (smooth scroll to sections)
```

### DevDependencies
```
(đã có sẵn): @vitejs/plugin-vue, typescript, vite, vue-tsc, tailwindcss, @tailwindcss/vite
```

> [!NOTE]
> Dự án đã có sẵn Vue 3 + Vite + Tailwind CSS v4. Chỉ cần cài thêm các thư viện animation và UI.

---

## 🏗️ Cấu Trúc Thư Mục

```
src/
├── assets/
│   ├── images/           # Ảnh avatar, project screenshots
│   └── icons/            # Custom SVG icons cho tech stack
├── components/
│   ├── layout/
│   │   ├── Navbar.vue        # Navigation bar cố định trên đầu
│   │   └── Footer.vue        # Footer với links & copyright
│   ├── sections/
│   │   ├── HeroSection.vue       # Hero banner chính
│   │   ├── AboutSection.vue      # Giới thiệu bản thân
│   │   ├── TechStackSection.vue  # Grid tech stack với icon & tooltip
│   │   ├── ProjectsSection.vue   # Showcase các dự án
│   │   └── ContactSection.vue    # Form liên hệ & social links
│   ├── ui/
│   │   ├── ParticlesBackground.vue  # Hiệu ứng hạt nền
│   │   ├── GlowCard.vue            # Card với hiệu ứng glow
│   │   ├── GradientText.vue        # Text gradient động
│   │   ├── TechIcon.vue            # Icon tech stack với tooltip
│   │   ├── TypeWriter.vue          # Hiệu ứng đánh máy
│   │   ├── ScrollIndicator.vue     # Indicator scroll xuống
│   │   └── MagneticButton.vue      # Nút có hiệu ứng magnetic hover
│   └── common/
│       ├── SectionTitle.vue    # Title dùng chung cho các section
│       └── AnimateOnScroll.vue # Wrapper component animate khi scroll
├── composables/
│   ├── useScrollAnimation.ts  # Logic GSAP scroll animations
│   └── useMouseGlow.ts        # Hiệu ứng glow theo chuột
├── data/
│   ├── techStack.ts      # Data tech stack (tên, icon, màu, category)
│   ├── projects.ts       # Data các dự án
│   └── socialLinks.ts    # Data social links
├── router/
│   └── index.ts          # Vue Router config (scroll behavior)
├── App.vue               # Root component
├── main.ts               # Entry point
└── style.css             # Global styles + Tailwind
```

---

## 📐 Chi Tiết Từng Section

### 1. 🧭 Navbar (Cố định trên cùng)
- Glassmorphism background (blur + bán trong suốt)
- Logo "TuấnDev" với gradient text
- Menu items: Home | About | Skills | Projects | Contact
- Smooth scroll khi click menu
- Hiệu ứng shrink khi scroll xuống
- Hamburger menu cho mobile (slide-in animation)

### 2. 🦸 Hero Section
- **Particles background** (tsParticles) - hạt sáng trôi nổi kết nối với nhau
- Avatar/Photo với border gradient xoay
- Tên **"TUẤN DEV"** với gradient text lớn + glow effect
- **TypeWriter effect**: "Fullstack Developer | Web Engineer | API Architect"
- **CTA Buttons**: "Xem Projects" và "Liên Hệ" với magnetic hover effect
- **Scroll indicator** (mũi tên bounce ở dưới)
- Code snippet decoration nổi ở góc (giả lập terminal)

### 3. 👤 About Section
- Layout 2 cột (ảnh + text)
- Ảnh với khung gradient + floating animation
- Text giới thiệu với highlight keywords
- Stats cards (dạng glassmorphism):
  - 🎯 Focus: Web Applications, APIs, System Design
  - 📚 Learning: DevOps & Scalable Architecture
  - 💡 Passionate about clean code & performance
- Timeline experience (nếu có)
- Tất cả animate khi scroll vào viewport

### 4. 🛠️ Tech Stack Section
- **Section title** với gradient underline animation
- **Category tabs**: Frontend | Backend | Database | Tools & DevOps
- **Grid cards** cho từng tech:
  - Icon SVG chính thức của tech
  - Tên technology
  - Hover: card glow + scale up + tooltip mô tả
  - Stagger animation khi scroll vào
- **Danh sách tech theo category**:

| Frontend | Backend | Database | Tools & DevOps |
|----------|---------|----------|----------------|
| React | Node.js (Express) | PostgreSQL | Git |
| Vue | Python (FastAPI) | MySQL | Docker |
| HTML/CSS | Python (Django) | MongoDB | Postman |
| JavaScript | TypeScript | | A5M2 |
| Tailwind CSS | JWT | | Swagger |
| React Native | | | PgAdmin |
| | | | Linux |

### 5. 💼 Projects Section
- **Project cards** dạng glassmorphism lớn
- Mỗi card có:
  - Screenshot/mockup (có thể dùng placeholder gradient)
  - Tên dự án
  - Mô tả ngắn
  - Tech tags (pills)
  - Links: Demo | GitHub
  - Hover: parallax tilt effect + glow border
- Grid layout responsive (1-2-3 cột)
- Stagger reveal animation

### 6. 📬 Contact Section
- Form liên hệ với glassmorphism card:
  - Input: Name, Email, Message
  - Animated floating labels
  - Nút "Gửi" với gradient + ripple effect
- Social links với hover glow:
  - GitHub, LinkedIn, Email, Facebook...
- Decoration: gradient orbs ở background

### 7. 🔻 Footer
- Minimal design
- Copyright text
- "Made with ❤️ by Tuấn Dev"
- Back to top button với smooth scroll

---

## ✨ Hiệu Ứng & Animation Chi Tiết

| Hiệu ứng | Thư viện | Mô tả |
|-----------|----------|--------|
| Particles nền | tsParticles | Hạt sáng trôi nổi, kết nối khi gần nhau |
| Scroll reveal | GSAP ScrollTrigger | Fade in + slide up khi element vào viewport |
| TypeWriter | Custom Vue | Text tự đánh máy, xóa, đổi câu |
| Gradient text | CSS | Background-clip text với gradient animation |
| Card glow | CSS + JS | Border glow theo vị trí chuột |
| Magnetic button | GSAP | Nút "hút" về phía chuột khi hover gần |
| Parallax | GSAP | Các element di chuyển khác tốc độ khi scroll |
| Floating | CSS animation | Các element nhẹ nhàng trôi lên xuống |
| Stagger | GSAP | Các card xuất hiện lần lượt, không cùng lúc |
| Navbar shrink | CSS transition | Navbar thu nhỏ khi scroll xuống |

---

## 🔧 Proposed Changes

### Config & Setup

#### [MODIFY] [index.html](file:///c:/Users/PC/Desktop/CODE/portfolio/index.html)
- Thêm Google Fonts (Inter, JetBrains Mono)
- Cập nhật title, meta description, favicon
- Thêm SEO meta tags

#### [MODIFY] [style.css](file:///c:/Users/PC/Desktop/CODE/portfolio/src/style.css)
- Thiết lập CSS custom properties (design tokens)
- Global dark mode styles
- Utility classes cho glassmorphism, glow, gradient
- Smooth scrolling behavior
- Custom scrollbar styling

#### [MODIFY] [main.ts](file:///c:/Users/PC/Desktop/CODE/portfolio/src/main.ts)
- Đăng ký Vue Router
- Import global styles

---

### Layout Components

#### [NEW] [Navbar.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/layout/Navbar.vue)
#### [NEW] [Footer.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/layout/Footer.vue)

---

### Section Components

#### [NEW] [HeroSection.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/sections/HeroSection.vue)
#### [NEW] [AboutSection.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/sections/AboutSection.vue)
#### [NEW] [TechStackSection.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/sections/TechStackSection.vue)
#### [NEW] [ProjectsSection.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/sections/ProjectsSection.vue)
#### [NEW] [ContactSection.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/sections/ContactSection.vue)

---

### UI Components

#### [NEW] [ParticlesBackground.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/ui/ParticlesBackground.vue)
#### [NEW] [GlowCard.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/ui/GlowCard.vue)
#### [NEW] [GradientText.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/ui/GradientText.vue)
#### [NEW] [TechIcon.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/ui/TechIcon.vue)
#### [NEW] [TypeWriter.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/ui/TypeWriter.vue)
#### [NEW] [ScrollIndicator.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/ui/ScrollIndicator.vue)
#### [NEW] [MagneticButton.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/ui/MagneticButton.vue)

---

### Common Components

#### [NEW] [SectionTitle.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/common/SectionTitle.vue)
#### [NEW] [AnimateOnScroll.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/components/common/AnimateOnScroll.vue)

---

### Composables

#### [NEW] [useScrollAnimation.ts](file:///c:/Users/PC/Desktop/CODE/portfolio/src/composables/useScrollAnimation.ts)
#### [NEW] [useMouseGlow.ts](file:///c:/Users/PC/Desktop/CODE/portfolio/src/composables/useMouseGlow.ts)

---

### Data Files

#### [NEW] [techStack.ts](file:///c:/Users/PC/Desktop/CODE/portfolio/src/data/techStack.ts)
#### [NEW] [projects.ts](file:///c:/Users/PC/Desktop/CODE/portfolio/src/data/projects.ts)
#### [NEW] [socialLinks.ts](file:///c:/Users/PC/Desktop/CODE/portfolio/src/data/socialLinks.ts)

---

### Router

#### [NEW] [index.ts](file:///c:/Users/PC/Desktop/CODE/portfolio/src/router/index.ts)

---

### Root Component

#### [MODIFY] [App.vue](file:///c:/Users/PC/Desktop/CODE/portfolio/src/App.vue)
- Tích hợp tất cả sections + layout components
- Particles background
- Smooth scroll routing

---

## 📱 Responsive Design

| Breakpoint | Layout |
|------------|--------|
| `< 640px` (Mobile) | 1 cột, navbar hamburger, cards full-width |
| `640px - 1024px` (Tablet) | 2 cột grid, navbar compact |
| `> 1024px` (Desktop) | 3 cột grid, navbar đầy đủ |

---

## ⚡ Performance Optimization

- **Lazy loading**: Ảnh project chỉ load khi scroll đến
- **Code splitting**: Mỗi section là component riêng
- **Font loading**: `font-display: swap` tránh FOUT
- **Animation**: Chỉ animate element trong viewport (ScrollTrigger)
- **Particles**: Giới hạn số lượng hạt, FPS cap

---

## ✅ Verification Plan

### Automated Tests
```bash
npm run build      # Kiểm tra build thành công không lỗi TypeScript
npm run dev        # Chạy dev server kiểm tra visual
```

### Browser Testing
- Kiểm tra tất cả sections render đúng trên trình duyệt
- Kiểm tra responsive trên mobile/tablet/desktop
- Kiểm tra tất cả animations hoạt động mượt mà
- Kiểm tra smooth scroll navigation
- Kiểm tra particles background performance

### Manual Verification
- Visual check toàn bộ design consistency
- Kiểm tra hover effects trên tất cả interactive elements
- Kiểm tra lighthouse score (Performance, Accessibility, SEO)

---

## 📝 Thứ Tự Triển Khai

1. **Phase 1**: Cài đặt thư viện + cấu hình project
2. **Phase 2**: Global styles + Design tokens
3. **Phase 3**: UI components (GlowCard, GradientText, TypeWriter...)
4. **Phase 4**: Layout (Navbar, Footer)
5. **Phase 5**: Sections (Hero → About → TechStack → Projects → Contact)
6. **Phase 6**: Data files (techStack, projects, socialLinks)
7. **Phase 7**: Composables + Animations (GSAP, Particles)
8. **Phase 8**: Tích hợp App.vue + Router
9. **Phase 9**: Responsive + Polish
10. **Phase 10**: Testing + Optimization

> [!IMPORTANT]
> **Ước tính**: ~25-30 files cần tạo/chỉnh sửa. Website sẽ có hiệu ứng rất ấn tượng với particles, glassmorphism, GSAP animations, và gradient neon trên nền dark mode hoàn toàn.

## Open Questions

> [!IMPORTANT]
> 1. **Ảnh đại diện**: Bạn có ảnh avatar/photo cá nhân muốn dùng không? Hay tôi sẽ dùng avatar placeholder gradient?
> 2. **Dự án showcase**: Bạn có danh sách các dự án cụ thể muốn hiển thị không (tên, mô tả, link demo/github)? Tôi sẽ tạo data mẫu trước nếu chưa có.
> 3. **Social links**: Bạn có các link GitHub, LinkedIn, Facebook... cụ thể không?
> 4. **Ngôn ngữ nội dung**: Website hiển thị tiếng Việt hay tiếng Anh (hoặc cả hai)?
> 5. **Domain/Deploy**: Bạn có kế hoạch deploy lên đâu (Vercel, Netlify, GitHub Pages)?
