import Link from 'next/link'
export default function GeschichteNavbar() {
    
    return (

        <div>
            <ul>
                <li>
                    <Link href="/geschichte/zweiter-weltkrieg">Zweiter Weltkrieg</Link>
                    
                </li>
                <li>
                    <Link href="/geschichte/roemisches-reich">Römisches Reich</Link>
                </li>
                <li>
                    <Link href="/geschichte/allgemeinwissen-geschichte">Allgemeinwissen-Geschichte</Link>
                </li>

            </ul>
       

        </div>
    )
}