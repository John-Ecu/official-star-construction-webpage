import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Phone, Mail, MapPin, Shield, Users, CheckCircle, Layers } from "lucide-react";
import starLogo from "@/assets/star-construction-logo.png";
import insulcreteWork1 from "@/assets/gallery/insulcrete-work-1.jpeg";
import caulkingWork1 from "@/assets/gallery/caulking-work-1.jpeg";
import chimneyStone1a from "@/assets/gallery/chimney-stone-1a.jpeg";
import chimneyStone2 from "@/assets/gallery/chimney-stone-2.jpeg";
import summer2024Before from "@/assets/gallery/summer2024-stone-before.jpeg";
import summer2024Stone6 from "@/assets/gallery/summer2024-stone-6.jpeg";
import fireplaceStone4 from "@/assets/gallery/fireplace-stone-4.jpeg";
import fireplaceStone5 from "@/assets/gallery/fireplace-stone-5.jpeg";
import eifsStoneLath1 from "@/assets/gallery/eifs-stone-lath-1.jpeg";
import eifsStoneBase2 from "@/assets/gallery/eifs-stone-base-2.jpeg";
import eifsStoneComplete3 from "@/assets/gallery/eifs-stone-complete-3.jpeg";
import eifsProject2_3 from "@/assets/gallery/eifs-project2-3.jpeg";
import eifsProject2_8 from "@/assets/gallery/eifs-project2-8.jpeg";
import commercial1 from "@/assets/gallery/commercial-1.jpeg";
import commercial2 from "@/assets/gallery/commercial-2.jpeg";
import commercial3 from "@/assets/gallery/commercial-3.jpeg";
import commercial5 from "@/assets/gallery/commercial-5.jpeg";
import commercial8 from "@/assets/gallery/commercial-8.jpeg";
import commercial9 from "@/assets/gallery/commercial-9.jpeg";

