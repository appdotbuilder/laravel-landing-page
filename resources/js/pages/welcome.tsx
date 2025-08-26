import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { LandingHeader } from '@/components/landing-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { QnaSection } from '@/components/qna-section';
import { ServicesSection } from '@/components/services-section';
import { PartnersSection } from '@/components/partners-section';
import { ContactSection } from '@/components/contact-section';
import { LandingFooter } from '@/components/landing-footer';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="🏢 Corporate Landing - Professional Business Solutions">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <LandingHeader auth={auth} />
                <main>
                    <HeroSection auth={auth} />
                    <AboutSection />
                    <QnaSection />
                    <ServicesSection />
                    <PartnersSection />
                    <ContactSection />
                </main>
                <LandingFooter />
            </div>
        </>
    );
}