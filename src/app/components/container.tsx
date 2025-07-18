export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`mx-auto max-w-5xl px-4 py-32 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
}