import random
books = [
    {
        "id": i + 1,
        "title": f"Book Title {i + 1}: The {['Fiction', 'Sci-Fi', 'Mystery', 'Fantasy', 'Thriller', 'Non-Fiction', 'Biography', 'History', 'Romance', 'Self-Help'][i % 10]} Chronicles",
        "author": f"Author {chr(65 + (i % 26))}. {(i * 7) % 50 + 1}",
        "isbn": f"978-0-{(10000 + i * 1234) % 90000}-{(1000 + i * 567) % 9000}-{i % 10}",
        "genre": ['Fiction', 'Sci-Fi', 'Mystery', 'Fantasy', 'Thriller', 'Non-Fiction', 'Biography', 'History', 'Romance', 'Self-Help'][i % 10],
        "published_year": 1970 + (i * 2) % 54,
        "page_count": 150 + ((i * 37) % 650),
        "price": round(9.99 + (i * 2.5) % 35, 2),
        "in_stock": i % 3 != 0,
        "format": ['Hardcover', 'Paperback', 'eBook', 'Audiobook'][i % 4],
        "stock_amount": random.randint(0,100)
    }
    for i in range(50)
]

# Print the first book as a preview
import pprint
pprint.pprint(books)