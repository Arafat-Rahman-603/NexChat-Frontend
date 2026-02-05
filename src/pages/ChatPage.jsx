import { useChatStore } from "../store/useChatStore";

import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full h-[90vh] sm:h-screen mx-auto overflow-hidden">
      <BorderAnimatedContainer>
        <div className="relative flex ">

          
          <div
            className={`
              fixed md:static inset-0 z-20
              bg-slate-800/95 md:bg-slate-800/50
              backdrop-blur-sm
              flex flex-col
              w-full md:w-80
              transition-transform duration-300 ease-in-out
              ${selectedUser ? "-translate-x-full md:translate-x-0" : "translate-x-0"}
            `}
          >
            
            <div className="sticky top-0 z-10 bg-slate-800/90 backdrop-blur-md">
              <ProfileHeader />
              <ActiveTabSwitch />
            </div>

            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {activeTab === "chats" ? <ChatsList /> : <ContactList />}
            </div>
          </div>

          
          <div
            className={`
              flex-1 flex flex-col
              bg-slate-900/50 backdrop-blur-sm w-full md:w-auto lg:w-[71vw]
              transition-all duration-300 ease-in-out
              ${selectedUser ? "flex" : "hidden md:flex"}
            `}
          >
            {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
          </div>

        </div>
      </BorderAnimatedContainer>
    </div>
  );
}

export default ChatPage;
