import { ReactNode } from 'preact';

interface LinkProps {
    to: string;
    children: ReactNode;
    className?: string;
}

export default function Link({ to, children, className }: LinkProps) {
    return (
        <a href={to} className={className ? className : ""}>{children}</a>
    );
}
