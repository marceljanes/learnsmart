import Navbar from "../../components/navbar"
import RömischesReichComponent from "../../components/geschichte/römischesReichComponent"
import GeschichteNavbar from "../../components/geschichte/geschichteNavbar"




export default function RoemischesReich() {

    return(
        <Navbar left={
            <GeschichteNavbar />
            
          } right={
            <RömischesReichComponent />
          }>


        </Navbar>
    )
}