import { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Play, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Globe, 
  DollarSign, 
  Building2,
  ExternalLink,
  Twitter,
  Linkedin,
  Instagram,
  Dribbble,
  CheckCircle2,
  Star,
  Quote,
  ArrowUpRight
} from 'lucide-react';

// Types
interface Topic {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  modules: string;
  hours: string;
  caseStudies: string;
  content: {
    overview: string;
    sections: {
      title: string;
      points: string[];
    }[];
    caseStudy: {
      brand: string;
      description: string;
    };
  };
}

interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

// Data
const topics: Topic[] = [
  {
    id: 'brand',
    title: 'Build a Brand',
    description: 'Define your identity, craft your story, and own your niche with strategic brand architecture.',
    icon: <Sparkles className="w-8 h-8" />,
    modules: '24',
    hours: '38',
    caseStudies: '8',
    content: {
      overview: 'Learn how to build a brand that resonates with your audience and stands the test of time. From positioning to visual identity, master every aspect of brand creation.',
      sections: [
        {
          title: 'Brand Strategy Fundamentals',
          points: ['Defining your brand purpose and mission', 'Identifying your target audience', 'Crafting your unique value proposition', 'Competitive positioning strategies']
        },
        {
          title: 'Visual Identity Systems',
          points: ['Logo design principles', 'Color psychology in branding', 'Typography selection', 'Brand guidelines creation']
        },
        {
          title: 'Brand Voice & Messaging',
          points: ['Developing brand personality', 'Tone of voice guidelines', 'Storytelling frameworks', 'Content strategy alignment']
        }
      ],
      caseStudy: {
        brand: 'Apple',
        description: 'How Apple built the world\'s most valuable brand through simplicity, innovation, and premium positioning.'
      }
    }
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'SEO, content, social media, and paid advertising — dominate every channel with data-driven strategies.',
    icon: <Target className="w-8 h-8" />,
    modules: '32',
    hours: '52',
    caseStudies: '12',
    content: {
      overview: 'Master the complete digital marketing ecosystem. From organic growth to paid acquisition, learn how to drive measurable results across all channels.',
      sections: [
        {
          title: 'Search Engine Optimization',
          points: ['Technical SEO fundamentals', 'Keyword research strategies', 'On-page optimization', 'Link building tactics']
        },
        {
          title: 'Content Marketing',
          points: ['Content strategy development', 'Blog writing frameworks', 'Video marketing', 'Content distribution']
        },
        {
          title: 'Paid Advertising',
          points: ['Google Ads mastery', 'Facebook/Instagram advertising', 'LinkedIn B2B campaigns', 'ROI optimization']
        }
      ],
      caseStudy: {
        brand: 'Nike',
        description: 'Nike\'s digital-first approach to marketing that created a global community of brand advocates.'
      }
    }
  },
  {
    id: 'sales',
    title: 'Sell Products',
    description: 'Psychology, funnels, and conversion optimization — learn to sell without selling.',
    icon: <TrendingUp className="w-8 h-8" />,
    modules: '28',
    hours: '44',
    caseStudies: '10',
    content: {
      overview: 'Discover the art and science of selling. From understanding buyer psychology to building high-converting funnels, master the skills that drive revenue.',
      sections: [
        {
          title: 'Sales Psychology',
          points: ['Understanding buyer behavior', 'Building trust and rapport', 'Handling objections', 'Closing techniques']
        },
        {
          title: 'Conversion Funnels',
          points: ['Funnel mapping and design', 'Landing page optimization', 'Email sequences', 'A/B testing strategies']
        },
        {
          title: 'E-commerce Excellence',
          points: ['Product page optimization', 'Checkout flow design', 'Cart abandonment recovery', 'Customer retention']
        }
      ],
      caseStudy: {
        brand: 'Amazon',
        description: 'How Amazon perfected the e-commerce experience to become the world\'s largest online retailer.'
      }
    }
  },
  {
    id: 'online',
    title: 'Go Online',
    description: 'Website, presence, and authority — establish your digital footprint and dominate search.',
    icon: <Globe className="w-8 h-8" />,
    modules: '20',
    hours: '32',
    caseStudies: '6',
    content: {
      overview: 'Build a powerful online presence that establishes authority and attracts your ideal customers. From website development to reputation management.',
      sections: [
        {
          title: 'Website Development',
          points: ['Platform selection', 'UX/UI best practices', 'Mobile optimization', 'Performance tuning']
        },
        {
          title: 'Online Authority',
          points: ['Thought leadership content', 'Guest posting strategies', 'Podcast appearances', 'Industry networking']
        },
        {
          title: 'Reputation Management',
          points: ['Review generation', 'Crisis management', 'Brand monitoring', 'Community building']
        }
      ],
      caseStudy: {
        brand: 'Tesla',
        description: 'Tesla\'s direct-to-consumer online strategy that disrupted the automotive industry.'
      }
    }
  },
  {
    id: 'investment',
    title: 'Get Investment',
    description: 'Pitch, network, and close — fund your vision with the right investors at the right time.',
    icon: <DollarSign className="w-8 h-8" />,
    modules: '26',
    hours: '42',
    caseStudies: '9',
    content: {
      overview: 'Learn how to secure funding for your business. From crafting the perfect pitch to building investor relationships, master the fundraising process.',
      sections: [
        {
          title: 'Fundraising Fundamentals',
          points: ['Funding stages explained', 'Valuation methods', 'Term sheet basics', 'Cap table management']
        },
        {
          title: 'The Perfect Pitch',
          points: ['Pitch deck creation', 'Storytelling for investors', 'Financial projections', 'Demo day preparation']
        },
        {
          title: 'Investor Relations',
          points: ['Finding the right investors', 'Network building', 'Due diligence preparation', 'Post-funding management']
        }
      ],
      caseStudy: {
        brand: 'Airbnb',
        description: 'How Airbnb went from selling cereal boxes to raising billions in venture capital.'
      }
    }
  },
  {
    id: 'scale',
    title: 'Build Big Brands',
    description: 'Scale systems, build teams, and create a legacy that outlasts the competition.',
    icon: <Building2 className="w-8 h-8" />,
    modules: '30',
    hours: '48',
    caseStudies: '11',
    content: {
      overview: 'Take your brand from startup to empire. Learn the systems, processes, and leadership skills needed to scale sustainably.',
      sections: [
        {
          title: 'Scaling Systems',
          points: ['Operational excellence', 'Process automation', 'Technology stack', 'Quality at scale']
        },
        {
          title: 'Team Building',
          points: ['Hiring strategies', 'Culture development', 'Leadership principles', 'Remote team management']
        },
        {
          title: 'Market Expansion',
          points: ['Geographic expansion', 'Product line extension', 'Partnership strategies', 'Acquisition opportunities']
        }
      ],
      caseStudy: {
        brand: 'Starbucks',
        description: 'How Starbucks scaled from a single coffee shop to a global phenomenon while maintaining brand consistency.'
      }
    }
  }
];

