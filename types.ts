import { LucideIcon } from 'lucide-react';

export interface StatItem {
    value: string;
    label: string;
}

export interface PhilosophyItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface TimelineItem {
    type: string;
    location: string;
    role: string;
    description: string;
    icon: LucideIcon;
    isActive?: boolean;
}

export interface RecognitionItem {
    icon: LucideIcon;
    iconColorClass: string;
    title: string;
    description: string;
}