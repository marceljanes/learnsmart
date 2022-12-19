import Navbar from "../components/navbar"
import ZweiterWeltkriegComponent from "../components/geschichte/zweiterWeltkrieg"



export default function Test() {

    return(
        <Navbar right={
            <ZweiterWeltkriegComponent />
          }>


        </Navbar>
    )
}