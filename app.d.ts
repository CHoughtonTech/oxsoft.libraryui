type Book = {
  id: string
  title: string
  authorId: string
  genre: string
  isRead: boolean
  rating?: number
  publisher?: string
  yearPublished: number
}

type Author = {
  id: string
  firstName: string
  lastName: string
  dob?: Date
}
