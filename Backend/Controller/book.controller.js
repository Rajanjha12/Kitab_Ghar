import Book from '../model/book.model.js';

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    
    // If no books found
    if (!books || books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error.message);
    res.status(500).json({ message: "Failed to fetch books", error: error.message });
  }
};
