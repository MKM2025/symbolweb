// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" } },
    author: { type: "string", required: true },
    image: { type: "string", required: false }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/insights/blogs/${doc._raw.flattenedPath.replace("blog/", "")}`
    },
    readingTime: {
      type: "json",
      resolve: (doc) => {
        const content = doc.body.raw;
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return {
          text: `${minutes} min read`,
          minutes,
          time: minutes * 60 * 1e3,
          words
        };
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
  },
  disableImportAliasWarning: true,
  onSuccess: async () => {
    console.log("Contentlayer build completed successfully");
    return Promise.resolve();
  }
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XBFV75JW.mjs.map
