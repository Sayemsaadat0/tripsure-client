import MessengerCustomerChat from "react-messenger-customer-chat";

const CustomChatBot = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId={process.env.VITE_CHAT_BOT_PAGEID}
        appId={process.env.VITE_CHAT_BOT_APPID}
      />
    </div>
  );
};

export default CustomChatBot;
