import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Какой то блок с информацией</h1>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights