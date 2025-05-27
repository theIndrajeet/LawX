import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                LawX
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
