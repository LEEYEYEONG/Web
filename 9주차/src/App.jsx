// App.jsx
import React, { useState } from "react";
import "./App.css";
import useStore from "./store"; // Zustand store import

function App() {
  const albums = useStore((state) => state.albums);
  const increaseAmount = useStore((state) => state.increaseAmount);
  const decreaseAmount = useStore((state) => state.decreaseAmount);
  const clearCart = useStore((state) => state.clearCart);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 총 금액 계산
  const totalPrice = albums.reduce((total, album) => total + album.price * album.amount, 0);

  return (
    <div className="app">
      <header className="header">
        <h1>UMC PlayList</h1>
        <div className="cart">
          <span>🛒</span>
          <span>{albums.reduce((total, album) => total + album.amount, 0)}</span>
        </div>
      </header>
      <main>
        <h2>당신이 선택한 음반</h2>
        <ul className="album-list">
          {albums.map((album) => (
            <li key={album.id} className="album-item">
              <img src={album.img} alt={album.title} />
              <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
                <p>₩ {album.price.toLocaleString()}</p>
              </div>
              <div className="amount-control">
                <button onClick={() => decreaseAmount(album.id)}>⬇️</button>
                <span>{album.amount}</span>
                <button onClick={() => increaseAmount(album.id)}>⬆️</button>
              </div>
            </li>
          ))}
        </ul>
        <footer>
          <h3>총 금액: ₩ {totalPrice.toLocaleString()}</h3>
          <button onClick={() => setIsModalOpen(true)}>장바구니 초기화</button>
        </footer>
      </main>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>정말로 장바구니를 초기화하시겠습니까?</p>
            <button onClick={() => { clearCart(); setIsModalOpen(false); }}>네</button>
            <button onClick={() => setIsModalOpen(false)}>아니요</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;