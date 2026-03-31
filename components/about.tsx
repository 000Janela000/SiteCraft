import { Code2, Zap, Heart, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    label: "თანამედროვე ტექნოლოგიები",
  },
  {
    icon: Zap,
    label: "სწრაფი მიწოდება",
  },
  {
    icon: Heart,
    label: "ხარისხზე ფოკუსი",
  },
  {
    icon: Users,
    label: "კლიენტზე ორიენტირებული",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          {/* Profile Image */}
          <div className="relative shrink-0 w-48 h-48">
            <div className="absolute inset-0 bg-card border border-border rounded-2xl overflow-hidden">
              <img
                src="/saba-portrait.webp"
                alt="საბა ჯანელიძე"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating experience badge */}
            <div className="absolute -right-3 -bottom-3 bg-card border border-border rounded-lg p-2 shadow-lg shadow-background/50">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Code2 className="w-3 h-3 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight">3+</p>
                  <p className="text-[9px] text-muted-foreground leading-tight">წელი</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              ჩემ შესახებ
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              საბა ჯანელიძე
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                გამარჯობა! მე ვარ ვებ დეველოპერი, რომელიც სპეციალიზირებულია თანამედროვე
                ვებსაიტების შექმნაში ქართული ბიზნესისთვის.
              </p>
              <p>
                ჩემი მიზანია დავეხმარო მცირე და საშუალო ბიზნესებს ონლაინ სივრცეში
                გაძლიერებაში — ხარისხიანი ვებსაიტებით, რომლებიც ნამდვილად მუშაობს და
                კლიენტებს მოიზიდავს.
              </p>
              <p>
                სააგენტოებისგან განსხვავებით, პირდაპირ ვმუშაობ თითოეულ კლიენტთან —
                ამიტომ ფასები გონივრულია, ხოლო ხარისხი მაღალი.
              </p>
            </div>

            {/* Portfolio Link */}
            <div className="mt-5">
              <a
                href="https://saba-janelidze.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                → სრული პორტფოლიო
              </a>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="text-xs md:text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
