import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner/hero/innerHero"
import VidaModernaProject from "../components/vidaModernaProject/vidaModernaProject"
import CTA from "../components/footer/cta"
import Footer from "../components/footer/footer"

import PDF from "../../src/vida.pdf"

import aqua1 from "../images/projects/vida-moderna/aquavida/1.jpg"
import aqua2 from "../images/projects/vida-moderna/aquavida/2.jpg"
import aqua3 from "../images/projects/vida-moderna/aquavida/3.jpg"
import aqua4 from "../images/projects/vida-moderna/aquavida/4.jpg"
import aqua5 from "../images/projects/vida-moderna/aquavida/5.jpg"
import aqua6 from "../images/projects/vida-moderna/aquavida/6.jpg"

import europa1 from "../images/projects/vida-moderna/europa/1.jpg"
import europa2 from "../images/projects/vida-moderna/europa/2.jpg"
import europa3 from "../images/projects/vida-moderna/europa/3.jpg"
import europa4 from "../images/projects/vida-moderna/europa/4.jpg"
import europa5 from "../images/projects/vida-moderna/europa/5.jpg"

const handleDragStart = e => e.preventDefault()

const aquavidaSlides = [
  <img src={aqua1} onDragStart={handleDragStart} />,
  <img src={aqua2} onDragStart={handleDragStart} />,
  <img src={aqua3} onDragStart={handleDragStart} />,
  <img src={aqua4} onDragStart={handleDragStart} />,
  <img src={aqua5} onDragStart={handleDragStart} />,
  <img src={aqua6} onDragStart={handleDragStart} />,
]

const europaSlides = [
  <img src={europa1} onDragStart={handleDragStart} />,
  <img src={europa2} onDragStart={handleDragStart} />,
  <img src={europa3} onDragStart={handleDragStart} />,
  <img src={europa4} onDragStart={handleDragStart} />,
  <img src={europa5} onDragStart={handleDragStart} />,
]

const VidaModerna = () => (
  <Layout>
    <SEO
      title="Vida Moderna"
      description="Check out the latest Vida Moderna homes, Aquavia and Europa. Click here to learn more."
    />
    <Nav />
    <InnerHero title="Vida Moderna" />
    <section id="main-content">
      <VidaModernaProject title="Aquavida" link={PDF} items={aquavidaSlides} />
      <br />
      <VidaModernaProject title="Europa" link={PDF} items={europaSlides} />
    </section>
    <CTA />
    <Footer />
  </Layout>
)

export default VidaModerna
