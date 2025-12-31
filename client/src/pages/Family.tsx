import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export default function Family() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <header className="pt-24 pb-12 border-b border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
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
                  Monthly stipends designed to eliminate the financial pressure that forces parents to choose work over presence. Our grants are meaningful enough to make a real difference.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Parenting Education</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Access to resources on attachment theory, nervous system regulation, and conscious parenting practices. Learn from experts who understand the science of early childhood.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Community Connection</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Join a community of like-minded families. Weekly parenting circles, quarterly retreats, and shared support systems so you're never alone in this journey.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Practical Support</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Doula care, lactation support, meal delivery, and access to our lending library of developmentally appropriate toys and gear.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40 border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">Who We're Looking For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-3">Commitment to Conscious Parenting</h3>
                <p className="text-muted text-sm">
                  You're interested in raising children with awareness, attachment, and intention.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-3">Financial Need</h3>
                <p className="text-muted text-sm">
                  Without support, you would need to return to work during the critical early years.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-lg mb-3">Community Engagement</h3>
                <p className="text-muted text-sm">
                  You're willing to participate in parenting circles and community activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Apply?</h2>
            <p className="text-muted text-lg max-w-[60ch] mx-auto mb-8">
              Applications for our pilot program are coming soon. Join our waiting list to be notified when enrollment opens.
            </p>
            <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
              Get on the Waiting List <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
