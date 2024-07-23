import React from 'react'
import assets from '../assets/assets'

const Sidebar = () => {
  return (

    <div className='bg-[#1E1F20] w-[292px] h-[729.600px] flex flex-col items-start text-[#E3E3E3] p-[20px]'>

        {/*div contenant l'icone menu*/}

        <div className='mb-[60px]'>
            <img src={assets.menu} alt=""/>
        </div>

        <div className='flex h-[625.600px] flex-col items-start'>

            <div className= 'flex mb-[15px] justify-between items-center bg-[#1A1A1C] p-3 rounded-[30px] w-[210.275px] h-[40px] '>
                <div>
                    <img src={assets.plus} alt=""/>
                </div>
                <div>
                    <p className='text-[14px] text-[#646365] font-semibold'>Nouvelle discussion</p>
                </div>
            </div>

            <div className='m-[10px] h-[355.6px] '>
                <div className='mb-[18px]'>
                    <p className='text-[#E3E3E3] text-[14px] font-semibold'>Discussions récentes</p>
                </div>

                <div className='flex items-center'>

                    <div className='w-[24px] h-[24px] mr-[11px] flex items-center justify-center'>
                        <img className ='h-[16px] w-auto' src={assets.chat} alt=""/>
                    </div>
                    <div>
                        <p className='text-[14px] font-semibold'>Définition</p>
                    </div>

                </div>
            </div>

            <div className='h-[124px] text-[#E8EAED] text-[14px]'>

                <div className='flex flex-row gap-[12px] h-[36px] ' >
                    <div>
                        <img className='h-[20px] w-auto mr-[11px] ' src={assets.help} alt=""/>
                    </div>
                    <div>
                        <p className='font-semibold' >Aide</p>
                    </div>
                </div>

                <div className='flex flex-row gap-[12px] h-[36px]'>
                    <div>
                        <img className='h-[20px] w-auto mr-[11px]' src={assets.history} alt=""/>
                    </div>
                    <div>
                        <p className='font-semibold'>Activité</p>
                    </div>
                </div>

                <div className='flex flex-row gap-[12px] h-[36px]'>
                    <div>
                        <img className='h-[20px] w-auto mr-[11px]' src={assets.settings} alt=""/>
                    </div>
                    <div>
                        <p className='font-semibold' >Paramètres</p>
                    </div>    
                </div>
            </div>

            <div className= 'h-[90px] text-[11px] text-[E3E3E3] font-semibold ml-[5px] '>
                <div className='flex items-center'>
                    <div className='mr-[11px] '>
                        <p className='rounded-full bg-[#E3E3E3] h-[8px] w-[8px] '></p>
                    </div>
                    <p className=''>Lomé, Togo</p>
                </div>
                <p className='text-[#9FBFF3] ml-[18px] '>D'après votre adresse IP - Mettre à jour la position</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar