import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BooksCard from '../BooksCard/BooksCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Books = () => {

    const navigation = useNavigation()
  console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <LoadingSpinner/>
  }

    // const [books, setBooks] = useState([]);
    // useEffect( ()=>{
    //     fetch('https://api.itbook.store/1.0/new')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])

    const booksData = useLoaderData();
    const { books } = booksData;

    // console.log(books);


    return (
        <div className='my-container px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 lg:py-20'>

            <div className='grid gap-6 my-8 lg:grid-cols-4 md:grid-cols-2'>
                {
                    books.map(book => <BooksCard
                    key={book.isbn13}
                    book={book}
                    ></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Books;