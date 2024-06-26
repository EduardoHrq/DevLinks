import { Inter } from 'next/font/google'

import Card from './components/card'
import Icon from './components/icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <div className='w-96 m-auto mt-7 mb-10'>
        <div className='w-44 h-44 bg-indigo-600 bg-opacity-25 flex justify-center rounded-full m-auto overflow-hidden'>
          <img src="https://user-images.githubusercontent.com/57080830/214324578-84f5fa40-84ae-443b-aed8-2162d6a9c747.png" alt="userImg" className='h-full' />
        </div>

        <p className='m-0 text-center font-bold mt-4 text-xl'>Eduardo Henrique</p>

        <div className='flex flex-col items-center justify-center gap-3'>
          <Card link="https://eduardohrq-portifoliodev.vercel.app/" title="Portifólio" />
          <Card link="https://exemplos-css.vercel.app/" title="Exemplos_front-end (CSS)" />
          <Card link="https://todolist-i5h4hq4awq-uc.a.run.app/" title="ToDo List - Spring Boot" />
          <Card link="https://switch-button-react.vercel.app/" title="Projeto - botão toggle" />
        </div>

        <div className='my-8 flex items-center justify-around'>
          <Icon color="6366f1" name="github" link="https://github.com/EduardoHrq" />
          <Icon color="6366f1" name="linkedin" link="https://www.linkedin.com/in/eduardohrq/" />
          <Icon color="6366f1" name="resume" link="https://drive.google.com/file/d/1OmXaDgMr4drnz0xlmh5mvdx5n5StoBCJ/view?usp=sharing" />
        </div>

        <p className='text-center'>Feito por Eduardo</p>

      </div>
    </div>
  )
}
