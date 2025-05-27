import { getAllArticleSlugs, getArticleData } from '@/lib/articles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Head from 'next/head';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map(({ params }) => ({
    slug: params.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const article = getArticleData(params.slug);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <>
      <Head>
        <title>{article.seo_title || article.title} | LawX</title>
        <meta name="description" content={article.meta_description || article.excerpt || ''} />
      </Head>
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
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown>
      </article>
    </>
  );
}
