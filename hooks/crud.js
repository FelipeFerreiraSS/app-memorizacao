import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext.js'
import { doc, setDoc, getDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebase'
import useFetchAllCards from '../hooks/fetchAllCards.js'
import axios from 'axios';
import { format, addDays } from 'date-fns';
import { v4 as uuidv4 } from 'uuid'

export default function Crud() {
	const { userInfo, currentUser } = useAuth()
  const [edit, setEdit] = useState(null)
  const [word, setWord] = useState('')
  const [translation, setTranslation] = useState('')
  const [edittedValue, setEdittedValue] = useState('')
  const { allCards, setAllCards, allActivities, setAllActivities, loading, error } = useFetchAllCards()
  const [newData, setNewData] = useState('');
  const [cardId, setCardId] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_API;

  const handleButtonClick = async () => {
    try {
      const imageFromSearch = await handleSearch();
      if (imageFromSearch) {
        setImageUrl(imageFromSearch);
        handleAddCard(imageFromSearch);
      } else {
        console.error('Erro ao buscar a imagem');
      }
    } catch (error) {
      console.error('Erro ao buscar a imagem:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${word}&orientation=landscape&client_id=${API_KEY}`
      );
      const imageRegularUrl = response.data.urls.regular;
      setImageUrl(imageRegularUrl);
      return imageRegularUrl;
    } catch (error) {
      console.error('Erro ao buscar a imagem:', error);
      return null;
    }
  };

  const currentDate = new Date();
  const threeDaysFromNow = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000);
  const formattedDate = format(threeDaysFromNow, 'dd/MM');

  async function handleAddCard(imageUrl) {
    if (!word || !translation || !imageUrl) { return }
    const newKey = Object.keys(allCards).length === 0 ? 1 : Math.max(...Object.keys(allCards)) + 1 //uuidv4()
    setAllCards({
      ...allCards,
      [newKey]: {
        word: word,
        translation: translation,
        image: imageUrl,
        timeCard: formattedDate,
      }
    });
    const userRef = doc(db, 'users', currentUser.uid)
    await setDoc(userRef, {
      'allCards': {
        [newKey]: {
          word: word,
          translation: translation,
          image: imageUrl,
          timeCard: formattedDate,
        }
      }
    }, { merge: true })
    setWord('');
    setTranslation('');
    setImageUrl('')
  }

  async function handleEditCard() {
    if (!edittedValue.word || !edittedValue.translation) {
      return;
    }
    const newKey = edit
    setAllCards({ ...allCards, [newKey]: edittedValue })
    const userRef = doc(db, 'users', currentUser.uid)
    await setDoc(userRef, {
      'allCards': {
        [newKey]: edittedValue
      }
    }, { merge: true })
    setEdit(null)
    setEdittedValue({ word: '', translation: '' })
  }

  function handleAddEdit(cardKey) {
    return () => {
      console.log(allCards[cardKey])
      setEdit(cardKey)
      setEdittedValue(allCards[cardKey])
    }
  }

  function handleDelete(cardKey) {
    return async () => {
      const tempObj = { ...allCards }
      delete tempObj[cardKey]

      setAllCards(tempObj)
      const userRef = doc(db, 'users', currentUser.uid)
      await setDoc(userRef, {
        'allCards': {
          [cardKey]: deleteField()
        }
      }, { merge: true })
    }
  }
  
  const handleOptionChange = (event, card) => {
    const optionValue = event.target.value;
    const currentDate = new Date();
    let addData;

    if (optionValue === 'easy') {
      addData = addDays(currentDate, 7);
    } else if (optionValue === 'medium') {
      addData = addDays(currentDate, 3);
    } else if (optionValue === 'difficult') {
      addData = addDays(currentDate, 1);
    }

    const formattedDate = format(addData, 'dd/MM');
    setNewData(formattedDate);
    setCardId(card)
  };

  async function handleUpdateAndAddActivity() {
    try {
      await handleUpdateData();
      await addActivity();
    } catch (error) {
      console.error('Erro ao executar as funções:', error);
    }
  }
  
  async function handleUpdateData() {
    if (!setNewData || !setCardId) {
      return;
    }
    const newKey = cardId
    setAllCards({ ...allCards, [newKey]: { timeCard: newData } })
    const userRef = doc(db, 'users', currentUser.uid)
    await setDoc(userRef, {
      'allCards': {
        [newKey]: {
          timeCard: newData
        }
      }
    }, { merge: true })
    setCardId(null)
    setNewData({ timeCard: '' })
  };

  async function addActivity() {
    
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd/MM/yyyy');
    const getLengthAllActivities = Object.keys(allActivities).length
    const newID = Object.keys(allActivities).length === 0 ? 1 : Math.max(...Object.keys(allActivities)) + 1

    if (allActivities[getLengthAllActivities].day === formattedDate) {
      const userRef = doc(db, 'users', currentUser.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userActivities = userDoc.data().allActivities[getLengthAllActivities];
        const currentCounter = userActivities.counter;
        const newCounter = currentCounter + 1;

        await setDoc(userRef, { 
          'allActivities': {
            [getLengthAllActivities]: {
              counter: newCounter
            }
          } 
        }, { merge: true });
      }
      
    } else {  
      setAllActivities({
        ...allActivities,
        [newID]: {
          counter: 1,
          day: formattedDate
        }
      });
      const userRef = doc(db, 'users', currentUser.uid);
      await setDoc(userRef, { 
        allActivities: {
          [newID]: {
            counter: 1,
            day: formattedDate
          }
        } 
      }, { merge: true });
    }
    
  }

	return { 
		word, 
		setWord, 
		translation, 
		setTranslation, 
		handleButtonClick, 
		loading, 
		allCards, 
    allActivities,
		edit, 
		edittedValue, 
		setEdittedValue,
		handleEditCard, 
		handleAddEdit, 
		handleDelete,
    handleOptionChange,
    handleUpdateAndAddActivity,
    newData
	}
}