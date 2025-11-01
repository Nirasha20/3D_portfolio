import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#af08ec]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#AF08EC] via-[#D84BFF] to-transparent' />
        </div>
        <div className="flex-1">
          <div className="mt-1 sm:mt-0 flex flex-col sm:flex-row items-start gap-6 w-full">
            {/* Left: ALL text (heading + paragraph) */}
            <div className="flex-1">
              <h2 className={`${styles.heroHeadText}`}>
                Hi, I'm <span className='text-[#af08ec]'>Nirasha De Mel</span>
              </h2>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I’m a passionate Full Stack Developer skilled in building dynamic, <br className='sm:block hidden' />
                user-focused web applications. I specialize in developing <br className='sm:block hidden' />
                responsive frontends and scalable backends using modern <br className='sm:block hidden' />
                technologies to deliver efficient, high-quality solutions. <br className='sm:block hidden' />
                Always eager to learn and innovate in every project I take on.
              </p>

              {/* Download CV button */}
              <div className="mt-4">
                <a
                  href="/cv/Nirasha-De-Mel-CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-[#af08ec] hover:bg-[#9a06d2] text-white px-5 py-2 shadow transition-colors"
                  aria-label="Download CV"
                >
                  Download CV
                </a>
              </div>

              {/* Social links */}
              <div className="mt-4 flex items-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/Nirasha20"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition"
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.43 2.865 8.186 6.839 9.504.5.093.683-.218.683-.485 0-.239-.009-.873-.014-1.714-2.782.607-3.369-1.344-3.369-1.344-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.531 2.341 1.088 2.91.833.091-.648.35-1.088.636-1.338-2.221-.253-4.555-1.114-4.555-4.957 0-1.094.39-1.99 1.029-2.691-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.297 2.748-1.027 2.748-1.027.546 1.378.203 2.397.1 2.65.64.701 1.028 1.597 1.028 2.691 0 3.852-2.337 4.701-4.565 4.949.359.31.679.92.679 1.856 0 1.34-.012 2.42-.012 2.75 0 .269.18.582.688.483A10.026 10.026 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nirasha-demel-5664091b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.268 2.371 4.268 5.455v6.288zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM6.902 20.452H3.771V9h3.131v11.452z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <img
              src="/Me.png"
              alt="Nirasha"
              className="mt-4 sm:mt-0 sm:ml-8 w-[clamp(180px,28vw,360px)] aspect-square rounded-full object-cover object-center shadow-xl ring-2 ring-white/20 flex-shrink-0 self-start"
            />
          </div>
        </div>
        
        
      </div>
      
    </section>
  )
}

export default Hero