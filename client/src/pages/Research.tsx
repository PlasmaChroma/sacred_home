import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Brain, Heart, Globe, Quote, ArrowRight } from "lucide-react";

export default function Research() {
  const books = [
    {
      title: "Being There: Why Prioritizing Motherhood in the First Three Years Matters",
      author: "Erica Komisar",
      highlight: "The biological necessity of maternal presence for emotional regulation and long-term mental health.",
      quote: "The first three years are the foundation for a child's emotional security and resilience for life."
    },
    {
      title: "The Continuum Concept",
      author: "Jean Liedloff",
      highlight: "How the loss of the 'continuum' of care—constant physical contact and community—affects human development.",
      quote: "The child's expectation is for constant contact and a community that holds them."
    },
    {
      title: "The Whole-Brain Child",
      author: "Daniel J. Siegel and Tina Payne Bryson",
      highlight: "Neuroscience-based strategies to foster healthy brain development through connection and presence.",
      quote: "Connection is the first step in helping a child integrate their experiences and regulate their emotions."
    },
    {
      title: "The Awakened Family / Conscious Parenting",
      author: "Dr. Shefali Tsabary",
      highlight: "Moving from control to connection, recognizing that the parent-child relationship is a mirror for the parent's growth.",
      quote: "Our children are not ours to possess, but souls to be nurtured through our presence."
    },
    {
      title: "Hunt, Gather, Parent",
      author: "Michaeleen Doucleff",
      highlight: "Ancient wisdom from diverse cultures on raising helpful, well-adjusted children through community and shared presence.",
      quote: "In many cultures, the 'village' isn't just a metaphor—it's the primary way children are raised."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <header className="pt-24 pb-12 border-b border-border/50 bg-white/30">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">The Evidence Base</span>
            <h1 className="font-serif text-5xl mb-6">Why Presence Matters</h1>
            <p className="text-muted text-lg max-w-[75ch] mx-auto leading-relaxed">
              Research consistently shows that parental presence during the first three years is the most significant predictor of a child's lifelong emotional, physical, and financial health.
            </p>
          </div>
        </header>

        {/* Original Key Research Areas Section */}
        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-12">Key Research Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                <h3 className="font-serif text-xl mb-4">The Critical Period (0-7)</h3>
                <p className="text-muted leading-relaxed mb-4 text-sm">
                  The first seven years of life are the foundation of who one becomes for life. Attachment researcher John Bowlby and others have shown that secure attachment in these years predicts emotional health, social competence, and resilience throughout life.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                <h3 className="font-serif text-xl mb-4">Parental Presence & Development</h3>
                <p className="text-muted leading-relaxed mb-4 text-sm">
                  Research shows that parental presence and responsiveness during early childhood dramatically impacts brain development, emotional regulation, and long-term outcomes. Children with responsive caregivers develop stronger neural pathways.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                <h3 className="font-serif text-xl mb-4">Nervous System Regulation</h3>
                <p className="text-muted leading-relaxed mb-4 text-sm">
                  Through co-regulation with a calm, present parent, children learn to regulate their own nervous systems. This foundational skill determines how they handle stress and connect with others for life.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-xl shadow-sm">
                <h3 className="font-serif text-xl mb-4">The Cost of Early Separation</h3>
                <p className="text-muted leading-relaxed mb-4 text-sm">
                  Studies show that early, non-parental childcare can increase stress hormones in young children and disrupt attachment bonds. Parental presence during the first three years has measurable protective effects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Subconscious Foundation */}
        <section className="py-20 bg-[#f9f7f2] border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4 uppercase tracking-widest text-xs">
                  <Brain size={16} />
                  <span>Neurological Programming</span>
                </div>
                <h2 className="font-serif text-3xl mb-6 leading-tight">The Voice in Their Head for Life</h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  During the first three years, the brain is in a state of rapid development, primarily operating in delta and theta brainwave states. This makes the child a "super-sponge" for their environment.
                </p>
                <div className="space-y-4">
                  <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                    <h3 className="font-serif text-xl mb-2">Subconscious Imprinting</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      How a parent responds to a child's needs during this time programs their subconscious mind. This programming becomes the "internal working model" for how they view themselves and the world. It effectively becomes their inner voice for life.
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                    <h3 className="font-serif text-xl mb-2">Lifelong Health & Relationship Effects</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      Research by <strong>Dr. Gabor Maté</strong> and others shows that early childhood stress (from lack of presence or inconsistent care) is a primary driver of chronic illness, addiction, and mental health struggles in adulthood. Secure attachment predicts healthier adult relationships and even greater financial stability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 relative">
                <Quote size={48} className="text-primary/20 absolute top-8 left-8" />
                <div className="relative z-10">
                  <p className="font-serif text-2xl italic leading-relaxed text-foreground mb-8 pt-8">
                    "The primary attachment relationship is the template for all future relationships, the regulator of the nervous system, and the foundation of the self."
                  </p>
                  <p className="font-bold text-primary">— Dr. Gabor Maté</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Perspective */}
        <section className="py-20">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4 uppercase tracking-widest text-xs">
                <Globe size={16} />
                <span>Global Perspective</span>
              </div>
              <h2 className="font-serif text-3xl">What the Rest of the World Knows</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-card border border-border rounded-2xl shadow-sm">
                <h3 className="font-serif text-xl mb-4">Paid Leave as Public Health</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Countries with robust paid maternal and paternal leave (like Norway, Sweden, and Germany) see significantly lower rates of postpartum depression, better infant health outcomes, and stronger national economies.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl shadow-sm">
                <h3 className="font-serif text-xl mb-4">The Power of Village</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  In many traditional cultures, "presence" isn't a solo act. As <strong>Michaeleen Doucleff</strong> explores in <em>Hunt, Gather, Parent</em>, community-based care ensures parents aren't burned out and children are constantly held in a web of support.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl shadow-sm">
                <h3 className="font-serif text-xl mb-4">Economic Stability</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  When families are supported in the early years, society saves billions in long-term costs related to healthcare, social services, and lost productivity caused by unregulated nervous systems and early trauma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Reading */}
        <section className="py-20 bg-white/40 border-t border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <BookOpen className="text-primary" size={28} />
              <h2 className="font-serif text-3xl">Essential Research & Literature</h2>
            </div>
            
            <div className="grid gap-8">
              {books.map((book, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 p-8 bg-card border border-border rounded-2xl hover:shadow-md transition-all group">
                  <div className="md:w-1/3">
                    <h3 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">{book.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-4">{book.author}</p>
                  </div>
                  <div className="md:w-2/3 border-l border-border/50 md:pl-8">
                    <p className="text-muted text-sm mb-4 leading-relaxed">{book.highlight}</p>
                    <div className="relative">
                      <Quote size={16} className="text-primary/30 absolute -left-6 top-0" />
                      <p className="text-foreground italic text-sm">"{book.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl mb-6">Invest in the Foundation of Humanity</h2>
            <p className="text-muted text-lg max-w-[60ch] mx-auto mb-8">
              The research is clear. When we support parents in being present, we are building a healthier, more regulated, and more compassionate world for everyone.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/donors" className="btn-primary">Support the Research</a>
              <a href="/family" className="btn-secondary bg-white">For Families</a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
