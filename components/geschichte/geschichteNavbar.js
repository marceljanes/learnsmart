import Link from 'next/link'
import { useState } from 'react'

export default function GeschichteNavbar() {

    const [neuzeit, setNeuzeit] = useState(false)
    const [antike, setAntike] = useState(false)
    const [gegenwart, setGegenwart] = useState(false)
    const [mittelalter, setMittelalter] = useState(false)

    const kapitel = ['Die Anfänge der Menschheit: Die Entstehung und Evolution des Homo Sapiens sowie die frühesten Gesellschaften und Kulturen', 'Die ']
    
    return (

        <div className="flex flex-col">
            
            <div className="mb-10">
                   <Link href="/geschichte/zweiter-weltkrieg"><p>Die Anfänge der Menschheit</p>                       
                       
                    </Link>
                    

            </div>
            <div className="mb-10">
                   <Link href="/geschichte/zweiter-weltkrieg"><p>Die alten Hochkulturen</p>                       
                       
                    </Link>



            </div>
            <div onMouseEnter={() => setAntike(true)} onMouseLeave={() => setAntike(false)} className={`mb-5  `}>
                    <p>Die Antike</p>                       
                       
                    
                    <div className="mt-5 break-normal text-gray-400 text-base cursor-pointer">
                        {antike && 
                        <div> 
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Römische Zivilisation und ihre Eroberungen</span></p></Link>
                            <Link href="/geschichte/antike/roemisches-reich"><p><span className="border-b-2 border-dashed border-gray-400">Das römische Reich und seine Institutionen</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die Entstehung der Christenheit und die Spaltung der Kirche</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die Völkerwanderung und der Fall des römischen Reiches</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die Entstehung der frühmittelalterlichen Königreiche in Europa</span></p></Link>
                            

                           
                        </div>}
                    </div>



            </div>


            <div onMouseEnter={() => setMittelalter(true)} onMouseLeave={() => setMittelalter(false)} className={`mb-5  `}>
                    <p>Die Mittelalterliche Welt</p>                       
                       
                    
                    <div className="mt-5 break-normal text-gray-400 text-base cursor-pointer">
                        {mittelalter && 
                        <div> 
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die Entstehung der europäischen Monarchien und der Feudalismus</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die Kreuzzüge und die Beziehungen zwischen Christen und Muslimen</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die Entstehung der Städte und der Hanse</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die Pestepidemien und ihre Auswirkungen auf die Bevölkerung</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die Entstehung der Universitäten und die kulturelle Renaissance des 14. und 15. Jahrhunderts</span></p></Link>
                            

                           
                        </div>}
                    </div>



            </div>

            <div onMouseEnter={() => setNeuzeit(true)} onMouseLeave={() => setNeuzeit(false)} className={`mb-5 `}>
                    <p>Die Neuzeit: </p>                       
                       
                    
                    <div className="mt-5 break-normal text-gray-400 text-base cursor-pointer">
                        {neuzeit && 
                        <div> 
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die industrielle Revolution</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die Kolonialisierung und die Entstehung der europäischen Kolonialreiche</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Der 1. Weltkrieg</span></p></Link>
                            <Link href="/geschichte/neuzeit/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Der 2. Weltkrieg</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die politischen und sozialen Umwälzungen des 20. Jahrhunderts</span></p></Link>
                            <Link href="/geschichte/zweiter-weltkrieg"><p><span className="border-b-2 border-dashed border-gray-400">Die globale Integration und die Entstehung der Globalisierung</span></p></Link>

                           
                        </div>}
                    </div>



            </div>
            
            <div onMouseEnter={() => setGegenwart(true)} onMouseLeave={() => setGegenwart(false)} className={`mb-5  `}>
                    <p>Die Gegenwart: </p>                       
                       
                    
                    <div className="mt-5 break-normal text-gray-400 text-base">
                        {gegenwart && <div> <p className="mb-3"><span className={`border-b-2 border-dashed border-gray-400`}>Klimawandel und Globalisierung</span></p> <p><span className="border-b-2 border-dashed border-gray-400">Die technologischen Fortschritte und ihre Auswirkungen</span></p></div>}
                    </div>



            </div>
            
            
            
            
            
            
            
                  
                    
                <div className="mt-10">
                    <Link href="/geschichte/zweiter-weltkrieg">Zweiter Weltkrieg</Link>
                    
                
                    <Link href="/geschichte/roemisches-reich">Römisches Reich</Link>
                
                    <Link href="/geschichte/allgemeinwissen-geschichte">Allgemeinwissen-Geschichte</Link>
                
                </div>
       

        </div>
    )
}