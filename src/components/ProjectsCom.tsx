import React from 'react'
import { projects } from '../data/projects'

const ProjectsCom = () => {
  return (
    <section className='px-30 '>
      <div className='flex flex-col gap-14 items-center'>
        <h2 className='text-[(var(--color-primary))] text-4xl font-bold leading-9 tracking-wide'>Projects</h2>
        <div className='grid grid-cols-12 gap-8 '>
            {projects.map((project) => {
                return (
                    <div key={project.id} className='col-span-12 lg:col-span-4 md:col-span-6 bg-transparent border border-[var(--color-primary)] p-5  rounded-lg transition-all duration-300 hover:shadow-[0_0_10px_var(--color-primary)] flex flex-col relative  '>
                        <img src= {project.img} className='w-full h-[200px] '/>
                        <h3 className='text-[var(--color-primary)] text-2xl my-5 font-bold'>{project.projectName}</h3>
                        <p className='text-white leading-9 overflow-y-auto h-50'>{project.description}</p>
                        <div className='flex gap-6 items-center  justify-center mt-8'>
                            <a href = {project.live} target  = "_blank" className='py-3 px-4 rounded-md decoration-none text-white text-2xl hover:shadow-[0_0_10px_var(--color-primary)] transition duration-300 border border-[var(--color-primary)]'>Live</a>
                            <a href= {project.repo} target  = "_blank" className='py-3 px-4 rounded-md decoration-none text-white text-2xl hover:shadow-[0_0_10px_var(--color-primary)] transition duration-300 border border-[var(--color-primary)]'>Repo</a>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsCom
