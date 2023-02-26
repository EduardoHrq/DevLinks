function Card({title, link}){
  return (
    <a href={link} target="_blank" className="card w-full h-14 rounded-md flex items-center justify-center font-bold hover:bg-gray-500 transition">{title}</a>
  )
}

export default Card;