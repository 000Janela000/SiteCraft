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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative aspect-square w-48 md:w-56">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent rounded-2xl" />

              {/* Profile Photo */}
              <div className="absolute inset-2 bg-card border border-border rounded-xl overflow-hidden">
                <img
                  src="/saba-portrait.webp"
                  alt="საბა ჯანელიძე"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -right-3 bottom-4 bg-card border border-border rounded-lg p-3 shadow-lg shadow-background/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">3+ წელი</p>
                    <p className="text-[10px] text-muted-foreground">გამოცდილება</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              ჩემ შესახებ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              საბა ჯანელიძე
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            <div className="mt-6">
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
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
