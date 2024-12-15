// store.js
import { create } from 'zustand';
import cartItems from '../src/constant/cardItems';

const useStore = create((set) => ({
  albums: cartItems,
  increaseAmount: (id) =>
    set((state) => ({
      albums: state.albums.map((album) =>
        album.id === id ? { ...album, amount: album.amount + 1 } : album
      ),
    })),
  decreaseAmount: (id) =>
    set((state) => ({
      albums: state.albums
        .map((album) =>
          album.id === id ? { ...album, amount: album.amount - 1 } : album
        )
        .filter((album) => album.amount >= 1),
    })),
  clearCart: () => set({ albums: [] }),
}));

export default useStore;