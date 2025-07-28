import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Shield, Users, CheckCircle } from "lucide-react";

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

  const contacts = [
    { name: "John Castro", role: "Account Executive", phone: "608-358-3706", email: "john.castroflores2000@gmail.com", photo: "/lovable-uploads/f2647afe-985c-4486-8b27-8c6dd9a58cbe.png" },
    { name: "Mili Castro", role: "Accountant & Manager", phone: "608-698-7669", email: "castromary1220@yahoo.com", photo: "/lovable-uploads/0434e918-a574-4f1c-bfe1-25221834808c.png" },
    { name: "Thomas Villacres", role: "Supervisor", phone: "608-333-8120", email: "", photo: "/lovable-uploads/abf58258-b1a0-45bb-a9ce-57ed134d6e31.png" },
    { name: "Cristian Castro", role: "Company Owner", phone: "608-635-6033", email: "bluestarcontruction1994@gmail.com", photo: "/lovable-uploads/fd1bdbd5-481a-4c8d-8344-c9650c6f34b6.png" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <Star className="h-16 w-16 mr-4 animate-glow" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              STAR CONSTRUCTION LLC
            </h1>
          </div>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up">
            🌲 Specializing in EIFS, Stone, Insulcrete, Caulking, and Construction Cleaning services 
            throughout beautiful Dane County, Wisconsin 🏔️
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {services.map((service, index) => (
              <Badge 
                key={service.name} 
                variant="secondary" 
                className="text-lg py-3 px-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                {service.name}
              </Badge>
            ))}
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="text-lg px-10 py-4 bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105">
              🎯 Get Free Quote Today
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-muted/40 to-accent/5">
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
                      Our family came from Ecuador to Wisconsin for a better life during the 2000s. 
                      We worked in construction back in Ecuador, so we continued in the same footsteps.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      We slowly gained experience and knowledge working for other construction companies 
                      for over two decades. Our construction knowledge from Ecuador and two decades of 
                      working in the States gives us an edge over other companies.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      We also offer Spanish/English translation services. To be blunt, we are extremely 
                      hard workers and there is no job we won't take a crack at.
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
              🏗️ EIFS vs Traditional Stucco
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              EIFS (Synthetic stucco) is an exterior insulation and finishing system. 
              Let us help you choose the right solution for your Wisconsin home or business.
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
                    <Star className="h-5 w-5 mr-2 animate-float" />
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">📞 Let's Build Something Beautiful Together</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to start your project? Contact our Wisconsin team for any job opportunities and 
              to receive FREE quotes on your next construction project! 🏗️
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contacts.map((contact, index) => (
              <Card 
                key={contact.name} 
                className="bg-white text-foreground hover:shadow-glow transition-all duration-500 hover:scale-105 group animate-slide-up overflow-hidden"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardHeader className="text-center pb-4 relative">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors bg-black">
                    <img 
                      src={contact.photo} 
                      alt={contact.name}
                      className="w-full h-full object-cover object-center"
                      style={{
                        filter: 'brightness(1.1) contrast(1.1)',
                        backgroundColor: '#000000'
                      }}
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{contact.name}</CardTitle>
                  <CardDescription className="text-primary font-bold text-base">
                    {contact.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center group-hover:text-primary transition-colors">
                    <Phone className="h-5 w-5 mr-3 text-accent group-hover:text-primary transition-colors" />
                    <a href={`tel:${contact.phone}`} className="text-base hover:underline font-medium">
                      {contact.phone}
                    </a>
                  </div>
                  {contact.email && (
                    <div className="flex items-start group-hover:text-primary transition-colors">
                      <Mail className="h-5 w-5 mr-3 mt-0.5 text-accent group-hover:text-primary transition-colors flex-shrink-0" />
                      <a href={`mailto:${contact.email}`} className="text-sm font-medium hover:underline break-all tracking-wide">
                        {contact.email}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-muted to-accent/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <Star className="h-8 w-8 mr-3 text-primary animate-glow" />
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Star Construction LLC
            </span>
          </div>
          <p className="text-muted-foreground text-lg mb-2">🏔️ Proudly Serving Beautiful Dane County, Wisconsin 🌲</p>
          <p className="text-sm text-muted-foreground">Professional Construction Services Since 2000s</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
