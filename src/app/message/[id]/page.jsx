"use client";

import ChatLayOut from "@/component/ChatLayOut";
import Message from "@/component/message/Message";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  console.log("Conversation ID:", id);

  return( 
  
 <ChatLayOut>
    <Message id={id}/>
 </ChatLayOut>


  )
  
}
