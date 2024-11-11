// src/components/ProjectLayout.js
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

export default function ProjectLayout({ title, description, year, techStack, link }) {
  const content = (
    <Card className="rounded-lg bg-gradient-to-r from-green-400 to-blue-500 dark:from-gray-800 dark:to-gray-700 p-6 shadow-md mb-6 cursor-pointer">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-white text-3xl dark:text-gray-200">{title}</CardTitle>
        <div className="text-white text-lg dark:text-gray-300">{year}</div>
      </CardHeader>
      <CardContent>
        <p className="text-white mt-4 dark:text-gray-300">{description}</p>
        {techStack && (
          <div className="flex space-x-2 mt-4">
            {techStack.map((tech, index) => (
              <Badge key={index} className="bg-black text-white dark:bg-gray-600 dark:text-gray-200">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return link ? <Link href={link}>{content}</Link> : content;
}
