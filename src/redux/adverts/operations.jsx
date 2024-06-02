import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from './firebaseConfig';
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (count, thunkAPI) => {
    try {
      const collectionRef = collection(db, 'cars');
      let query_custom;
      if (count.page === 1) {
        query_custom = query(collectionRef, orderBy('id'), limit(count.limit));
      } else {
        const lastVisibleId = thunkAPI.getState().adverts.lastVisibleId;
        const lastVisibleDoc = await getDoc(doc(db, 'cars', lastVisibleId));
        query_custom = query(
          collectionRef,
          orderBy('id'),
          startAfter(lastVisibleDoc),
          limit(count.limit)
        );
      }
      const querySnapshot = await getDocs(query_custom);
      const adverts = querySnapshot.docs.map(doc => ({
        ...doc.data(),
      }));
      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      return { adverts, lastVisibleId: lastVisible ? lastVisible.id : null };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
