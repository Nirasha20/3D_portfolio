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