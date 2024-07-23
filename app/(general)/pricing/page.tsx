import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'This is a page Pricing Page',
    keywords: ['Pricing Page', 'Henry', 'Pricing informacion', 'test']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}