const Index = () => {
  const services = [
    { name: "Commercial", description: "Large-scale commercial projects", scrollTo: "gallery-commercial" },
    { name: "EIFS & Stucco", description: "Exterior Insulation and Finish System (EIFS) & Stucco", scrollTo: "gallery-eifs" },
    { name: "Fireplace & Chimney Stone Installation", description: "Custom fireplace and chimney stone installation", scrollTo: "gallery-stone" },
    { name: "Caulking", description: "Sealing for windows, doors, and joints", scrollTo: "gallery-caulking" },
    { name: "Insulcrete", description: "Insulated concrete installation and finishing", scrollTo: "gallery-insulcrete" }
  ];

  const scrollToSection = (id: string | null) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  // Main contact info
  const mainPhone = "608-358-3706";
  const mainEmail = "bluestarconstruction1994@gmail.com";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-6 min-w-0">
            <img 
              src={starLogo} 
              alt="Star Construction" 
              className="h-20 sm:h-24 md:h-28 w-auto brightness-110 contrast-110 flex-shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-white font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
                STAR
              </span>
              <span className="text-accent font-bold text-sm sm:text-base md:text-xl tracking-widest leading-tight">
                CONSTRUCTION
              </span>
            </div>
          </div>
          <a 
            href={`tel:${mainPhone}`}
            className="flex items-center gap-2 bg-accent text-accent-foreground px-3 md:px-5 py-2 md:py-3 rounded font-bold hover:bg-accent/90 transition-colors text-sm md:text-base"
          >
            <Phone className="h-4 w-4 md:h-5 md:w-5" />
            <span className="hidden sm:inline">{mainPhone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-accent/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in tracking-tight">
            EIFS & STUCCO FOR THOSE WHO
            <br />
            <span className="text-accent">EXPECT MORE</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-80 animate-slide-up font-light">
            Trusted by Builders. Loved by Homeowners.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {services.map((service) => (
              <button 
                key={service.name}
                onClick={() => scrollToSection(service.scrollTo)}
                disabled={!service.scrollTo}
                className={`text-sm py-2 px-4 rounded transition-all duration-300 ${
                  service.scrollTo 
                    ? 'bg-white/10 text-white border border-white/20 hover:bg-accent hover:text-primary hover:border-accent cursor-pointer hover:scale-105' 
                    : 'bg-white/5 text-white/50 border border-white/10 cursor-default'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a 
              href={`mailto:${mainEmail}?subject=Free Quote Request`}
              className="inline-flex items-center gap-2 text-lg px-10 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 font-bold rounded"
            >
              <Mail className="h-5 w-5" />
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-12 animate-fade-in">
              <Users className="h-10 w-10 mr-4 text-primary animate-float" />
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Our Wisconsin Family Business
              </h2>
            </div>
            <Card className="bg-gradient-card shadow-soft hover:shadow-glow transition-all duration-500 border-0">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-semibold text-primary mb-6">🌟 Your Local Wisconsin Team</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Star Construction is a proud Wisconsin family business with deep roots in Dane County. 
                      For over two decades, we've been serving our neighbors and community with quality craftsmanship 
                      and honest, reliable service.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      We've built lasting relationships with homeowners and businesses across the region, 
                      earning a reputation for excellence through hard work and dedication. Our team knows 
                      Wisconsin's unique climate and building requirements inside and out.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Our work ethic is simple: no project is too challenging, and no detail is too small. 
                      We treat every job as if we're building for our own family.
                    </p>
                  </div>
                  <div className="space-y-6 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl">
                    <h4 className="text-xl font-semibold text-primary mb-4">🏡 Why Choose Our Wisconsin Team?</h4>
                    <div className="space-y-4">
                      <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-6 w-6 text-accent mr-4 group-hover:text-primary transition-colors" />
                        <span className="text-lg">🕐 20+ Years Combined Experience</span>
                      </div>
                      <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-6 w-6 text-accent mr-4 group-hover:text-primary transition-colors" />
                        <span className="text-lg">👨‍👩‍👧‍👦 Family-Owned & Operated</span>
                      </div>
                      <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-6 w-6 text-accent mr-4 group-hover:text-primary transition-colors" />
                        <span className="text-lg">🏠 Full Home Build Experience</span>
                      </div>
                      <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-6 w-6 text-accent mr-4 group-hover:text-primary transition-colors" />
                        <span className="text-lg">📍 Proudly Serving Dane County</span>
                      </div>
                      <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-6 w-6 text-accent mr-4 group-hover:text-primary transition-colors" />
                        <span className="text-lg">💪 No Job Too Big or Small</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Licensed & Insured Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Licensed & Insured
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Star Construction LLC is fully licensed and insured in Wisconsin. 
              We're covered as a business to protect you and your property on every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              🔨 Our Expert Services
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Star Construction is a small family company serving Dane County. We specialize in applying 
              EIFS, caulking, insulcrete, and stone to residential and commercial buildings with Wisconsin craftsmanship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.name} 
                className="bg-gradient-card hover:shadow-glow transition-all duration-500 hover:scale-105 group border-0 animate-slide-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="flex items-center justify-center text-xl group-hover:text-primary transition-colors">
                    <Shield className="h-7 w-7 mr-3 text-accent group-hover:text-primary transition-colors animate-float" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors text-lg">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Exterior Finish Services */}
      <section className="py-24 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Exterior Finish Systems
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer both EIFS and Traditional Stucco applications. Each system has unique benefits—let us help you choose the right solution for your project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* EIFS Card */}
            <Card className="bg-gradient-card shadow-soft border-0 animate-slide-up overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">EIFS</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong>Exterior Insulation and Finish System</strong> — A multi-layered exterior wall system that provides superior insulation and a seamless, modern finish. EIFS offers excellent energy efficiency, a wide range of colors and textures, and requires minimal maintenance.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Superior thermal insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>More color & texture options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Crack-resistant finish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Low maintenance requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Traditional Stucco Card */}
            <Card className="bg-gradient-card shadow-soft border-0 animate-slide-up overflow-hidden group hover:shadow-lg transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Traditional Stucco</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong>Portland Cement Plaster</strong> — A time-tested exterior finish made from cement, sand, and water. Traditional stucco provides a classic textured appearance, excellent breathability, and proven durability that has been trusted for centuries.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Classic, timeless aesthetic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Excellent moisture breathability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Fire-resistant material</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Proven longevity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Pricing CTA */}
          <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Card className="bg-primary/5 border-accent/20 max-w-2xl mx-auto">
              <CardContent className="py-10 px-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Every Project Is Unique</h3>
                <p className="text-muted-foreground mb-6">
                  Pricing depends on project scope, materials, and site conditions. Reach out for a personalized consultation and free estimate.
                </p>
                <a 
                  href={`tel:${mainPhone}`}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Request a Quote
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              📸 Our Work in Action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a look at our team delivering quality EIFS and Insulcrete installations across Wisconsin.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ========== COMMERCIAL SECTION (FIRST) ========== */}
            <div id="gallery-commercial" className="lg:col-span-3 md:col-span-2 col-span-1 animate-fade-in scroll-mt-24">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">🏢 Commercial & Large-Scale Projects</h3>
                <p className="text-muted-foreground">Partnered with major construction companies on hotels, multi-story buildings, and more</p>
              </div>
            </div>

            {/* Commercial EIFS combo */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up">
              <div className="grid grid-cols-2 gap-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={commercial1} alt="Luxury home EIFS prep" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={commercial2} alt="Full scaffolding setup" className="w-full h-full object-cover" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Large-Scale EIFS Prep</h3>
                <p className="text-muted-foreground text-sm">Professional scaffolding for safe, efficient exterior access.</p>
              </CardContent>
            </Card>

            {/* Hotel Projects */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.05s'}}>
              <div className="grid grid-cols-2 gap-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={commercial3} alt="Hotel EIFS exterior" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={commercial9} alt="Hotel ground floor" className="w-full h-full object-cover" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Hotel EIFS Projects</h3>
                <p className="text-muted-foreground text-sm">Multi-story hotels with clean EIFS finishes and bold accents.</p>
              </CardContent>
            </Card>

            {/* High-Rise Work */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="grid grid-cols-2 gap-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={commercial5} alt="Multi-story EIFS" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={commercial8} alt="Skilled high-rise work" className="w-full h-full object-cover" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Multi-Story Commercial</h3>
                <p className="text-muted-foreground text-sm">Experienced crew working safely at height on large projects.</p>
              </CardContent>
            </Card>

            {/* ========== EIFS SECTION ========== */}
            <div id="gallery-eifs" className="lg:col-span-3 md:col-span-2 col-span-1 animate-fade-in scroll-mt-24" style={{animationDelay: '0.15s'}}>
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">🔧 EIFS & Stucco Installation</h3>
                <p className="text-muted-foreground">Professional EIFS and stucco application for residential and commercial projects</p>
              </div>
            </div>

            {/* EIFS Process - 3 steps in one card */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="grid grid-cols-3 gap-1">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute top-1 left-1 z-10 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-semibold">1</div>
                  <img src={eifsStoneLath1} alt="Metal lath installation" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute top-1 left-1 z-10 bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-semibold">2</div>
                  <img src={eifsStoneBase2} alt="Base coat application" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute top-1 left-1 z-10 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-semibold">3</div>
                  <img src={eifsStoneComplete3} alt="Completed stone" className="w-full h-full object-cover" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">EIFS Stone Process</h3>
                <p className="text-muted-foreground text-sm">From metal lath to brown coat to finished stone exterior.</p>
              </CardContent>
            </Card>

            {/* EIFS Project highlights - reduced to 3 best images */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.25s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={eifsProject2_3} alt="Luxury home with EIFS and stone" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Luxury Home Exterior</h3>
                <p className="text-muted-foreground text-sm">Custom home featuring stucco finish, decorative medallion, and stone accents.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={eifsProject2_8} alt="EIFS with arched windows" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Elegant Arched Windows</h3>
                <p className="text-muted-foreground text-sm">Custom EIFS with decorative keystones and natural stone base.</p>
              </CardContent>
            </Card>

            {/* ========== STONE INSTALLATION SECTION ========== */}
            <div id="gallery-stone" className="lg:col-span-3 md:col-span-2 col-span-1 animate-fade-in scroll-mt-24" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">🏠 Stone Installation</h3>
                <p className="text-muted-foreground">Exterior stone, chimneys, and fireplace installations</p>
              </div>
            </div>

            {/* EIFS to Cultured Stone Process */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="grid grid-cols-2 gap-1">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute top-1 left-1 z-10 bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-semibold">EIFS Install</div>
                  <img src={summer2024Before} alt="EIFS installation in progress" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute top-1 left-1 z-10 bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-semibold">Complete</div>
                  <img src={summer2024Stone6} alt="Completed cultured stone wall" className="w-full h-full object-cover" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Exterior Stone Wall</h3>
                <p className="text-muted-foreground text-sm">EIFS substrate with completed cultured stone exterior finish.</p>
              </CardContent>
            </Card>

            {/* Chimney combo card */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="grid grid-cols-2 gap-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={chimneyStone1a} alt="Stone chimney - side view" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={chimneyStone2} alt="Modern slate chimney" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Stone Chimneys</h3>
                <p className="text-muted-foreground text-sm">Floor-to-ceiling stone chimneys as stunning focal points.</p>
              </CardContent>
            </Card>

            {/* Fireplace combo card */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.35s'}}>
              <div className="grid grid-cols-2 gap-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={fireplaceStone4} alt="Grand limestone fireplace" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={fireplaceStone5} alt="Multi-tone ledger stone" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Stone Fireplaces</h3>
                <p className="text-muted-foreground text-sm">Custom fireplace installations with natural wood mantels.</p>
              </CardContent>
            </Card>

            {/* ========== CAULKING & INSULCRETE (Combined row) ========== */}
            <div id="gallery-caulking" className="lg:col-span-3 md:col-span-2 col-span-1 animate-fade-in scroll-mt-24" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">🔧 Caulking & Insulcrete</h3>
                <p className="text-muted-foreground">Professional sealing and insulated concrete applications</p>
              </div>
            </div>

            <Card id="gallery-insulcrete" className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up scroll-mt-24" style={{animationDelay: '0.45s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={caulkingWork1} alt="Professional caulking application" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Window Caulking</h3>
                <p className="text-muted-foreground text-sm">Precision sealing to prevent air and water infiltration.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.5s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={insulcreteWork1} alt="Insulcrete installation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-1">Insulcrete Application</h3>
                <p className="text-muted-foreground text-sm">Insulated concrete for residential foundations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Trusted Partners Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trusted by Madison's Best
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We've partnered with builders, property managers, and homeowners throughout the Madison area on projects of all sizes. Our work speaks for itself.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-accent">
                <Users className="w-5 h-5" />
                <span className="font-semibold">References available upon request</span>
              </div>
            </div>
            <div className="mt-10">
              <a 
                href={`tel:${mainPhone}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">Get a Free Quote</h2>
            <p className="text-xl opacity-90 mb-12">
              Ready to start your project? Contact us today for a free estimate on your next construction project.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a 
                href={`tel:${mainPhone}`}
                className="flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-lg font-bold text-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="h-6 w-6" />
                {mainPhone}
              </a>
              <a 
                href={`mailto:${mainEmail}`}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-6 w-6" />
                Email Us
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/80 mb-8">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Serving Dane County, Wisconsin</span>
            </div>

            {/* Dane County Map */}
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Dane+County,+WI&zoom=10"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dane County, Wisconsin Service Area"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <img 
              src={starLogo} 
              alt="Star Construction LLC" 
              className="h-20 w-auto"
            />
          </div>
          <p className="text-primary-foreground/80 text-lg mb-2">Proudly Serving Dane County, Wisconsin</p>
          <p className="text-sm text-primary-foreground/60">Professional Construction Services</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
