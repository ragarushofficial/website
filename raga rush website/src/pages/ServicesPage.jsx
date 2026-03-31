import { motion } from 'framer-motion'
import { Check, Clock3, Mic2, Music, WandSparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: WandSparkles,
    title: 'Wedding Songs',
    included: [
      'Personal story interview and mood board',
      'Custom lyrics in your preferred language',
      'Studio-ready final song + short reel cut',
    ],
    useCases: ['Sangeet performance', 'Wedding film soundtrack', 'Proposal or first dance surprise'],
    delivery: '5-7 days',
  },
  {
    icon: Music,
    title: 'Creator Intros & Jingles',
    included: [
      'Sonic identity draft in your niche style',
      'Intro, outro, and stinger variations',
      'Optimized files for YouTube, Reels, and podcasts',
    ],
    useCases: ['Channel intro music', 'Series branding', 'Podcast theme refresh'],
    delivery: '3-5 days',
  },
  {
    icon: Mic2,
    title: 'Brand Anthems',
    included: [
      'Campaign-led composition strategy',
      'Original anthem, mnemonic hook, and edit packs',
      'Mastered files for digital and event playback',
    ],
    useCases: ['Ad campaigns', 'Brand films', 'Launch events and product reveals'],
    delivery: '7-10 days',
  },
]

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Raga Rush"
        description="Explore Raga Rush services: story-led songwriting, custom composition, recording, production, and ready-to-use delivery for weddings, creators, and brands."
        path="/services"
      />
      <AnimatedSection className="container py-16 md:py-24">
        <h1 className="max-w-3xl text-4xl md:text-5xl">Our Services</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We turn stories into premium compositions with fast turnaround and production-ready quality for weddings,
          creators, and brands.
        </p>
      </AnimatedSection>
      <AnimatedSection className="container pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                <Card className="h-full bg-card/70 transition-all duration-300">
                <CardHeader>
                  <service.icon className="mb-3 h-6 w-6 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 text-sm text-muted-foreground">
                  <div>
                    <p className="mb-2 font-semibold text-foreground">What&apos;s included</p>
                    <ul className="space-y-2">
                      {service.included.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 font-semibold text-foreground">Use cases</p>
                    <p>{service.useCases.join(' • ')}</p>
                  </div>

                  <div className="flex items-center gap-2 rounded-md border border-border/80 bg-background/50 px-3 py-2">
                    <Clock3 className="h-4 w-4 text-primary" />
                    <span>
                      Delivery time: <strong>{service.delivery}</strong>
                    </span>
                  </div>

                  <Link to="/contact">
                    <Button className="w-full">Order This Service</Button>
                  </Link>
                </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}
