import { Link, useLocation } from 'react-router';
import Container from './container';
import { Button } from '../ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { navLinks } from '@/lib/constants';
import {
  Mail01Icon,
  CallIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';

const Footer = () => {
  const location = useLocation();
  return (
    <footer
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.05'%3E%3Cpath d='M0 10Q25 0 50 10T100 10'/%3E%3Cpath d='M0 15Q25 5 50 15T100 15'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
      className="bg-primary text-white"
    >
      <section className="relative overflow-hidden w-full h-30 md:h-60 lg:h-100">
        <img
          src="others/2.jpg"
          className="w-full h-full object-cover object-top grayscale"
          alt=""
        />

        <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-primary via-[#333254d2] sm:via-[#333254a8] to-[#333254a8]"></div>
      </section>
      {/* Main Footer Content */}
      <section className="py-10 md:py-20 md:pt-30">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-20 md:gap-15">
          {/* Newsletter Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <p className="text-white/80 max-w-md text-sm md:text-base leading-relaxed">
                Stay updated with our latest insights on safeguarding systems
                and institutional protection.
              </p>
            </div>

            <div className="space-y-4">
              <form className="flex items-center relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="md:w-[80%] w-full px-5 py-4 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 text-sm transition-all duration-300 rounded-full"
                />
                <Button
                  type="submit"
                  colorScheme="secondary"
                  className="-ml-32 py-1"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-white/60 text-xs leading-relaxed">
                Join our community of institutional leaders committed to
                creating safer environments.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-3 font-light">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className={cn(
                      'text-sm md:text-base transition-colors',
                      location.pathname === link.path
                        ? 'text-secondary'
                        : 'text-white/70 hover:text-white',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3 text-sm md:text-base font-light">
              <li>
                <a
                  href="/safety-audits"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Safety Audits
                </a>
              </li>
              <li>
                <a
                  href="/system-design"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  System Design
                </a>
              </li>
              <li>
                <a
                  href="/training"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Training & Implementation
                </a>
              </li>
              <li>
                <a
                  href="/long-term-support"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Long-term Support
                </a>
              </li>
              <li>
                <a
                  href="/consulting"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4 text-sm md:text-base font-light">
              <div className="flex items-center gap-3">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={17}
                  className="text-white/60"
                />
                <a
                  href="mailto:info@peaceshapers.africa"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  info@peaceshapersafrica.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HugeiconsIcon
                  icon={CallIcon}
                  size={17}
                  className="text-white/60"
                />
                <a
                  href="tel:+2348000000000"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +2348162213205
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/peaceshapers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <HugeiconsIcon icon={InstagramIcon} size={17} />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/peace-shapers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <HugeiconsIcon icon={LinkedinIcon} size={17} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom Bar */}
      <section className="border-t border-white/4 py-8">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
          <p className="text-white/60 text-sm">
            © 2026 Peace Shapers Africa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
