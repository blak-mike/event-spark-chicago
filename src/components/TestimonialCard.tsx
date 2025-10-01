import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

export const TestimonialCard = ({ quote, author, company }: TestimonialCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-glow transition-smooth">
      <CardContent className="pt-6 space-y-4">
        <Quote className="w-10 h-10 text-primary/20" />
        <p className="text-lg italic">{quote}</p>
        <div className="border-t pt-4">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
};
