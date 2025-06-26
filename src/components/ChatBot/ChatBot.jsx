import { useState } from 'react';
import styles from './ChatBot.module.css';

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3 className={styles.heading}>How can we help you?</h3>
            <button onClick={toggleChat} className={styles.closeButton}>
              ×
            </button>
          </div>
          <div className={styles.chatContent}>
            {/* Your chat content goes here */}
            <p>Welcome! Ask me anything.</p>
          </div>
          <div className={styles.inputArea}>
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
      
      <button onClick={toggleChat} className={styles.chatbotButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ChatbotIcon;