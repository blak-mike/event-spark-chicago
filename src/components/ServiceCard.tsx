import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
}

export const ServiceCard = ({ title, description, benefits, image, imageAlt }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-glow transition-smooth group">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="font-semibold">Key Benefits:</p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button variant="default" className="w-full">Learn More</Button>
      </CardContent>
    </Card>
  );
};
