import React, { useState, useEffect, useRef } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'

export default function fetchAllCards() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [allCards, setAllCards] = useState(null)
    const [allActivities, setAllActivities] = useState(null)

    const { currentUser } = useAuth()

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, 'users', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setAllCards(docSnap.data().allCards)
                    setAllActivities(docSnap.data().allActivities)
                } else {
                    setAllCards({})
                }
            } catch (err) {
                setError('Failed to load allCards')
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { loading, error, allCards, setAllCards, allActivities, setAllActivities }
}