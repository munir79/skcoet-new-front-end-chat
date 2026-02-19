

'use client';

import { useGetConversationQuery } from "@/redux/features/ConversationApi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ChatDashBoardPanelSideNav = () => {
  const { data, isLoading } = useGetConversationQuery();
  const [active,setActive]=useState(null);
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="h-screen bg-[#010409] text-black p-4">
      {/* <h1 className="text-xl font-bold mb-4">
        Here all connected conversations
      </h1> */}

      {data?.data?.map((conversation) => {
        const secondMember = conversation?.members?.[1];

        return (
          <div
            key={conversation._id}
            className="p-1 border rounded mb-1"
          >
         <Link href={`/message/${conversation._id}`}>
            {secondMember ? (
              <>
               <div className="flex gap-2">
                <div className="h-[20px]  w-[20px] rounded-full">
                 <Image 
                 className="mt-2 border border-white rounded-full"
                 src={'/globe.svg'}
                 height={200}
                 width={200}
                 alt="prol=file"
                 /> 
                </div>
                <div> <p className="font-semibold mt-1 text-[#dae0e6]">{secondMember.name}</p>
                {/* <p className="text-sm text-[#dae0e6]">
                  {secondMember.email}
                </p> */}
                
                </div>
               </div>
              </>
            ) : (
              <p>No second member found</p>
            )}
         </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ChatDashBoardPanelSideNav;
