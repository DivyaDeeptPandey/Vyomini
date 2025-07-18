import { useEffect } from 'react';
import styles from './ChatBot.module.css';
import { MessageCircle } from 'lucide-react';

const ChatBot = () => {
  useEffect(() => {
    if (document.getElementById('chatbase-script')) return;

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.id = 'chatbase-script';
    script.setAttribute('chatbotId', 'iCSnSdeolE73SIxLyT91h'); // replace with your ID
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);
  }, []);

  const openChatManually = () => {
    const chatBubble = document.querySelector('#chatbase-bubble-button');
    if (chatBubble) {
      chatBubble.click(); // Simulates a user clicking the default Chatbase bubble
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <button className={styles.chatbotButton} onClick={openChatManually}>
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default ChatBot;
