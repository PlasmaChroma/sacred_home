import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Heart, Target, Shield } from "lucide-react";
import donorImage from "@assets/stock_images/abstract_warm_textur_436b395f.jpg";

export default function Donors() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <header className="pt-24 pb-12 border-b border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img src={donorImage} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1100px] mx-auto px-6 relative z-10">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">For Donors</span>
            <h1 className="font-serif text-5xl mb-6">Invest in Families</h1>
            <p className="text-muted text-lg max-w-[70ch]">
              Your support makes it possible for families to stay home during the most critical years of childhood. Every dollar directly funds presence, connection, and healthy development.
            </p>
          </div>
        </header>

        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-12">Where Your Donation Goes</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 bg-card border border-border rounded-xl">
                <Heart className="text-primary mb-4" size={32} />
                <h3 className="font-serif text-xl mb-4">Family Grants</h3>
                <p className="text-muted leading-relaxed text-sm">
                  Direct unrestricted grants ($60,000–$120,000 per year) that eliminate the financial pressure forcing parents to leave their children.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <Target className="text-primary mb-4" size={32} />
                <h3 className="font-serif text-xl mb-4">Program Support</h3>
                <p className="text-muted leading-relaxed text-sm">
                  Home visits, wellness check-ins, parenting education, community circles, and practical support like doula care and meal delivery.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <Shield className="text-primary mb-4" size={32} />
                <h3 className="font-serif text-xl mb-4">Operations & Governance</h3>
                <p className="text-muted leading-relaxed text-sm">
                  Professional staff, administrative costs, and transparent governance to ensure funds are used effectively and ethically.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40 border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">Our Budget & Transparency</h2>
            <div className="max-w-[70ch]">
              <p className="text-muted text-lg leading-relaxed mb-8">
                The Sacred Home Foundation is organized as a public charity under Section 501(c)(3) of the Internal Revenue Code. We maintain rigorous financial controls and governance practices.
              </p>
              <div className="space-y-6 mb-8">
                <div className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Pilot Program Target: $1.5 Million</h3>
                  <p className="text-muted text-sm">
                    To support 5–10 families for one full year with grants, programming, and operations.
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Staff Compensation</h3>
                  <p className="text-muted text-sm mb-4">Set at reasonable, market-based rates approved by disinterested board members:</p>
                  <ul className="text-muted text-sm space-y-1 ml-4">
                    <li>• Executive Director: $100,000</li>
                    <li>• Treasurer & Vice President: $100,000</li>
                    <li>• Program Coordinator: $70,000</li>
                    <li>• Family Support Specialist & Grant Writer: $70,000</li>
                    <li>• Contract roles (as needed): up to $30,000</li>
                  </ul>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Board Governance</h3>
                  <p className="text-muted text-sm">
                    We maintain written Conflict of Interest Policies, regular board meetings, transparent financial oversight, and annual compliance reviews. Board members do not receive family grants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-12">Why Now? Why This Matters.</h2>
            <div className="max-w-[70ch] space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-3">The Crisis</h3>
                <p className="text-muted leading-relaxed">
                  In our society, parents are forced to work jobs they don't care about so they can afford to pay someone else to watch their children. This system disrupts the family unit and creates disconnected, stressed children when they need presence most.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">The Science</h3>
                <p className="text-muted leading-relaxed">
                  The first seven years of life are the foundation of who one becomes for life. Secure attachment, responsive caregiving, and parental presence during these years predict lifelong emotional health, resilience, and wellbeing.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">The Opportunity</h3>
                <p className="text-muted leading-relaxed">
                  When we support families in staying home during the critical early years, we're not just helping individual children. We're investing in healthier, more regulated, more connected humans and communities for generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40 border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">Ways to Give</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">One-Time Donation</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Make a one-time gift to support the pilot program. Every contribution directly funds family grants and program support.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Monthly Giving</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Become a monthly sustaining partner. Recurring gifts help us build stable, long-term support for families.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Foundation Grants</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  We welcome applications from private foundations, corporate giving programs, and government grants. Reach out to discuss partnership opportunities.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Workplace Giving</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Ask your employer about matching gift programs. Many companies will double or triple your contribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">Your Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border rounded-xl">
                <p className="text-foreground font-bold text-2xl mb-2">$5,000</p>
                <p className="text-muted text-sm mb-4">Supports one month of one family's basic needs and programming.</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <p className="text-foreground font-bold text-2xl mb-2">$15,000</p>
                <p className="text-muted text-sm mb-4">Funds one family's quarterly programming and wellness support.</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <p className="text-foreground font-bold text-2xl mb-2">$60,000</p>
                <p className="text-muted text-sm mb-4">Full year of support for one family with young child (housing, food, healthcare, programs).</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <p className="text-foreground font-bold text-2xl mb-2">$1.5M</p>
                <p className="text-muted text-sm mb-4">Funds the entire pilot program—changing families' lives in Pittsburgh.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Invest?</h2>
            <p className="text-muted text-lg max-w-[60ch] mx-auto mb-8">
              Your support makes it possible for families to stay home. Let's bring families home together.
            </p>
            <a href="https://buy.stripe.com/5kQ6oJ6VQ61s0FofKb7N600" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              Make a Donation <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
