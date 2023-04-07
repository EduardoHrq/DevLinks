import './style.css'

function Card({ title, link }) {
  return (
    <a href={link} target="_blank" className="card w-80 h-14 mt-6 m-auto rounded-md flex items-center justify-center font-bold transition-all duration-300 bg-indigo-500">{title}</a>
  )
}

export default Card;