import React from 'react';
import { motion } from 'motion/react';
import { 
  Package, 
  Terminal, 
  ShieldCheck, 
  LineChart, 
  Code2, 
  Cpu, 
  Server, 
  Network, 
  Search, 
  BookOpen,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Star,
  ExternalLink,
  Target,
  ShieldAlert,
  TrendingUp,
  X,
  Send,
  User,
  CheckCircle2,
  ChevronRight,
  Globe,
  Database,
  Lock,
  Layers,
  Dumbbell,
  Gamepad2,
  Languages,
  Monitor,
  Activity,
  Download,
  FileSpreadsheet
} from 'lucide-react';

// ==========================================
// --- CONFIGURATION & DONNÉES ---
// ==========================================

const DATA = {
  name: "Mohamed",
  lastName: "Laroura",
  email: "Mohamedlaroura5@gmail.com",
  linkedin: "https://linkedin.com/in/mohamed-laroura", 
  github: "https://github.com/mohamedlaroura",
  specialty: "BTS SIO option SISR • ESTIAM • 2024-2026",
  school: "ESTIAM",
  company: "Nu3ge",
  profilePic: "/photo-pro.jpg",
};

const STATS = [
  { label: "Projets BTS", value: "6" },
  { label: "Alternance Cloud", value: "Nu3ge" },
  { label: "Diplôme BTS SIO", value: "2026" }
];

const ATOUTS = [
  { title: "AUTONOME", desc: "CAPACITÉ À GÉRER DES PROJETS SEUL" },
  { title: "PASSIONNÉ", desc: "VEILLE TECHNOLOGIQUE QUOTIDIENNE" },
  { title: "RIGOUREUX", desc: "DOCUMENTATION ET SÉCURITÉ" }
];

const SKILLS_SISR = [
  {
    title: "CONTENEURISATION",
    icon: Package,
    items: ["Docker & Docker Compose", "Réseaux WAN / DMZ / LAN", "iptables / Pare-feu", "Nginx en conteneur"]
  },
  {
    title: "SYSTÈMES & ADMIN",
    icon: Monitor,
    items: ["Linux Debian / Ubuntu", "Windows Server", "Active Directory", "DNS / DHCP"]
  },
  {
    title: "SÉCURITÉ & RÉSEAU",
    icon: ShieldCheck,
    items: ["VPN WireGuard", "UFW / Fail2ban", "LDAP / Samba 4", "TCP/IP / Routage"]
  },
  {
    title: "MONITORING",
    icon: Activity,
    items: ["Grafana / Prometheus", "Node Exporter / cAdvisor", "GLPI (ITSM)", "Veeam Backup"]
  },
  {
    title: "SCRIPTING & DEV",
    icon: Terminal,
    items: ["Bash / Python", "HTML / CSS / PHP", "MySQL / MariaDB", "Git"]
  }
];

const PROJECTS_DATA = {
  featured: {
    title: "Supervision avec Grafana",
    category: "MONITORING",
    status: "LIVE",
    description: "Stack Prometheus + Grafana déployée sous Docker. Dashboards CPU/RAM, alerting sur seuils critiques et visualisation temps réel des métriques conteneurs.",
    steps: ["CONCEPTION ARCHITECTURE", "DÉPLOIEMENT DOCKER", "CONFIG PROMETHEUS", "DASHBOARD GRAFANA"],
    tags: ["DOCKER", "PROMETHEUS", "GRAFANA"],
    image: "https://images.unsplash.com/photo-1551288049-bbda3865c170?auto=format&fit=crop&q=80&w=800"
  },
  grid: [
    {
      id: "02",
      title: "Cloud privé avec Nextcloud",
      category: "INFRASTRUCTURE",
      status: "STABLE",
      description: "Stack Docker Compose : Nextcloud + MariaDB. Architecture On-Premise pour la souveraineté des données.",
      tags: ["DOCKER", "MARIADB", "NEXTCLOUD"],
      icon: Database
    },
    {
      id: "03",
      title: "Serveur Linux pour GLPI",
      category: "ITSM",
      status: "OPÉRATIONNEL",
      description: "Installation de GLPI sur Debian avec pile LAMP. Gestion des tickets et inventaire du parc.",
      tags: ["LINUX", "PHP", "GLPI"],
      icon: Server
    },
    {
      id: "04",
      title: "Architecture DMZ avec Docker",
      category: "RÉSEAU",
      status: "SÉCURISÉ",
      description: "3 réseaux Docker isolés (WAN / DMZ / LAN). Pare-feu Debian et règles iptables.",
      tags: ["DOCKER", "IPTABLES", "NETWORKING"],
      icon: Network
    },
    {
      id: "05",
      title: "VPN WireGuard (WG-Easy)",
      category: "SÉCURITÉ",
      status: "CHIFFRÉ",
      description: "Déploiement de WG-Easy via Docker. Interface web de gestion des clients VPN.",
      tags: ["WIREGUARD", "VPN", "SECURITY"],
      icon: ShieldCheck
    },
    {
      id: "06",
      title: "Métrologie Docker (Dockprom)",
      category: "MONITORING",
      status: "ACTIF",
      description: "Stack Dockprom : Prometheus + Grafana + Node Exporter. Alerting sur seuils critiques.",
      tags: ["DOCKER", "GRAFANA", "MONITORING"],
      icon: Activity
    }
  ]
};

const ALTERNANCE_MISSIONS = [
  "Gestion du parc informatique",
  "Déploiement de serveurs Linux",
  "Configuration de solutions de monitoring",
  "Support technique niveau 2",
  "Sécurisation des accès réseaux"
];

