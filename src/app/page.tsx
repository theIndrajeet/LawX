import { getSortedArticlesData } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

export default function Home() {
  const articles = getSortedArticlesData();
  const recentArticles = articles.slice(0, 3); // Get the 3 most recent articles

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to LawX
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your source for insightful legal analysis and commentary on current trends and developments in the legal world.
        </p>
      </div>

      {/* Recent Articles Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        {articles.length > 3 && (
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              View All Articles
            </a>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why LawX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Expert Analysis</h3>
            <p className="text-gray-600">
              In-depth analysis of legal developments from experienced professionals.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Current Topics</h3>
            <p className="text-gray-600">
              Stay updated with the latest trends and changes in the legal landscape.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Clear Insights</h3>
            <p className="text-gray-600">
              Complex legal concepts explained in clear, accessible language.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
