import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Instagram, 
  Youtube, 
  MessageSquare, 
  ChevronRight, 
  Gamepad2, 
  Trophy, 
  Users, 
  Zap,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from './lib/utils';

const TEAM_MEMBERS = [
  {
    name: "Tanzoolo",
    role: "Captain / Entry Fragger",
    image: "https://picsum.photos/seed/tanzoolo/400/400",
    instagram: "https://www.instagram.com/tanzoolo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    discord: "#",
    youtube: "https://youtube.com/@tanzoolo-joy?si=9086bGDnNmcNS5cg",
    color: "blue"
  },
  {
    name: "AJ7",
    role: "Sniper / IGL",
    image: "https://picsum.photos/seed/aj7/400/400",
    instagram: "https://www.instagram.com/alanjoshin7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    discord: "#",
    youtube: "#",
    color: "purple"
  },
  {
    name: "Seetrax",
    role: "Support / Lurker",
    image: "https://picsum.photos/seed/spidey/400/400",
    instagram: "https://www.instagram.com/seetrax_/?utm_source=ig_web_button_share_sheet",
    discord: "#",
    youtube: "#",
    color: "pink"
  },
  {
    name: "SiberianCrane",
    role: "Rifler / Strategist",
    image: "https://picsum.photos/seed/siberian/400/400",
    instagram: "https://www.instagram.com/madhanmonish?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    discord: "#",
    youtube: "#",
    color: "blue"
  },
  {
    name: "Ramukyajar",
    role: "Flex / Clutch King",
    image: "https://picsum.photos/seed/ramu/400/400",
    instagram: "https://www.instagram.com/ramukyajar/",
    discord: "#",
    youtube: "https://youtube.com/@ramukyajarr?si=Jt7JTj_mtNpfTbE2",
    color: "purple"
  }
];

