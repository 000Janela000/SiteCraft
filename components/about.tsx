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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl" />
              
              {/* Profile placeholder */}
              <div className="absolute inset-4 bg-card border border-border rounded-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="h-8 bg-secondary/80 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  <div className="ml-3 flex-1 h-3.5 bg-secondary rounded-full max-w-[140px]" />
                </div>
                {/* Website wireframe */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-16 bg-accent/30 rounded" />
                    <div className="flex gap-2">
                      <div className="h-2.5 w-10 bg-secondary rounded" />
                      <div className="h-2.5 w-10 bg-secondary rounded" />
                      <div className="h-2.5 w-10 bg-secondary rounded" />
                    </div>
                  </div>
                  <div className="text-center space-y-2 py-6">
                    <div className="h-4 w-3/4 bg-foreground/15 rounded mx-auto" />
                    <div className="h-3 w-1/2 bg-secondary rounded mx-auto" />
                    <div className="h-7 w-24 bg-accent/40 rounded-md mx-auto mt-3" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-secondary/50 rounded-lg" />
                    <div className="h-16 bg-secondary/50 rounded-lg" />
                    <div className="h-16 bg-secondary/50 rounded-lg" />
                  </div>
                  <div className="space-y-1.5 mt-1">
                    <div className="h-2.5 bg-secondary/40 rounded w-full" />
                    <div className="h-2.5 bg-secondary/40 rounded w-5/6" />
                    <div className="h-2.5 bg-secondary/40 rounded w-4/6" />
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -right-4 bottom-8 bg-card border border-border rounded-xl p-4 shadow-2xl shadow-background/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">3+ წელი</p>
                    <p className="text-xs text-muted-foreground">გამოცდილება</p>
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
