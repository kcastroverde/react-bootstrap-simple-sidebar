
import React from 'react'
import MotoA from '../../images/tools/MotoA.png'
import MotoB from '../../images/tools/MotoB.png'
import MotoC from '../../images/tools/MotoC.png'
import { motion, AnimatePresence } from 'framer-motion'

export default function SelectByke(props) {
    console.log(props.showBykes)


  return (
  
    <AnimatePresence>
        {props.showBykes &&(
    <motion.div 
    key={props.showBykes}
    className='invetoryOpen'
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ opacity: 0, y:200, transition: { duration: 0.5 } }}
    transition={{ type: 'spring', stiffness: 80 }}
    >
        <div className='closeButton' onClick={()=>props.close()}>X</div>
        <h2>Motor Bike Inventory</h2>
        <div className='inventory-select'>
        {props.bikes.map((bike, index)=>(
            <div className='invetory-item' key={index}>
                <div className='item-header'>
                    <div className='stars'>
                        <p>level: {bike.level}</p>
                    </div>
                    <div className='progress-box'>
                <div className='inventory-item-progressBar'>
                  <div className='inventory-item-progressBar-fill' style={{width: `${bike.progressBar/bike.progressBarMax*100}%`}}></div>
                </div>
                </div>
                
                <div className='id'><p>ID:{bike.id}</p></div>
                </div>
                <div className='item-body'>
                    <div className='item-img'>
                        <img src={{
                            1: MotoA,
                            2: MotoB,
                            3: MotoC
                        }[bike.level]} alt=''/>
                    </div>
                </div>
                <div className='item-footer'>
                    <button onClick={()=>props.selectByke(bike)} className='btn-select'>Select</button>
                    
                </div>
            </div>
        ))}
        </div>
    </motion.div>
        )}
    </AnimatePresence>
    
    
  )
}
