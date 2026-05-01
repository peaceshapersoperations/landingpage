import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import CallToAction from '@/components/page-contact/cta'
import Form from '@/components/page-contact/form'
import Hero from '@/components/page-contact/hero'
import StartingPoint from '@/components/page-contact/starting-point'

const Contact = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <StartingPoint />
    <Form />
    <CallToAction />
    <Footer />
    </>
  )
}

export default Contact