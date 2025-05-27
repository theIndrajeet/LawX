import { getSortedArticlesData } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

export default function BlogPage() {
  const articles = getSortedArticlesData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
