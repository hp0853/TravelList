import { useState } from 'react';
import { Item } from './Item';

export function PackingList({ items, onDeleteItem, onUpdateItem, onClearList }) {
   const [sortBy, setSortBy] = useState("input");

   let sortedItems;
   if (sortBy === 'input') {
      sortedItems = items;
   }
   else if (sortBy === 'description') {
      sortedItems = [...items].sort((a, b) => new Intl.Collator('vi').compare(a.description, b.description));
   }
   else if (sortBy === 'packed') {
      sortedItems = [...items].sort((a, b) => b.packed - a.packed);
   }
   else {
      sortedItems = [...items].sort((a, b) => a.quantity - b.quantity);
   }

   return (
      <div className="list">
         <ul>
            {sortedItems.map(i => <Item
               item={i}
               key={i.id}
               onDeleteItem={onDeleteItem}
               onUpdateItem={onUpdateItem} />
            )}
         </ul>

         <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
               <option value="input">Sort by input order</option>
               <option value="description">Sort by description</option>
               <option value="packed">Sort by packed status</option>
               <option value="quantity">Sort by item quantity</option>
            </select>
            <button onClick={onClearList}>CLear list</button>
         </div>
      </div>
   );
}
