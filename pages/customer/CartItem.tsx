import React, { useState } from 'react';

interface CartItemProps {
  cartItem: {
    _id: string;
    menuId: string;
    jumlah: number;
    menuItems: {
      nama: string;
      harga: string;
      desk: string;
      tag: string;
      kategori: string;
      rating: string;
      imgURL: string;
    };
  };
  onUpdateJumlah: (itemId: string, newJumlah: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, onUpdateJumlah }) => {
  const [jumlah, setJumlah] = useState(cartItem.jumlah);

  const handleIncrement = () => {
    const newJumlah = jumlah + 1;
    setJumlah(newJumlah);
    onUpdateJumlah(cartItem._id, newJumlah);
  };

  const handleDecrement = () => {
    const newJumlah = jumlah > 0 ? jumlah - 1 : 0;
    setJumlah(newJumlah);
    onUpdateJumlah(cartItem._id, newJumlah);
  };

  return (
    <div>
      <h3>{cartItem.menuItems.nama}</h3>
      <p>Jumlah: {jumlah}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default CartItem;
