import { useRive } from '@rive-app/react-canvas-lite'
import frog from "./assets/frog.riv"
import Text from './Text'
import status from './assets/status.svg'
const App = ()=>{
    
    const stateMachineName = "frogState"
    const { RiveComponent } = useRive({
        src: frog,
        autoplay:true,
        stateMachines:stateMachineName,
        artboard:"frog"
    })

  

    return (
      <article className="frog">
        <img src={status} />
        <Text/>
        <RiveComponent className="riveComponent"/>
        <button>Retry</button>
      </article>
    )
}
export default App