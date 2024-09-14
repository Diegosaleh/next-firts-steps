import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Page to view our pricing',
    keywords: ['Pricing Page', 'Don`t Miss it', 'Next.js'],
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    );
}