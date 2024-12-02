import dynamic from 'next/dynamic'

const DynamicHome = dynamic(() => import("@/pages/HomePages"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <DynamicHome />
    </div>
  );
}
