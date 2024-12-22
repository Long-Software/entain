import { IoSend } from "react-icons/io5";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import UserAvatar from "./UserAvatar";
import MessageLoading from "./MessageLoading";

const CommentSection = () => {
  return (
    <>
      <div className="h-full overflow-hidden">
        <div className="flex-1 h-full flex flex-col">
          {/* Header */}
          <div className="bg-gray-100 p-4 border-b border-gray-300 flex items-center">
            <h3 className="font-medium">Comment</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-scroll h-full p-4 bg-gray-50">
            <div className="mb-4">
              <div className="flex items-start mb-2 gap-2">
                <UserAvatar />
                <div>
                  <p className="font-medium">Alice</p>
                  <p className="bg-white rounded-lg p-2 shadow-md">
                    Hey! How it going?
                  </p>
                  <span className="text-xs text-gray-400">10:15 AM</span>
                </div>
              </div>
              <div className="flex items-start mb-2 gap-2">
                <MessageLoading />
              </div>
              <div className="flex items-start flex-row-reverse mb-2 gap-2">
                <UserAvatar />
                <div>
                  <p className="font-medium text-right">You</p>
                  <p className="bg-blue-500 text-white rounded-lg p-2 shadow-md">
                    Good! How about you?
                  </p>
                  <span className="text-xs text-gray-400 text-right">
                    10:17 AM
                  </span>
                </div>
              </div>
            </div>
            {/* Add more messages */}
          </div>
        </div>
      </div>
      <div className="flex">
        <Input className="rounded-l-full py-1" placeholder="message" />
        <Button className="rounded-r-full">
          <IoSend />
        </Button>
      </div>
    </>
  );
};

export default CommentSection;
