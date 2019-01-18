const messages = [
    {
      messages_id: 1, handle: 'ElonMusk', text: 'I\'d rather be optimistic and wrong than pessimistic and right.', star_count: 5, replies: [], timestamp: 1500000000000
    },
    {
      messages_id: 2, handle: 'AbrahamLincoln', text: 'Nearly all men can stand adversity, but if you want to test a man\'s character, give him power.', star_count: 4, replies: [], timestamp: 1000000000000
    },
    {
      messages_id: 3, handle: 'Yoda', text: 'You must unlearn what you have learned.', star_count: 3, replies: [], timestamp: 100000000000
    },
    {
      messages_id: 4, handle: 'Anonymous', text: 'Forget the past. No one becomes successful in the past.', star_count: 2, replies: [], timestamp: 10000000000
    },
    {
      messages_id: 5, handle: 'HannibalLecter', text: 'A census taker tried to quantify me once...', star_count: 1, replies: [], timestamp: 0
    }
  ];
  
  export function getMessages() {
    return new Promise((resolve) => {
      resolve({ success: true, messages });
    });
  }