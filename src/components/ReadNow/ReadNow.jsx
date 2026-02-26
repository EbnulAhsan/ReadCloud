import React from 'react';
import { useLoaderData, useParams } from 'react-router';



const ReadNow = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
    const singleBook = data ? data.find(book => book.bookId === bookId) : null;

    // const { bookName, image } = singleBook || {};

    


    if (!singleBook) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold text-red-600">Book not found</h1>
        </div>;
    }





    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

            <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

                {/* Left: Book Image */}
                <div className="flex items-center justify-center">
                    <img
                        src={singleBook.image}
                        alt={singleBook.bookName}
                        className="w-72 h-auto rounded-xl shadow-lg"
                    />
                </div>

                {/* Right: Book Info */}
                <div className="flex flex-col justify-center">

                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {singleBook.bookName}
                    </h1>

                    <p className="text-gray-500 mb-1">
                        By: <span className="font-medium">{singleBook.author || "Unknown"}</span>
                    </p>

                    <p className="text-sm text-indigo-600 mb-4">
                        {singleBook.email || "example@gmail.com"}
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-5">
                        {singleBook.description ||
                            "This is an amazing book filled with knowledge and inspiration. Perfect for passionate readers."}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 mb-5">
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                            #Young Adult
                        </span>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                            #Identity
                        </span>
                    </div>

                    {/* Extra Info */}
                    <div className="text-sm text-gray-600 space-y-1 mb-6">
                        <p><b>Pages:</b> {singleBook.pages || 200}</p>
                        <p><b>Publisher:</b> {singleBook.publisher || "Unknown"}</p>
                        <p><b>Year:</b> {singleBook.year || "2024"}</p>
                        <p><b>Rating:</b> ⭐ {singleBook.rating || "4.5"}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">

                        <button
                            className="
                bg-indigo-600 text-white
                px-6 py-2 rounded-lg
                font-semibold
                hover:bg-indigo-700
                transition
              "
                        >
                            Read 📖
                        </button>

                        <button
                            className="
                bg-teal-500 text-white
                px-6 py-2 rounded-lg
                font-semibold
                hover:bg-teal-600
                transition
              "
                        >
                            Wishlist ❤️
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ReadNow;