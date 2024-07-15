import { useState } from 'react';

export default function Form({ onAddItem }) {
   var selectOptions = Array.from({ length: 20 }, (_, i) => i + 1);
   const [description, setDescription] = useState("");
   const [quantity, setQuantity] = useState(1);

   function handleFormSubmit(e) {
      e.preventDefault();

      const newItem = { id: Date.now(), description, quantity, packed: false };
      onAddItem(newItem);

      setDescription("");
      setQuantity(1);
   }

   return (
      <form className="add-form" onSubmit={handleFormSubmit}>
         <h3>What do you need for your 😍 trip?</h3>
         <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
         >
            {selectOptions.map(n => (
               <option value={n} key={n}>{n}</option>
            ))}
         </select>
         <input
            type='text'
            placeholder='Item...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <button>Add</button>
      </form>
   );
}