const PROJECTS_BTS = [
  {
    title: "Supervision avec Grafana",
    category: "MONITORING",
    description: "Stack Prometheus + Grafana déployée sous Docker. Dashboards CPU/RAM, alerting sur seuils critiques et visualisation temps réel des métriques conteneurs.",
    image: "https://images.unsplash.com/photo-1551288049-bbda3865c170?auto=format&fit=crop&q=80&w=800",
    id: "01"
  },
  {
    title: "Cloud privé avec Nextcloud",
    category: "INFRASTRUCTURE",
    description: "Stack Docker Compose : Nextcloud + MariaDB. Architecture On-Premise pour la souveraineté des données. Intégration LDAP Samba et sauvegarde rsync.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    id: "02"
  },
  {
    title: "Serveur Linux pour GLPI",
    category: "ITSM",
    description: "Installation de GLPI sur Debian avec pile LAMP (Apache / MariaDB / PHP). Gestion des tickets, inventaire du parc et configuration des rôles utilisateurs.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
    id: "03"
  },
  {
    title: "Architecture DMZ avec Docker",
    category: "RÉSEAU",
    description: "3 réseaux Docker isolés (WAN / DMZ / LAN). Pare-feu Debian avec NET_ADMIN, Nginx en DMZ et règles iptables pour filtrer et isoler le trafic.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    id: "04"
  },
  {
    title: "VPN WireGuard (WG-Easy)",
    category: "SÉCURITÉ",
    description: "Déploiement de WG-Easy via Docker. Interface web de gestion des clients VPN (port 51821), génération de QR codes et tunnels chiffrés haute performance.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    id: "05"
  },
  {
    title: "Métrologie Docker (Dockprom)",
    category: "MONITORING",
    description: "Stack Dockprom : Prometheus + Grafana + Node Exporter + cAdvisor. Alerting sur seuils critiques, visualisation temps réel des conteneurs et de l’hôte.",
    image: "https://images.unsplash.com/photo-1667372333374-0d3c0333e601?auto=format&fit=crop&q=80&w=800",
    id: "06"
  }
];

