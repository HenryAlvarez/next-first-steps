import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'About Page',
    description: 'This is a page About Page',
    keywords: ['About Page', 'Henry', 'informacion', 'test']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}