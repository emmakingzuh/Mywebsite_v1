import { ArrowUpRight, Mail, Phone, Instagram, Linkedin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

function PinterestIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.269-.088-.789-.167-2.004.035-2.871.182-.78 1.172-4.971 1.172-4.971s-.299-.599-.299-1.484c0-1.389.806-2.427 1.808-2.427.853 0 1.265.641 1.265 1.41 0 .859-.548 2.143-.829 3.533-.236 1.176.59 2.135 1.748 2.135 2.099 0 3.712-2.214 3.712-5.408 0-2.827-2.034-4.809-4.94-4.809-3.365 0-5.343 2.523-5.343 5.137 0 1.018.392 2.109.883 2.702.097.118.111.221.082.341-.09.375-.292 1.18-.332 1.343-.052.219-.173.266-.399.16-1.49-.694-2.421-2.876-2.421-4.659 0-3.789 2.753-7.271 7.954-7.271 4.176 0 7.422 2.977 7.422 6.953 0 4.148-2.614 7.484-6.243 7.484-1.219 0-2.364-.633-2.753-1.382l-.748 2.853c-.271 1.043-1.002 2.351-1.492 3.146C9.57 21.857 10.772 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  )
}

export function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-4xl p-12 sm:p-16"
          style={{
            background: '#111117',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div
            className="pointer-events-none absolute -bottom-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-30 blur-[96px]"
            style={{
              background:
                'radial-gradient(circle, rgba(99,102,241,0.8), rgba(236,72,153,0.6) 55%, transparent 80%)',
            }}
          />

          <div className="relative z-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Let's talk
            </span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready to make
              <br />
              something move?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/50">
              Whether you have a brief, a budget, or just an idea — let's find out
              if we're the right fit.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:eokechukwu555@gmail.com"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-surface transition-transform hover:scale-[1.03]"
              >
                <Mail size={15} />
                eokechukwu555@gmail.com
                <ArrowUpRight size={14} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="tel:+2348156152468"
                className="group inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                <Phone size={15} />
                +234 815 615 2468
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/e_animatee/', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/eanimatee/', label: 'LinkedIn' },
                { Icon: PinterestIcon, href: 'https://www.pinterest.com/e_animatee/', label: 'Pinterest', custom: true },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl glass text-white/50 transition-colors hover:bg-white/8 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-white/25">
          <span>© {new Date().getFullYear()} Emmykingz Studios. All rights reserved.</span>
          <span>Abuja · Nigeria · Worldwide</span>
        </div>
      </div>
    </section>
  )
}
