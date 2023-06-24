import { useState } from 'react';


export const AddCategory = ({ onAddCategory }) => {
    const [inputText, setInputText] = useState('')

    const handleChange = ({ target }) => {
        setInputText(target.value)
    }

    const handlePerform = (event) => {
        event.preventDefault();
        if (inputText.trim().length <= 1) return
        setInputText('')
        onAddCategory(inputText.trim())
    }

    return (
        <form onSubmit={handlePerform}>
            <input type="text" onChange={handleChange} value={inputText} />
        </form>
    );
}
