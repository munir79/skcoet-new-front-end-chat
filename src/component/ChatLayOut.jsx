'use client';
import Navbar from './dash-board-lay-out/Navbar';
import ChatDashBoardPanelSideNav from './dash-board-lay-out/ChatDashBoardPanelSideNav';

const ChatLayOut = ({ children }) => {
 

  return (
    <div>
      <div className="">
        <Navbar
        
        />
      </div>

      <div className="flex max-lg:flex-col">
        <div className="w-[210px] 2xl:w-[275px] bg-white">
          <ChatDashBoardPanelSideNav  />
        </div>

        <div className="w-[calc(100%-210px)] 2xl:w-[calc(100%-275px)] max-lg:w-full relative">
          {children}
         
        </div>
      </div>
    </div>
  );
};

export default ChatLayOut;
