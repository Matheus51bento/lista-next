export default function Button(
    {
        children,
        className,
        ...props
    }: 
    {
    children: React.ReactNode;
    className?: string;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`w-full bg-black text-white py-2 px-4 transition rounded cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}