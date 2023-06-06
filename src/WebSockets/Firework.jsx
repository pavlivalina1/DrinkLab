/* istanbul ignore file */

import React, { useState, useEffect } from 'react';
import  Like  from "./heart.png";
import  Dislike  from "./broken-heart.png";
import './Firework.css'


export const Firework = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');
    setSocket(socket);

    socket.onmessage = ('newLikes', (newData) => {
      let string = newData.data;
      for(let i=0; i<string.length; i+=1)
      {
        if(string[i] === ',')
        {
          setLikes(parseInt(string.substring(0, i)));
          setDislikes(parseInt(string.substring(i+1, string.length)));
          console.log(likes);
          break;
        }
      }
    });

  }, []);

  const handleClick1 = () => {
    setLikes(likes + 1);
    socket.send('like');
  };

  const handleClick2 = () => {
    setDislikes(dislikes + 1);
    socket.send('dislike');
  };

  return (
    <div className='web-socket-container'>
      Do yo like Drink Lab?
      <div className="buttons-container">
        <div className='like-button'>
         <img src={Like}  onClick={handleClick1}/>
         <p>{likes}</p>
        </div>
        <div className='dislike-button'>
         <img src={Dislike}  onClick={handleClick2}/>
         <p>{dislikes}</p>
        </div>
      </div>
    </div>
  );
};