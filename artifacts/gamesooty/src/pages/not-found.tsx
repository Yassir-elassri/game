import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Game Not Found</h2>
      <p className="text-white/50 mb-8 max-w-md">
        This page doesn&apos;t exist or may have been removed. Try browsing our collection instead.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
