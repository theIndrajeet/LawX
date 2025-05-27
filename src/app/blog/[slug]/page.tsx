import { getAllArticleSlugs, getArticleData } from '@/lib/articles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const article = getArticleData(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | LawX',
      description: 'The requested article could not be found.'
    };
  }

  return {
    title: `${article.seo_title || article.title} | LawX`,
    description: article.meta_description || article.excerpt || ''
  };
}

export function generateStaticParams() {
  const articles = getAllArticleSlugs();
  return articles;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const article = getArticleData(slug);

  if (!article) {
    return <div className="max-w-4xl mx-auto px-4 py-12">Article not found.</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-8">
        {new Date(article.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      {article.featuredImage && (
        <img
          src={article.featuredImage}
          alt={article.imageAlt || article.title}
          className="w-full h-auto mb-8 rounded"
        />
      )}
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown>
      </div>
    </article>
  );
}
