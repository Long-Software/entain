import { Avatar, AvatarFallback } from "./ui/avatar";

const UserAvatar = () => {
  return (
    <Avatar className="size-8 transition border-none border-neutral-300 rounded-md">
      <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
        N
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
