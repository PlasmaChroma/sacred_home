import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MissionPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      <main className="flex-1">
        <header className="pt-24 pb-12 border-b border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Mission</span>
            <h1 className="font-serif text-5xl mb-6">Bring Families Home</h1>
          </div>
        </header>

        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="max-w-[70ch] mx-auto">
              <h2 className="font-serif text-3xl mb-6">The Problem</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                We live in a society where parents are forced to work jobs they don't care about so they can afford to pay someone else to watch their children. This system creates a fundamental disruption of the family unit and fosters disconnection in children when they need presence most.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-12">
                The cost of this disruption is measured not just in broken families, but in stressed, dysregulated, disconnected children who carry the wounds of early separation throughout their lives.
              </p>

              <h2 className="font-serif text-3xl mb-6">The Sacred Years</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                The first seven years of life are the foundation of who one becomes for life. These are not just any years—they are the most influential, important, and impactful years of human development. How you parent will create who your child will become.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-12">
                Yet in our current system, parents must choose between financial survival and presence with their children. This is not a personal failing—it is a systemic failure.
              </p>

              <h2 className="font-serif text-3xl mb-6">Our Vision</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">Sacred Home Foundation exists so that parents can stay home to raise their children during the most crucial and irreplaceable years of early life. We provide financial support that makes presence possible, alongside conscious parenting education and community support rooted in the understanding that being there matters.</p>
              <p className="text-muted text-lg leading-relaxed mb-8">Through conscious parenting, we emphasize emotional attunement, nervous system regulation, and secure attachment, recognizing that children thrive when caregivers are physically and emotionally present. Families are supported not only financially, but through education, connection, and shared responsibility, so no parent is raising a child in isolation.

              When we support families in staying home during these early years, we are not only helping individual children. We are investing in healthier, more regulated, and more connected humans and communities.</p>
              <p className="text-muted text-lg leading-relaxed">
                This is how we bring families home.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40 border-y border-border/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-serif text-3xl mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-[70ch] mx-auto">
              <div>
                <h3 className="font-serif text-xl mb-3">Presence Over Performance</h3>
                <p className="text-muted leading-relaxed">
                  Being present with your children is more valuable than any external achievement.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Attachment & Regulation</h3>
                <p className="text-muted leading-relaxed">
                  Secure attachment in early years creates the nervous system foundation for a healthy life.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Love & Abundance</h3>
                <p className="text-muted leading-relaxed">
                  We operate from love and believe there is enough support for all families.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Community Support</h3>
                <p className="text-muted leading-relaxed">
                  Families thrive when they have genuine community and are not isolated.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
