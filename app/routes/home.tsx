import { motion } from 'framer-motion'
import { Github } from '~/components/github'
import { Linkedin } from '~/components/linkedin'
import { Mail } from '~/components/mail'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Johan Hanses' }, { name: 'description', content: 'Home of Johan Hanses' }]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.2, duration: 0.5 },
}

export default function Home() {
  return (
    <div className="h-full">
      <motion.h1 className="text-3xl font-serif mb-8" {...fadeInUp}>
        Johan Hanses
      </motion.h1>

      <motion.div className="mb-8 leading-relaxed space-y-2" {...fadeIn}>
        <p>Hi there!</p>
        <p>
          I am a Software Engineer building dynamic, custom data visuals, web and mobile apps using D3 and all things
          JavaScript/TypeScript on both the server and browser.
        </p>
        <p>
          Loves to tinker with terminal tooling and geeks out about all things Linux, currently toying with NixOS again
          and interested in all things backend and devops.
        </p>
      </motion.div>

      <motion.div className="flex gap-6 text-lightPrimary dark:text-darkPrimary" {...fadeInUp}>
        <a
          href="https://www.linkedin.com/in/johanhanses/"
          className="hover:underline flex items-center gap-2"
          target="_blank"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a href="https://github.com/johanhanses" className="hover:underline flex items-center gap-2" target="_blank">
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a href="mailto:johanhanses@gmail.com" className="hover:underline flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Email
        </a>
      </motion.div>
    </div>
  )
}
