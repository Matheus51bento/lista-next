export default function Card({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`w-full bg-white border-1 border-gray-300 rounded-lg p-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}