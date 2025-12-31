import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

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
              <div className="bg-card border border-border rounded-xl shadow-lg p-8 relative overflow-hidden group">
                <div className="absolute inset-[-160px_auto_auto_-200px] w-[520px] h-[520px] bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.25),transparent_60%)] blur-[2px] rotate-12 opacity-80" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-white/20 bg-white/10 rounded-full text-muted text-[13px] tracking-wide mb-6 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(212,179,106,0.8)] animate-pulse" />
                    Building a world where parents can stay home with their babies.
                  </div>
                  
                  <h2 className="font-serif text-[clamp(30px,3.4vw,46px)] leading-[1.1] tracking-tight text-foreground mb-5">
                    Because the first three years are <span className="italic text-primary">sacred</span>.
                  </h2>
                  
                  <p className="text-muted text-base/relaxed max-w-[62ch] mb-8">
                    Sacred Home exists so that parents can stay home to raise their children. The first seven years of life are the foundation of who one becomes for life. How you parent will create who your child will become. We provide financial support so both parents can stay home without burden during the most influential, important years of life.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <a href="#how" className="btn-primary flex items-center gap-2">
                      Learn more <ArrowRight size={16} />
                    </a>
                    <a href="#contact" className="btn-secondary">
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Our Mission</span>
                <h3 className="font-serif text-3xl">Bring Families Home</h3>
              </div>
              <p className="text-muted text-sm max-w-[60ch]">
                We live in a society where parents are forced to work jobs they don't care about so they can afford to pay someone else to watch their children. This disrupts the family unit and creates stressed, disconnected children.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Financial Sovereignty", desc: "Providing meaningful grants that allow parents to choose presence over paycheck during the critical early years." },
                { title: "Conscious Education", desc: "Resources and mentorship focused on attachment theory, nervous system regulation, and respectful parenting." },
                { title: "Community Ecology", desc: "Rebuilding the fabric of support. Meal trains, listening circles, and shared childcare responsibilities." }
              ].map((card, i) => (
                <div key={i} className="p-6 bg-white/60 border border-white/40 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-serif text-lg mb-3 text-foreground">{card.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
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
                  Families apply during pregnancy. Selection is based on commitment to conscious parenting values 
                  and financial need. We prioritize families where this support makes the difference between 
                  staying home and returning to work prematurely.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                  <h4 className="font-serif text-lg">The Fourth Trimester</h4>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-11">
                  Intensive support immediately postpartum. Doula care, lactation support, and meal delivery. 
                  Maximum financial stipend phase to ensure absolute rest for the birthing parent.
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
                <button className="btn-primary whitespace-nowrap px-8 py-4 text-base">
                  Donate Now
                </button>
                <button className="px-6 py-4 rounded-xl border border-border bg-white/50 font-semibold text-foreground hover:bg-white transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
