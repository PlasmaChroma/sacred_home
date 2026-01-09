export function Footer() {
  return (
    <footer className="py-12 border-t border-border mt-12 bg-[#f6f3ee]/50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="text-lg font-serif mb-2">Sacred Home Foundation</h3>
            <p className="text-muted text-sm max-w-[300px]">
              Supporting parents so they can support their children. 
              Because the first three years are sacred.
            </p>
          </div>
          
          <div className="flex gap-12 flex-wrap">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">Foundation</h4>
              <ul className="space-y-2 text-sm text-soft">
                <li><a href="/mission" className="hover:text-primary transition-colors">Mission</a></li>
                <li><a href="/about" className="hover:text-primary transition-colors">Governance</a></li>
                <li><a href="/donors" className="hover:text-primary transition-colors">Financials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-soft">
                <li><a href="mailto:connect@sacredhomefoundation.org" className="hover:text-primary transition-colors">Email Us</a></li>
                <li><a href="https://buy.stripe.com/5kQ6oJ6VQ61s0FofKb7N600" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Donate</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted/60">
          <div>&copy; {new Date().getFullYear()} Sacred Home Foundation. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-muted">Privacy Policy</a>
            <a href="#" className="hover:text-muted">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
