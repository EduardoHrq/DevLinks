function Icon({ color, name, link }) {
  const url = "https://img.icons8.com/material-sharp/256/" + color + "/" + name + ".png";

  return (
    <a href={link} target="_blank" className="icons block rounded-full p-3 transition-all duration-300">
      <img src={url} alt="" className="w-12" />
    </a>
  )
}

export default Icon;