import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Shield, Users, CheckCircle, Camera } from "lucide-react";
import starLogo from "@/assets/star-construction-logo.png";
import insulcreteWork1 from "@/assets/gallery/insulcrete-work-1.jpeg";
import chimneyStone1a from "@/assets/gallery/chimney-stone-1a.jpeg";
import chimneyStone1c from "@/assets/gallery/chimney-stone-1c.jpeg";
import chimneyStone2 from "@/assets/gallery/chimney-stone-2.jpeg";
import summer2024Before from "@/assets/gallery/summer2024-stone-before.jpeg";
import summer2024Stone1 from "@/assets/gallery/summer2024-stone-1.jpeg";
import summer2024Stone2 from "@/assets/gallery/summer2024-stone-2.jpeg";
import summer2024Stone6 from "@/assets/gallery/summer2024-stone-6.jpeg";
import fireplaceStone3 from "@/assets/gallery/fireplace-stone-3.jpeg";
import fireplaceStone4 from "@/assets/gallery/fireplace-stone-4.jpeg";
import fireplaceStone5 from "@/assets/gallery/fireplace-stone-5.jpeg";
import fireplaceStone6 from "@/assets/gallery/fireplace-stone-6.jpeg";
import eifsStoneLath1 from "@/assets/gallery/eifs-stone-lath-1.jpeg";
import eifsStoneBase2 from "@/assets/gallery/eifs-stone-base-2.jpeg";
import eifsStoneComplete3 from "@/assets/gallery/eifs-stone-complete-3.jpeg";
import eifsProject2_1 from "@/assets/gallery/eifs-project2-1.jpeg";
import eifsProject2_2 from "@/assets/gallery/eifs-project2-2.jpeg";
import eifsProject2_3 from "@/assets/gallery/eifs-project2-3.jpeg";
import eifsProject2_4 from "@/assets/gallery/eifs-project2-4.jpeg";
import eifsProject2_5 from "@/assets/gallery/eifs-project2-5.jpeg";
import eifsProject2_6 from "@/assets/gallery/eifs-project2-6.jpeg";
import eifsProject2_7 from "@/assets/gallery/eifs-project2-7.jpeg";
import eifsProject2_8 from "@/assets/gallery/eifs-project2-8.jpeg";
import commercial1 from "@/assets/gallery/commercial-1.jpeg";
import commercial2 from "@/assets/gallery/commercial-2.jpeg";
import commercial3 from "@/assets/gallery/commercial-3.jpeg";
import commercial4 from "@/assets/gallery/commercial-4.jpeg";
import commercial5 from "@/assets/gallery/commercial-5.jpeg";
import commercial6 from "@/assets/gallery/commercial-6.jpeg";
import commercial7 from "@/assets/gallery/commercial-7.jpeg";
import commercial8 from "@/assets/gallery/commercial-8.jpeg";
import commercial9 from "@/assets/gallery/commercial-9.jpeg";

