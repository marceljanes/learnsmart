import NavbarComponent from '../components/navbarComp'
import axios from 'axios';
import ApiComponent from '../components/apiComponent'
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import walk1 from '../public/running.gif'
import { Markup } from 'interweave';






export default function Index() {  
   const [text, setText] = useState('')
   const [running, setRunning] = useState(false)
   const [skills, setSkills] = useState('')
   const [stelle, setStelle] = useState('')
   const [name, setName] = useState('')
   const [unternehmen, setUnternehmen] = useState('')
   const [sonstiges, setSonstiges] = useState('')
   const [ausbildung, setAusbildung] = useState('')


   
    const fetchData = () => {
      setRunning(true)
      axios.post('/api/test', {        
        name: name,
        skills: skills,
        unternehmen: unternehmen,
        stelle: stelle,
        sonstiges: sonstiges,
        ausbilding: ausbildung
      })      
      .then(res => {
        console.log(res.data)
        function removeLettersUntilSehr(str) {
          
          const index = str.indexOf('Sehr');
          
          if (index === -1) {
            return str;
          }
          
          return str.substring(index);
        }
        setText(removeLettersUntilSehr(res.data))
        setRunning(false)
      })
    }


   
 


     return (
       <div className="flex flex-col w-full h-screen items-center">
         
         <div className="w-full">
           <NavbarComponent />
         </div>

         <div className="w-full xl:w-1/2 flex flex-col items-center justify-center">
         <div className="p-10 mt-20 w-full bg-zinc-500 flex flex-col justify-center items-center ">
              <div className="flex flex-row mb-5 space-x-5">
                <div className="">
                  <label className="text-gray-400 text-sm mb-2" for="name">
                    Dein vollständiger Name (wird nicht gespeichert)
                  </label>
                  <input onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Vorname Nachname" />
                </div>
                <div className="">
                  <label class="text-gray-400 text-sm mb-2" for="stelle">
                    Die Bezeichnung der Stelle (z.B IT-Consultant SAP)
                  </label>
                  <input onChange={(e) => setStelle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stelle" type="text" placeholder="Stellenbeschreibung" />
                </div>

              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-400 text-sm mb-2" for="unternehmen">
                  Welche Ausbildung/ welchen Studienabschluss hast du?
                </label>
                <input onChange={(e) => setAusbildung(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ausbildung" type="text" placeholder="Ausbildungstitel/ Bachelor/ Masterabschluss etc." />
              </div>    
              <div className="mb-4 w-full">
                <label className="block text-gray-400 text-sm mb-2" for="unternehmen">
                  Wie heißt das Unternehmen?
                </label>
                <input onChange={(e) => setUnternehmen(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="unternehmen" type="text" placeholder="Unternehmens-Name" />
              </div>             
              
              <div className="mb-4 w-full">
                <label className="block text-gray-400 text-sm mb-2" for="skills">
                  Benenne deine Stärken (z.B. starke analytische Fähigkeiten)
                </label>
                <input onChange={(e) => setSkills(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="skills" type="text" placeholder="Deine Stärken" />
              </div>              
              <div className="mb-4 w-full">
                <label className="block text-gray-400 text-sm  mb-2" for="sonstiges">
                  Nenne hier Sonstiges, was wichtig ist, z.B: Ich habe schon zwei große Projekte erfolgreich abgeschlossen und einen TOEFL-Test
                </label>
                <input onChange={(e) => setSonstiges(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sonstiges" type="text" placeholder="Sonstige wichtige Informationen, die erwähnt werden sollen" />
              </div>
              <div>
                <button onClick={() => fetchData()} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Anschreiben erstellen
                </button>
              </div>
        
         </div>

         
            
            {running && 
            <div>
              <p className="animate-pulse text-xl font bold mb-10 font-bold"> Die AI schreibt gerade deinen Text...</p>
            <div><Image className="border-2 border-orange-600" width={300} src={walk1} alt='Waiting Robot' /></div>
            </div>}
            {text && <div className="p-10"><Markup content={text} /></div>}

           







         </div>

                   
           
          
           
         </div>
        
         
       
     )
 }