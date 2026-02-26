import React from 'react';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Text Section */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to ReadCloud
                    </h1>

                    <p className="text-xl md:text-2xl mb-8">
                        Your ultimate destination for all your reading needs
                    </p>

                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                        Explore Books
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
                        alt="Books"
                        className="w-[300px] md:w-[400px] rounded-xl shadow-lg"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;