import About from '@/components/About'
import FlareCursor from '@/components/FlareCursor'
import Main from '@/components/Main'
import Nav from '@/components/Nav'
import Participate from '@/components/Participate'


export default function Home() {
  return (
    <>
    <FlareCursor/>
      <Nav/>
    <Main/>
    <About/>
    <Participate/>
    </>
  )
}
