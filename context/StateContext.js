import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    }
    return [];
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('totalPrice');
      return localData ? JSON.parse(localData) : 0;
    }
    return 0;
  });
  const [totalQuantities, setTotalQuantities] = useState(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('totalQuantities');
      return localData ? JSON.parse(localData) : 0;
    }
    return 0;
  });
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
      localStorage.setItem('totalQuantities', JSON.stringify(totalQuantities));
    }
  }, [cartItems, totalPrice, totalQuantities]);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          };
        }
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${quantity} ${product.name} added to the cart.`);
    setQty(1);
  } 

  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuanitity = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id);

    if(value === 'inc') {
      const newCartItems = cartItems.map((item) => 
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        const newCartItems = cartItems.map((item) => 
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
      }
    }
  }

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        clearCart,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);