const Index = () => {
  const services = [
    { name: "EIFS", description: "Exterior Insulation and Finish System (EIFS)" },
    { name: "Stone Installation", description: "Professional stone work for residential and commercial" },
    { name: "Insulcrete", description: "Insulated concrete installation and finishing" },
    { name: "Caulking", description: "Sealing for windows, doors, and joints" },
    { name: "Construction Cleaning", description: "Post-construction cleanup services" }
  ];

  const references = [
    {
      company: "Zander Solution",
      address: "5909 Sharpsburg Dr Madison, WI 53718",
      work: ["Stone Installation: Bottom half of tall building", "Caulking Installation: Around windows, doors, joints", "Insulcrete Installation: Around the house"]
    },
    {
      company: "Stucco America",
      address: "3582 Welcome Dr Verona, WI 53593",
      work: ["EIFS Installation: Around the house", "Caulking Installation: Doors, windows, etc."]
    },
    {
      company: "Artisan Builder",
      address: "2717, 2742, 2763, AND 2784 Bomani Dr Sun Prairie, WI 53590",
      work: ["Stone Installation: Around the house", "Caulking Installation: Doors, windows, etc.", "Insulcrete Installation: Around the house"]
    },
    {
      company: "Smith Management",
      address: "20 N Blair St #105 Madison, WI 53703",
      work: ["EIFS Installation: Front of building, garage area, garden area in back"]
    }
  ];

  // Main contact info
  const mainPhone = "608-635-6033";
  const mainEmail = "bluestarcontruction1994@gmail.com";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={starLogo} 
              alt="Star Construction" 
              className="h-10 w-auto"
            />
          </div>
          <a 
            href={`tel:${mainPhone}`}
            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{mainPhone}</span>
            <span className="sm:hidden">Call Now</span>
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
            EIFS & STONE FOR PEOPLE WHO
            <br />
            <span className="text-accent">EXPECT MORE</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-80 animate-slide-up font-light">
            Trusted by builders, loved by homeowners throughout Dane County, Wisconsin
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {services.map((service, index) => (
              <span 
                key={service.name} 
                className="text-sm py-2 px-4 bg-white/10 text-white/90 border border-white/20 rounded"
              >
                {service.name}
              </span>
            ))}
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="text-lg px-10 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 font-bold rounded">
              Get a Free Quote
            </Button>
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
                    <h3 className="text-3xl font-semibold text-primary mb-6">🌟 Our Journey to Wisconsin</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      In the early 2000s, our family made the brave decision to leave everything behind in Ecuador 
                      and journey to Wisconsin in search of the American Dream. We brought with us years of 
                      construction experience from our homeland and an unwavering determination to build something special.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Over the past two decades, we've worked alongside some of Wisconsin's finest construction companies, 
                      learning, growing, and perfecting our craft. This unique combination of Ecuadorian craftsmanship 
                      and American construction standards has shaped us into the skilled professionals we are today.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      As a bilingual team, we bridge language barriers and serve both English and Spanish-speaking 
                      communities with equal dedication. Our work ethic is simple: no project is too challenging, 
                      and no detail is too small. We treat every job as if we're building for our own family.
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
                        <span className="text-lg">🗣️ Bilingual Services (Spanish/English)</span>
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

      {/* EIFS vs Stucco Comparison */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              🏗️ We Specialize in EIFS, Not Stucco
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              <strong>Important:</strong> Star Construction specializes exclusively in EIFS (Exterior Insulation and Finish System), 
              not traditional stucco. Here's a comparison so you can understand the difference and why we chose EIFS.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-card shadow-soft border-0 animate-slide-up">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gradient-to-r from-primary/10 to-accent/10">
                        <th className="text-left p-6 font-bold text-lg text-primary">Factor</th>
                        <th className="text-left p-6 font-bold text-lg text-primary">EIFS ⭐</th>
                        <th className="text-left p-6 font-bold text-lg text-primary">Traditional Stucco</th>
                      </tr>
                    </thead>
                    <tbody className="text-base">
                      <tr className="border-b hover:bg-accent/5 transition-colors">
                        <td className="p-6 font-semibold text-accent">🎨 Appearance</td>
                        <td className="p-6">More color options and smoother texture</td>
                        <td className="p-6">Fewer color options and rougher texture</td>
                      </tr>
                      <tr className="border-b hover:bg-accent/5 transition-colors">
                        <td className="p-6 font-semibold text-accent">💰 Cost</td>
                        <td className="p-6">$8 – $14 per sq. ft., fully installed</td>
                        <td className="p-6">$7 – $9 per sq. ft., fully installed</td>
                      </tr>
                      <tr className="border-b hover:bg-accent/5 transition-colors">
                        <td className="p-6 font-semibold text-accent">🔧 Upkeep</td>
                        <td className="p-6">No major maintenance requirements other than regular cleaning</td>
                        <td className="p-6">More maintenance requirements including patching, caulking, and repainting</td>
                      </tr>
                      <tr className="border-b hover:bg-accent/5 transition-colors">
                        <td className="p-6 font-semibold text-accent">🛡️ Durability</td>
                        <td className="p-6">Resistant to cracking, but can trap moisture behind the finish</td>
                        <td className="p-6">Prone to cracking but more "breathable" (allows in and out movement of moisture)</td>
                      </tr>
                      <tr className="border-b hover:bg-accent/5 transition-colors">
                        <td className="p-6 font-semibold text-accent">🏗️ Installation</td>
                        <td className="p-6">Needs installation by a professional</td>
                        <td className="p-6">Possible to install DIY</td>
                      </tr>
                      <tr className="border-b hover:bg-accent/5 transition-colors">
                        <td className="p-6 font-semibold text-accent">🌱 Environmental Impact</td>
                        <td className="p-6">Petroleum-based and therefore not renewable</td>
                        <td className="p-6">Manufacture of Portland cement is energy intensive and releases high amounts of CO2</td>
                      </tr>
                      <tr className="hover:bg-accent/5 transition-colors">
                        <td className="p-6 font-semibold text-accent">📈 Resale Value</td>
                        <td className="p-6">About 70% return on investment (ROI)</td>
                        <td className="p-6">About 70% ROI (same as EIFS)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
            {/* Gallery Item 1 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={insulcreteWork1} 
                  alt="Insulcrete installation in progress"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Insulcrete Application</h3>
                </div>
                <p className="text-muted-foreground">
                  Our skilled crew applying Insulcrete to a residential foundation, ensuring proper insulation and a durable finish.
                </p>
              </CardContent>
            </Card>

            {/* Gallery Item 2 - Chimney 1 Combined Views */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="grid grid-cols-2 gap-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={chimneyStone1a} 
                    alt="Stone chimney installation - side view"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={chimneyStone1c} 
                    alt="Stone chimney installation - front view"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Stone Chimney - Side & Front Views</h3>
                </div>
                <p className="text-muted-foreground">
                  Elegant floor-to-ceiling stone chimney—a stunning focal point and mesmerizing centerpiece in this Wisconsin home.
                </p>
              </CardContent>
            </Card>

            {/* Gallery Item 5 - Chimney 2 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={chimneyStone2} 
                  alt="Modern slate stone chimney"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Modern Slate Chimney</h3>
                </div>
                <p className="text-muted-foreground">
                  A sleek, contemporary chimney with dark slate stone installation—adding modern elegance to a new construction home.
                </p>
              </CardContent>
            </Card>

            {/* Fireplace 3 - Rustic Stone */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.45s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fireplaceStone3} 
                  alt="Rustic stone fireplace with wood mantel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Rustic Corner Fireplace</h3>
                </div>
                <p className="text-muted-foreground">
                  Beautiful rustic stone chimney with natural wood mantel, creating warmth in this open-concept living space.
                </p>
              </CardContent>
            </Card>

            {/* Fireplace 4 - Grand Living Room */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.5s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fireplaceStone4} 
                  alt="Grand limestone fireplace with built-in cabinetry"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Grand Limestone Fireplace</h3>
                </div>
                <p className="text-muted-foreground">
                  Floor-to-ceiling limestone with custom hearth, flanked by elegant dark wood built-ins.
                </p>
              </CardContent>
            </Card>

            {/* Fireplace 5 - Multi-Tone Ledger */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.55s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fireplaceStone5} 
                  alt="Multi-tone ledger stone fireplace"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Multi-Tone Ledger Stone</h3>
                </div>
                <p className="text-muted-foreground">
                  Stunning stacked ledger stone with warm earth tones, featuring a dark wood floating mantel.
                </p>
              </CardContent>
            </Card>

            {/* Fireplace 6 - Corner Gray Stone */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.58s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fireplaceStone6} 
                  alt="Corner gray stone fireplace"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Corner Gray Stone Fireplace</h3>
                </div>
                <p className="text-muted-foreground">
                  Cozy corner fireplace with charcoal gray stone and natural wood mantel—a perfect accent for any living room.
                </p>
              </CardContent>
            </Card>

            {/* Summer 2024 Exterior Stone Project - Section Header */}
            <div className="lg:col-span-3 md:col-span-2 col-span-1 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">🏠 Summer 2024 Residential Stone Installation</h3>
                <p className="text-muted-foreground">Complete exterior stone transformation for a new construction home in Dane County</p>
              </div>
            </div>

            {/* Summer 2024 - Before */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">Before</div>
                <img 
                  src={summer2024Before} 
                  alt="Before stone installation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Before Installation</h3>
                </div>
                <p className="text-muted-foreground">
                  The home before exterior stone work—prepared with proper sheathing and weather barriers.
                </p>
              </CardContent>
            </Card>

            {/* Summer 2024 - In Progress 1 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.7s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={summer2024Stone1} 
                  alt="Stone installation in progress"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Stone Work Begins</h3>
                </div>
                <p className="text-muted-foreground">
                  Natural limestone being carefully placed, starting from the foundation and working upward.
                </p>
              </CardContent>
            </Card>

            {/* Summer 2024 - In Progress 2 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={summer2024Stone2} 
                  alt="Stone installation progress"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Precision Craftsmanship</h3>
                </div>
                <p className="text-muted-foreground">
                  Each stone is hand-selected and positioned for a seamless, elegant exterior finish.
                </p>
              </CardContent>
            </Card>


            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '1.2s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={summer2024Stone6} 
                  alt="Completed stone exterior - side view"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Side Elevation</h3>
                </div>
                <p className="text-muted-foreground">
                  Consistent stone pattern wrapping around the entire home for a cohesive, polished finish.
                </p>
              </CardContent>
            </Card>

            {/* EIFS Stone Process - Section Header */}
            <div className="lg:col-span-3 md:col-span-2 col-span-1 animate-fade-in" style={{animationDelay: '1.3s'}}>
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">🔧 EIFS Stone Installation Process</h3>
                <p className="text-muted-foreground">See our professional EIFS stone application from metal lath to finished stone</p>
              </div>
            </div>

            {/* EIFS - Step 1: Metal Lath */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '1.4s'}}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">Step 1</div>
                <img 
                  src={eifsStoneLath1} 
                  alt="Metal lath installation for EIFS stone"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Metal Lath & Scratch Coat</h3>
                </div>
                <p className="text-muted-foreground">
                  Metal lath is secured to the exterior wall, then a scratch coat of mortar is applied to create a strong bond for the stone.
                </p>
              </CardContent>
            </Card>

            {/* EIFS - Step 2: Base Coat */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '1.5s'}}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">Step 2</div>
                <img 
                  src={eifsStoneBase2} 
                  alt="Base coat application for EIFS stone"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Brown Coat Application</h3>
                </div>
                <p className="text-muted-foreground">
                  A smooth brown coat is applied over the insulation board, preparing a solid base for the final stone layer.
                </p>
              </CardContent>
            </Card>

            {/* EIFS - Step 3: Stone Complete */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '1.6s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={eifsStoneComplete3} 
                  alt="Completed EIFS stone installation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Finished Stone Exterior</h3>
                </div>
                <p className="text-muted-foreground">
                  Beautiful stacked stone installed on the lower exterior, blending seamlessly with the siding above.
                </p>
              </CardContent>
            </Card>

            {/* EIFS & Stone Projects - Section Header */}
            <div className="lg:col-span-3 md:col-span-2 col-span-1 animate-fade-in" style={{animationDelay: '1.7s'}}>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">🏢 EIFS & Stone Projects Gallery</h3>
                <p className="text-muted-foreground">Commercial and residential EIFS with stone accent installations</p>
              </div>
            </div>

            {/* EIFS Project 2 - Image 1 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '1.8s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={eifsProject2_1} 
                  alt="EIFS application with scaffolding"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Commercial EIFS Application</h3>
                </div>
                <p className="text-muted-foreground">
                  Base coat being applied to commercial building with protective covering during the EIFS process.
                </p>
              </CardContent>
            </Card>

            {/* EIFS Project 2 - Image 2 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '1.9s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={eifsProject2_2} 
                  alt="Completed EIFS with stone wainscot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">EIFS with Stone Wainscot</h3>
                </div>
                <p className="text-muted-foreground">
                  Elegant covered porch featuring textured EIFS finish with natural stone base.
                </p>
              </CardContent>
            </Card>

            {/* EIFS Project 2 - Image 3 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '2s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={eifsProject2_3} 
                  alt="Luxury home with EIFS and stone"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Luxury Home Exterior</h3>
                </div>
                <p className="text-muted-foreground">
                  Beautiful custom home with EIFS finish, decorative medallion, and stone accents around garage doors.
                </p>
              </CardContent>
            </Card>

            {/* EIFS Project 2 - Image 4 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '2.1s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={eifsProject2_4} 
                  alt="Commercial building with stone and EIFS"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Commercial Stone Facade</h3>
                </div>
                <p className="text-muted-foreground">
                  Professional commercial building featuring rustic stone wainscot with brick and EIFS upper sections.
                </p>
              </CardContent>
            </Card>

            {/* EIFS Project 2 - Image 5 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '2.2s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={eifsProject2_5} 
                  alt="Commercial building with brick and stone"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Brick & Stone Combination</h3>
                </div>
                <p className="text-muted-foreground">
                  Commercial building showcasing brick pillars with natural stone base and EIFS gable.
                </p>
              </CardContent>
            </Card>

            {/* EIFS Project 2 - Image 6 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '2.3s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={eifsProject2_6} 
                  alt="EIFS with stone and brick"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Full Exterior Finish</h3>
                </div>
                <p className="text-muted-foreground">
                  Complete exterior with EIFS gable, decorative brick band, and fieldstone lower section.
                </p>
              </CardContent>
            </Card>

            {/* EIFS Project 2 - Image 7 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '2.4s'}}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={eifsProject2_7} 
                  alt="Stone detail with EIFS"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Stone & EIFS Detail</h3>
                </div>
                <p className="text-muted-foreground">
                  Close-up showing the precision craftsmanship where natural stone meets textured EIFS finish.
                </p>
              </CardContent>
            </Card>

            {/* EIFS Project 2 - Image 8 */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '2.5s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={eifsProject2_8} 
                  alt="EIFS with arched windows and stone"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Elegant Arched Windows</h3>
                </div>
                <p className="text-muted-foreground">
                  Custom EIFS finish with decorative keystones above arched windows and natural stone base.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              🏢 Commercial & Large-Scale Projects
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
              We've partnered with major construction companies on large-scale commercial projects, 
              performing EIFS installation and everyday construction labor on hotels, multi-story buildings, and more.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large Home EIFS Prep */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={commercial1} 
                  alt="Large residential EIFS prep with scaffolding"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Luxury Home EIFS Prep</h3>
                </div>
                <p className="text-muted-foreground">
                  Two-story custom home with foam board insulation installed, ready for EIFS base coat and finish.
                </p>
              </CardContent>
            </Card>

            {/* Large Home EIFS Scaffolding */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={commercial2} 
                  alt="Scaffolding setup for large home EIFS"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Full Scaffolding Setup</h3>
                </div>
                <p className="text-muted-foreground">
                  Professional scaffolding for safe access to all exterior surfaces during EIFS installation.
                </p>
              </CardContent>
            </Card>

            {/* Avid Hotel */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={commercial3} 
                  alt="Avid Hotel commercial EIFS project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Hotel EIFS Exterior</h3>
                </div>
                <p className="text-muted-foreground">
                  Multi-story hotel with clean EIFS finish in tan and gray tones with bold accent colors.
                </p>
              </CardContent>
            </Card>

            {/* Night Work */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={commercial4} 
                  alt="Night shift commercial construction"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Extended Hours Work</h3>
                </div>
                <p className="text-muted-foreground">
                  Working night shifts with boom lifts to meet tight project deadlines on commercial builds.
                </p>
              </CardContent>
            </Card>

            {/* Multi-Story Scaffolding */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={commercial5} 
                  alt="Multi-story building EIFS installation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Multi-Story EIFS</h3>
                </div>
                <p className="text-muted-foreground">
                  Six-story building with full scaffolding for EIFS application on large commercial project.
                </p>
              </CardContent>
            </Card>

            {/* Weather Protection */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.5s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={commercial6} 
                  alt="Building wrapped for weather protection during EIFS"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Weather-Protected Work</h3>
                </div>
                <p className="text-muted-foreground">
                  Full plastic enclosure protecting EIFS application during cold weather conditions.
                </p>
              </CardContent>
            </Card>

            {/* Moonlit Work */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={commercial7} 
                  alt="Evening construction work on commercial building"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Dedication at Dusk</h3>
                </div>
                <p className="text-muted-foreground">
                  Our crew working into the evening to keep commercial projects on schedule.
                </p>
              </CardContent>
            </Card>

            {/* High-Rise OSB */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.7s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={commercial8} 
                  alt="Workers on scaffolding applying EIFS"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Skilled High-Rise Work</h3>
                </div>
                <p className="text-muted-foreground">
                  Experienced crew working safely at height, preparing substrate for EIFS installation.
                </p>
              </CardContent>
            </Card>

            {/* Hotel Finish */}
            <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={commercial9} 
                  alt="Hotel building with EIFS and ground floor work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 mr-2 text-accent" />
                  <h3 className="font-semibold text-lg text-primary">Hotel Ground Floor</h3>
                </div>
                <p className="text-muted-foreground">
                  Multi-story hotel with completed EIFS upper floors; ground floor canopy under construction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              🏆 Our Proud Wisconsin Projects
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
              Here are companies we have worked with and a brief description of the work done. 
              These are just some projects - we have done a lot more throughout Dane County, so feel free to reach out 
              to them and ask about their experience with our Wisconsin craftsmanship!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {references.map((ref, index) => (
              <Card 
                key={ref.company} 
                className="bg-gradient-card hover:shadow-glow transition-all duration-500 hover:scale-105 group border-0 animate-slide-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardHeader className="pb-6">
                  <CardTitle className="text-primary text-xl group-hover:text-accent transition-colors flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                    {ref.company}
                  </CardTitle>
                  <CardDescription className="flex items-start text-base">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-accent" />
                    {ref.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-4 text-lg text-primary">✅ Work Completed:</h4>
                  <ul className="space-y-3">
                    {ref.work.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex items-start group-hover:text-foreground transition-colors">
                        <CheckCircle className="h-4 w-4 mr-3 mt-1 text-accent flex-shrink-0" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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

            <div className="flex items-center justify-center gap-2 text-white/80">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Serving Dane County, Wisconsin</span>
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
          <p className="text-sm text-primary-foreground/60">Professional Construction Services Since 2000s</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
