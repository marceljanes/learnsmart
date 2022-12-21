import Image from "next/image"
export default function PictureBanner({picture, text, left}) {
    return (
        <>
        {left ? <div className="relative flex flex-col md:flex-row mt-10 mb-10 h-full">
            <div className="relative flex flex-col justify-center">
                <div className="w-full h-full absolute bg-purple-400 z-10 opacity-25"></div>
                <div className=""><Image src={picture} width="400" height="400" /></div>
                <div className="absolute w-3 -left-2 bottom-2 h-2/3 -bottom-3 bg-green-300 border-purple-500"></div>
                <div className="absolute w-2/3 h-3 bottom-0 -left-4  bg-green-300 border-purple-500"></div>
            </div>
            <div className="bg-zinc-600 w-full h-50 p-10 text-gray-400">
                {text}
            
            </div>
            
        </div> :
        <div className="relative flex flex-col md:flex-row mt-10 mb-10 h-full">
            <div className="bg-zinc-600 w-full h-50 p-10 text-gray-400">
                {text}
            
            </div>
            <div className="relative flex flex-col justify-center">
                <div className="w-full h-full absolute bg-purple-400 z-10 opacity-25"></div>
                <div className=""><Image src={picture} width="400" height="400" /></div>
                <div className="absolute w-3 -right-2 bottom-2 h-2/3 -bottom-3 bg-green-300 border-purple-500"></div>
                <div className="absolute w-2/3 h-3 bottom-0 -right-4  bg-green-300 border-purple-500"></div>
            </div>
            
            
        </div> }
        </>

        
    )
  }