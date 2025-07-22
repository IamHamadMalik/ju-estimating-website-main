import { MessageCircle } from "lucide-react"

export default function FloatingChat() {
  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            20% { transform: translateY(-12px); }
            40% { transform: translateY(0); }
            60% { transform: translateY(-8px); }
            80% { transform: translateY(0); }
          }
          .floating-chat-animate {
            animation: bounce 1s ease;
            animation-iteration-count: infinite;
            animation-delay: 3s;
            /* Only bounce every 3s */
          }
        `}
      </style>
      <a
        href="https://reach.at/juestimating"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-200 floating-chat-animate"
        aria-label="Chat with us"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  )
}