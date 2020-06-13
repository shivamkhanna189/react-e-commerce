

export const addItemsToCart = (cartItems , itemToBeAdd)=>{

    const isItemPresent = cartItems.find(item=>item.id == itemToBeAdd.id);

    if(isItemPresent){
        return cartItems.map(item=>{
            return item.id == isItemPresent.id ? 
            {...item, quantity :item.quantity+1} :
                item; 
        })
        
    }else{
        return [...cartItems,{...itemToBeAdd ,quantity : 1}];
    }
    
}
export const removeItemsFromCart = (cartItems, itemToBeRemoved)=>{
   
    cartItems = cartItems.map(item=>item.id == itemToBeRemoved.id ? {...item,quantity : item.quantity-1}: item)
    return cartItems.filter(data=>data.quantity !=0) ;

}