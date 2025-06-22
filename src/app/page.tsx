import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Logo variant="vertical" colored className="w-full" />
        <p className="w-full text-2xl text-center italic font-rubik">Site en construction</p>
      </main>
    </div>
  );
}
