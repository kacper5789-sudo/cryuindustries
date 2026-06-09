import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "wouter";
import { 
  Car, ShieldCheck, MapPin, Phone, 
  Instagram, Star, User, Clock, CheckCircle2,
  ChevronRight, CalendarCheck, Map
} from "lucide-react";
import { SiInstagram } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/data/reviews";

// @ts-ignore
import heroImage from "@/assets/images/hero-car.png";
// @ts-ignore
import fleetInteriorImage from "@/assets/images/fleet-interior.png";
// @ts-ignore
import fleetAudiImage from "@/assets/images/fleet-audi.png";
// @ts-ignore
import bmwX5Image from "@/assets/images/bmw-x5.png";
// @ts-ignore
import bmwX4Image from "@/assets/images/bmw-x4.png";
// @ts-ignore
import audiQ5Image from "@/assets/images/audi-q5.png";
// @ts-ignore
import audiA5Image from "@/assets/images/audi-a5.png";
// @ts-ignore
import bmw7Image from "@/assets/images/bmw-7.png";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-wider text-foreground">
              Cryu<span className="text-primary">Industries</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:513306986" 
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              data-testid="link-phone-nav"
            >
              <Phone className="w-4 h-4 text-primary" />
              Zadzwoń: 513 306 986
            </a>
            <a
              href="https://www.instagram.com/cryuindustries"
              target="_blank"
              rel="noreferrer"
              data-testid="link-nav-instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm hover:border-primary hover:text-primary transition-all"
              aria-label="Instagram CryuIndustries"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="tel:513306986" data-testid="button-nav-call">Zadzwoń</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={heroImage} 
            alt="Luxury white BMW at night" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Premium Chauffeur Service
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6"
            >
              Cryu<span className="text-primary">Industries</span>
            </motion.h1>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-foreground/90 font-light mb-6"
            >
              Luxury chauffeur service & wedding car hire
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Premium transport na wesela, eventy VIP i podróże służbowe. Komfort, punktualność i elegancja na najwyższym poziomie.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                <a href="tel:513306986" data-testid="button-hero-call">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń teraz
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-border bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:text-primary">
                <a href="tel:513306986" data-testid="button-hero-wedding">
                  Zapytaj o ślub
                </a>
              </Button>
              <a 
                href="https://www.instagram.com/cryuindustries" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:border-primary hover:text-primary transition-all"
                data-testid="link-hero-instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-20"
        >
          <span className="text-xs uppercase tracking-widest">Odkryj więcej</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Twoja podróż,<br />nasz <span className="text-primary italic">profesjonalizm</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                CryuIndustries zapewnia premium usługi transportu z kierowcą, specjalizując się w transferach ślubnych, luksusowych pojazdach i usługach executive. Każdy detal ma znaczenie, a Twoje zadowolenie jest naszym priorytetem.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Car, title: "Transport ślubny", desc: "Niezapomniane wrażenia" },
                  { icon: Star, title: "Flota BMW & Audi", desc: "Najwyższy standard" },
                  { icon: User, title: "Profesjonalni kierowcy", desc: "Dyskrecja i klasa" },
                  { icon: Clock, title: "Punktualność", desc: "Zawsze na czas" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-border/50"
            >
              <img 
                src={fleetAudiImage} 
                alt="Audi Q5 at night" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FLEET SECTION */}
      <section id="flota" className="py-24 md:py-32 bg-secondary/30 relative border-y border-border/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Nasza Flota</h2>
            <p className="text-muted-foreground text-lg">
              Wybierz pojazd dopasowany do Twojego wyjątkowego dnia. Każde auto perfekcyjnie przygotowane i zadbane.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                model: "BMW X5",
                tag: "Bestseller",
                color: "Biały",
                desc: "Prestiżowy SUV premium — przestronny, komfortowy i robiący niesamowite wrażenie na drodze do ślubu.",
                image: bmwX5Image,
                features: ["7 miejsc", "Panoramiczny dach", "Skórzana tapicerka"]
              },
              {
                model: "BMW X4",
                tag: "Elegancki",
                color: "Biały",
                desc: "Sportowe coupé SUV łączące dynamikę z elegancją — idealne dla par szukających stylu.",
                image: bmwX4Image,
                features: ["5 miejsc", "Sport design", "Klimatyzacja 4-strefowa"]
              },
              {
                model: "Audi Q5",
                tag: "Luksusowy",
                color: "Czarny",
                desc: "Kwintesencja luksusu i technologii Audi — perfekcyjne wykończenie i niezrównany komfort.",
                image: audiQ5Image,
                features: ["5 miejsc", "Virtual Cockpit", "Matrix LED"]
              },
              {
                model: "Audi A5",
                tag: "Sportowy",
                color: "Czarny",
                desc: "Eleganckie coupé Audi — smukłe linie i wyrafinowany design, który zachwyca w każdym otoczeniu.",
                image: audiA5Image,
                features: ["4 miejsca", "Bang & Olufsen", "Sportowe zawieszenie"]
              },
              {
                model: "BMW 7 Series",
                tag: "Executive",
                color: "Czarny",
                desc: "Flagship BMW — szczyt luksusu i technologii. Idealny na eventy VIP i podróże executive.",
                image: bmw7Image,
                features: ["5 miejsc", "Masaż foteli", "Executive Lounge"]
              }
            ].map((car, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden glass-card flex flex-col"
                data-testid={`card-fleet-${car.model.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Car image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary">
                    {car.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-serif font-bold">{car.model}</h3>
                    <span className="text-xs text-muted-foreground mt-1 border border-border rounded-full px-2 py-0.5">{car.color}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{car.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.map((f, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded-full bg-secondary border border-border/50 text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href="tel:513306986"
                    data-testid={`button-fleet-book-${i}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary/40 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Zapytaj o {car.model}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-16 text-center"
            >
              Dlaczego CryuIndustries?
            </motion.h2>

            <div className="space-y-6">
              {[
                { title: "Punktualność i niezawodność", icon: Clock },
                { title: "Luksusowe, czyste pojazdy", icon: Star },
                { title: "Profesjonalny kierowca Filip", icon: User },
                { title: "Doświadczenie ślubne", icon: Heart },
                { title: "Komfort i pełne przygotowanie (woda, dodatki)", icon: ShieldCheck }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/40 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shrink-0 border border-border">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 bg-secondary/30 relative border-y border-border/50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="font-bold text-lg">4.9 / 5</span>
              <span className="text-muted-foreground text-sm border-l border-border/50 pl-2 ml-1">na podstawie 29 opinii</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Zaufali nam</h2>
          </motion.div>

          {/* Masonry or Grid of Reviews */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.1 }}
                className="break-inside-avoid"
              >
                <div className="p-6 rounded-2xl glass-card">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-serif font-bold text-primary">
                      {review.author.charAt(0)}
                    </div>
                    <span className="font-medium">{review.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 z-0" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto glass-card rounded-3xl p-10 md:p-16 border-primary/20"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Zarezerwuj swój termin</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić szczegóły Twojej podróży. Zadbamy o każdy detal, aby ten dzień był perfekcyjny.
            </p>

            <a 
              href="tel:513306986" 
              className="inline-block text-4xl md:text-6xl font-serif font-bold text-primary mb-12 hover:scale-105 transition-transform"
              data-testid="link-phone-huge"
            >
              513 306 986
            </a>

            <div className="grid md:grid-cols-2 gap-8 mb-12 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Adres</h4>
                  <p className="text-muted-foreground">Zalesice-Kolonia 39G<br/>26-680 Zalesice-Kolonia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Godziny otwarcia</h4>
                  <p className="text-muted-foreground">Poniedziałek - Niedziela<br/>08:00 – 18:00</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="tel:513306986" data-testid="button-cta-call">Zadzwoń teraz</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-primary/50 hover:bg-primary/10">
                <a href="tel:513306986" data-testid="button-cta-book">Zarezerwuj auto ślubne</a>
              </Button>
              <a 
                href="https://www.instagram.com/cryuindustries" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-cta-instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="font-serif text-2xl font-bold tracking-wider text-foreground block mb-2">
                Cryu<span className="text-primary">Industries</span>
              </span>
              <p className="text-sm text-muted-foreground">Premium transport & VIP chauffeur</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-muted-foreground">
              <a href="tel:513306986" className="hover:text-primary transition-colors">513 306 986</a>
              <span className="hidden md:inline">•</span>
              <span>Zalesice-Kolonia 39G, 26-680 Zalesice-Kolonia</span>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CryuIndustries. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a>
              <a href="#" className="hover:text-primary transition-colors">Regulamin</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Missing icon wrapper
function Heart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
