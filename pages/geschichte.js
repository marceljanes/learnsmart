import Navbar from "../components/navbar"
import GeschichteNavbar from "../components/geschichte/geschichteNavbar"


const NavBarMobile = () => {

    return (
        <div className="md:hidden text-green-500">meine mobile navbar</div>

    )
}

export default function Geschichte() {

    return(
        <Navbar left={<GeschichteNavbar />          
          } mobile={
            <NavBarMobile />
          }
        >


        </Navbar>
    )
}