import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from "react";
import FeedbackContext from '../context/FeedbackContext';
import {motion, AnimatePresence} from 'framer-motion'


function FeebackList() {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback</p>
    }

    return isLoading ? (<h3>Loading...</h3>) : (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}>

                        <FeedbackItem
                            key={item.id}
                            item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             <FeedbackItem 
    //                 key={item.id} 
    //                 item={item} 
    //                 handleDelete={handleDelete}/>
    //             ))}
    //     </div>
    //     )
}

export default FeebackList
