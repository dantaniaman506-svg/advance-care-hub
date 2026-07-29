import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <div className="text-7xl font-bold" style={{ color: "#A93539" }}>404</div>
        <h2 className="mt-4 text-xl font-bold text-[#1A202C]">Page Not Found</h2>
        <p className="mt-2 text-sm text-[#54595F]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
