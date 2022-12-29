import { ChatsList } from "../../Components/SideBar/ChatsList/ChatsList";
import { NewChatList } from "../../Components/SideBar/NewChatList/NewChatList";
import { Search } from "../../Components/SideBar/Search/Search";
import { SidePanel } from "../../Components/SideBar/SidePanel/SidePanel";
import { SlideProvider } from "../../context/slideContext";
import "./SideBar.css";

export function Sidebar() {
  return (
    <aside className="side-container">
      <SlideProvider>
        <SidePanel />
        <Search />
        <div className="slide-container">
          <ChatsList />
          <NewChatList />
        </div>
      </SlideProvider>
    </aside>
  );
}
