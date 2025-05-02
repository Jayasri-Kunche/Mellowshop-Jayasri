export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-gray-200 opacity-25"></div>
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
}