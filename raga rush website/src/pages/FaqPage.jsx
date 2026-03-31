import { AnimatedSection } from '@/components/AnimatedSection'
import { Seo } from '@/components/Seo'

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'Typical delivery is 3-7 days based on package complexity. Rush timelines may be available for urgent events.',
  },
  {
    q: 'How many revisions are included?',
    a: 'Every package includes a fixed number of revision rounds. Extra revisions can be added as a paid extension.',
  },
  {
    q: 'What file formats will I receive?',
    a: 'You receive high-quality WAV and MP3 masters. Social-ready cuts and alternate versions are included where applicable.',
  },
  {
    q: 'Can I use the song commercially?',
    a: 'Commercial usage depends on your selected package and license. We also offer full buyout rights for brand-heavy use.',
  },
  {
    q: 'Do you compose in Indian or Western style?',
    a: 'Both. We blend Indian and Western influences based on your creative brief, references, and audience.',
  },
  {
    q: 'What information do you need from me?',
    a: 'We need your story, purpose, mood references, preferred language, and delivery timeline to begin composition.',
  },
  {
    q: 'Can I request changes after delivery?',
    a: 'Yes, post-delivery edits are possible. They are handled as revision add-ons depending on scope.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Because each song is custom-made, payments are typically non-refundable once production starts. We always align on the brief before finalizing.',
  },
]

export function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ | Raga Rush"
        description="Answers to common questions about Raga Rush custom song services, timelines, languages, and rights."
        path="/faq"
      />
      <AnimatedSection className="container py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl">Frequently asked questions</h1>
        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-lg border border-border/80 bg-card/70 p-5">
              <summary className="cursor-pointer list-none text-lg font-medium">{item.q}</summary>
              <p className="mt-3 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}
