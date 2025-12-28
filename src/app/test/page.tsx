import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="py-16 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-semibold text-black mb-4">
        Test Page Works!
      </h1>
      <p className="text-lg text-black/70">
        If you can see this, the deployment is working.
      </p>
      <p className="text-base mt-6">
        <Link href="/" className="text-green-700 font-medium underline">
          Go to Home
        </Link>
      </p>
    </div>
  );
}
