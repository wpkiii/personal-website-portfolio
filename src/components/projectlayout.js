// src/components/projectlayout.js
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectLayout({ title, description, year, techStack }) {
  return (
    <Card className="rounded-lg bg-gradient-to-r from-green-400 to-blue-500 p-6 shadow-md mb-6">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-white text-3xl">{title}</CardTitle>
        <div className="text-white text-lg">{year}</div>
      </CardHeader>
      <CardContent>
        <p className="text-white mt-4">{description}</p>
        {techStack && (
          <div className="flex space-x-2 mt-4">
            {techStack.map((tech, index) => (
              <Badge key={index} className="bg-black text-white">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
