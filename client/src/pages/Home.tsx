import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/peaceful_newborn_with_parent.png";
import communityImage from "@assets/generated_images/supportive_parent_community_circle.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <header className="pt-14 pb-8">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6 items-stretch">
              {/* Main Hero Card */}
              <div className="bg-card border border-border rounded-xl shadow-lg p-8 relative overflow-hidden group min-h-[500px] flex flex-col justify-center">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={heroImage} 
                    alt="Peaceful newborn with parent" 
                    className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-white/20 bg-white/10 rounded-full text-muted text-[13px] tracking-wide mb-6 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(212,179,106,0.8)] animate-pulse" />
                    Building a world where parents can stay home with their babies.
                  </div>
                  
                  <h2 className="font-serif text-[clamp(30px,3.4vw,46px)] leading-[1.1] tracking-tight text-foreground mb-5">
                    Because the first three years are <span className="italic text-primary">sacred</span>.
                  </h2>
                  
                  <p className="text-muted text-base/relaxed max-w-[62ch] mb-8">
                    Sacred Home exists to ensure that the formative early years remain a time of deep connection, not financial survival. The first seven years serve as the blueprint for a human's entire future, shaping their emotional landscape and sense of self. How you show up today determines who your child becomes tomorrow. We provide the financial freedom for both parents to remain present, protecting the most influential and irreplaceable chapter of your family's story.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <a href="#how" className="btn-primary flex items-center gap-2">
                      Learn more <ArrowRight size={16} />
                    </a>
                    <a href="mailto:connect@sacredhomefoundation.org" className="btn-secondary">
                      Join us
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar Stats */}
              <aside className="bg-card border border-border rounded-xl shadow-lg p-6 flex flex-col justify-between gap-4">
                {[
                  { label: "Pilot Cohort", value: "5–10 families", note: "A carefully selected group of families to shape the program's design and impact." },
                  { label: "Support Window", value: "Pregnancy → Age 3", note: "Designed to reduce the financial pressure that pulls parents away from their children." },
                  { label: "Fundraising Goal", value: "$1.5M", note: "A working target to fund family grants, administration, and reserves." }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-muted/5 border border-white/20 hover:bg-muted/10 transition-colors">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-muted mb-2">{stat.label}</div>
                    <div className="text-2xl font-serif font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-[13px] text-muted leading-snug">{stat.note}</div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </header>

        {/* Mission Section */}
        <section id="mission" className="py-12">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Our Mission</span>
                <h3 className="font-serif text-3xl">Making Parenthood Valuable</h3>
              </div>
              <p className="text-muted text-sm max-w-[60ch]">
                We live in a society where parents are forced to work jobs they don't care about so they can afford to pay someone else to watch their children. This disrupts the family unit and creates stressed, disconnected children.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h4 className="font-serif text-2xl mb-6 text-foreground border-b border-primary/20 pb-2 inline-block">S.A.C.R.E.D. Philosophy</h4>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-primary text-sm tracking-widest uppercase mb-1">S — Safety</p>
                    <p className="text-muted text-sm">Children grow when their environment is steady, predictable, and emotionally safe.</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm tracking-widest uppercase mb-1">A — Attachment</p>
                    <p className="text-muted text-sm">Secure attachment lays the foundation for lifelong resilience and emotional health.</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm tracking-widest uppercase mb-1">C — Connection and Consciousness</p>
                    <p className="text-muted text-sm">Conscious, attuned parenting builds the strongest relational foundations.</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm tracking-widest uppercase mb-1">R — Responsibility</p>
                    <p className="text-muted text-sm">Supporting empowered responsibility in parents with compassion, not pressure.</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm tracking-widest uppercase mb-1">E — Emotional Intelligence and Attunement</p>
                    <p className="text-muted text-sm">Parents who build emotional intelligence raise children who understand themselves deeply.</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm tracking-widest uppercase mb-1">D — Development</p>
                    <p className="text-muted text-sm">Honoring the science of early childhood development as the guiding force behind SHF.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-2xl mb-6 text-foreground border-b border-primary/20 pb-2 inline-block">H.O.M.E. Values</h4>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-secondary text-sm tracking-widest uppercase mb-1">H — Heart</p>
                    <p className="text-muted text-sm">Every decision is rooted in love.</p>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm tracking-widest uppercase mb-1">O — Open</p>
                    <p className="text-muted text-sm">Open communication, open guidance, open support.</p>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm tracking-widest uppercase mb-1">M — Mission</p>
                    <p className="text-muted text-sm">A mission driven by the desire to strengthen families in the earliest years.</p>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm tracking-widest uppercase mb-1">E — Early Childhood Development</p>
                    <p className="text-muted text-sm">The heart and foundation of SHF’s purpose.</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border/50 italic text-muted text-sm">
                    We believe parents thrive when supported, and children thrive when loved and held.
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[70ch] mx-auto text-center mb-16">
              <p className="text-muted italic text-lg leading-relaxed">
                "We believe parents thrive when supported, and children thrive when loved and held."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Financial Sovereignty", desc: "Providing meaningful grants that allow parents to choose presence over paycheck during the critical early years." },
                { title: "Conscious Education", desc: "Resources and mentorship focused on attachment theory, nervous system regulation, and conscious parenting." },
                { title: "Community Ecology", desc: "Restoring the natural networks of support that help families feel held, connected, and supported during the early years." }
              ].map((card, i) => (
                <div key={i} className="p-6 bg-white/60 border border-white/40 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-serif text-lg mb-3 text-foreground">{card.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section Image Add */}
        <section className="py-12">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[400px] relative">
              <img 
                src={communityImage} 
                alt="Supportive parent community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-xl font-serif italic">"Restoring the natural networks of support that help families feel held, connected, and supported."</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="py-12 bg-white/40 border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Methodology</span>
                <h3 className="font-serif text-3xl">The Sacred Cycle</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                  <h4 className="font-serif text-lg">Application & Selection</h4>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-11">
                  Families can apply anytime from pregnancy through age 3. Selection is based on commitment to conscious parenting values 
                  and financial need. We prioritize families where this support makes the difference between 
                  staying home and returning to work prematurely.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                  <h4 className="font-serif text-lg">Monthly Support</h4>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-11">
                  Once selected, families receive a monthly financial stipend along with access to our conscious parenting resources. 
                  This stable support allows for true presence during the most critical developmental windows.
                </p>
              </div>
               <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                  <h4 className="font-serif text-lg">Early Years (0-3)</h4>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-11">
                  Ongoing monthly stipend. Quarterly retreats. Weekly parenting circles. 
                  Access to a lending library of developmentally appropriate toys and gear.
                </p>
              </div>
               <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                  <h4 className="font-serif text-lg">Graduation & Giveback</h4>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-11">
                  As children enter preschool age, families transition into mentorship roles for new cohorts.
                  Alumni community remains active and supportive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-12">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="bg-gradient-to-br from-primary/10 via-card to-white border border-primary/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 max-w-xl">
                <h3 className="font-serif text-2xl mb-3 text-foreground">Join the Movement</h3>
                <p className="text-muted text-base">
                  We are currently seeking founding donors and board members. 
                  Help us build the pilot program that will change the conversation around early childhood support.
                </p>
              </div>
              
              <div className="flex gap-4 relative z-10">
                <a href="https://buy.stripe.com/5kQ6oJ6VQ61s0FofKb7N600" target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap px-8 py-4 text-base">
                  Donate Now
                </a>
                <a href="mailto:connect@sacredhomefoundation.org" className="px-6 py-4 rounded-xl border border-border bg-white/50 font-semibold text-foreground hover:bg-white transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
