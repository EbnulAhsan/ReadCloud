import React from 'react';

import { Link, useParams } from 'react-router';
import { useLoaderData } from 'react-router';





const BookDetails = () => {
    const { id } = useParams();

    const data = useLoaderData();
    const bookId = parseInt(id);


    const singleBook = data.find(book => book.bookId === bookId);


    const { bookName, image } = singleBook || {};


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">

            <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">

                {/* Image Section */}
                <div className="flex items-center justify-center bg-gray-50 p-6">
                    <img
                        src={image}
                        alt={bookName}
                        className="w-full h-96 object-contain rounded-xl hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Info Section */}
                <div className="p-8 flex flex-col justify-center">

                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        {bookName}
                    </h1>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Discover this amazing book and explore its story, ideas, and knowledge.
                        Perfect for readers who love quality content.
                    </p>

                    <div className="flex gap-4">

                        {/* Read Now Button */}

                        <Link to={`/readnow/${singleBook.bookId}`}>
                            <button
                                className="
      group relative overflow-hidden
      bg-indigo-600 text-white
      px-6 py-3 rounded-lg font-semibold

      transition-all duration-300
      hover:scale-105 hover:shadow-xl hover:shadow-indigo-400/50
    "
                            >
                                <span
                                    className="
        absolute inset-0
        bg-gradient-to-r from-indigo-500 to-purple-600
        opacity-0 group-hover:opacity-100
        transition duration-300
      "
                                ></span>

                                <span className="relative flex items-center gap-2">
                                    Book Details 📖
                                    <span className="transform transition group-hover:translate-x-1">
                                        →
                                    </span>
                                </span>
                            </button></Link>




                        {/* Wishlist Button */}
                        <button
                            className="
      group relative overflow-hidden
      bg-pink-600 text-white
      px-6 py-3 rounded-lg font-semibold

      transition-all duration-300
      hover:scale-105 hover:shadow-xl hover:shadow-pink-400/50
    "
                        >
                            <span
                                className="
        absolute inset-0
        bg-gradient-to-r from-pink-500 to-red-500
        opacity-0 group-hover:opacity-100
        transition duration-300
      "
                            ></span>

                            <span className="relative flex items-center gap-2">
                                Wishlist ❤️
                                <span className="transform transition group-hover:-translate-y-0.5">
                                    ↑
                                </span>
                            </span>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BookDetails;