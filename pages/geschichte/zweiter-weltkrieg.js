import Navbar from "../../components/navbar"
import GeschichteNavbar from "../../components/geschichte/geschichteNavbar"
import ZweiterWeltkriegComponent from "../../components/geschichte/zweiterWeltkrieg"




export default function Geschichte() {

    return(
        <Navbar left={
            <GeschichteNavbar />
            
          } right={
            <ZweiterWeltkriegComponent />
          }>


        </Navbar>
    )
}