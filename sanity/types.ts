export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage?: {
    asset: {
      url: string;
      metadata?: any;
    };
  };
};
