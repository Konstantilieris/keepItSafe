import BoxesCore from "@/components/ui/backgroundBoxes";

export default async function Home() {
  return (
    <div className="h-[100vh] max-h-[100vh] relative w-full  bg-dark-200 flex flex-col items-center justify-center  overflow-y-hidden">
      <div className="fixed inset-0 w-full h-full bg-dark-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none  text-yellow-600" />
      <title> Konstantilieris Crafts</title>
      <BoxesCore />
    </div>
  );
}
