import React ,{useState}from 'react';
import sublinks from '../constants/links';

const GatsbyContext = React.createContext();

const GatsbyProvider = ({children}) => {
  const [links] = useState(sublinks)
  return (
    <GatsbyContext.Provider value={{links}}>
    {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }