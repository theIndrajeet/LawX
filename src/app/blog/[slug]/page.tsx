import { getAllArticleSlugs, getArticleData } from '@/lib/articles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from 'next';
import Image from 'next/image';

interface PageParams {
  slug: string;
}

interface PageProps {
  params: PageParams;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleData(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | LawX',
      description: 'The requested article could not be found.'
    };
  }

  return {
    title: `${article.seo_title || article.title} | LawX`,
    description: article.meta_description || article.excerpt || '
  };
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const articles = getAllArticleSlugs();
  return articles.map((article) => ({
    slug: article.params.slug,
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const article = getArticleData(params.slug);

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
        <div className="w-full h-[400px] relative mb-8">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt || article.title}
            fill
            className="rounded object-cover"
            priority
          />
        </div>
      )}
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown>
      </div>
    </article>
  );
}
