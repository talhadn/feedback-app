import React from 'react'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeebackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {v4 as uuidv4} from 'uuid'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
            if(window.confirm('Are you sure?'))
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm
                                handleAdd={addFeedback} />

                            <FeedbackStats
                                feedback={feedback} />

                            <FeedbackList
                                feedback={feedback}
                                handleDelete={deleteFeedback} />
                        </>
                            }>
                    </Route>
                        
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App