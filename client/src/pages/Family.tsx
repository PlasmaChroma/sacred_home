import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Check } from "lucide-react";
import familyHero from "@assets/generated_images/conscious_parenting_mother_child.png";

export default function Family() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <header className="pt-24 pb-12 border-b border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img src={familyHero} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1100px] mx-auto px-6 relative z-10">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">For Families</span>
            <h1 className="font-serif text-5xl mb-6">Bringing You Home</h1>
            <p className="text-muted text-lg max-w-[70ch]">
              If you're a parent facing the impossible choice between working and being present with your children, Sacred Home Foundation is here to support you.
            </p>
          </div>
        </header>

        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Financial Support</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Unrestricted charitable grants designed to eliminate the financial pressure that forces parents to choose work over presence. Our grants are meaningful enough to make a real difference.
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Housing and utilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Food and basic living expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Healthcare and baby supplies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Transportation and childcare equipment</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Parenting Education</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Access to resources on attachment theory, nervous system regulation, and conscious parenting practices. Learn from experts who understand the science of early childhood.
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Workshops and group sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Online modules and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Developmental milestone guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Parent-child bonding practices</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Community Connection</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Join a community of like-minded families. Weekly parenting circles, quarterly retreats, and shared support systems so you're never alone in this journey.
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Parental support community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Weekly parenting circles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Quarterly retreats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Connection with other caregivers</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Practical Support</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Specialized care and resources to support your transition into full-time parenting.
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Monthly home visits and wellness check-ins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Doula care and lactation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Meal delivery and supply drives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Lending library of developmental toys</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40 border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">Grant Amounts</h2>
            <p className="text-muted text-lg mb-8 max-w-[70ch]">
              We offer sliding scale grants based on the number of children under age 3 in your household. All amounts are annual, paid monthly to support your family's stability.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-2">1 Child</h3>
                <p className="text-3xl font-bold text-primary mb-2">$60,000</p>
                <p className="text-muted text-sm">Per year</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-2">2 Children</h3>
                <p className="text-3xl font-bold text-primary mb-2">$75,000</p>
                <p className="text-muted text-sm">Per year</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-2">3+ Children</h3>
                <p className="text-3xl font-bold text-primary mb-2">$90,000–$120,000</p>
                <p className="text-muted text-sm">Per year (scaled)</p>
              </div>
            </div>
            <p className="text-sm text-muted max-w-[70ch]">
              <strong>Important:</strong> Grants are structured as charitable assistance, not wages. Please consult a tax or benefits professional to understand any impact on your individual tax situation or public benefits eligibility.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">Eligibility & Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-serif text-xl mb-6">To Apply, You Must Be:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted">Pregnant at 36+ weeks <strong>OR</strong> have a child ages 0–3</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted">Resident of Pittsburgh, Pennsylvania (pilot phase)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted">Demonstrating financial need</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted">Committed to conscious parenting values</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-6">Program Participation Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted">Monthly home visits and wellness check-ins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted">Completing early childhood development modules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted">Quarterly written updates on progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted">Year-end written and video testimonial (if willing)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40 border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">The Pilot Program</h2>
            <div className="max-w-[70ch]">
              <p className="text-muted text-lg leading-relaxed mb-6">
                We are currently launching our <strong>pilot program in Pittsburgh, Pennsylvania</strong>, supporting <strong>5–10 carefully selected families</strong> during the critical early years.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-6">
                The pilot year is designed to demonstrate impact, gather data, and refine our model before expanding geographically. Every family in this cohort plays a vital role in shaping how we serve families across the country.
              </p>
              <p className="text-muted text-base">
                Applications for the pilot program will open soon. Early interest is being tracked so we can notify you first when enrollment opens.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Apply?</h2>
            <p className="text-muted text-lg max-w-[60ch] mx-auto mb-8">
              Join our waiting list to be notified when applications open. This is your chance to become part of a movement that puts families first.
            </p>
            <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
              Join the Waiting List <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
