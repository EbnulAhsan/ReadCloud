const getStoredBooks = () => {
    const storedBookSTR = localStorage.getItem("readBooks");

    if (storedBookSTR) {
        const stroedBooksData = JSON.parse(storedBookSTR);
        return stroedBooksData;
    }
    else {
        return [];
    }
}


const addToOdb = (id) => {
    const storedBooksData = getStoredBooks();

    if (storedBooksData.includes(id)) {
        alert("You have already marked this book as read!");
    }
    else {
        storedBooksData.push(id);
        localStorage.setItem("readBooks", JSON.stringify(storedBooksData));



    }
}

//   for wishlist button

// Get Wishlist from LocalStorage
const getStoredWishBooks = () => {
    const storedWishSTR = localStorage.getItem("wishBooks");

    if (storedWishSTR) {
        return JSON.parse(storedWishSTR);
    }
    else {
        return [];
    }
};

// Add to Wishlist
const addToWishlist = (id) => {
    const storedWishData = getStoredWishBooks();

    if (storedWishData.includes(id)) {
        alert("This book is already in your wishlist!");
    }
    else {
        storedWishData.push(id);
        localStorage.setItem("wishBooks", JSON.stringify(storedWishData));
        alert("Added to wishlist ❤️");
    }
};



export { addToOdb, addToWishlist };