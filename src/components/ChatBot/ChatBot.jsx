import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatBot.module.css';

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (e) => {
  e.preventDefault();
  const input = e.target.elements.chatInput;
  const text = input.value.trim();
  if (!text) return;

  // Show user's message immediately
  setMessages((prev) => [...prev, { text, from: 'user' }]);
  input.value = '';

  try {
    const res = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ message: text }),
});

    const data = await res.json();

    // Show bot's reply
    setMessages((prev) => [...prev, { text: data.reply, from: 'bot' }]);
  } catch (err) {
    console.error('Error talking to backend:', err);
    setMessages((prev) => [
      ...prev,
      {
        text: 'Oops! Something went wrong while contacting the bot.',
        from: 'bot',
      },
    ]);
  }
};

  return (
    <div className={styles.chatbotContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.chatHeader}>
              <h3 className={styles.heading}>How can we help you?</h3>
              <button onClick={toggleChat} className={styles.closeButton}>
                ×
              </button>
            </div>

            <div className={styles.chatContent}>
              {messages.length === 0 && <p>Welcome! Ask me anything.</p>}
              {messages.map((msg, index) => (
                <p
                  key={index}
                  className={`${styles.message} ${
                    msg.from === 'user' ? styles.userMessage : ''
                  }`}
                >
                  {msg.text}
                </p>
              ))}
            </div>

            <form onSubmit={handleSend} className={styles.inputArea}>
              <input
                type="text"
                name="chatInput"
                placeholder="Type your message..."
                autoComplete="off"
              />
              <button type="submit">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

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
