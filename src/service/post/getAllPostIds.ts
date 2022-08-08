import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "/src/data/posts");

function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export { getAllPostIds };
