# task

books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]

titles = []
for title in books:
    titles.append(title["title"])
print(titles)

genres =[]

for book in books:
    # print(book["genre"])
    if (book["genre"]== "Fiction"):
        genres.append(book["title"])
print(genres)



# Task 1.3.1 (Home assignment)
# Please provide Highest rated books (>= 4.7)

# Expected Output
# Highest rated books are Sapiens, A Brief History of Time and Clean Code 

highest_rated_book = []
for book in books:
    if (book["rating"]>=4.7):
        highest_rated_book.append(book["title"])
print(f"Highest rated books are {highest_rated_book}")

