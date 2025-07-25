import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Shield, Users, CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    { name: "EIFS", description: "Exterior Insulation and Finishing Systems" },
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
    { name: "John Castro", role: "Account Executive", phone: "608-358-3706", email: "john.castroflores2000@gmail.com" },
    { name: "Mili Castro", role: "Accountant & Manager", phone: "608-698-7669", email: "castromary1220@yahoo.com" },
    { name: "Thomas Villacres", role: "Co-Owner", phone: "608-333-8120", email: "" },
    { name: "Cristian Castro", role: "Co-Owner", phone: "608-635-6033", email: "bluestarcontruction1994@gmail.com" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-12 w-12 mr-3" />
            <h1 className="text-5xl font-bold">STAR CONSTRUCTION LLC</h1>
          </div>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Specializing in EIFS, Stone, Insulcrete, Caulking, and Construction Cleaning services 
            throughout Dane County, Wisconsin
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {services.map((service) => (
              <Badge key={service.name} variant="secondary" className="text-lg py-2 px-4">
                {service.name}
              </Badge>
            ))}
          </div>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Users className="h-8 w-8 mr-3 text-primary" />
              <h2 className="text-3xl font-bold">About Us</h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                    <p className="text-muted-foreground mb-4">
                      Our family came from Ecuador to Wisconsin for a better life during the 2000s. 
                      We worked in construction back in Ecuador, so we continued in the same footsteps.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      We slowly gained experience and knowledge working for other construction companies 
                      for over two decades. Our construction knowledge from Ecuador and two decades of 
                      working in the States gives us an edge over other companies.
                    </p>
                    <p className="text-muted-foreground">
                      We also offer Spanish/English translation services. To be blunt, we are extremely 
                      hard workers and there is no job we won't take a crack at.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span>20+ Years Combined Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span>Family-Owned & Operated</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span>Bilingual Services (Spanish/English)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span>Serving Dane County</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Star Construction is a small family company serving Dane County. We specialize in applying 
              EIFS, caulking, insulcrete, and stone to residential and commercial buildings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EIFS vs Stucco Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">EIFS vs Stucco</h2>
            <p className="text-muted-foreground">
              EIFS (Synthetic stucco) is an exterior insulation and finishing system
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted">
                        <th className="text-left p-4 font-semibold">Factor</th>
                        <th className="text-left p-4 font-semibold">EIFS</th>
                        <th className="text-left p-4 font-semibold">Traditional Stucco</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b">
                        <td className="p-4 font-medium">Appearance</td>
                        <td className="p-4">More color options and smoother texture</td>
                        <td className="p-4">Fewer color options and rougher texture</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Cost</td>
                        <td className="p-4">$8 – $14 per sq. ft., fully installed</td>
                        <td className="p-4">$7 – $9 per sq. ft., fully installed</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Upkeep</td>
                        <td className="p-4">No major maintenance requirements other than regular cleaning</td>
                        <td className="p-4">More maintenance requirements including patching, caulking, and repainting</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Durability</td>
                        <td className="p-4">Resistant to cracking, but can trap moisture behind the finish</td>
                        <td className="p-4">Prone to cracking but more "breathable" (allows in and out movement of moisture)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Installation</td>
                        <td className="p-4">Needs installation by a professional</td>
                        <td className="p-4">Possible to install DIY</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Environmental Impact</td>
                        <td className="p-4">Petroleum-based and therefore not renewable</td>
                        <td className="p-4">Manufacture of Portland cement is energy intensive and releases high amounts of CO2</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Resale Value</td>
                        <td className="p-4">About 70% return on investment (ROI)</td>
                        <td className="p-4">About 70% ROI (same as EIFS)</td>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our References</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Here are companies we have worked with and a brief description of the work done. 
              These are just some projects - we have done a lot more, so feel free to reach out 
              to them and ask about their experience with us!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {references.map((ref) => (
              <Card key={ref.company} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{ref.company}</CardTitle>
                  <CardDescription className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    {ref.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Work Completed:</h4>
                  <ul className="space-y-1">
                    {ref.work.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="h-3 w-3 mr-2 mt-1 text-primary flex-shrink-0" />
                        {item}
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
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl opacity-90">
              Ready to start your project? Contact us for any job opportunities and 
              to receive free quotes on your next project!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact) => (
              <Card key={contact.name} className="bg-white text-foreground">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{contact.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {contact.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a href={`tel:${contact.phone}`} className="text-sm hover:underline">
                      {contact.phone}
                    </a>
                  </div>
                  {contact.email && (
                    <div className="flex items-start">
                      <Mail className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <a href={`mailto:${contact.email}`} className="text-sm hover:underline break-all">
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
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-6 w-6 mr-2 text-primary" />
            <span className="font-semibold">Star Construction LLC</span>
          </div>
          <p className="text-muted-foreground">Serving Dane County, Wisconsin</p>
          <p className="text-sm text-muted-foreground mt-2">Website coming soon!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
