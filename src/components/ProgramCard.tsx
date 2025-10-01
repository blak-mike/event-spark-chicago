import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

export const ProgramCard = ({ icon: Icon, title, subtitle, description }: ProgramCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-glow transition-smooth cursor-pointer group">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="font-semibold text-primary">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
