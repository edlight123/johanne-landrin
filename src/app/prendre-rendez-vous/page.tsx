import { siteConfig } from '@/lib/siteConfig';
import { redirect } from 'next/navigation';

export default function BookingPage() {
  redirect(siteConfig.booking.calendlyUrl || '/contact');
}
