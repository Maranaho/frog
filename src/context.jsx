import React from "react"

let initialNFLXState = {
  running: true
}

const NFLXContext = React.createContext()

function ttReducer(state, action) {
  switch (action.type) {

    case 'RUN': {
      let RUN = {...state}
      RUN.running = action.payload
      return RUN
    }


    default: throw new Error("Unexpected action")
  }
}

const NFLXStateProvider = ({ children })=> {
  const [state, dispatch] = React.useReducer(
    ttReducer,
    initialNFLXState
  )
  const value = { state, dispatch }
  return (
    <NFLXContext.Provider value={value}>{children}</NFLXContext.Provider>
  )
}

const useNFLXState = ()=> {
  const context = React.useContext(NFLXContext)
  if (context === undefined) {
    throw new Error(
      "useNFLXState must be used within a NFLXStateProvider"
    )
  }
  return context
}

export { NFLXStateProvider, useNFLXState }