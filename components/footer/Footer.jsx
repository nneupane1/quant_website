'use client';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border bg-dark-bg">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-semibold text-gray-200 mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/insights" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200 mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="/research" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  Research Suite
                </a>
              </li>
              <li>
                <a href="/engine" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  Live Trading
                </a>
              </li>
              <li>
                <a href="/api" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200 mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200 mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@quantfund.ai" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  contact@quantfund.ai
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-border pt-8 mt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© {currentYear} QuantFund AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition text-sm">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
