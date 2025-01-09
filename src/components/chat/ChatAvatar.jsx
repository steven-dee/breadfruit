function ChatAvatar() {
  return (
    <div className="relative">
      <img
        src="/tanya.jpg" 
        alt="Tanya"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="absolute -right-0.5 top-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
    </div>
  );
}

export default ChatAvatar;