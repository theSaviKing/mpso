import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import mockup from "@/assets/shirt.png";
import logo from "@/assets/logo.png";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TShirtShowcase() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            {/* Hero Section - 70vh */}
            <section className="bg-primary text-primary-foreground flex h-[60vh] flex-col items-center justify-center px-4 md:h-[70vh]">
                <div className="max-w-4xl space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-wide">
                        WEAR THE SHIRT.
                    </h1>
                    <h2 className="text-4xl font-bold tracking-wide">
                        SAY THE WORD.
                    </h2>
                    <h3 className="mt-8 text-7xl font-black tracking-wider">
                        MY POPE SAYS OPE.
                    </h3>
                </div>
            </section>

            {/* Product Section - 100vh */}
            <section className="flex min-h-screen items-center justify-center px-4 py-16">
                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                    {/* Product Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <Image
                                src={mockup}
                                alt="MY POPE SAYS OPE T-Shirt"
                                className="h-auto w-full max-w-md rounded-lg shadow-2xl brightness-105"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-4 text-4xl font-black">
                                MY POPE SAYS OPE
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                A bold statement piece that combines humor with
                                style. Made from premium 100% cotton with a
                                comfortable fit that's perfect for everyday
                                wear.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Color Options</h3>
                            <div className="flex gap-4">
                                <Card className="border-primary border-2 p-4">
                                    <CardContent className="p-0 text-center">
                                        <div className="bg-background border-foreground mx-auto mb-2 h-12 w-12 rounded-full border-2"></div>
                                        <p className="font-semibold">White</p>
                                        <p className="text-muted-foreground text-sm">
                                            Available
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-muted relative border-2 p-4">
                                    <CardContent className="p-0 text-center">
                                        <div className="bg-primary mx-auto mb-2 h-12 w-12 rounded-full"></div>
                                        <p className="font-semibold">Black</p>
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            Coming Soon
                                        </Badge>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-start gap-2">
                                <div className="text-3xl font-bold">$15</div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Badge>Early bird pricing</Badge>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        Price will rise soon! Get it now!
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                            <Button
                                asChild
                                size="lg"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full py-6 text-lg font-bold"
                            >
                                <Link href="https://forms.gle/KcuqH3X9Nxu1A679A">
                                    PRE-ORDER NOW
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section - 100vh */}
            <section className="bg-card flex min-h-screen items-center justify-center px-4 py-16">
                <div className="mx-auto max-w-4xl space-y-8 text-center">
                    <h2 className="mb-8 text-4xl font-black">THE STORY</h2>
                    <div className="text-card-foreground space-y-6 text-lg leading-relaxed">
                        <p>
                            "My Pope Says Ope" was born from a moment of pure
                            Midwestern & Catholic authenticity. It started as a
                            joke among a group of students who were privileged
                            to witness the historic election of the first
                            American-born Pope.
                        </p>
                        <p>
                            When someone jokingly said, "My Pope says ope," I
                            knew this phrase needed to exist in the world. It's
                            a celebration of humble humor, Midwestern flair, and
                            an{" "}
                            <a
                                href="https://www.vaticannews.va/en/pope/news/2025-05/cardinal-elected-pope-papal-name.html"
                                className="underline decoration-current/40 underline-offset-2 hover:decoration-current"
                                target="_blank"
                            >
                                amazing moment
                            </a>{" "}
                            that brought together Catholics all around the
                            world.
                        </p>
                        <p>
                            This isn't just a T-shirt — it's a conversation
                            starter, a cultural bridge, and a reminder that
                            holiness is not a distant reality we dream about.
                            It's something we're called to do everyday in the
                            middle of our "opes" and our missteps.
                        </p>
                        <p>Yeah... you betcha.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary text-primary-foreground px-4 py-12">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div className="space-y-4">
                            <Image
                                src={logo}
                                alt="My Pope Says Ope logo"
                                className="w-10 invert"
                            />
                            <p className="text-sm opacity-90">
                                Wear the word. Share the moment.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold">Quick Links</h4>
                            <ul className="space-y-2 text-sm opacity-90">
                                <li>
                                    <a
                                        href="#"
                                        className="transition-opacity hover:opacity-100"
                                    >
                                        Size Guide
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-opacity hover:opacity-100"
                                    >
                                        Shipping Info
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-opacity hover:opacity-100"
                                    >
                                        Returns
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold">Connect</h4>
                            <ul className="space-y-2 text-sm opacity-90">
                                <li>
                                    <a
                                        href="#"
                                        className="transition-opacity hover:opacity-100"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-opacity hover:opacity-100"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-opacity hover:opacity-100"
                                    >
                                        TikTok
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold">Support</h4>
                            <ul className="space-y-2 text-sm opacity-90">
                                <li>
                                    <a
                                        href="#"
                                        className="transition-opacity hover:opacity-100"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-opacity hover:opacity-100"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-opacity hover:opacity-100"
                                    >
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-primary-foreground/20 mt-8 flex flex-col items-center justify-between border-t pt-8 text-sm opacity-90 md:flex-row">
                        <p>&copy; 2025 The Back Pew. All rights reserved.</p>
                        <p>
                            Designed by{" "}
                            <a
                                href="https://www.tpaulkariuki.com"
                                target="_blank"
                                className="font-semibold underline decoration-current/40 underline-offset-2 hover:decoration-current"
                            >
                                T. Paul Kariuki
                            </a>{" "}
                            in{" "}
                            <span className="font-semibold">Rome, Italy</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