const guides: Guide[] = [
  { id: '1', title: 'The Complete Brand Audit Checklist', description: 'A step-by-step guide to evaluating and improving your brand.', category: 'Brand Building', readTime: '12 min' },
  { id: '2', title: 'SEO in 2026: What Actually Works', description: 'Cut through the noise with proven search optimization strategies.', category: 'Digital Marketing', readTime: '18 min' },
  { id: '3', title: 'Conversion Rate Optimization Playbook', description: 'Turn more visitors into customers with these CRO tactics.', category: 'Sales', readTime: '15 min' },
  { id: '4', title: 'Website Launch Checklist', description: 'Everything you need to check before going live.', category: 'Online Presence', readTime: '10 min' },
  { id: '5', title: 'Pitch Deck Template That Raised $50M', description: 'The exact template used by successful startups.', category: 'Investment', readTime: '8 min' },
  { id: '6', title: 'Scaling Your Team: From 10 to 100', description: 'How to grow your team without losing your culture.', category: 'Scaling', readTime: '14 min' }
];

const testimonials: Testimonial[] = [
  { id: '1', name: 'Sarah Chen', role: 'Founder & CEO', company: 'Lumina Tech', quote: 'BrandForge Academy transformed how I think about building a business. The frameworks are practical and the results speak for themselves — we 3x\'d our revenue in 6 months.', avatar: 'SC' },
  { id: '2', name: 'Marcus Johnson', role: 'CMO', company: 'Velocity Sports', quote: 'The digital marketing modules alone are worth 10x the investment. Our organic traffic grew 400% after implementing the SEO strategies.', avatar: 'MJ' },
  { id: '3', name: 'Elena Rodriguez', role: 'Serial Entrepreneur', company: 'Nova Ventures', quote: 'I\'ve taken dozens of courses, but nothing compares to the depth and quality of BrandForge. It\'s like getting an MBA focused purely on execution.', avatar: 'ER' }
];

