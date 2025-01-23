export default function Loading({ text = "Loading..." }: any) {
  return (
    <div className="flex justify-center items-center h-screen font-semibold text-xl">
      {text}
    </div>
  );
}
