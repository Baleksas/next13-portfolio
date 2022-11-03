import Link from "next/link";
import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC47y281ZQXOfdgbCgsg5C1TuhaajK_80A",
  authDomain: "next13-206a0.firebaseapp.com",
  projectId: "next13-206a0",
  storageBucket: "next13-206a0.appspot.com",
  messagingSenderId: "983505431877",
  appId: "1:983505431877:web:1b730e79bf8d3d8f7f622c",
  measurementId: "G-XFEN9KNVTV",
};
export async function getBlogs(db: any) {
  const blogsCol = collection(db, "blogs");
  const blogSnapshot = await getDocs(blogsCol);
  const blogList = blogSnapshot.docs.map((doc) => doc.data());
  return blogList;
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default async function page() {
  const blogs = await getBlogs(db);

  return (
    <div>
      <span>
        This is my blog page. I came up with blog idea when I was exploring
        Next.js 13 and wanted to document what I learn and visualize it to
        understand it in depth. I believe, that research and reflection are
        important skills for a Software Developer.
      </span>
      <div>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.title} />
        ))}
      </div>
    </div>
  );
}

function Blog({ blog }: any) {
  const { title, content } = blog || {};

  return (
    <Link href={`/blog/${title.replaceAll(" ", "")}`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
      </div>
    </Link>
  );
}
