import "./NewChatList.css";
import { ChatNode } from "../ChatNode/ChatNode";
import { getDummyChatNodes } from "../../../__tests__/dummy_data";
import { useSlideContext } from "../../../context/slideContext";

export function NewChatList() {
  const { slideClass } = useSlideContext();
  const sliderClassNames = `new-list-container ${slideClass}`;
  //console.log(sliderClassNames);
  return (
    <div className={sliderClassNames}>
      {getDummyChatNodes().map((data) => (
        <ChatNode key={data.id} nodeDetails={data} isNewChat={true} />
      ))}
    </div>
  );
}
