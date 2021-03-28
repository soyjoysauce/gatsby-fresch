import React, { useContext } from "react"
import { Link } from "gatsby"

import { GatsbyContext} from "../context/context"

const Navlinks = ({page}) => {
  const {links} = useContext(GatsbyContext)
  console.log(links)

return (
  <>
  <button>{page}</button>
  <div className="links">
  {links.map((link,index)=>{
      const {url,label,icon} = link
      if(link.page === page){
        return (
          <Link to={url} key={index}>
            {icon}
            {label}
          </Link>
        )
      }
    })}
  </div>
  </>
)
}

export default Navlinks