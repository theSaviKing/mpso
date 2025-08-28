"use client";

import * as React from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "./ui/sonner";

export function ContactForm({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const title = "Contact me";
    const description =
        "Have a question? Drop a message and I'll get back to you when I can.";

    if (isDesktop) {
        return (
            <>
                <Toaster position="bottom-center" richColors />
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>{children}</DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>{title}</DialogTitle>
                            <DialogDescription>{description}</DialogDescription>
                        </DialogHeader>
                        <ProfileForm />
                    </DialogContent>
                </Dialog>
            </>
        );
    }

    return (
        <>
            <Toaster position="top-center" richColors />
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>{children}</DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerDescription>{description}</DrawerDescription>
                    </DrawerHeader>
                    <ProfileForm className="px-4" />
                    <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const formRef = React.useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            await toast.promise(
                fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                }).then(async (response) => {
                    const data = await response.json();
                    if (!data.success) {
                        throw new Error("Failed to send message");
                    }
                    formRef.current?.reset();
                    return data;
                }),
                {
                    loading: "Sending your message...",
                    success: () => ({
                        message: "Message sent successfully!",
                        description: "Thank you for reaching out.",
                    }),
                    error: () => ({
                        message: "Message failed to send.",
                        description: "Please try again.",
                    }),
                },
            );
        } catch (err) {
            // Error is handled by toast.promise
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            ref={formRef}
            className={cn("grid items-start gap-6", className)}
            onSubmit={handleSubmit}
        >
            <input
                type="hidden"
                name="access_key"
                value="b4b96a6c-1e42-4661-b0ef-149f7b8a3e00"
            />
            <input
                type="hidden"
                name="subject"
                value="MPSO: New Contact Form Submission"
            />
            <input
                type="checkbox"
                name="botcheck"
                id=""
                style={{ display: "none" }}
            />
            <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Robert Prevost"
                    disabled={isSubmitting}
                    required
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="bobby.p@vatican.va"
                    disabled={isSubmitting}
                    required
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    name="message"
                    id="message"
                    disabled={isSubmitting}
                    placeholder="The pope says ope!"
                    required
                />
            </div>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
            </Button>
        </form>
    );
}
