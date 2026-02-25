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
# print(f"Highest rated books are {highest_rated_book}")

print("Highest rated books are " + ", ".join(highest_rated_book[:-1]) + " and " + highest_rated_book[-1])


#Task 1.3.2 (Home assignment)
#Get the rating from user and match with books in the store

#Expected Output
#Case 1:
#Please provide rating: 4.7
#The books available are Sapiens, A Brief History of Time and Clean Code 
#Case 2:
#Please provide rating: 4.9
#The book available is Sapiens 
#Case 3:
#Please provide rating: 5
#There no books available at this rating 😅

rating = float(input("Please provide rating: "))

matched_books = []

for book in books:
    if book["rating"] == rating:
        matched_books.append(book["title"])

if len(matched_books) > 1:
    print("The books available are " + ", ".join(matched_books[:-1]) + " and " + matched_books[-1])
elif len(matched_books) == 1:
    print("The book available is " + matched_books[0])
else:
    print("There no books available at this rating 😅")
