import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';


const Message = ({ message }) => {
    const timestamp = new Date(message.timestamp);
    
    return (
        <div className='Message'>
            <p>@{message.handle}</p>
            <p>{message.text}</p>
            <div>
                <p><i className="fa fa-star" /> {message.star_count}</p>
                <p>{timestamp.toDateString()}</p>
            </div>
        </div>
    );
};

class MessageList extends Component {
    render() {

        const { messages } = this.props;

        return  (
            <div className='MessageList'>
                {messages.map(message => 
                    <Message 
                        key={message.messages_id} 
                        message={message} 
                    />
                )}
            </div>
        )
    }
}

export default MessageList;