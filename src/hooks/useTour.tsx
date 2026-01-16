import { useEffect, useCallback } from 'react';
import { driver, DriveStep } from 'driver.js';
import 'driver.js/dist/driver.css';
import i18next from 'i18next';
const TOUR_SEEN_KEY = 'wub-dox-tour-seen';

interface TourConfig {
  steps: DriveStep[];
  onComplete?: () => void;
}
const isBN = () => i18next.language === 'bn';

export const useTour = (config: TourConfig) => {
  const { steps, onComplete } = config;
  
  const startTour = useCallback(() => {
    const driverObj = driver({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      steps,
      popoverClass: 'driver-popover-dark',
      onDestroyed: () => {
        localStorage.setItem(TOUR_SEEN_KEY, 'true');
        onComplete?.();
      },
    });
    
    driverObj.drive();
  }, [steps, onComplete]);

  const resetTour = useCallback(() => {
    localStorage.removeItem(TOUR_SEEN_KEY);
  }, []);

  const hasSeenTour = useCallback(() => {
    return localStorage.getItem(TOUR_SEEN_KEY) === 'true';
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasSeenTour()) {
        startTour();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [hasSeenTour, startTour]);

  return { startTour, resetTour, hasSeenTour };
};


export const homeTourSteps: DriveStep[] = [
  {
    element: '#logo',
    popover: {
      title: isBN() ? '🎓 WUB DOX-এ স্বাগতম!' : '🎓 Welcome to WUB DOX!',
      description: isBN() ? 'তৈরি করুন আপনার ওয়ার্ল্ড ইউনিভার্সিটির কভার পেজ কিছু সেকেন্ডেই। চলুন আপনাকে ঘুরে দেখানো যাক।' : 'Create professional World University cover pages in seconds. Let us show you around!', 
      side: 'bottom',
      align: 'start',
    },
  },
  {
    element: '#templates-link',
    popover: {
      title: isBN() ? '📄 টেমপ্লেটগুলো' : '📄 Templates',
      description: isBN() ? 'আপনার পছন্দমতো অ্যাসাইনমেন্ট, ল্যাব রিপোর্ট, ফোরাম বা হোমওয়ার্ক টেমপ্লেট বেছে নিন।' : 'Browse all available templates for assignments, lab reports, forums, and homework.',
      side: 'bottom',
      align: 'center',
    },
  },
  {
    element: '#language-toggle',
    popover: {
      title: isBN() ? '🌐 ভাষা পরিবর্তন' : '🌐 Language Toggle',
      description: isBN() ? 'যেকোনো সময় বাংলা এবং ইংরেজি ভাষার মধ্যে পরিবর্তন করুন।' : 'Switch between English and Bengali with a single click!',
      side: 'bottom',
      align: 'end',
    },
  },
  {
    element: '#social-links',
    popover: {
      title: isBN() ? '🔗 আমাদের সাথে যুক্ত হন' : '🔗 Follow Us',
      description: isBN() ? 'নতুন আপডেটের জন্য আমাদের গিটহাব এবং লিঙ্কডইন-এ ফলো করে যুক্ত থাকুন!' : 'Connect with us on GitHub and LinkedIn for updates!',
      side: 'bottom',
      align: 'end',
    },
  },
  {
    element: '#get-started-btn',
    popover: {
      title: isBN() ? '🚀 শুরু করা যাক' : '🚀 Get Started',
      description: isBN() ? 'আপনার প্রথম কভার পেজ তৈরি করতে এখানে ক্লিক করুন!' : 'Click here to start creating your first cover page!',
      side: 'top',
      align: 'center',
    },
  },
  {
    element: '#template-cards',
    popover: {
      title: isBN() ? '📋 টেমপ্লেট নির্বাচন করুন' : '📋 Choose Your Template',
      description: isBN() ? '৪টি ভিন্ন ধরণের টেমপ্লেট থেকে বেছে নিন, এখানে প্রতিটি টেমপ্লেটে রয়েছে প্রতিটি আলাদা স্টাইল!' : 'Select from 4 different template types, each with 4 unique styles!',
      side: 'top',
      align: 'center',
    },
  },
];

export const editorTourSteps: DriveStep[] = [
  {
    element: '#editor-form',
    popover: {
      title: isBN() ? '✏️ তথ্য পরিবর্তন করুন' : '✏️ Edit Your Details',
      description: isBN() ? 'আপনার কোর্স, স্টুডেন্ট এবং শিক্ষকের তথ্য এখানে পূরণ করুন।' : 'Fill in your course, student, and teacher information here.',
      side: 'right',
      align: 'start',
    },
  },
  {
    element: '#zoom-controls',
    popover: {
      title: isBN() ? '🔍 জুম কন্ট্রোল' : '🔍 Zoom Controls',
      description: isBN() ? 'ডকুমেন্টটি ভালোভাবে দেখার জন্য জুম ইন বা আউট করুন।' : 'Zoom in or out to preview your document better.',
      side: 'bottom',
      align: 'center',
    },
  },
  {
    element: '#style-selector',
    popover: {
      title: isBN() ? '🎨 স্টাইল সিলেকশন' : '🎨 Style Selection',
      description: isBN() ? 'আপনার কভার পেজের জন্য ৪টি ভিন্ন স্টাইল থেকে পছন্দমতো স্টাইল বেছে নিন।' : 'Choose from 4 different styles for your cover page.',
      side: 'bottom',
      align: 'start',
    },
  },
  {
    element: '#preview-area',
    popover: {
      title: isBN() ? '👁️ লাইভ প্রিভিউ' : '👁️ Live Preview',
      description: isBN() ? 'তথ্য পরিবর্তনের সাথে সাথেই তা লাইভ দেখুন!' : 'See your changes in real-time as you edit!',
      side: 'left',
      align: 'start',
    },
  },
  {
    element: '#print-btn',
    popover: {
      title: isBN() ? '🖨️ প্রিন্ট করুন' : '🖨️ Print Your Document',
      description: isBN() ? 'সব ঠিক থাকলে পিডিএফ হিসেবে সেভ করতে বা প্রিন্ট করতে এখানে ক্লিক করুন!' : 'When ready, click here to print or save as PDF!',
      side: 'bottom',
      align: 'end',
    },
  },
];