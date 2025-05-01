export interface Blog {
  _id: string;
  _raw: {
    sourceFilePath: string;
    sourceFileName: string;
    sourceFileDir: string;
    contentType: string;
    flattenedPath: string;
  };
  type: 'Blog';
  title: string;
  date: string;
  tags?: string[];
  summary?: string;
  author: string;
  image?: string;
  url: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  body: {
    raw: string;
    code: string;
  };
} 