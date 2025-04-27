export default function Container({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`flex items-center p-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}