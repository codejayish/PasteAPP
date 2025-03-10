import UserCard from "./components/UserCard"
import lovepic from "./assets/lovepic.jpeg"
import Maharana from "./assets/maharana.jpg"
import PrithviRaj from "./assets/prithviraj.jpg"

// Components = instead of classes we use func based components
//             = A func which gives HTML like code

//JSX = inside javascript we write HTML like code
function App() {

  return (
    <div className="container">       
    {/* /* in normal HTML we call this name="" as attribute but here in React we call them as props(used for data transfer) */}
      <UserCard name="Love Rana" desc="desc1" image={lovepic} style={{"border-radius":"10px"}}/>
      <UserCard name="Maharana Pratap" desc="desc2" image={Maharana} style={{"border-radius":"10px"}}/>
      <UserCard name="PrithviRaj Chauhan" desc="desc3" image={PrithviRaj} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
