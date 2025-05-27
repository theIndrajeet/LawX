import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/blog');

export interface ArticleData {
  slug: string;
  title: string;
  date: string;
  featuredImage?: string;
  imageAlt?: string;
  excerpt?: string;
  body: string;
  seo_title?: string;
  meta_description?: string;
  status: 'draft' | 'published';
}

export function getSortedArticlesData(): ArticleData[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<ArticleData, 'slug' | 'body'>),
        body: matterResult.content,
      };
    });

  return allArticlesData
    .filter(article => article.status === 'published')
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}

export function getAllArticleSlugs() {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        return {
          params: {
            slug,
          },
        };
      });
  } catch (error) {
    console.error('Error getting article slugs:', error);
    return [];
  }
}

export function getArticleData(slug: string): ArticleData | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<ArticleData, 'slug' | 'body'>),
      body: matterResult.content,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}
