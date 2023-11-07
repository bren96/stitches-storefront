import Hero from "@modules/home/components/hero"
import CallToAction from "@modules/layout/components/call-to-action"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Stitches - Rewear and Repair. Ithaca, NY. Shop our collection or sell with us. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <CallToAction
        headerText="How it works"
        body={<>
          <ul className="list-disc">
            <li><b>Repair</b> items for a low-cost fee</li>
            <li><b>Consign</b> items you no longer need</li>
            <li><b>Browse</b> our selection of repurposed clothing and materials</li>
          </ul>
          <br />
          <p>
            With Stitches, you can look good and feel good about doing your part for the planet 🌎
          </p>
        </>}
        actionText="Shop Online"
        actionHref="/store"
        imgSrc="/marilia-castelli-YCLF4cRn5cM-unsplash.jpg"
        imgPos="left"
      />
      <CallToAction
        headerText="Our Mission"
        body={
          <>
            <p>
              Stitches began in 2023 with a simple idea: <b>repaired or second-hand is better than buying new</b>
            </p>
            <br />
            <p>
              We are on a mission to reduce textile waste and promote sustainable fashion practices, one stitch at a time 🪡 🧵
            </p>
          </>
        }
        actionText="Repair Services"
        actionHref="/repair"
        imgSrc="/tata-toto-Ohcd8kxKdQs-unsplash.jpg"
        imgPos="right"
      />
      <CallToAction
        headerText="Store Hours"
        body={
          <ul>
            <li>Mon  | closed 🛑</li>
            <li>Tues | closed 🛑</li>
            <li>Wed  | 10am - 6pm</li>
            <li>Thur | 10am - 6pm</li>
            <li>Fri  | 10am - 6pm</li>
            <li>Sat  | 10am - 6pm</li>
          </ul>
        }
        actionText="Contact Us"
        actionHref="/contact"
        imgSrc="/jacqueline-brandwayn-r4fSDicAlvQ-unsplash.jpg"
        imgPos="left"
      />
    </>
  )
}

export default Home
