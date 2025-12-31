import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <header className="pt-24 pb-12 border-b border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Research</span>
            <h1 className="font-serif text-5xl mb-6">The Science Behind Sacred</h1>
            <p className="text-muted text-lg max-w-[70ch]">
              Our approach is grounded in decades of research on child development, attachment theory, and family systems. Here's what the science tells us.
            </p>
          </div>
        </header>

        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-12">Key Research Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">The Critical Period (0-7)</h3>
                <p className="text-muted leading-relaxed mb-4">
                  The first seven years of life are the foundation of who one becomes for life. Attachment researcher John Bowlby and others have shown that secure attachment in these years predicts emotional health, social competence, and resilience throughout life.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Parental Presence & Development</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Research shows that parental presence and responsiveness during early childhood dramatically impacts brain development, emotional regulation, and long-term outcomes. Children with responsive caregivers develop stronger neural pathways.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">Nervous System Regulation</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Through co-regulation with a calm, present parent, children learn to regulate their own nervous systems. This foundational skill determines how they handle stress and connect with others for life.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl mb-4">The Cost of Early Separation</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Studies show that early, non-parental childcare can increase stress hormones in young children and disrupt attachment bonds. Parental presence during the first three years has measurable protective effects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40 border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">Key Studies & Resources</h2>
            <div className="space-y-4">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-semibold mb-2">Attachment Theory - John Bowlby & Mary Ainsworth</h3>
                <p className="text-muted text-sm">
                  Foundational work on how secure attachment with a primary caregiver shapes lifelong emotional health.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-semibold mb-2">The Polyvagal Theory - Stephen Porges</h3>
                <p className="text-muted text-sm">
                  Understanding how the nervous system develops and how co-regulation with safe caregivers is critical.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-semibold mb-2">Adverse Childhood Experiences (ACEs) Research</h3>
                <p className="text-muted text-sm">
                  Shows how early stress, separation, and lack of secure attachment predict long-term health challenges.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-semibold mb-2">Conscious Parenting - Dr. Shefali Tsabary</h3>
                <p className="text-muted text-sm">
                  A modern approach to parenting grounded in child development science and emotional awareness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl mb-4">The Vision</h2>
            <p className="text-muted text-lg max-w-[60ch] mx-auto mb-8">
              When we support families in staying home during these critical years, we're not just helping individual children—we're investing in healthier, more regulated, more connected humans and communities.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
