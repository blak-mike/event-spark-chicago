import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { ProgramCard } from "@/components/ProgramCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Target, PartyPopper, Music, Instagram, Youtube, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-events.jpg";
import corporateImage from "@/assets/corporate-events.jpg";
import restaurantImage from "@/assets/restaurant-events.jpg";
import privateImage from "@/assets/private-events.jpg";

const Index = () => {
  const services = [
    {
      title: "Corporate Healthcare Events",
      description: "Specialized team building and wellness programs designed for healthcare organizations. Our interactive experiences boost morale and foster collaboration in high-stress environments.",
      benefits: ["Stress Relief Activities", "Team Bonding", "Morale Boosting", "Customized Programs"],
      image: corporateImage,
      imageAlt: "Corporate team building event"
    },
    {
      title: "Restaurant & Bar Entertainment",
      description: "Turn slow nights into profit centers with our interactive entertainment solutions. Game show bingo, themed nights, and customer engagement activities that increase dwell time and spending.",
      benefits: ["Increased Revenue", "Customer Retention", "Social Media Buzz", "Weekly Programming"],
      image: restaurantImage,
      imageAlt: "Restaurant bar entertainment event"
    },
    {
      title: "Private Event Experiences",
      description: "Luxury entertainment for private parties, celebrations, and special occasions. From intimate gatherings to large celebrations, we create memorable experiences that guests talk about for years.",
      benefits: ["Custom Themes", "Premium Service", "Professional Hosts", "Full Production"],
      image: privateImage,
      imageAlt: "Private celebration event"
    }
  ];

  const programs = [
    {
      icon: Target,
      title: "Game Show Bingo",
      subtitle: "Chicago's Interactive Trivia Experience",
      description: "Perfect for bars, restaurants, and corporate events. Combines trivia, music, and prizes for maximum engagement."
    },
    {
      icon: PartyPopper,
      title: "Themed Brunches",
      subtitle: "Drag Bingo & Family Brunch Shows",
      description: "Weekend brunch entertainment featuring drag performances, family-friendly shows, and interactive dining experiences."
    },
    {
      icon: Music,
      title: "Music Theme Nights",
      subtitle: "Name That Tune & More",
      description: "Decade-themed music nights, karaoke competitions, and interactive music experiences that get crowds singing along."
    }
  ];

  const testimonials = [
    {
      quote: "IRL Events transformed our corporate retreat into an unforgettable experience. The GSNL game show had everyone engaged and laughing!",
      author: "Sarah Johnson",
      company: "TechCorp Industries"
    },
    {
      quote: "The B2B Speed Dating event was perfectly organized. We made 12 new business connections in just one evening.",
      author: "Michael Chen",
      company: "Innovation Partners"
    },
    {
      quote: "Our hybrid event reached over 500 participants globally. The technical execution was flawless.",
      author: "Lisa Rodriguez",
      company: "Global Marketing Solutions"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Interactive events entertainment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative container py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Interactive Events Chicago
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              Outside-the-Box Events In-A-Box
            </p>
            <p className="text-lg md:text-xl">
              150,000+ hours of IRL Interactive Entertainment delivered to venues, brands, and private events worldwide
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button variant="cta" size="xl">
                Get Quote
              </Button>
              <Button variant="secondary" size="xl">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-muted py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="font-semibold">Serving Chicago Metro Area</p>
              <p className="text-sm text-muted-foreground">50 miles from downtown</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-primary" />
              <p className="font-semibold">(630) 550-9595</p>
              <p className="text-sm text-muted-foreground">Call or WhatsApp</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              <p className="font-semibold">jason@irlevents.fun</p>
              <p className="text-sm text-muted-foreground">Email us anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-8 bg-background border-b">
        <div className="container text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Service Areas:</span> Chicago, Naperville, Oak Park, Evanston, Schaumburg, Arlington Heights, Des Plaines, and all surrounding suburbs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">WHO ARE YOU?</h2>
            <p className="text-xl text-muted-foreground">SELECT YOUR EXPERIENCE</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-muted">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">TOP PROGRAM HIGHLIGHTS</h2>
            <p className="text-xl text-muted-foreground">Chicago's Most Popular Interactive Entertainment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real Reviews from Real Events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="default" size="lg">
              See All Reviews ⭐
            </Button>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 bg-muted">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Follow @irleventsfun</h2>
            <p className="text-xl text-muted-foreground">Stay connected and see our latest events across all social platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-card hover:shadow-glow transition-smooth group">
              <Instagram className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
              <span className="font-semibold">Instagram</span>
              <span className="text-sm text-muted-foreground">Daily photos</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-card hover:shadow-glow transition-smooth group">
              <Music className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
              <span className="font-semibold">TikTok</span>
              <span className="text-sm text-muted-foreground">Behind-the-scenes</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-card hover:shadow-glow transition-smooth group">
              <Youtube className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
              <span className="font-semibold">YouTube</span>
              <span className="text-sm text-muted-foreground">Event highlights</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-card hover:shadow-glow transition-smooth group">
              <Linkedin className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
              <span className="font-semibold">LinkedIn</span>
              <span className="text-sm text-muted-foreground">B2B content</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">Tag us @irleventsfun to be featured in our stories!</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg md:text-xl">
              Join hundreds of Chicago venues and organizations that trust IRL Interactive Events
            </p>
            <p className="text-base md:text-lg opacity-90">
              From intimate private gatherings to large corporate events, we bring the excitement and engagement that transforms ordinary occasions into unforgettable experiences. Contact us today to discover how we can elevate your next event.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button variant="cta" size="xl">
                <Phone className="w-5 h-5" />
                Call (630) 550-9595
              </Button>
              <Button variant="secondary" size="xl">
                <Mail className="w-5 h-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container text-center space-y-4">
          <div className="text-2xl font-bold">IRL Interactive Events</div>
          <p className="text-sm opacity-80">
            Chicago's premier Pop-Up Experiences specialists serving the greater Chicagoland area
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#home" className="hover:text-primary transition-smooth">Home</a>
            <a href="#services" className="hover:text-primary transition-smooth">Services</a>
            <a href="#programs" className="hover:text-primary transition-smooth">Programs</a>
            <a href="#testimonials" className="hover:text-primary transition-smooth">Reviews</a>
          </div>
          <p className="text-xs opacity-60 pt-4">
            © {new Date().getFullYear()} IRL Interactive Events. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
