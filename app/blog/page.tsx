import Link from "next/link";
import CreateBlog from "./createBlog";

async function getBlogs() {
  // return data?.items as any[];
}

export default async function BlogsPage() {
  // const blogs = await getBlogs();

  return (
    <div>
      <h1>Blogs</h1>
      <div>
        {/* {blogs?.map((blog) => {
          return <Blog key={blog.id} blog={blog} />;
        })} */}
      </div>

      <CreateBlog />
    </div>
  );
}

function blog({ blog }: any) {
  const { id, title, content, created } = blog || {};

  return (
    <Link href={`/blogs/${id}`}>
      <div>
        {/* <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p> */}
      </div>
    </Link>
  );
}
