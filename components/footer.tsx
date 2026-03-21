import Link from "next/link"
import { Facebook } from "lucide-react"

const navLinks = [
  { label: "რატომ საიტი", href: "#why" },
  { label: "ფასები", href: "#pricing" },
  { label: "პორტფოლიო", href: "#portfolio" },
  { label: "ჩემ შესახებ", href: "#about" },
  { label: "კონტაქტი", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-7 w-1.5 bg-foreground rounded-full" />
                  <div className="h-5 w-1.5 bg-foreground/60 rounded-full" />
                </div>
                <span className="text-xl font-semibold tracking-tight">SiteCraft</span>
              </Link>
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                თანამედროვე ვებსაიტების შექმნა ქართული ბიზნესისთვის. ხარისხიანი, 
                სწრაფი და ხელმისაწვდომი ფასებით.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold mb-4">ნავიგაცია</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">კონტაქტი</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.facebook.com/janela01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} SiteCraft. ყველა უფლება დაცულია.
            </p>
            <p className="text-sm text-muted-foreground">
              შექმნილია საბა ჯანელიძის მიერ
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
