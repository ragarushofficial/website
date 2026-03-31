import { motion } from 'framer-motion'
import { Mic2, Music2, Music4, Sparkles, WandSparkles } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Seo } from '@/components/Seo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const audioSamples = [
  { title: 'Wedding Song Sample', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { title: 'Creator Jingle Sample', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { title: 'Brand Anthem Sample', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
]

const testimonials = [
  {
    name: 'Aanya Mehta',
    role: 'Bride, Mumbai',
    quote:
      'Our first-dance song felt like our love story in audio form. Everyone asked who composed it.',
  },
  {
    name: 'Rohit Verma',
    role: 'Content Creator',
    quote: 'The jingle made my channel instantly recognizable. It sounds premium and deeply personal.',
  },
  {
    name: 'Nisha Kapoor',
    role: 'Brand Manager',
    quote: 'Raga Rush gave our campaign a sonic identity that customers now remember in seconds.',
  },
]

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

function CustomAudioPlayer({ title, src }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  const onSeek = (event) => {
    const audio = audioRef.current
    if (!audio) return
    const value = Number(event.target.value)
    audio.currentTime = value
    setCurrentTime(value)
  }

  return (
    <Card className="glass-card bg-card/70">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <audio
          ref={audioRef}
          src={src}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlayback}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="text-xs text-muted-foreground">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={Math.min(currentTime, duration || 0)}
          onChange={onSeek}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary"
        />
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ name, role, quote }) {
  return (
    <Card className="glass-card h-full bg-card/70">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
            {name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)}
          </div>
          <div>
            <p className="font-medium text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">&quot;{quote}&quot;</p>
        <p className="text-accent">★★★★★</p>
      </CardContent>
    </Card>
  )
}

export function HomePage() {
  return (
    <>
      <Seo
        title="Raga Rush | Custom Songs for Weddings, Creators & Brands"
        description="Raga Rush crafts cinematic custom songs for weddings, creators, and brands in India. Bespoke writing, composition, recording, and delivery."
        path="/"
      />
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 items-end gap-1">
            {[14, 26, 18, 32, 22, 36, 20, 28, 16].map((h, i) => (
              <span
                key={h + i}
                className="w-1 rounded-full bg-accent/60 animate-[pulse_1.8s_ease-in-out_infinite]"
                style={{ height: `${h}px`, animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
          <motion.div
            className="absolute left-[12%] top-[22%] text-primary/40"
            animate={{ y: [0, -12, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          >
            <Music2 className="h-7 w-7" />
          </motion.div>
          <motion.div
            className="absolute right-[10%] top-[34%] text-accent/40"
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 0.8 }}
          >
            <Music4 className="h-8 w-8" />
          </motion.div>
        </div>

        <div className="container py-16 md:py-24">
          <motion.div initial="hidden" animate="show" variants={fadeInUp} transition={{ duration: 0.8 }}>
          <Badge>India&apos;s premium custom song studio</Badge>
          <h1 className="mt-6 max-w-3xl text-4xl leading-tight text-foreground md:text-6xl">
            A Song That&apos;s Only Yours — Forever.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Custom compositions for weddings, creators &amp; brands. Made with soul, delivered in days.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button size="lg">
                Order Your Song →
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                ▶ Hear Samples
              </Button>
            </Link>
          </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="container pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['🎵', '200+ Songs Delivered'],
            ['⭐', '100% Satisfaction'],
            ['⚡', '3-5 Day Turnaround'],
          ].map(([icon, text]) => (
            <Card key={text} className="border-primary/25 bg-card/60">
              <CardContent className="flex items-center justify-center gap-3 p-6 text-center">
                <span className="text-xl">{icon}</span>
                <p className="text-base font-medium text-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16">
        <h2 className="mb-6 text-3xl md:text-4xl">What We Create</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [Music4, 'Wedding Songs', 'A forever memory, wrapped in melody.'],
            [Mic2, 'Creator Intros & Jingles', 'Your brand, your sound.'],
            [WandSparkles, 'Brand Anthems', 'Music that makes your brand unforgettable.'],
          ].map(([Icon, title, copy]) => (
            <motion.div key={title} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
              <Card className="bg-card/70 transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
                <CardHeader>
                  <Icon className="mb-2 h-5 w-5 text-primary" />
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{copy}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16">
        <h2 className="mb-6 text-3xl md:text-4xl">Hear the Magic</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {audioSamples.map((sample) => (
            <CustomAudioPlayer key={sample.title} title={sample.title} src={sample.src} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16">
        <h2 className="mb-8 text-3xl md:text-4xl">How It Works</h2>
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-[2px] overflow-hidden rounded-full bg-border md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary"
              initial={{ x: '-100%' }}
              whileInView={{ x: '0%' }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
            />
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              ['📝', 'Fill the Order Form'],
              ['🎼', 'We Compose Your Song'],
              ['🔄', 'Review & Revise'],
              ['🎧', 'Receive Your Song'],
            ].map(([icon, title], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.12 }}
              >
                <Card className="relative z-10 bg-card/70">
                  <CardContent className="flex min-h-28 flex-col items-center justify-center gap-2 p-5 text-center">
                    <span className="text-2xl">{icon}</span>
                    <p className="font-medium text-foreground">{title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16">
        <h2 className="mb-6 text-3xl md:text-4xl">What Our Clients Say</h2>

        <div className="hidden gap-5 md:grid md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} name={item.name} role={item.role} quote={item.quote} />
          ))}
        </div>

        <div className="overflow-hidden md:hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={`${item.name}-${index}`} className="w-[84%] shrink-0">
                <TestimonialCard name={item.name} role={item.role} quote={item.quote} />
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16">
        <h2 className="mb-6 text-3xl md:text-4xl">Pricing Preview</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { name: 'Starter', price: '₹2,999' },
            { name: 'Standard', price: '₹5,999', popular: true },
            { name: 'Premium', price: '₹9,999' },
          ].map((tier) => (
            <motion.div key={tier.name} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
              <Card
                className={`relative bg-card/70 ${
                  tier.popular ? 'border-primary/50 shadow-glow' : 'border-border/80'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{tier.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/pricing">
            <Button variant="outline" size="lg">
              View Full Pricing
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-16">
        <div className="mx-auto w-full max-w-[100vw] bg-gradient-to-r from-primary via-[#ff874b] to-accent">
          <div className="container flex flex-col items-start justify-between gap-4 py-10 md:flex-row md:items-center">
            <h2 className="text-3xl text-secondary md:text-4xl">Ready to Create Something Unforgettable?</h2>
            <Link to="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90" size="lg">
                Start Your Order Today
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-20">
        <Card className="border-primary/40 bg-gradient-to-r from-primary/15 to-accent/10">
          <CardContent className="flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                <Sparkles className="h-4 w-4" />
                Delivery in as little as 5-10 days
              </p>
              <h2 className="mt-2 text-3xl">From memory to melody, in one seamless process.</h2>
            </div>
            <Link to="/services">
              <Button variant="outline">See How It Works</Button>
            </Link>
          </CardContent>
        </Card>
      </AnimatedSection>
    </>
  )
}