const E5_DATA = {
  title: "Épreuve E5 — Support et mise à disposition de services informatiques",
  desc: "Ces 2 projets constituent le dossier pour l'épreuve E5 — Support et mise à disposition de services informatiques (BTS SIO SISR).",
  oral: "Oral le 13 mai 2026 à 10h00 — Lycée École Nationale de Commerce, 70 bd Bessières 75017 Paris.",
  apport: "À apporter : tableau de synthèse + portfolio numérique (ce fichier).",
  projects: [
    {
      id: "PROJET E5 — 01",
      title: "Supervision avec Grafana",
      desc: "Déploiement d'une stack de monitoring complète via Docker Compose. Grafana + Prometheus + Node Exporter + cAdvisor pour la supervision temps réel de l'infrastructure et des conteneurs.",
      skills: [
        "Gérer le patrimoine informatique — mise en place d'outils de surveillance",
        "Répondre aux incidents — analyse des métriques pour identifier les pannes",
        "Développer la présence en ligne de l'organisation — Docker / Grafana"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bbda3865c170?auto=format&fit=crop&q=80&w=800",
      status: "LIVE",
      docUrl: "/Projet_A_Metrologie_Proxmox_FINAL.pdf"
    },
    {
      id: "PROJET E5 — 02",
      title: "Architecture DMZ avec Docker",
      desc: "Mise en place d'une architecture réseau segmentée 3 zones (WAN / DMZ / LAN) sous Docker. Pare-feu Debian avec règles iptables, serveur Nginx en DMZ, validation des accès et isolation du LAN.",
      skills: [
        "Concevoir une infrastructure — segmentation réseau 3 zones WAN/DMZ/LAN",
        "Sécuriser — pare-feu Debian iptables avec IP Forwarding et filtrage HTTP",
        "Déployer un service web — Nginx en conteneur DMZ et Bash"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      docUrl: "/Projet_B_Architecture_DMZ_Proxmox_FINAL.pdf",
      extraDoc: "/Plan_Adressage_Reseau_Projet_B.xlsx"
    }
  ],
  synthesisUrl: "/Tableau_Synthese_E5_LAROURA_Mohamed_1.xlsx"
};

const EXPERIENCE = [
  {
    date: '2024 - 2026',
    title: 'Alternant Technicien Cloud & Infra',
    company: 'NU3GE — PARIS',
    items: [
      "Administration système & cloud",
      "Déploiement de solutions monitoring",
      "Gestion d'infrastructure Docker",
      "Support technique utilisateur"
    ]
  },
  {
    date: '2024 - 2026',
    title: 'BTS SIO SISR',
    company: 'ESTIAM — PARIS',
    items: [
      "Administration réseau & système",
      "Réalisation de 6 projets techniques",
      "Spécialisation infrastructures Docker",
      "Sécurisation des réseaux segmentés"
    ]
  },
  {
    date: '2021 - 2024',
    title: 'Baccalauréat STMG Marketing',
    company: 'LYCÉE CLAUDE BERNARD — PARIS',
    items: [
      "Mention Assez Bien",
      "Spécialité Marketing",
      "Gestion et économie",
      "Communication d'entreprise"
    ]
  }
];

const VEILLE_DATA = {
  subject: "L'ÉVOLUTION DU HARDWARE INFORMATIQUE FACE À L'ESSOR DE L'IA",
  definition: "La veille technologique consiste à surveiller les évolutions techniques et les innovations d'un secteur. Elle permet de rester compétitif et d'anticiper les ruptures technologiques comme l'impact de l'IA sur l'architecture du matériel informatique.",
  citation: "L'intelligence artificielle transforme en profondeur le matériel : nouveaux types de processeurs, refonte des datacenters, puissance et enjeux énergétiques.",
  justification: [
    "Lien direct avec mon futur métier de sysadmin ou développeur utilisant ces machines.",
    "Croise plusieurs domaines : matériel, logiciel, énergie et géopolitique.",
    "Actualité très soutenue avec des annonces hebdomadaires garantissant un flux continu.",
    "Développement d'un regard critique sur les performances, la consommation et la dépendance."
  ],
  perimetre: [
    "Processeurs : CPU x86 et ARM (Intel, AMD, Apple, Qualcomm).",
    "GPU : Cartes graphiques NVIDIA et AMD dédiées au calcul IA.",
    "Puces dédiées IA : NPU (Neural Processing Unit) et TPU.",
    "Production : Chaîne des semi-conducteurs (TSMC, Samsung, Intel).",
    "Enjeux : Consommation énergétique et géopolitique associée."
  ],
  methodology: {
    tools: [
      { name: "Feedly", usage: "Agrégateur de flux RSS centralisant mes sources dans une interface unique." },
      { name: "Notion", usage: "Base de capitalisation avec fiches structurées (résumé, analyse personnelle)." },
      { name: "Google Alerts", usage: "Surveillance par mots-clés sur les processeurs NPU et Blackwell de NVIDIA." }
    ],
    sources_fr: ["Tom's Hardware FR", "Les Numériques", "Next INpact", "Frandroid", "Korben"],
    sources_int: ["AnandTech", "Ars Technica", "The Verge", "Phoronix", "Tom's Hardware US"],
    reliability: ["Origine de la source (média reconnu vs blog isolé)", "Croisement par au moins une source indépendante", "Date de publication (domaine à évolution rapide)."]
  },
  trends: [
    { title: "Domination de NVIDIA", desc: "Position dominante via les architectures Hopper et Blackwell et l'écosystème logiciel CUDA standardisé." },
    { title: "Généralisation des NPU", desc: "L'arrivée des Copilot+ PC exigeant un NPU d'au moins 40 TOPS chez Qualcomm, Intel et AMD." },
    { title: "Souveraineté des semi-conducteurs", desc: "Concentration de la production (TSMC) devenant un enjeu géopolitique majeur (Chips Act)." }
  ],
  articles: [
    { date: "12/05/2025", source: "Tom's Hardware", title: "NVIDIA dévoile l'architecture Blackwell B200", analysis: "NVIDIA conforte sa domination avec un GPU offrant 5x plus de performance pour l'IA générative." },
    { date: "03/06/2025", source: "Next INpact", title: "Microsoft lance la catégorie Copilot+ PC", analysis: "Le NPU devient un composant standard du PC grand public, plus seulement réservé aux pros." },
    { date: "21/06/2025", source: "AnandTech", title: "Intel Core Ultra : gamme x86 avec NPU intégré", analysis: "Intel rattrape son retard sur Apple Silicon en intégrant l'IA directement dans le SoC." },
    { date: "08/07/2025", source: "Les Numériques", title: "Apple présente la puce M4 et son Neural Engine", analysis: "Apple continue sa stratégie de puces ARM maison avec 38 TOPS de puissance IA." },
    { date: "29/07/2025", source: "LMI", title: "TSMC investit 65 milliards aux États-Unis", analysis: "La souveraineté numérique passe par la relocalisation de la production de semi-conducteurs." },
    { date: "11/11/2025", source: "Next INpact", title: "La consommation des datacenters IA inquiète", analysis: "Sujet critique d'éco-conception : les besoins énergétiques pourraient doubler d'ici 2030." },
    { date: "18/01/2026", source: "Korben", title: "L'Europe accélère via l'EU Chips Act", analysis: "L'UE vise 20% de la production mondiale pour réduire sa dépendance stratégique." },
    { date: "02/04/2026", source: "Tom's Hardware", title: "Apple M5 et généralisation du NPU 50+ TOPS", analysis: "Évolution fulgurante : en 2 ans, les NPU sont passés de 10 à 50 TOPS en local." }
  ],
  bilan: {
    conclusion: "Cette veille m'a permis de comprendre l'évolution matérielle indispensable au support de l'IA, tout en développant une rigueur d'analyse transposable.",
    apports: [
      "Compréhension fine de l'écosystème matériel (CPU, GPU, NPU).",
      "Capacité à mettre l'actualité technique en perspective économique.",
      "Habitude de travail régulière et workflow de capitalisation efficace."
    ],
    limites: [
      "Progrès hardware plus rapides que les capacités de refroidissement.",
      "Dépendance systémique à un petit nombre d'acteurs (NVIDIA, TSMC).",
      "Coût élevé creusant l'écart entre géants et structures modestes."
    ],
    perspectives: [
      "Montée en puissance des puces maison (Google TPU, Amazon Trainium).",
      "Développement de l'IA locale (« on-device ») pour la confidentialité.",
      "Architectures de rupture (calcul neuromorphique et quantique)."
    ]
  },
  docUrl: "/1_Dossier_Veille_E5_a_remettre.docx"
};


// ==========================================
// --- COMPOSANTS ---
// ==========================================

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-black tracking-tighter text-white"
      >
        M. LAROURA
      </motion.div>
      <div className="hidden lg:flex items-center gap-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-1">
        {['PROFIL', 'PARCOURS', 'SKILLS', 'PROJETS', 'ÉPREUVE E5', 'VEILLE', 'CONTACT'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '').replace('é', 'e').replace('e5', 'e5')}`}
            className={`px-5 py-2.5 rounded-xl text-[10px] font-bold tracking-wider transition-all text-gray-400 hover:text-white`}
          >
            {item}
          </a>
        ))}
      </div>
      <a 
        href="#contact"
        className="hidden lg:block px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black tracking-widest hover:bg-indigo-500 transition-all uppercase"
      >
        Me contacter
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="accueil" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-black flex flex-col justify-between">
    {/* Grid Background */}
    <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
    
    <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-20 flex-1">
      <div className="flex-1 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
          <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">{DATA.specialty}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-8xl font-black mb-10 leading-[0.8] tracking-tighter"
        >
          {DATA.name} <br />
          <span className="text-indigo-600 pr-10">{DATA.lastName}</span>
          <span className="inline-block w-4 h-4 bg-indigo-600 rounded-full ml-4"></span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 max-w-xl leading-relaxed mb-12"
        >
          Étudiant en <span className="text-white font-bold">BTS SIO option SISR</span> à l'{DATA.school}. Je déploie des <span className="text-white font-bold">infrastructures Docker</span>, administre des réseaux segmentés et mets en place des solutions de <span className="text-white font-bold">monitoring, VPN et cloud privé</span>. Actuellement en alternance chez <span className="text-white font-bold">{DATA.company}</span>.
        </motion.p>

        <div className="flex flex-wrap gap-4">
          <motion.a 
            href="#projets"
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl text-[10px] font-black tracking-widest hover:bg-indigo-500 transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] uppercase"
          >
            Voir mes projets
          </motion.a>
          <motion.a 
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/10 text-white rounded-2xl text-[10px] font-black tracking-widest hover:bg-white/5 transition-all uppercase"
          >
            Me contacter
          </motion.a>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 relative"
      >
        <div className="relative group mx-auto w-fit">
          {/* Decorative frame corners */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-indigo-600 pointer-events-none"></div>
          <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-indigo-600 pointer-events-none"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-indigo-600 pointer-events-none"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-indigo-600 pointer-events-none"></div>
          
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1 rounded-2xl overflow-hidden">
            <img 
              src={DATA.profilePic} 
              alt={DATA.name}
              className="w-full max-w-sm aspect-[4/5] object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          
          {/* Label overlay like in the screenshot */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-lg flex justify-between items-center text-[8px] font-bold text-indigo-400">
             <span className="tracking-[0.2em] uppercase">MOHAMED LAROURA</span>
             <span className="tracking-[0.2em] uppercase text-white/40">BTS SIO SISR</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Hero Stats Footer */}
    <div className="container mx-auto px-6 py-12 relative z-10 border-t border-white/5">
      <div className="grid grid-cols-3 gap-8">
        {STATS.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-4xl lg:text-5xl font-black text-white italic">{stat.value}</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="profil" className="py-32 bg-[#050505]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <div className="mb-12">
            <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase block mb-4">// 01 — À PROPOS</span>
            <h2 className="text-6xl font-black text-white tracking-tighter leading-[1.1]">
              Qui je suis,<br />
              <span className="text-indigo-600">ce que je construis.</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 leading-relaxed max-w-2xl mb-12">
            <p>
              Étudiant en <span className="text-white font-bold">BTS SIO option SISR</span> à l'ESTIAM, promo 2024–2026. Passionné par l'infrastructure IT, je me spécialise dans l'administration système Linux et Windows, la conteneurisation Docker et les architectures réseau segmentées.
            </p>
            <p>
              Mes projets BTS m'ont permis de déployer concrètement des solutions de <span className="text-white font-bold">monitoring avec Grafana</span>, un <span className="text-white font-bold">cloud privé Nextcloud</span>, un <span className="text-white font-bold">VPN WireGuard</span> et une <span className="text-white font-bold">architecture DMZ complète</span> sous Docker.
            </p>
            <p>
              Je suis actuellement en <span className="text-white font-bold">alternance chez Nu3ge</span>, une entreprise de cloud, où j'applique ces compétences en environnement professionnel réel.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Docker", "Linux", "Grafana", "WireGuard", "Nextcloud", "GLPI", "Bash", "MariaDB", "Prometheus"].map(tag => (
              <span key={tag} className="px-4 py-2 bg-indigo-500/5 border border-white/5 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:w-[450px]">
          <div className="bg-[#0d0d12] border border-white/5 rounded-[2rem] overflow-hidden">
            <div className="divide-y divide-white/5">
              {[
                { label: "NOM", value: "Mohamed Laroura" },
                { label: "FORMATION", value: "BTS SIO SISR — ESTIAM", highlight: true },
                { label: "PROMO", value: "2024 — 2026" },
                { label: "ALTERNANCE", value: "Nu3ge — Cloud" },
                { label: "BAC", value: "STMG Marketing • Mention AB" },
                { label: "LOCALISATION", value: "Paris / Île-de-France" },
                { label: "STATUT", value: "En alternance", status: true },
                { label: "EMAIL", value: "À remplir", link: true },
                { label: "LINKEDIN", value: "À remplir", link: true },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center px-8 py-5 group hover:bg-white/5 transition-all">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{item.label}</span>
                  <div className="flex items-center gap-2">
                    {item.highlight && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>}
                    <span className={`text-[11px] font-bold ${item.status ? 'text-emerald-500' : item.link ? 'text-indigo-400 italic' : 'text-gray-300'}`}>
                      {item.value} {item.status && <span className="ml-1">+</span>}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="py-32 bg-black">
    <div className="container mx-auto px-6">
      <div className="mb-20">
        <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase block mb-4">// 03 — COMPÉTENCES</span>
        <h2 className="text-6xl font-black text-white tracking-tighter">Stack <span className="text-indigo-600">technique</span></h2>
      </div>

      <div className="bg-[#0d0d12] border border-white/5 rounded-[2rem] overflow-hidden">
        <div className="grid md:grid-cols-5 divide-x divide-white/5">
          {SKILLS_SISR.map((skill, idx) => (
            <div key={idx} className="p-10 group hover:bg-white/[0.02] transition-colors">
              <div className="mb-10">
                <skill.icon className="text-indigo-500 mb-6 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-[8px] font-black text-indigo-400 uppercase tracking-[0.3em]">{skill.title}</h3>
                <div className="h-px w-12 bg-white/10 mt-4" />
              </div>
              <ul className="space-y-4">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-[11px] font-bold text-gray-400 uppercase tracking-tight group-hover:text-gray-300 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projets" className="py-32 bg-[#050505]">
    <div className="container mx-auto px-6">
      <div className="mb-20">
        <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase block mb-4">// 04 — PROJETS BTS</span>
        <h2 className="text-6xl font-black text-white tracking-tighter">Réalisations <span className="text-indigo-600">techniques</span></h2>
        <p className="mt-6 text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">→ CLIQUE SUR UN PROJET POUR VOIR LES DÉTAILS</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_BTS.map((project, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="group bg-[#111116] border border-white/5 rounded-[2rem] overflow-hidden hover:border-indigo-500/30 transition-all cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden bg-black/40">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-indigo-600/20 backdrop-blur-md border border-indigo-500/30 rounded-full">
                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">{project.category}</span>
              </div>
              <div className="absolute top-6 right-6 text-white/10 font-black text-2xl tracking-tighter">{project.id}</div>
              
              {/* Optional overlay icons depending on project to mimic screenshot */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                 {project.category === 'MONITORING' && <Activity size={80} className="text-indigo-500" />}
                 {project.category === 'INFRASTRUCTURE' && <Database size={80} className="text-indigo-500" />}
                 {project.category === 'ITSM' && <Server size={80} className="text-indigo-500" />}
              </div>
            </div>
            
            <div className="p-10">
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const E5Section = () => (
  <section id="épreuvee5" className="py-32 bg-black">
    <div className="container mx-auto px-6">
      <div className="mb-20">
        <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase block mb-4">// 05 — ÉPREUVE E5 BTS SIO SISR</span>
        <h2 className="text-6xl font-black text-white tracking-tighter italic">Projets <span className="text-indigo-600">Épreuve E5</span></h2>
      </div>

      {/* Oral Banner */}
      <div className="bg-indigo-600/5 border border-indigo-600/20 p-12 rounded-[3.5rem] mb-12 flex flex-col md:flex-row items-center gap-12 group hover:bg-indigo-600/10 transition-all">
        <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-white scale-110 group-hover:rotate-6 transition-transform shadow-xl">
          <GraduationCap size={44} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic">Épreuve E5 — Support et mise à disposition de services informatiques</h3>
          <p className="text-gray-400 font-medium max-w-3xl mb-6">Ces 2 projets constituent le dossier pour l'épreuve E5. Ils démontrent ma capacité à administrer des services et gérer des infrastructures complexes en toute sécurité.</p>
          <div className="flex flex-wrap gap-4">
             <div className="px-5 py-2 bg-indigo-600 text-white rounded-full text-[10px] font-black tracking-widest uppercase">Oral le 13 mai 2026 à 10h00</div>
             <div className="px-5 py-2 bg-white/5 border border-white/10 text-gray-400 rounded-full text-[10px] font-black tracking-widest uppercase italic">Lycée ENC • Paris</div>
             <a 
               href={E5_DATA.synthesisUrl} 
               download
               className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-[10px] font-black tracking-widest uppercase flex items-center gap-2 transition-all"
             >
               <Download size={12} /> Tableau de Synthèse
             </a>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {[
          {
            id: "PROJET 01",
            title: "Supervision avec Grafana",
            desc: "Mise en place d'une stack complète de monitoring pour superviser l'état des conteneurs Linux et les performances système.",
            skills: [
              "Gérer le patrimoine informatique",
              "Mettre à disposition des utilisateurs un service informatique",
              "Travailler en mode projet"
            ]
          },
          {
            id: "PROJET 02",
            title: "Architecture DMZ avec Docker",
            desc: "Segmentation réseau entre WAN, DMZ et LAN via Docker pour isoler les services publics des données privées.",
            skills: [
              "Protéger les données à caractère personnel",
              "Déployer des solutions de sécurité",
              "Analyse de risques et audit système"
            ]
          }
        ].map((project, idx) => (
          <div key={idx} className="bg-[#0d0d12] border border-white/5 rounded-[4rem] overflow-hidden flex flex-col group hover:border-indigo-500/20 transition-all">
             <div className="h-72 bg-black p-8 relative overflow-hidden">
                <div className="absolute top-6 left-6 py-1.5 px-4 bg-indigo-600/20 border border-indigo-600/30 rounded-full text-[8px] font-black tracking-widest text-indigo-400 uppercase z-10">
                  {project.id}
                </div>
                {idx === 0 ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <LineChart size={120} className="text-indigo-600 opacity-20" />
                    <div className="absolute inset-x-8 bottom-8 flex gap-2">
                       <div className="h-32 w-full bg-indigo-600/10 rounded-xl border border-indigo-600/20"></div>
                       <div className="h-32 w-1/2 bg-indigo-600/20 rounded-xl border border-indigo-600/20"></div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Network size={120} className="text-indigo-600 opacity-20" />
                    <div className="grid grid-cols-3 gap-4 absolute inset-8 mt-12">
                       <div className="h-full bg-white/5 rounded-xl border border-white/10 border-dashed"></div>
                       <div className="h-full bg-white/10 rounded-xl border border-indigo-600/30"></div>
                       <div className="h-full bg-white/5 rounded-xl border border-white/10 border-dashed"></div>
                    </div>
                  </div>
                )}
             </div>

             <div className="p-12">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">{project.title}</h4>
                  <div className="flex gap-2">
                    {project.docUrl && (
                      <a 
                        href={project.docUrl} 
                        download
                        className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all shadow-lg"
                        title="Télécharger la documentation PDF"
                      >
                        <Download size={18} />
                      </a>
                    )}
                    {project.extraDoc && (
                      <a 
                        href={project.extraDoc} 
                        download
                        className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all shadow-lg"
                        title="Télécharger le plan d'adressage Excel"
                      >
                        <FileSpreadsheet size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-400 font-medium mb-10 leading-relaxed italic">{project.desc}</p>
                <div className="pt-10 border-t border-white/5">
                   <p className="text-[10px] font-black text-indigo-500 mb-8 uppercase tracking-[0.4em]">// COMPÉTENCES SISR MOBILISÉES</p>
                   <div className="space-y-4 text-gray-500">
                     {project.skills.map((skill, sIdx) => (
                       <div key={sIdx} className="flex gap-4 group/skill">
                          <ArrowRight size={14} className="text-indigo-600 group-hover/skill:translate-x-1 transition-transform shrink-0 mt-1" />
                          <span className="text-[11px] font-bold uppercase tracking-tight group-hover/skill:text-white transition-colors">{skill}</span>
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ParcoursSection = () => (
  <section id="parcours" className="py-32 bg-[#050505]">
    <div className="container mx-auto px-6">
      <div className="mb-20">
        <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase block mb-4">// 02 — MON PARCOURS</span>
        <h2 className="text-6xl font-black text-white tracking-tighter">Formation & <span className="text-indigo-600">expérience</span></h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-20">
            <div className="md:w-48 pt-10">
              <span className="text-2xl font-black text-gray-700 italic group-hover:text-indigo-500 transition-colors">{exp.date}</span>
            </div>
            <div className="flex-1 bg-[#111116] border border-white/5 p-12 rounded-[3.5rem] hover:border-indigo-500/20 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 italic">{exp.title}</h3>
                  <p className="text-[10px] font-black text-indigo-500 tracking-widest uppercase">{exp.company}</p>
                </div>
                <div className="w-16 h-16 rounded-3xl bg-black border border-white/5 flex items-center justify-center text-white/20 group-hover:text-indigo-600 transition-colors">
                  {idx === 0 ? <Briefcase size={28} /> : idx === 1 ? <GraduationCap size={28} /> : <BookOpen size={28} />}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-white/5">
                {exp.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight group-hover/item:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const VeilleSection = () => (
  <section id="veille" className="py-32 bg-[#050505] relative overflow-hidden">
    <div id="e5" className="absolute -mt-32" />
    
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase block mb-4 italic">// 06 — VEILLE TECHNOLOGIQUE — SESSION 2026</span>
        <h2 className="text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-6 italic">
          Veille <span className="text-indigo-600">Technologique</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic border-t border-white/5 pt-8">
          « {VEILLE_DATA.subject} »
        </p>
      </div>

      {/* Qu'est-ce que la veille technologique ? */}
      <div className="max-w-4xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-white">Qu'est-ce que la veille technologique ?</h3>
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            {VEILLE_DATA.definition}
          </p>
          <div className="p-10 border-2 border-indigo-600/30 bg-indigo-600/5 rounded-[3rem] italic text-gray-300 text-lg relative group">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">"</div>
            « {VEILLE_DATA.citation} »
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">"</div>
          </div>
        </div>
      </div>

      {/* 1. Justification & Périmètre */}
      <div className="grid lg:grid-cols-2 gap-8 mb-32">
        <div className="bg-[#0d0d12] border border-white/5 p-12 rounded-[3.5rem] relative overflow-hidden group hover:border-indigo-500/20 transition-all">
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-[10px] font-black">01</div>
            Justification du choix
          </h3>
          <ul className="space-y-6">
            {VEILLE_DATA.justification.map((item, idx) => (
              <li key={idx} className="flex gap-4 group/item">
                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />
                <span className="text-sm text-gray-400 font-medium group-hover/item:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#0d0d12] border border-white/5 p-12 rounded-[3.5rem] relative overflow-hidden group hover:border-indigo-500/20 transition-all">
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-[10px] font-black">02</div>
            Périmètre d'étude
          </h3>
          <div className="flex flex-wrap gap-3">
            {VEILLE_DATA.perimetre.map((item, idx) => (
              <span key={idx} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-gray-400 uppercase tracking-widest hover:bg-indigo-600/10 hover:text-indigo-400 transition-all">
                {item.split(':')[0]}
              </span>
            ))}
          </div>
          <div className="mt-10 p-8 bg-indigo-600/5 rounded-3xl border border-indigo-600/10">
            <p className="text-[10px] font-black text-indigo-500 mb-4 uppercase tracking-[0.2em]">DÉTAILS TECHNIQUES</p>
            <div className="space-y-3">
              {VEILLE_DATA.perimetre.map((p, i) => (
                <p key={i} className="text-[11px] text-gray-500 leading-relaxed font-bold uppercase tracking-tight">• {p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Méthodologie & Dashboards */}
      <div className="bg-[#0d0d12] border border-white/5 p-16 rounded-[4rem] mb-32 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-5 rotate-12">
          <Target size={250} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8 relative z-10">
          <div>
            <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-2">Méthodologie de veille</h3>
            <p className="text-[10px] font-black text-indigo-500 tracking-[0.3em] uppercase">OUTILS, SOURCES & FIABILITÉ</p>
          </div>
          <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-600">
            <Target size={32} />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16 relative z-10">
          <div className="space-y-12">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 border-b border-indigo-600 pb-3 inline-block">Outils mis en place</h4>
            <div className="space-y-8">
              {VEILLE_DATA.methodology.tools.map((tool, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-2 shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(79,70,229,0.5)]" />
                  <div>
                    <h5 className="text-lg font-black text-white mb-2 uppercase tracking-tighter italic">{tool.name}</h5>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{tool.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
             {/* Mockup Google Alerts */}
             <div className="bg-black/60 border border-white/5 rounded-[2.5rem] p-8 group hover:border-indigo-500/20 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[9px] font-black text-gray-600 ml-4 lg:inline hidden">GOOGLE ALERTS / INFRA</span>
                </div>
                <div className="space-y-4">
                  {[
                    "Alerte : NVIDIA Blackwell B200 Architecture",
                    "Alerte : TSMC Arizona Fab Progress",
                    "Alerte : Intel Lunar Lake NPU Performance"
                  ].map((alert, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between group/alert">
                      <span className="text-[10px] font-bold text-gray-400 group-hover/alert:text-white transition-colors">{alert}</span>
                      <Mail size={12} className="text-gray-600 group-hover/alert:text-indigo-400" />
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/5 text-center">
                    <span className="text-[8px] font-black text-indigo-500 uppercase tracking-widest">+ 12 alertes actives</span>
                  </div>
                </div>
             </div>

             {/* Mockup Feedly */}
             <div className="bg-black/60 border border-white/5 rounded-[2.5rem] p-8 group hover:border-indigo-500/20 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <Globe size={16} className="text-emerald-500" />
                    <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">FEEDLY DASHBOARD</span>
                  </div>
                  <div className="px-2 py-1 bg-emerald-500/10 rounded text-[8px] font-black text-emerald-500">LIVE</div>
                </div>
                <div className="space-y-3">
                  {VEILLE_DATA.methodology.sources_fr.map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 group/feed">
                      <span className="text-[10px] font-bold text-gray-400 transition-colors group-hover/feed:text-white uppercase">{s}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover/feed:bg-emerald-500" />
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Sources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 pt-20 border-t border-white/5">
           <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8 italic">Sources Nationales</h4>
              <div className="flex flex-wrap gap-2">
                {VEILLE_DATA.methodology.sources_fr.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-indigo-600/10 rounded-lg text-[9px] font-black text-indigo-400 uppercase tracking-widest">{s}</span>
                ))}
              </div>
           </div>
           <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8 italic">Sources Internationales</h4>
              <div className="flex flex-wrap gap-2">
                {VEILLE_DATA.methodology.sources_int.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-emerald-600/10 rounded-lg text-[9px] font-black text-emerald-400 uppercase tracking-widest">{s}</span>
                ))}
              </div>
           </div>
           <div>
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8 italic">Critères de fiabilité</h4>
              <div className="space-y-3">
                {VEILLE_DATA.methodology.reliability.map((r, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <CheckCircle2 size={12} className="text-indigo-600" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter truncate">{r}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>

      {/* 3. Bilan Organisationnel / Conclusion workflow */}
      <div className="max-w-4xl mx-auto mb-32">
        <div className="bg-indigo-600 text-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(79,70,229,0.3)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tighter italic">Mon Organisation Personnelle</h4>
                <p className="text-[10px] font-black text-white/70 uppercase tracking-widest">SYNTHÈSE DU WORKFLOW</p>
              </div>
            </div>
            <a 
              href={VEILLE_DATA.docUrl} 
              download
              className="px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 rounded-2xl text-[10px] font-black tracking-widest uppercase flex items-center gap-3 transition-all shadow-xl"
            >
              <Download size={16} /> Dossier de Veille (.docx)
            </a>
          </div>
          <p className="text-xl font-medium leading-relaxed italic border-t border-white/20 pt-8">
            « {VEILLE_DATA.bilan.conclusion} »
          </p>
        </div>
      </div>

      {/* 4. Trends */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {VEILLE_DATA.trends.map((trend, idx) => (
          <div key={idx} className="p-12 bg-[#0d0d12] border border-white/5 rounded-[3.5rem] relative overflow-hidden group hover:border-indigo-500/20 transition-all">
            <div className="absolute top-0 right-0 p-10 opacity-5 scale-150 rotate-12 group-hover:opacity-10 transition-opacity">
              <LineChart size={120} />
            </div>
            <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter italic relative z-10 group-hover:text-indigo-400 transition-colors">{trend.title}</h4>
            <p className="text-sm font-medium text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">{trend.desc}</p>
          </div>
        ))}
      </div>

      {/* 5. Articles capitalisés */}
      <div className="bg-[#0d0d12] border border-white/5 p-16 rounded-[4.5rem] mb-8 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-5">
           <BookOpen size={300} />
        </div>
        <div className="mb-16 relative z-10">
          <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Fiches de veille capitalisées</h3>
          <p className="text-[10px] font-black text-indigo-500 tracking-widest uppercase">TABLEAU DE SYNTHÈSE — MAI 2025 / AVRIL 2026</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 relative z-10">
          {VEILLE_DATA.articles.map((article, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 10 }}
              className="p-8 bg-black/40 border border-white/5 rounded-3xl hover:border-indigo-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span className="text-[10px] font-black text-gray-500 tracking-widest uppercase">{article.date}</span>
                </div>
                <span className="text-[9px] font-black text-white/50 uppercase tracking-widest px-3 py-1 bg-indigo-600/10 rounded-full group-hover:bg-indigo-600/30 transition-colors">{article.source}</span>
              </div>
              <h4 className="text-lg font-black text-white mb-6 uppercase tracking-tighter group-hover:text-indigo-400 transition-colors leading-tight italic">
                {article.title}
              </h4>
              <div className="pl-6 border-l-2 border-indigo-600/30">
                <p className="text-[11px] text-gray-500 font-bold leading-relaxed uppercase tracking-tighter italic">
                  Analyse : {article.analysis}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. Bilan & Apports/Limites */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-[#0d0d12] border border-white/5 p-12 rounded-[3.5rem] group hover:border-indigo-500/20 transition-all">
          <h3 className="text-2xl font-black mb-12 uppercase tracking-tighter flex items-center gap-4 italic group-hover:text-white transition-colors">
            Apports & Limites
          </h3>
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-black text-indigo-500 tracking-widest uppercase mb-6 flex items-center gap-3">
                <CheckCircle2 size={14} /> APPÔRTS PRINCIPAUX
              </p>
              <ul className="space-y-4">
                {VEILLE_DATA.bilan.apports.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-[10px] font-black">✓</div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-black text-rose-500 tracking-widest uppercase mb-6 flex items-center gap-3">
                <ShieldAlert size={14} /> LIMITES IDENTIFIÉES
              </p>
              <ul className="space-y-4">
                {VEILLE_DATA.bilan.limites.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/limit">
                    <div className="w-5 h-5 rounded bg-rose-600 flex items-center justify-center text-[10px] font-black">!</div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter group-hover/limit:text-gray-300 transition-colors italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-600 p-12 rounded-[3.5rem] relative overflow-hidden group shadow-[0_30px_60px_rgba(79,70,229,0.3)]">
          <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 rotate-12 group-hover:scale-175 transition-transform duration-1000">
            <Search size={150} className="text-white" />
          </div>
          <h3 className="text-2xl font-black text-white mb-12 uppercase tracking-tighter italic relative z-10 border-b border-white/20 pb-6">Perspectives à suivre</h3>
          <ul className="space-y-8 relative z-10">
            {VEILLE_DATA.bilan.perspectives.map((item, idx) => (
              <motion.li 
                key={idx} 
                whileHover={{ x: 10 }}
                className="flex gap-6 group/perspective"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 group-hover/perspective:bg-white group-hover/perspective:text-indigo-600 transition-all shadow-lg">
                  <ChevronRight size={22} />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-black text-white uppercase tracking-tighter leading-tight">
                    {item}
                  </span>
                  <div className="w-8 h-0.5 bg-white/20 mt-2 group-hover/perspective:w-full transition-all" />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-40 bg-black text-left">
    <div className="container mx-auto px-6">
      <div className="mb-20">
        <span className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase block mb-4">ME CONTACTER</span>
        <h2 className="text-5xl font-black text-white tracking-tighter italic">Formulaire & Infos</h2>
        <div className="h-1 w-24 bg-indigo-600 mt-6" />
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: Mail, label: "EMAIL", val: DATA.email },
            { icon: Linkedin, label: "LINKEDIN", val: "MOHAMED-LAROURA" },
            { icon: MapPin, label: "LOCALISATION", val: "ÎLE-DE-FRANCE" }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0d0d12] border border-white/5 p-10 rounded-[2.5rem] flex items-center gap-8 group hover:border-indigo-500/20 transition-all">
              <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-sm font-black text-white truncate">{item.val}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3 bg-[#0d0d12] border border-white/5 p-16 rounded-[4rem] relative">
          <div className="flex items-center gap-6 mb-16">
            <img src={DATA.profilePic} className="w-16 h-16 rounded-2xl object-cover" alt="" />
            <div>
              <h4 className="text-xl font-black uppercase tracking-tight">{DATA.name} {DATA.lastName}</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">OPEN TO HIRING</p>
              </div>
            </div>
          </div>

          <form className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Full Name</label>
                <input type="text" placeholder="Votre nom" className="w-full bg-black/40 border border-white/5 rounded-3xl px-8 py-5 text-sm text-white focus:border-indigo-500/50 outline-none transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Email Address</label>
                <input type="email" placeholder="votre@email.com" className="w-full bg-black/40 border border-white/5 rounded-3xl px-8 py-5 text-sm text-white focus:border-indigo-500/50 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Message</label>
              <textarea placeholder="Comment puis-je vous aider ?" rows={5} className="w-full bg-black/40 border border-white/5 rounded-[2.5rem] px-8 py-6 text-sm text-white focus:border-indigo-500/50 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-[2rem] flex items-center justify-center gap-4 transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)]">
              SUBMIT REQUEST <Mail size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-black">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="text-xl font-black tracking-tighter text-white">M. LAROURA</div>
      <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] text-center">
        © {new Date().getFullYear()} {DATA.name.toUpperCase()} {DATA.lastName.toUpperCase()} • {DATA.school} • SISR
      </div>
      <div className="flex gap-6">
        <a href={DATA.linkedin} className="text-gray-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
        <a href={DATA.github} className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-indigo-600 font-sans antialiased overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <AboutSection />
      <ParcoursSection />
      <SkillsSection />
      <ProjectsSection />
      <E5Section />
      <VeilleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
