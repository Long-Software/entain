export const VideoPlayer = () => {
  return (
    <video autoPlay controls loop className="w-[500px] h-[500px]">
    <source src="/videos/demo.mp4" />
  </video>
  );
}