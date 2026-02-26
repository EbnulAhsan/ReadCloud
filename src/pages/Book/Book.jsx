import React from 'react';

import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';



const Book = ({ singleBook }) => {
    // const data = use(bookpromise)
    // console.log(data);

    // another wat of data loading

    const { bookName,  image, rating, category, tags, yearOfPublishing, publisher }
        = singleBook;

    // console.log(singleBook);
    return (
        <Link to={`/bookDetails/${singleBook.bookId}`}>

            <div
                className="
      group relative
      card bg-base-100 w-96
      border p-6
      rounded-2xl
      shadow-md shadow-gray-300
      overflow-hidden

      transition-all duration-500 ease-out
      hover:-translate-y-3
      hover:shadow-2xl hover:shadow-indigo-300/50
    "
            >

                {/* Glow Effect */}
                <div
                    className="
        absolute inset-0
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        opacity-0 group-hover:opacity-20
        blur-2xl
        transition duration-500
      "
                ></div>

                {/* Image */}
                <figure className="relative z-10 p-4 bg-gray-100 rounded-xl w-2/3 mx-auto overflow-hidden">

                    <img
                        className="
          h-[160px] w-full object-contain
          transition duration-500
          group-hover:scale-110
        "
                        src={image}
                        alt={bookName}
                    />

                </figure>

                {/* Body */}
                <div
                    className="
        relative z-10
        card-body
        transition duration-500
        group-hover:scale-[1.02]
      "
                >

                    {/* Tags */}
                    <div className="flex justify-center gap-3 mb-3">
                        {
                            tags.map((singleTag, index) => (
                                <div
                                    key={index}
                                    className="
                badge badge-outline
                transition
                group-hover:bg-indigo-600
                group-hover:text-white
                group-hover:border-indigo-600
              "
                                >
                                    {singleTag}
                                </div>
                            ))
                        }
                    </div>

                    {/* Title */}
                    <h2
                        className="
          card-title
          transition
          group-hover:text-indigo-600
        "
                    >
                        {bookName}

                        <div className="badge badge-secondary">
                            {yearOfPublishing}
                        </div>
                    </h2>

                    <p className="text-gray-600">
                        Publisher: {publisher}
                    </p>

                    <div className="border-t-2 border-dashed my-3"></div>

                    <p className="text-sm text-gray-500">
                        A premium collection for passionate readers.
                    </p>

                    {/* Footer */}
                    <div className="card-actions justify-end mt-4 gap-2">

                        <div
                            className="
            badge badge-outline
            transition
            group-hover:bg-purple-600
            group-hover:text-white
            group-hover:border-purple-600
          "
                        >
                            {category}
                        </div>

                        <div
                            className="
            badge badge-outline flex items-center gap-1
            transition
            group-hover:bg-yellow-500
            group-hover:text-white
            group-hover:border-yellow-500
          "
                        >
                            {rating}
                            <FaStarHalfAlt />
                        </div>

                    </div>

                </div>

            </div>

        </Link>
    );
};

export default Book;