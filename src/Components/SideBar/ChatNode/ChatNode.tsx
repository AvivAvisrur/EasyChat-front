import "./ChatNode.css";
import defaultPicture from '../../../Assets/images/default_picture.png';

export type ChatNodeType = {
    id: number | string,
    name: string,
    time: Date,
    lastMessage: string,
    unreadCounter: number
}

type Props = {
    nodeDetails: ChatNodeType
}

export function ChatNode({nodeDetails}: Props) {

    return (
        <div className="chat-container">
            <img className="rounded-image" src={defaultPicture} alt="profile"/>
            <div className="chat-info">
                <div className="name-time-box">
                    <h3>{nodeDetails.name}</h3>
                    <time>{nodeDetails.time.getHours() + ':' + nodeDetails.time.getMinutes()}</time>
                </div>
                <div className="lastMessage-unread-box">
                    <p>{nodeDetails.lastMessage}</p>
                    {!!nodeDetails.unreadCounter && <div className="unreaded-counter">{nodeDetails.unreadCounter}</div>} 
                </div>
            </div>
        </div>
    );
}