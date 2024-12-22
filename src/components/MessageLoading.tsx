import { Skeleton } from "./ui/skeleton";

const MessageLoading = () => {
  return (
    <>
      <Skeleton className="size-8 rounded-full" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </>
  );
};

export default MessageLoading;
