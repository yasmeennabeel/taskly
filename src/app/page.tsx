import { TasklyLogo } from '@/assets';

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2 bg-lightblue-400 text-navy-900">
      <TasklyLogo className="size-20 text-blue-grey-600" />
      <h1>Home Page</h1>
    </div>
  );
}
