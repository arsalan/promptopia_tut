"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  console.log("MyProfile...");

  const router = useRouter();

  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const handleEdit = (post) => {
    console.log("Edit button clicked...");
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    console.log("Delete button clicked...");
    const hasConfirmed = confirm("Are you sure you want to delete this?");
    if (hasConfirmed) {
      try {
        let uri = `/api/prompt/${post._id.toString()}`;
        console.log("Attempting to delete post by calling " + uri);
        await fetch(uri, { method: "DELETE" });
        const remainingPosts = posts.filter((p) => p._id !== post._id);
        setPosts(remainingPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      let uri = `/api/users/${session?.user.id}/posts`;
      console.log("fetching from " + uri);
      const response = await fetch(uri);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) {
      fetchPosts();
    }
  }, [session?.user.id]);

  return (
    <Profile
      name="My"
      desc="Your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
