import "./ChatsList.css";
import { ChatNode } from "../ChatNode/ChatNode";
import { getDummyChatNodes } from "../../../__tests__/dummy_data";

export function ChatsList() {
  return (
    <div className="list-container">
      {getDummyChatNodes(5).map((data) => (
        <ChatNode key={data.id} nodeDetails={data} />
      ))}
    </div>
  );
}
