import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us Page',
    description: 'Page to contact us',
    keywords: ['Contac Us Page', 'Write to us', 'Next.js'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    );
}