import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from 'firebase/firestore'

import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'

import { db } from '../../lib/firebase'

export type GuestbookEntry = {
  id?: string
  name: string
  message: string
  createdAt?: Date
}

const COL = 'guestbook'

export async function createEntry(name: string, message: string) {
  const ref = collection(db, COL)
  await addDoc(ref, {
    name,
    message,
    createdAt: serverTimestamp(),
  })
}

export type Page = { items: GuestbookEntry[]; cursor: QueryDocumentSnapshot<DocumentData> | null }

export async function fetchEntriesPage(pageSize = 20, after?: QueryDocumentSnapshot<DocumentData> | null): Promise<Page> {
  const base = collection(db, COL)
  const q = after
    ? query(base, orderBy('createdAt', 'desc'), startAfter(after), limit(pageSize))
    : query(base, orderBy('createdAt', 'desc'), limit(pageSize))

  const snap = await getDocs(q)
  const items = snap.docs.map(d => {
    const data = d.data()
    return {
      id: d.id,
      name: String(data.name ?? ''),
      message: String(data.message ?? ''),
      createdAt: data.createdAt?.toDate?.() ?? undefined,
    } as GuestbookEntry
  })
  const cursor = snap.docs.length ? snap.docs[snap.docs.length - 1] : null
  return { items, cursor }
}
