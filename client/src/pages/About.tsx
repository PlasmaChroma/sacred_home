import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <header className="pt-24 pb-12 border-b border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">About Us</span>
            <h1 className="font-serif text-5xl mb-6">Our Team</h1>
            <p className="text-muted text-lg max-w-[70ch]">
              Sacred Home Foundation is founded and guided by individuals deeply committed to restoring the family unit and redefining what it means to parent in the modern world.
            </p>
          </div>
        </header>

        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mb-6" />
                <h3 className="font-serif text-2xl mb-2">Founder & Director</h3>
                <p className="text-primary font-semibold mb-4">Coming Soon</p>
                <p className="text-muted leading-relaxed">
                  More information about our founder and their vision for Sacred Home Foundation.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 mb-6" />
                <h3 className="font-serif text-2xl mb-2">Board Members</h3>
                <p className="text-primary font-semibold mb-4">Coming Soon</p>
                <p className="text-muted leading-relaxed">
                  Our board is composed of experts in child development, finance, and family wellness.
                </p>
              </div>
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
              Join us in bringing families home. Whether through donations, volunteering, or sharing our message—every contribution matters.
            </p>
            <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
              Get Involved <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
