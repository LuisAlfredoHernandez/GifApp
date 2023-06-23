import { useState } from "react";

const GifApp = () => {

    const [categories, setCategories] = useState(['onePunch', 'dragonBall']);
    console.log(categories)
    return (
        <>
            <h1>GifApp</h1>
            <ol>
                {categories.map(cat=> <li key={cat}>{cat}</li>)}
            </ol>
        </>
    );
}

export default GifApp;