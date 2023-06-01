import React, { useState } from 'react';
import CartItem from './CartItem';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      _id: '6458fa323c85fe763543d4c5',
      menuId: '6423315d79140f65b09049c0',
      jumlah: 8,
      menuItems: {
        nama: 'Ayam Betutu',
        harga: '41500',
        desk: 'Ayam sudah muak dengan error',
        tag: '',
        kategori: '',
        rating: '',
        imgURL: 'https://res.cloudinary.com/prema-cloud/image/upload/v1680027994/yidcskeine6f8kmkqafq.jpg'
      }
    },
    {
      _id: '645902533c85fe763543d4c6',
      menuId: '642338a279140f65b09049c1',
      jumlah: 10,
      menuItems: {
        nama: 'Pecel Encim',
        harga: '20000',
        desk: 'Pecel aku ketemu error mulu',
        tag: '',
        kategori: '',
        rating: '',
        imgURL: 'https://res.cloudinary.com/prema-cloud/image/upload/v1680029855/xfpffwlrv4awjp7zk7kw.jpg'
      }
    }
  ]);

  const handleUpdateJumlah = (itemId: string, newJumlah: number) => {
    const updatedItems = cartItems.map((item) => {
      if (item._id === itemId) {
        return { ...item, jumlah: newJumlah };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const calculateTotalPrice = (): number => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const itemPrice = Number(item.menuItems.harga) * item.jumlah;
      totalPrice += itemPrice;
    });

    return totalPrice;
  };

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item._id} cartItem={item} onUpdateJumlah={handleUpdateJumlah} />
      ))}
      <div>Total Price: {calculateTotalPrice()}</div>
    </div>
  );
};

export default CartPage;
