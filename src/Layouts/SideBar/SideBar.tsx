import { ChatsList } from '../../Components/SideBar/ChatsList/ChatsList';
import { Search } from '../../Components/SideBar/Search/Search';
import { SidePanel } from '../../Components/SideBar/SidePanel/SidePanel';
import './SideBar.css'


export function Sidebar() {
    return (
        <aside className="side-container">
            <SidePanel/>
            <Search/>
            <ChatsList/>
        </aside>      
    )
}