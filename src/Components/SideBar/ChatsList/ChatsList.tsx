import "./ChatsList.css"
import { ChatNode } from "../ChatNode/ChatNode";
import {dummyChatNodes} from "../../../__tests__/dummy_data"


export function ChatsList() {

    return (
        <div className="list-container">
            {dummyChatNodes.map(data => (
                <ChatNode key={data.id} nodeDetails={data}/>
            ))}
        </div>
    );
}

//<ChatNode nodeDetails={dummyChatNodes[0]}/>