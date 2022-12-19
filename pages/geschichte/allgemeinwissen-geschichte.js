import Navbar from "../../components/navbar"
import GeschichteNavbar from "../../components/geschichte/geschichteNavbar"
import AllgemeinWissenGeschichteComponent from "../../components/geschichte/allgemeinWissenGeschichteComponent"




export default function Geschichte() {

    return(
        <Navbar left={
            <GeschichteNavbar />
            
          } right={
            <AllgemeinWissenGeschichteComponent />
          }>


        </Navbar>
    )
}