import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'


const FindsMe = () => {
  return (
    <section className='px-30 mt-35 mb-20'>
      <div className='container flex flex-col items-center gap-3.5'>
        <h2 className='text-white text-[40px] capitalize tracking-wide'>Find me on</h2>
        <span className='text-white text-lg'>Feel free to <span className='text-[var(--color-primary)]'>connect</span> with me</span>
        <ul className='flex gap-5 items-center'>
            <li className='bg-white h-9 w-9 rounded-full flex items-center justify-center transition duration-300 hover:shadow-[0_0_20px_var(--color-primary)]'>
                <a href = "">
                    <Facebook color='var(--color-primary)'/>
                </a>
            </li>
            <li className='bg-white h-9 w-9 rounded-full flex items-center justify-center transition duration-300 hover:shadow-[0_0_20px_var(--color-primary)]'>
                <a href = "">
                    <Github color='var(--color-primary)'/>
                </a>
            </li>
            <li className='bg-white h-9 w-9 rounded-full flex items-center justify-center transition duration-300 hover:shadow-[0_0_20px_var(--color-primary)]'>
                <a href = "">
                    <Instagram color='var(--color-primary)'/>
                </a>
            </li>
            <li className='bg-white h-9 w-9 rounded-full flex items-center justify-center transition duration-300 hover:shadow-[0_0_20px_var(--color-primary)]'>
                <a href = "">
                    <Linkedin color='var(--color-primary)'/>
                </a>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default FindsMe
