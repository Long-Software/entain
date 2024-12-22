import CommentSection from "@/components/CommentSection";
import { Button } from "@/components/ui/button";
import { FaRegThumbsUp, FaShare, FaThumbsUp } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-[100vw]">
      <div className="flex min-h-fit">
        <div className="w-2/3 flex flex-col gap-2">
          <video src="/videos/demo.mp4" controls autoPlay></video>
          <p className="text-2xl font-bold px-4 pt-2">The Demo Titlle</p>
          <div className="flex px-4 justify-start items-center gap-4">
            <Button className="rounded-full">
              <FaThumbsUp />
              <FaRegThumbsUp />
              Like
            </Button>
            <Button className="rounded-full">
              <FaShare />
              Share
            </Button>
          </div>
        </div>
        <div className="w-1/3">
          <CommentSection />
        </div>
      </div>
    </div>
  );
}
