import UnderlineLink from "@modules/common/components/underline-link"
import clsx from "clsx"
import { Lobster } from 'next/font/google'
import Image from "next/image"

const lobster = Lobster({
  weight: '400',
  subsets: ['latin']
})

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className={clsx(lobster.className, "text-6xl font-bold mb-4 drop-shadow-md shadow-black")}>
          Reware & Repair
        </h1>
        <span className="text-black bg-white/50 p-4">
          <UnderlineLink href="/store">Explore Collection</UnderlineLink>
        </span>
      </div>
      <Image
        src="/hero.webp"
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
