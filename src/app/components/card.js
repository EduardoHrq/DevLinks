function Card({title, link}){
  return (
    <a href={link} target="_blank" className="card w-80 h-14 mt-6 m-auto rounded-md flex items-center justify-center font-bold hover:bg-gray-500 transition-colors">{title}</a>
  )
}

export default Card;