const brandLogos = ['Nike', 'Apple', 'Tesla', 'Starbucks', 'Netflix', 'Spotify'];

// Components
function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="orb w-[400px] h-[400px] top-20 -left-20" style={{ animationDelay: '0s' }} />
      <div className="orb w-[300px] h-[300px] top-1/3 right-10" style={{ animationDelay: '5s' }} />
      <div className="orb w-[500px] h-[500px] bottom-20 left-1/3" style={{ animationDelay: '10s' }} />
      <div className="orb w-[250px] h-[250px] top-2/3 right-1/4" style={{ animationDelay: '15s' }} />
    </div>
  );
}

function Navigation({ 
  onSearchClick, 
  onMenuClick, 
  isMenuOpen,
  currentView,
  onNavigate 
}: { 
  onSearchClick: () => void;
  onMenuClick: () => void;
  isMenuOpen: boolean;
  currentView: string;
  onNavigate: (view: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'Build a Brand', view: 'topic-brand' },
    { label: 'Digital Marketing', view: 'topic-marketing' },
    { label: 'Sell Products', view: 'topic-sales' },
    { label: 'Go Online', view: 'topic-online' },
    { label: 'Get Investment', view: 'topic-investment' },
    { label: 'Build Big Brands', view: 'topic-scale' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className={`mx-4 md:mx-8 transition-all duration-500 ${scrolled ? 'glass-strong rounded-2xl px-6' : ''}`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-widest text-white">BRANDFORGE</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => onNavigate(link.view)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    currentView === link.view 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button 
                onClick={onSearchClick}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <Search className="w-4 h-4 text-white" />
              </button>
              <button 
                onClick={onMenuClick}
                className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
              >
                {isMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function MenuOverlay({ 
  isOpen, 
  onClose, 
  onNavigate 
}: { 
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
}) {
  const menuItems = [
    { label: 'Brand Architecture', view: 'topic-brand', desc: 'Learn brand building' },
    { label: 'Digital Dominance', view: 'topic-marketing', desc: 'Digital marketing mastery' },
    { label: 'Sales Mastery', view: 'topic-sales', desc: 'Product selling strategies' },
    { label: 'Online Presence', view: 'topic-online', desc: 'Digital footprint & web presence' },
    { label: 'Capital Raising', view: 'topic-investment', desc: 'Investment acquisition' },
    { label: 'Scale & Legacy', view: 'topic-scale', desc: 'Building big brands' },
  ];

  const handleNavigate = (view: string) => {
    onNavigate(view);
    onClose();
  };

  return (
    <div className={`menu-overlay ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="h-full flex flex-col justify-center px-8 md:px-20">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <button
              key={item.view}
              onClick={() => handleNavigate(item.view)}
              className="block w-full text-left group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-4 py-4 border-b border-white/10 hover:border-white/30 transition-all">
                <span className="text-4xl md:text-6xl font-bold text-white group-hover:text-white/80 transition-all">
                  {item.label}
                </span>
                <ArrowUpRight className="w-8 h-8 text-white/0 group-hover:text-white/60 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-white/40 text-sm mt-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SearchOverlay({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredGuides = guides.filter(g => 
    g.title.toLowerCase().includes(query.toLowerCase()) ||
    g.description.toLowerCase().includes(query.toLowerCase()) ||
    g.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={`search-overlay ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="h-full flex flex-col items-center justify-start pt-32 px-6">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        
        <div className="w-full max-w-3xl">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to master?"
            className="w-full bg-transparent border-b-2 border-white/20 focus:border-white/60 text-3xl md:text-5xl text-white placeholder:text-white/30 py-4 outline-none transition-all"
          />
          
          {query && (
            <div className="mt-8 space-y-4">
              {filteredGuides.length > 0 ? (
                filteredGuides.map((guide, index) => (
                  <div 
                    key={guide.id}
                    className="glass-card p-6 cursor-pointer group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs text-white/50 uppercase tracking-wider">{guide.category}</span>
                        <h3 className="text-xl font-semibold text-white mt-1 group-hover:text-white/80">{guide.title}</h3>
                        <p className="text-white/60 mt-2">{guide.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-sm">
                        <span>{guide.readTime}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white/40 text-center py-8">No results found. Try a different search term.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function HeroSection({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center z-10">
        <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-6 fade-in-up">
          Master the Art of
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8 fade-in-up" style={{ animationDelay: '100ms' }}>
          Build Iconic<br />
          <span className="text-gradient">Brands That Last</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up" style={{ animationDelay: '200ms' }}>
          Master brand building, digital marketing, product sales, online presence, funding, and scaling — the exact playbook used by the world's biggest names.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{ animationDelay: '300ms' }}>
          <button 
            onClick={() => onNavigate('topic-brand')}
            className="glass-button flex items-center gap-2 text-white px-8 py-4"
          >
            <span>Start Learning Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-3 text-white/80 hover:text-white transition-all group">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/20 transition-all">
              <Play className="w-4 h-4 ml-0.5" />
            </div>
            <span>Watch 2-min Intro</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-12">
          Join 47,000+ founders building the future
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brandLogos.map((brand, index) => (
            <div 
              key={brand}
              className="text-2xl md:text-3xl font-bold text-white/20 hover:text-white/40 transition-all cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPathsSection({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Learning Paths</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Six Pillars of Success</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <button
              key={topic.id}
              onClick={() => onNavigate(`topic-${topic.id}`)}
              className="glass-card p-8 text-left group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all">
                  {topic.icon}
                </div>
                <span className="text-white/20 text-sm font-mono">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/90">{topic.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{topic.description}</p>
              <div className="flex items-center gap-2 text-white/40 text-sm group-hover:text-white/60 transition-all">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestGuidesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Resources</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Latest Guides</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-all">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="horizontal-scroll">
          {guides.map((guide, index) => (
            <div
              key={guide.id}
              className="glass-card p-6 min-w-[350px] max-w-[350px] flex-shrink-0 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-40 rounded-xl glass-subtle mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/10">{guide.category[0]}</span>
              </div>
              <span className="text-xs text-white/50 uppercase tracking-wider">{guide.category}</span>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-white/90">{guide.title}</h3>
              <p className="text-white/60 text-sm mb-4">{guide.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-sm">{guide.readTime} read</span>
                <button className="glass-button py-2 px-4 text-xs">Read Guide</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Success Stories</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-card p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-white/20 mb-6" />
              <p className="text-white/80 leading-relaxed mb-8">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-strong rounded-3xl p-12 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Forge Your Empire?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of founders who are building iconic brands with our proven frameworks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('topic-brand')}
              className="glass-button flex items-center gap-2 text-white px-8 py-4"
            >
              <span>Start Learning Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="text-white/60 hover:text-white transition-all">
              View Pricing
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopicPage({ topic, onNavigate }: { topic: Topic; onNavigate: (view: string) => void }) {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="px-6 mb-16">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-all mb-8"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-white">
              {topic.icon}
            </div>
            <div className="glass rounded-full px-4 py-2 flex items-center gap-4 text-sm text-white/70">
              <span>{topic.modules} modules</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{topic.hours} hours</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{topic.caseStudies} case studies</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{topic.title}</h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">{topic.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-white/70 leading-relaxed">{topic.content.overview}</p>
              </div>

              {topic.content.sections.map((section, index) => (
                <div key={index} className="glass-card p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70">
                        <CheckCircle2 className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="glass-card p-8 border-l-4 border-l-white/30">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-white/60" />
                  <span className="text-sm text-white/50 uppercase tracking-wider">Case Study</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{topic.content.caseStudy.brand}</h3>
                <p className="text-white/70">{topic.content.caseStudy.description}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-6 h-6 rounded-full glass flex items-center justify-center text-xs">1</span>
                    <span>Overview</span>
                  </li>
                  {topic.content.sections.map((section, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="w-6 h-6 rounded-full glass flex items-center justify-center text-xs">{index + 2}</span>
                      <span>{section.title}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-6 h-6 rounded-full glass flex items-center justify-center text-xs">{topic.content.sections.length + 2}</span>
                    <span>Case Study: {topic.content.caseStudy.brand}</span>
                  </li>
                </ul>
                
                <button className="w-full glass-button mt-6 flex items-center justify-center gap-2">
                  <span>Start This Path</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="glass-card p-6 mt-4">
                <h3 className="text-lg font-semibold text-white mb-4">Download Resources</h3>
                <button className="w-full glass-subtle rounded-xl p-4 flex items-center justify-between group hover:bg-white/10 transition-all mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white/60" />
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-medium">Checklist</p>
                      <p className="text-white/50 text-xs">PDF, 2.4 MB</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-all" />
                </button>
                <button className="w-full glass-subtle rounded-xl p-4 flex items-center justify-between group hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white/60" />
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-medium">Workbook</p>
                      <p className="text-white/50 text-xs">PDF, 5.1 MB</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-widest text-white">BRANDFORGE</span>
          </div>
          
          <p className="text-white/40 text-sm mb-6">
            Developed by <a href="https://real-shetty.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all inline-flex items-center gap-1">realshetty <ExternalLink className="w-3 h-3" /></a> — designer, analyst
          </p>
          
          <div className="flex items-center gap-4 mb-8">
            {[
              { icon: <Twitter className="w-4 h-4" />, href: '#' },
              { icon: <Linkedin className="w-4 h-4" />, href: '#' },
              { icon: <Instagram className="w-4 h-4" />, href: '#' },
              { icon: <Dribbble className="w-4 h-4" />, href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <p className="text-white/30 text-xs">
            © 2026 BrandForge Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentView]);

  // Close overlays on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Get current topic if viewing a topic page
  const currentTopic = currentView.startsWith('topic-') 
    ? topics.find(t => t.id === currentView.replace('topic-', ''))
    : null;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingOrbs />
      
      <Navigation 
        onSearchClick={() => setIsSearchOpen(true)}
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
        currentView={currentView}
        onNavigate={setCurrentView}
      />
      
      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigate={setCurrentView}
      />
      
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
      />

      <main className="relative z-10">
        {currentView === 'home' && (
          <>
            <HeroSection onNavigate={setCurrentView} />
            <TrustedBySection />
            <LearningPathsSection onNavigate={setCurrentView} />
            <LatestGuidesSection />
            <SuccessStoriesSection />
            <CTASection onNavigate={setCurrentView} />
          </>
        )}
        
        {currentTopic && (
          <TopicPage topic={currentTopic} onNavigate={setCurrentView} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
