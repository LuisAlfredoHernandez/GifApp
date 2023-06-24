import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const GifApp = () => {

    const [categories, setCategories] = useState(['dragonBall']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>GifApp</h1>
            <AddCategory
                onAddCategory={onAddCategory}
            />
            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />)
            )}
        </>
    );
}

export default GifApp;