const SOCIALS = [
  { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/tanzoolo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", color: "text-pink-500", glow: "shadow-pink-500/20" },
  { name: "Discord", icon: MessageSquare, link: "https://discord.gg/VcYWeRt", color: "text-indigo-500", glow: "shadow-indigo-500/20" },
  { name: "YouTube", icon: Youtube, link: "https://youtube.com/@teamcool-zoolo?si=X-2vA8UmiPpG_qHU", color: "text-red-500", glow: "shadow-red-500/20" },
];

const HIGHLIGHTS = [
  { id: "1", title: "ROCKET LEAGUE | Team COOL vs CallUsPapa - Grand Finals", thumbnail: "https://youtu.be/ADE6TTHsk7s?si=8nW5M6g1x4-Qq5Th" },
  { id: "2", title: "Chain Together - TEAM COOL ", thumbnail: "https://youtu.be/G0Ooz3mr9wo?si=76haC1JaHKOAMwO1" },
  { id: "3", title: "Tanzoolo - INSANE 45 Kills", thumbnail: "https://youtu.be/rYPm9Ub2cUs?si=znqc6jI_04Pff5OF" },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-black overflow-x-hidden">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-cyber-black/80 backdrop-blur-md border-white/10 py-4" 
          : "bg-transparent border-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center shadow-lg shadow-neon-blue/20">
              <Gamepad2 className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter text-white">
              TEAM <span className="text-neon-blue">COOL</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Team', 'Socials', 'Highlights', 'Join'].map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-display font-medium text-white/70 hover:text-neon-blue transition-colors uppercase tracking-widest"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-xs font-display font-bold uppercase tracking-widest transition-all hover:border-neon-blue hover:text-neon-blue"
            onClick={() => scrollToSection('join')}
          >
            Join Squad
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale, y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black z-10" />
          <div className="absolute inset-0 cyber-grid z-0" />
          <img 
            src="https://picsum.photos/seed/gaming-hero/1920/1080?blur=2" 
            alt="Gaming Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          {/* Animated Particles/Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-[10px] font-display font-bold uppercase tracking-[0.3em] mb-6">
              Elite Gaming Squad
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter mb-6 leading-none">
              TEAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink neon-glow-blue">COOL</span>
            </h1>
            <p className="max-w-xl mx-auto text-white/60 text-lg md:text-xl font-medium mb-10">
              Play Hard. <span className="text-white">Win Harder.</span> Dominating the competitive scene with precision and style.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('team')}
                className="group relative px-8 py-4 bg-neon-blue text-cyber-black font-display font-black uppercase tracking-widest rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Meet the Squad</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('highlights')}
                className="px-8 py-4 border border-white/20 hover:border-neon-purple hover:text-neon-purple font-display font-black uppercase tracking-widest rounded-sm transition-all"
              >
                Watch Highlights
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-display font-bold uppercase tracking-widest text-white/30">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-cyber-gray/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Tournaments Won', value: '24+', icon: Trophy },
              { label: 'Active Members', value: '05', icon: Users },
              { label: 'Win Rate', value: '89%', icon: Zap },
              { label: 'Followers', value: '100K+', icon: Instagram },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4">
                  <stat.icon className="w-6 h-6 text-neon-blue" />
                </div>
                <div className="text-3xl font-display font-black text-white mb-1">{stat.value}</div>
                <div className="text-[10px] font-display font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-purple/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-neon-purple font-display font-bold text-xs uppercase tracking-[0.3em] mb-4 block">The Roster</span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">
              ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">OPERATIVES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className={cn(
                  "relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-neon-blue/50",
                  member.color === 'blue' ? 'group-hover:neon-border-blue' : 'group-hover:neon-border-purple'
                )}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full animate-pulse",
                        member.color === 'blue' ? 'bg-neon-blue' : 'bg-neon-purple'
                      )} />
                      <span className="text-[10px] font-display font-bold uppercase tracking-widest text-white/60">{member.role}</span>
                    </div>
                    <h3 className="text-3xl font-display font-black text-white mb-6">{member.name}</h3>
                    
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <a href={member.instagram} className="p-2 bg-white/10 hover:bg-neon-blue hover:text-cyber-black rounded-lg transition-all">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href={member.discord} className="p-2 bg-white/10 hover:bg-neon-blue hover:text-cyber-black rounded-lg transition-all">
                        <MessageSquare className="w-5 h-5" />
                      </a>
                      <a href={member.youtube} className="p-2 bg-white/10 hover:bg-neon-blue hover:text-cyber-black rounded-lg transition-all">
                        <Youtube className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Hub */}
      <section id="socials" className="py-32 bg-cyber-gray/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-4">SOCIAL HUB</h2>
            <p className="text-white/40 font-medium">Connect with us across all platforms</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.link}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col items-center gap-4 p-10 bg-white/5 border border-white/10 rounded-3xl min-w-[200px] transition-all hover:border-white/20 shadow-2xl",
                  social.glow
                )}
              >
                <social.icon className={cn("w-12 h-12", social.color)} />
                <span className="font-display font-bold uppercase tracking-widest text-sm">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-neon-pink font-display font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Action Replay</span>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">
                LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">HIGHLIGHTS</span>
              </h2>
            </div>
            <button className="flex items-center gap-2 text-sm font-display font-bold uppercase tracking-widest text-white/60 hover:text-neon-pink transition-colors">
              View All Videos <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-neon-pink/50 transition-colors">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-neon-pink group-hover:text-cyber-black transition-all">
                      <Youtube className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-neon-pink transition-colors line-clamp-2">{video.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[160px] -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 md:p-20 rounded-[40px] backdrop-blur-xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-6">JOIN THE COMMUNITY</h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Be part of the elite. Get exclusive updates, participate in community tournaments, and chat with the squad.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-[#5865F2] hover:bg-[#4752C4] text-white font-display font-black uppercase tracking-widest rounded-xl transition-all hover:scale-105 shadow-xl shadow-indigo-500/20"
              >
                <MessageSquare className="w-6 h-6" />
                Join Discord
              </a>
              <a 
                href="#" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display font-black uppercase tracking-widest rounded-xl transition-all"
              >
                Follow Us <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded flex items-center justify-center">
                <Gamepad2 className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg tracking-tighter text-white">
                TEAM <span className="text-neon-blue">COOL</span>
              </span>
            </div>
            
            <div className="flex items-center gap-8 text-[10px] font-display font-bold uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>

            <div className="text-[10px] font-display font-bold uppercase tracking-widest text-white/20">
              © 2024 TEAM COOL. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
