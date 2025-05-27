import Link from 'next/link';
import Image from 'next/image';
import { ArticleData } from '@/lib/articles';

export default function ArticleCard({ article }: { article: ArticleData }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {article.featuredImage && (
        <div className="relative h-48 w-full">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt || article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">
          <Link href={`/blog/${article.slug}`} className="text-gray-900 hover:text-blue-600">
            {article.title}
          </Link>
        </h2>
        <div className="text-sm text-gray-600 mb-4">
          {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        {article.excerpt && (
          <p className="text-gray-700 mb-4">{article.excerpt}</p>
        )}
        <Link
          href={`/blog/${article.slug}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
