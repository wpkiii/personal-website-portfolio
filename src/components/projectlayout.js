//projectlayout.js

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectLayout({ title, description, year, techStack, link, imageSrc }) {
  const isVideo = imageSrc.endsWith('.mp4') || imageSrc.endsWith('.mov');

  const content = (
    <Card className="flex flex-col md:flex-row bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6 cursor-pointer">
      <div className="md:w-1/2 flex-shrink-0 h-48 md:h-64 overflow-hidden">
        {isVideo ? (
          <video
            src={imageSrc}
            controls
            width="500" // Specify consistent width
            height="300" // Specify consistent height
            className="rounded-lg object-cover w-full h-full"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            width={500}
            height={300}
            unoptimized={imageSrc.endsWith('.gif')} // Only for gifs
            className="rounded-lg object-cover w-full h-full"
          />
        )}
      </div>
      <div className="md:w-1/2 p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <span className="text-gray-500 dark:text-gray-300">{year}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        {techStack && (
          <div className="flex space-x-2 mt-4">
            {techStack.map((tech, index) => (
              <Badge key={index} className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );

  return link ? <Link href={link}>{content}</Link> : content;
}
