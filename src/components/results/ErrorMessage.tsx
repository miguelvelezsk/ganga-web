import { CloudAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorMessage() {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
                <CloudAlert className="text-primary" size={50} />
                <p className="text-primary font-header text-lg">No se han encontrado resultados para tu búsqueda</p>
                <Button className="bg-error text-tertiary hover:bg-error/80 transition-all duration-200 cursor-pointer" onClick={() => window.location.reload()}>Intentar de nuevo</Button>
            </div>
        </div>
    );
}