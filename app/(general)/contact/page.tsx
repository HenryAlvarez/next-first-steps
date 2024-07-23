import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'This is a page Contact Page',
    keywords: ['Contact Page', 'Gabriel', 'contact info', 'my contacts']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}