import { Languages } from "lucide-react";
import { Button } from "./ui/button";
import tj from "../img/tj.png";
import ru from "../img/ru.png";
import en from "../img/en.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        <DropdownMenuItem
          onClick={() => setLanguage("tj")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img className="w-6 h-6" src={tj} alt="" />
          <span className="font-medium">Тоҷикӣ</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ru")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img className="w-6 h-6" src={ru} alt="" />
          <span className="font-medium">Русский</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img className="w-6 h-6" src={en} alt="" />
          <span className="font-medium">English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
