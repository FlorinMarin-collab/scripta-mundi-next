export default function HomePage() {
  const books = [
    { id: 1, title: "The Book of Sand", author: "Jorge Luis Borges", year: 1975 },
    { id: 2, title: "Ficciones", author: "Jorge Luis Borges", year: 1944 },
  ];

  const filteredBooks = books.filter((book) => book.year > 1950);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id} style={{ marginBottom: '1rem' }}>
            <strong>{book.title}</strong> by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
