export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  techs: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  gradient: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Nền tảng thương mại điện tử fullstack với quản lý sản phẩm, giỏ hàng, thanh toán và dashboard admin.',
    longDescription: 'Hệ thống e-commerce hoàn chỉnh với React frontend, Node.js/Express backend, PostgreSQL database. Tích hợp JWT authentication, RESTful APIs, và Docker deployment.',
    techs: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'JWT'],
    image: '',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    gradient: 'from-purple-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Ứng dụng quản lý công việc realtime với drag & drop, Kanban board và team collaboration.',
    longDescription: 'Task management app xây dựng với Vue.js, FastAPI backend, MongoDB. Hỗ trợ realtime updates, file uploads, và notification system.',
    techs: ['Vue.js', 'FastAPI', 'MongoDB', 'Tailwind CSS'],
    image: '',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    gradient: 'from-cyan-500/20 to-green-500/20',
  },
  {
    id: 3,
    title: 'Social Media API',
    description: 'RESTful API cho nền tảng mạng xã hội với authentication, posts, comments và real-time notifications.',
    longDescription: 'Backend API hoàn chỉnh sử dụng Django REST Framework, PostgreSQL, Redis caching. Swagger documentation, rate limiting, và comprehensive testing.',
    techs: ['Django', 'PostgreSQL', 'Docker', 'Swagger'],
    image: '',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    gradient: 'from-pink-500/20 to-purple-500/20',
  },
  {
    id: 4,
    title: 'Mobile Fitness Tracker',
    description: 'Ứng dụng mobile theo dõi sức khỏe với React Native, charts và workout plans.',
    longDescription: 'Cross-platform mobile app với React Native, Express.js backend, MySQL database. Tích hợp biểu đồ tiến trình, lịch tập, và push notifications.',
    techs: ['React Native', 'Express', 'MySQL', 'TypeScript'],
    image: '',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 5,
    title: 'DevOps Dashboard',
    description: 'Dashboard monitoring hệ thống với real-time metrics, logs, và alert management.',
    longDescription: 'Monitoring dashboard xây dựng với Vue.js, Node.js backend, Docker containerization. Hiển thị server metrics, application logs, và automated alerts.',
    techs: ['Vue.js', 'Node.js', 'Docker', 'Linux'],
    image: '',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    gradient: 'from-green-500/20 to-teal-500/20',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Nền tảng blog với rich text editor, SEO optimization, và hệ thống comment.',
    longDescription: 'Blog platform với React frontend, FastAPI backend, MongoDB. Hỗ trợ markdown editor, image uploads, SEO-friendly URLs, và RSS feed.',
    techs: ['React', 'FastAPI', 'MongoDB', 'Tailwind CSS'],
    image: '',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
]
