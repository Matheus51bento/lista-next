import Card from "./card";
import Container from "./container";
import { Pencil, Trash } from 'lucide-react';
export default function TaskCard({
    title,
    description,
    className,
    onEdit,
    onDelete,
}: {
    title: string;
    description?: string;
    className?: string;
    onEdit?: () => void;
    onDelete?: () => void;
}) {
    return (
        <Card
            className={`flex flex-1 flex-col gap-2 p-4 cursor-pointer hover:bg-gray-100 transition ${className}`}
        >
            <Container className="flex justify-between gap-2 px-0 py-0">
                <Container className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded cursor-pointer"
                    />
                    <h2 className="text-xl font-bold">{title}</h2>
                </Container>
                <Container className="flex gap-4">
                    <button onClick={onEdit} className="text-gray-500 hover:text-gray-700 transition">
                        <Pencil className="w-4 h-4" />
                    </button>
                    <button onClick={onDelete} className="text-gray-500 hover:text-gray-700 transition">
                        <Trash className="w-4 h-4" />
                    </button>
                </Container>
            </Container>
            <div className="flex flex-col gap-1">
                {description && (
                    <p className="text-gray-500 text-sm">{description}</p>
                )}
            </div>
        </Card>
    );
}