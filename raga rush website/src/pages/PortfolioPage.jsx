import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Seo } from '@/components/Seo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const filters = ['All', 'Wedding', 'Creator', 'Brand']

const tracks = [
  {
    title: 'Aarav & Naina - Vows in Raag Yaman',
    category: 'Wedding',
    cover: 'https://source.unsplash.com/random/800x600/?music,indian,wedding&sig=1',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'Sangeet Entry - Noor & Kabir',
    category: 'Wedding',
    cover: 'https://source.unsplash.com/random/800x600/?music,indian,wedding&sig=2',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'Daily Drift Intro Theme',
    category: 'Creator',
    cover: 'https://source.unsplash.com/random/800x600/?music,creator,studio&sig=3',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    title: 'Reel Hook - Food Frames',
    category: 'Creator',
    cover: 'https://source.unsplash.com/random/800x600/?music,creator,content&sig=4',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    title: 'House of Zoya Campaign Hook',
    category: 'Brand',
    cover: 'https://source.unsplash.com/random/800x600/?music,brand,india&sig=5',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
  {
    title: 'Launch Anthem - Vaayu Electric',
    category: 'Brand',
    cover: 'https://source.unsplash.com/random/800x600/?music,brand,campaign&sig=6',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  },
]

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [playingTitle, setPlayingTitle] = useState('')
  const audioRefs = useRef({})

  const filteredTracks = useMemo(() => {
    if (activeFilter === 'All') return tracks
    return tracks.filter((track) => track.category === activeFilter)
  }, [activeFilter])

  const togglePlay = async (track) => {
    const current = audioRefs.current[track.title]
    if (!current) return

    if (playingTitle === track.title) {
      current.pause()
      setPlayingTitle('')
      return
    }

    Object.values(audioRefs.current).forEach((audio) => {
      if (audio && !audio.paused) audio.pause()
    })

    try {
      await current.play()
      setPlayingTitle(track.title)
    } catch {
      setPlayingTitle('')
    }
  }

  return (
    <>
      <Seo
        title="Portfolio | Raga Rush"
        description="Explore selected work from Raga Rush across weddings, creator themes, and brand sonic identities."
        path="/portfolio"
      />
      <AnimatedSection className="container py-16 md:py-24">
        <Badge>Selected work</Badge>
        <h1 className="mt-5 text-4xl md:text-5xl">Stories we turned into songs.</h1>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection className="container pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {filteredTracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <Card className="glass-card h-full bg-card/70">
                <CardHeader>
                  <img
                    src={track.cover}
                    alt={`${track.title} cover art placeholder`}
                    className="mb-3 h-40 w-full rounded-md border border-border/80 object-cover"
                  />
                  <CardTitle className="text-xl">{track.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                  <audio
                    ref={(node) => {
                      audioRefs.current[track.title] = node
                    }}
                    src={track.audioSrc}
                    onEnded={() => setPlayingTitle((prev) => (prev === track.title ? '' : prev))}
                  />
                  <Badge className="border-primary/50 bg-primary/15 text-primary">{track.category}</Badge>
                  <Button size="default" onClick={() => togglePlay(track)}>
                    <Play className="mr-2 h-4 w-4" />
                    {playingTitle === track.title ? 'Pause' : 'Play'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}
