import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, User } from "lucide-react";
import gennaImage from "@assets/7194d9a01dbeb536ea96f5c1a413cff7_2_1767927730378.jpg";
import leviImage from "@assets/612219496_1688487795448683_5436508785188232350_n_1767927672422.png";
import allisonImage from "@assets/49339653_10156315769863305_8840781319404257280_n_1767927693252.jpg";
import marissaImage from "@assets/543052952_10237779933818991_1011292304281418625_n_1767927693253.jpg";

export default function About() {
  const team = [
    {
      name: "Genna Rose Kendall",
      role: "Executive Director",
      image: gennaImage,
      bio: "Leading the vision of Sacred Home Foundation to restore the family unit and ensure every parent has the choice to be present during the sacred early years."
    },
    {
      name: "Levi Kendall",
      role: "Treasurer & Vice President",
      image: leviImage,
      bio: "Overseeing financial stewardship and strategic growth to ensure long-term stability for the families we serve."
    },
    {
      name: "Allison Laroche",
      role: "Secretary/Program Coordinator",
      image: allisonImage,
      bio: "Developing and overseeing curriculum, programs, and community activities to provide meaningful education and support for our families."
    },
    {
      name: "Marissa Grace",
      role: "Family Support Specialist & Grant Writer",
      image: marissaImage,
      bio: "Working directly with families to provide guidance while securing the resources necessary to expand our impact."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <header className="pt-24 pb-12 border-b border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">About Us</span>
            <h1 className="font-serif text-5xl mb-6">Our Team</h1>
            <p className="text-muted text-lg max-w-[70ch]">
              Sacred Home Foundation is guided by a team deeply committed to "Making Parenthood Valuable" and supporting the sacred first years of life.
            </p>
          </div>
        </header>

        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User size={40} className="text-primary/40" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider">{member.role}</p>
                    <p className="text-muted leading-relaxed text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white/40 border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-3">Presence Over Performance</h3>
                <p className="text-muted text-sm leading-relaxed">
                  We believe that being present with your children is more valuable than any external achievement.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-3">Attachment & Regulation</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Secure attachment in the early years creates the nervous system foundation for life.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-3">Love & Abundance</h3>
                <p className="text-muted text-sm leading-relaxed">
                  We operate from a place of love and believe there is enough support and resources for all families.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-3">Community Support</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Families thrive when they have genuine community support and are not isolated.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl mb-4">Interested in Our Mission?</h2>
            <p className="text-muted text-lg max-w-[60ch] mx-auto mb-8">
              Join us in making parenthood valuable. Whether through donations, volunteering, or sharing our message—every contribution matters.
            </p>
            <a href="mailto:connect@sacredhomefoundation.org" className="btn-primary inline-flex items-center gap-2">
              Get Involved <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
