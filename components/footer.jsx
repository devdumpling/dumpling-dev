import Container from './container'
import { GITHUB_SOURCE, LINKEDIN } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-7">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl text-accent-3 tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Find me in these places
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`${LINKEDIN}`}
              className="mx-3 bg-accent-3 hover:bg-white hover:text-black text-accent-7 font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              LinkedIn
            </a>
            <a
              href={`${GITHUB_SOURCE}`}
              className="mx-3 text-accent-3 font-bold hover:underline"
            >
              Source
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
