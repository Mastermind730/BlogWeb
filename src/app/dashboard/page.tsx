"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from 'axios';
import { toast } from "react-toastify";

type Article = {
  id: string;
  title: string;
  link: string;
  author: string;
  preview: string;
  isLiked: boolean;
  isBookmarked: boolean;
  category: "Technical" | "Non-Technical" | "Other";
};

const Dashboard = () => {
  const [likedCount, setLikedCount] = useState<number>();
  const [bookmarkedCount, setBookmarkedCount] = useState<number>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [newPostTitle, setNewPostTitle] = useState<string>("");
  const [newPostContent, setNewPostContent] = useState<string>("");

  // Fetch token from localStorage or any other secure storage mechanism
  const token = localStorage.getItem("token") || ""; // Replace with the actual token retrieval method

  useEffect(() => {
    const storedLikedCount = localStorage.getItem("likedCount");
    const storedBookmarkedCount = localStorage.getItem("bookmarkedCount");
    const storedArticles = localStorage.getItem("articles");

    if (storedLikedCount) setLikedCount(parseInt(storedLikedCount, 10));
    if (storedBookmarkedCount)
      setBookmarkedCount(parseInt(storedBookmarkedCount, 10));
    if (storedArticles) setArticles(JSON.parse(storedArticles));
  }, []);

 
  // Update localStorage when articles array changes
  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  const handleAddPost = async () => {
    // Ensure that title and content are not empty
    if (!newPostTitle || !newPostContent) {
      toast.error('Post title and content cannot be empty.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/posts/', {
        title: newPostTitle,
        content: newPostContent,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`, // Include the JWT token if using token-based authentication
          'Content-Type': 'application/json',
        }
      });

      console.log('New Post Added:', response.data);
      toast.success("Post added successfully!");

      // Optionally, update the articles state to include the new post
      setArticles([...articles, response.data]);

      // Clear the input fields
      setNewPostTitle('');
      setNewPostContent('');
    } catch (error: any) {
      console.error('Error adding post:', error.response ? error.response.data : error.message);
      toast.error('Failed to add post.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="mb-8 shadow-xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center mb-4">
            Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <p className="text-2xl text-center">
            <span className="font-semibold">Liked Articles: </span>
            {likedCount}
          </p>
          <p className="text-2xl text-center">
            <span className="font-semibold">Bookmarked Articles: </span>
            {bookmarkedCount}
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="liked" className="mb-8">
        <TabsList className="justify-center space-x-4">
          <TabsTrigger
            value="liked"
            className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-md"
          >
            Liked Articles
          </TabsTrigger>
          <TabsTrigger
            value="bookmarked"
            className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-md"
          >
            Bookmarked Articles
          </TabsTrigger>
          <TabsTrigger
            value="addPost"
            className="px-4 py-2 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-md"
          >
            Add a Blog Post
          </TabsTrigger>
        </TabsList>

        <TabsContent value="liked" className="grid grid-cols-1 gap-6">
          {articles
            .filter((article) => article.isLiked)
            .map((article) => (
              <Card key={article.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{article.preview}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Read More
                  </a>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="bookmarked" className="grid grid-cols-1 gap-6">
          {articles
            .filter((article) => article.isBookmarked)
            .map((article) => (
              <Card key={article.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{article.preview}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Read More
                  </a>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="addPost" className="grid grid-cols-1 gap-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Add a New Blog Post
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Post Title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Textarea
                placeholder="Post Content"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                onClick={handleAddPost}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Add Post
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
