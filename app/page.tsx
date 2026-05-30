import Image from "next/image";
import Link from "next/link"; 
import profilePic from '../public/tomi.png';

export default function Home() {
  return (
    <main className="container mx-auto px-6 md:px-12 py-8 text-white max-w-5xl">
      
      {/* ================= NAV BAR SIMPLE ================= */}
      <nav className="flex justify-between items-center mb-16 py-4 border-b border-white/10">
        <h1 className="text-xl font-bold tracking-wider text-amber-200">Tomi Firdaus</h1>
        <div className="space-x-6 text-sm font-medium text-amber-50/70">
          <a href="#home" className="hover:text-amber-200 transition">Home</a>
          <a href="#about" className="hover:text-amber-200 transition">About</a>
          <a href="#services" className="hover:text-amber-200 transition">Services</a>
          <a href="#contact" className="hover:text-amber-200 transition">Contact</a>
        </div>
      </nav>

      {/* ================= 1. HERO SECTION ================= */}
      <section id="home" className="flex flex-col md:flex-row items-center min-h-[70vh] gap-12 mb-24">
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-xl font-semibold text-amber-300 tracking-wide">Hi, I’m Tomi</h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-amber-100 leading-tight">
            A Frontend <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-300">Developer</span>
          </h3>
          <p className="text-lg text-amber-50/85 leading-relaxed max-w-xl">
            I craft the digital experiences users see and interact with. From beautiful layouts to responsive designs, turning ideas into engaging, user-friendly interfaces that work seamlessly across all devices.
          </p>
          <div className="pt-4">
            <Link 
              href="/portofolio" 
              className="inline-block bg-amber-100 text-amber-950 py-3 px-8 rounded-full font-bold shadow-lg shadow-amber-950/30 transition-all duration-300 hover:bg-amber-200 hover:-translate-y-1"
            >
              Know Me More
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-slate-400 to-cyan-600 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <Image
              src={profilePic}
              alt="Tomi Profile Picture"
              width={280}
              height={280}
              className="relative rounded-full w-72 h-72 object-cover border-4 border-slate-400/30 shadow-9xl bg-blue-950/20"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= 2. ABOUT STORY SECTION ================= */}
      <section id="about" className="flex flex-col md:flex-row items-center gap-12 mb-28 bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-80 relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-blue-950/30">
            <Image
              alt="Tomi Story Showcase"
              src={profilePic}
              width={256}
              height={320}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <h4 className="text-amber-300 text-xs font-bold uppercase tracking-widest">A Bit of My Story</h4>
          <h3 className="text-3xl font-bold text-amber-100">How it all began</h3>
          <p className="font-medium text-amber-200 text-base italic">
            "I grew up with a curious, analytical, and problem-solving spirit in a home where the digital world was always within reach."
          </p>
          <p className="text-amber-50/75 leading-relaxed text-sm">
            My fascination with technology started at an early age, experimenting with computers and simple code. After pursuing a degree in software engineering, I began my journey as a frontend developer, where I found my passion for creating beautiful and functional user interfaces.
          </p>
          <p className="text-amber-50/75 leading-relaxed text-sm">
            Over the years, I’ve worked with teams across the globe, honing my skills in modern development practices like JavaScript, CSS, and component frameworks, continuously adapting to the ever-evolving web technologies.
          </p>
        </div>
      </section>

      {/* ================= 3. SERVICES SECTION ================= */}
      <section id="services" className="mb-28 text-center">
        <h4 className="text-amber-300 text-xs font-bold uppercase tracking-widest mb-2">What I Do Best</h4>
        <h3 className="text-3xl font-bold text-amber-100 mb-12">Our Services</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-amber-300/30 transition duration-300 group">
            <div className="text-amber-300 text-3xl mb-4 group-hover:scale-110 transition duration-300">💻</div>
            <h5 className="text-lg font-bold text-amber-100 mb-2">Web & Mobile Apps</h5>
            <p className="text-sm text-amber-50/60 leading-relaxed">Crafting responsive interfaces using modern frameworks that work flawlessly on mobile and desktop viewports.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-amber-300/30 transition duration-300 group">
            <div className="text-amber-300 text-3xl mb-4 group-hover:scale-110 transition duration-300">🛠️</div>
            <h5 className="text-lg font-bold text-amber-100 mb-2">UI/UX Implementation</h5>
            <p className="text-sm text-amber-50/60 leading-relaxed">Converting complex, pixel-perfect design files (Figma/Adobe XD) into clean, maintainable, and semantically correct frontend code.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-amber-300/30 transition duration-300 group">
            <div className="text-amber-300 text-3xl mb-4 group-hover:scale-110 transition duration-300">📈</div>
            <h5 className="text-lg font-bold text-amber-100 mb-2">SEO Optimization</h5>
            <p className="text-sm text-amber-50/60 leading-relaxed">Structuring lightweight server-rendered components to guarantee lightning-fast load speeds and top SEO rankings.</p>
          </div>
        </div>
      </section>

      {/* ================= 4. CONTACT INFO SECTION ================= */}
      <section id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-b border-white/10 mb-20 text-center md:text-left">
        <div>
          <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">Contact Now</h5>
          <p className="text-sm text-amber-50/80 break-all">tomi_firdaus_33rpl@student.smktelkom-mlg.sch.id</p>
          <p className="text-sm text-amber-50/60 mt-1">+62 851-9818-5451</p>
        </div>
        <div>
          <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">Address</h5>
          <p className="text-sm text-amber-50/80">Malang, East Java</p>
          <p className="text-sm text-amber-50/60">Indonesia</p>
        </div>
        <div className="flex flex-col items-center md:items-start justify-center">
          <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">Social Media</h5>
          <div className="flex space-x-4 text-sm text-amber-50/70">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">TikTok</a>
          </div>
        </div>
      </section>

      {/* ================= 5. NEWSLETTER / FOOTER ================= */}
      <footer className="bg-white/5 rounded-2xl p-8 text-center max-w-2xl mx-auto border border-white/5 space-y-4">
        <h4 className="text-xl font-bold text-amber-100">Let's Stay Connected</h4>
        <p className="text-xs text-amber-50/60 max-w-sm mx-auto">Subscribe to my personal newsletter to receive updates on front-end tricks and design explorations.</p>
        
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow bg-black/30 border border-white/10 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-300 transition"
          />
          <button className="bg-amber-100 text-amber-950 font-bold px-6 py-2.5 rounded-lg text-sm transition hover:bg-amber-200 active:scale-95">
            Subscribe
          </button>
        </div>

        <p className="text-[10px] text-white/30 pt-6">© 2026 Tomi. Powered by Next.js & Tailwind CSS.</p>
      </footer>

    </main>
  );
}