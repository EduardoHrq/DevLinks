function Icon({color, name, link}) {
  const url = "https://img.icons8.com/material-sharp/256/"+ color + "/" + name + ".png";

  return (
    <a href={link} target="_blank" className="block rounded-full p-3 hover:bg-gray-700 transition">
      <img src={url} alt="" className="w-12"/>
    </a>
  )
}

export default Icon;