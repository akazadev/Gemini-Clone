import React from 'react'
import assets from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='bg-[1E1F20] w-[292px] h-[729.600px] flex flex-col items-center border-amber-300 text-[#E3E3E3] justify-between'>

        {/*div contenant l'icone menu*/}
        <div className=''>
            <img src={assets.menu} alt=""/>
        </div>

        <div className='h-[625.600px]'>
            <div className= 'flex flex-row items-center justify-center'>
                <div>
                    <img src={assets.plus} alt=""/>
                </div>
                <div>
                    <p className=''>Nouvelle discussion</p>
                </div>
            </div>

            <div>
                <p>Discussions récentes</p>

                <div className='flex flex-row'>
                    <img src={assets.chat} alt=""/>
                    <p>Définition</p>
                </div>
            </div>

            <div className='h-[124px]'>

                <div className='flex flex-row' >
                    <img src={assets.help} alt=""/>
                    <p>Aide</p>
                </div>

                <div className='flex flex-row'>
                    <img src={assets.history} alt=""/>
                    <p>Activité</p>
                </div>

                <div className='flex flex-row'>
                    <img src={assets.settings} alt=""/>
                    <p>Paramètres</p>
                </div>
            </div>

            <div className= 'h-[90px]'>
                <p>Lomé, Togo</p>
                <p>D'après votre adresse IP - Mettre à jour la position</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar