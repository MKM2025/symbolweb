export interface Blog {
  _id: string;
  _raw: {
    sourceFilePath: string;
    sourceFileName: string;
    sourceFileDir: string;
    contentType: string;
    flattenedPath: string;
  };
  type: string;
  title: string;
  date: string;
  slug: string;
  readingTime: string;
  body: {
    code: string;
  };
} 