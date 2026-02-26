import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import { Suspense } from 'react';



const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);

    //one way of data loading
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             // 
    //             setAllBooks(data);
    //         })
    // }, []);


    //2nd way of data loading

    // const bookpromise = fetch("booksData.json").then(res => res.json());

    // useEffect(() => {
    //     bookpromise.then(data => setAllBooks(data));
    // }, []);










    return (
        <div>


            <Suspense fallback={<div>Loading...</div>}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 '>
                    {

                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)

                    }
               </div>
            </Suspense>
        </div>
    );
};

export default Books;