
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-8 items-center flex-col sm:flex-col font-[family-name:var(--font-geist-mono)]">
          <h1 className="text-[#f1f1f1] text-4xl font-bold">
            eutobias.dev
          </h1>
          <p className="text-[#5f5f5f] text-center">to fazendo ainda, calma ai!</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="flex items-center gap-2 text-[#5f5f5f] font-[family-name:var(--font-geist-mono)]">
          &copy; eutobias.dev
        </p>
      </footer>
    </div>
  );
}
