export interface BlogContent {
  type: 'p' | 'h3' | 'list' | 'h2' | 'a';
  text?: string;
  items?: string[];
  href?: string;
}

export interface BlogLanguageData {
  title: string;
  author: string;
  date: string;
  mainImage: string;
  content: BlogContent[];
}

export interface BlogPost {
  en: BlogLanguageData;
  bn: BlogLanguageData;
}

export const blogPostsData: Record<string, BlogPost> = {
  "1": {
    en: {
      title: "Need a Web Application? Let’s Build It Together",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 26, 2026",
      mainImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
      content: [
        { type: "p", text: "In today’s digital world, having a well-built web application is no longer a luxury—it’s a necessity." },
        { type: "h3", text: "What I Can Help You With" },
        {
          type: "list",
          items: [
            "Full-stack web applications",
            "Custom dashboards and admin panels",
            "Blogging platforms and content-based websites",
            "Academic or personal project web apps",
            "UI-focused, clean, and responsive designs"
          ]
        },
        { type: "p", text: "I’m a CSE student and a web developer who focuses on building practical solutions." },
        { type: "h3", text: "Let’s Connect" },
        { type: "a", text: "Contact me to discuss your project", href: "/contact" }
      ]
    },
    bn: {
      title: "ওয়েব অ্যাপ্লিকেশন দরকার? চলুন একসাথে বানাই",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "২৬ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
      content: [
        { type: "p", text: "আজকের ডিজিটাল দুনিয়ায় একটি ভালো ওয়েব অ্যাপ্লিকেশন খুবই জরুরি।" },
        { type: "h3", text: "আমি যেসব বিষয়ে সাহায্য করতে পারি" },
        {
          type: "list",
          items: [
            "ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন",
            "কাস্টম ড্যাশবোর্ড",
            "ব্লগিং ওয়েবসাইট",
            "একাডেমিক প্রজেক্ট"
          ]
        },
        {type: "p", text: "আমি একজন CSE স্টুডেন্ট ও ওয়েব ডেভেলপার। আমার কাছে কোড লেখা শুধু কাজ না—প্রথমে সমস্যাটা বোঝা, তারপর সেটার বাস্তবসম্মত সমাধান তৈরি করাই আমার লক্ষ্য।"},
        {type: "h3", text: "কোনো আইডিয়া আছে?"},
        {type: "p", text: "আপনি যদি নতুন কোনো ওয়েব অ্যাপ বানাতে চান, আগের প্রজেক্ট উন্নত করতে চান, অথবা একদম শুরু থেকে কিছু করতে চান—নক দিতে পারেন নির্দ্বিধায়।"},
        {type: "a", text: "প্রজেক্ট নিয়ে কথা বলতে যোগাযোগ করুন", href: "/contact"}
      ]
    }
  },
  "2": {
    en: {
      title: "How to Create a Professional Cover Page?",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 18, 2026",
      mainImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
      content: [
        { type: "p", text: "A professional cover page is the face of your assignment. It's the first thing your instructor sees, so it needs to be clean, organized, and informative." },
        { type: "p", text: "A professional cover page is the face of your assignment." },
        { type: "h3", text: "Key Elements to Include:" },
        { type: "list", items: ["Course Title & Code", "Student Full Name & ID", "Instructor's Name", "Submission Date"]},
        { type: "p", text: "Using WUB DOX, you can automate this entire process in seconds." },
        { type: "list", items: ["Course Title & Code", "Student Name & ID", "Instructor Name", "Submission Date"] }
      ]
    },
    bn: {
      title: "কিভাবে প্রফেশনাল কভার পেজ তৈরি করবেন?",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "১৮ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
      content: [
        { type: "p", text: "একটি প্রফেশনাল কভার পেজ আপনার অ্যাসাইনমেন্টের দর্পণ স্বরূপ। এটি পরিষ্কার এবং তথ্যবহুল হওয়া জরুরি।" },
        { type: "h3", text: "যেসব তথ্য অবশ্যই রাখবেন:" },
        { type: "list", items: ["কোর্সের শিরোনাম এবং কোড", "শিক্ষার্থীর নাম এবং আইডি", "শিক্ষকের নাম", "জমার তারিখ"]},
        { type: "p", text: "WUB DOX ব্যবহার করে আপনি এই পুরো প্রক্রিয়াটি কয়েক সেকেন্ডেই সম্পন্ন করতে পারেন।" },
        { type: "p", text: "একটি প্রফেশনাল কভার পেজ আপনার অ্যাসাইনমেন্টের প্রথম পরিচয়।" },
        { type: "list", items: ["কোর্স কোড", "নাম ও আইডি", "শিক্ষকের নাম", "জমার তারিখ"] }
      ]
    }
  },

  "3": {
    en: {
      title: "Tips for Lab Report Formatting",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 17, 2026",
      mainImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
      content: [
        { type: "p", text: "Lab reports focus more on data and observations. A clear layout helps instructors grade your report efficiently." },
        { type: "h3", text: "Formatting Essentials:" },
        { type: "list", items: ["Clear Abstract", "Methodology", "Data Tables", "Conclusion"]},
        { type: "p", text: "WUB DOX has specific templates designed for lab reports!" },
        { type: "p", text: "Lab reports require clarity and proper formatting." },
        { type: "list", items: ["Abstract", "Methodology", "Data", "Conclusion"] }
      ]
    },
    bn: {
      title: "ল্যাব রিপোর্ট ফরম্যাটিং টিপস",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "১৭ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
      content: [
        { type: "p", text: "ল্যাব রিপোর্টে তথ্য এবং পর্যবেক্ষণের ওপর বেশি গুরুত্ব দেওয়া হয়। একটি সঠিক লেআউট আপনার গ্রেড বৃদ্ধিতে সাহায্য করে।" },
        { type: "h3", text: "প্রয়োজনীয় ফরম্যাটিং:" },
        { type: "list", items: ["পরিষ্কার সারসংক্ষেপ", "কাজের পদ্ধতি বর্ণনা", "ডাটা টেবিল", "উপসংহার"]},
        { type: "p", text: "WUB DOX-এ ল্যাব রিপোর্টের জন্য বিশেষ টেমপ্লেট রয়েছে।" },
        { type: "p", text: "ল্যাব রিপোর্টে পরিষ্কার ফরম্যাট খুব গুরুত্বপূর্ণ।" },
        { type: "list", items: ["সারসংক্ষেপ", "পদ্ধতি", "ডাটা", "উপসংহার"] }
      ]
    }
  },

  "4": {
    en: {
      title: "Benefits of Using Online Tools",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 16, 2026",
      mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
      content: [
        { type: "p", text: "Manually designing a cover page in MS Word can be time-consuming and prone to alignment errors." },
        { type: "h3", text: "Why Choose WUB DOX?" },
        { type: "list", items: ["Instant PDF Generation", "Zero Alignment Issues", "Standard University Formats", "Accessible from Mobile"]},
        { type: "p", text: "Embrace technology to focus more on your studies and less on formatting." },
        { type: "p", text: "Online tools save time and reduce errors." },
        { type: "list", items: ["Fast", "Accurate", "Accessible"] }
      ]
    },
    bn: {
      title: "অনলাইন টুল ব্যবহারের সুবিধা",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "১৬ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
      content: [
        { type: "p", text: "MS Word-এ ম্যানুয়ালি কভার পেজ ডিজাইন করা সময়সাপেক্ষ এবং অনেক সময় অ্যালাইনমেন্ট ঠিক থাকে না।" },
        { type: "h3", text: "কেন WUB DOX সেরা?" },
        { type: "list", items: ["ইনস্ট্যান্ট PDF তৈরি", "নিখুঁত অ্যালাইনমেন্ট", "বিশ্ববিদ্যালয়ের স্ট্যান্ডার্ড ফরম্যাট", "মোবাইল থেকেও ব্যবহারযোগ্য"]},
        { type: "p", text: "প্রযুক্তির সাহায্য নিন যাতে আপনি ফরম্যাটিং-এর বদলে পড়াশোনায় বেশি সময় দিতে পারেন।" },
        { type: "p", text: "অনলাইন টুল সময় বাঁচায়।" },
        { type: "list", items: ["দ্রুত", "নির্ভুল", "সহজ"] }
      ]
    }
  },

  "5": {
    en: {
      title: "The Beginning of WUB DOX",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 1, 2026",
      mainImage: "https://images.unsplash.com/photo-1632594737623-bea601083890?q=80&w=870",
      content: [
      { type: "p", text: "It was a cold December night. As a CSE student at WUB, I was grinding on a web project until 4 AM. Exhausted, I fell asleep without preparing my own Lab Report cover page, even though the exam was just hours away." },
      { type: "h3", text: "The Morning Chaos" },
      { type: "p", text: "Waking up just two hours before the exam, I rushed to create mine. Suddenly, I found myself making cover pages for 5-6 friends who were in the same boat. We were running out of time, and the pressure was real. Even our CR was overwhelmed with requests from others." },
      { type: "h3", text: "The 'Tea Stall' Brainstorming" },
      { type: "p", text: "After the exam, we gathered at a local tea stall. While sipping tea, my batchmates suggested, 'Why don't you build something where anyone can generate a cover page for free and save time?' That was the moment the seed of WUB DOX was planted." },
      { type: "list", items: [
        "Born from real-life student struggles",
        "Aims to save time during hectic exam hours",
        "Built by a student, for the students",
        "Completely free and accessible to everyone"
      ]},
      { type: "p", text: "Although the idea was born in December, I officially started the development in January 2026. After two weeks of intense coding, WUB DOX is finally here to help my fellow university mates." }
    ]
    },
    bn: {
      title: "WUB DOX-এর শুরু",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "১ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1632594737623-bea601083890?q=80&w=870",
      content: [
      { type: "p", text: "ডিসেম্বরের এক রাত। WUB-এর সিএসই স্টুডেন্ট হিসেবে রাত ৪টা পর্যন্ত একটা প্রজেক্টের কাজ করছিলাম। ক্লান্ত হয়ে নিজের ল্যাব রিপোর্টের কভার পেজ না বানিয়েই ঘুমিয়ে পড়ি, অথচ সকালে ছিল ল্যাব এক্সাম।" },
      { type: "h3", text: "সকালের সেই তাড়াহুড়ো" },
      { type: "p", text: "পরীক্ষার মাত্র ২ ঘণ্টা আগে ঘুম থেকে উঠে নিজের কভার পেজ বানাচ্ছিলাম। হঠাৎ দেখি আরও ৫-৬ জন বন্ধু কভার পেজের জন্য রিকোয়েস্ট করছে। তাড়াহুড়ো করে সবার কাজ করতে গিয়ে দেখি হাতে মাত্র ১ ঘণ্টা সময় আছে! এমনকি আমাদের সিআর-এর কাছেও অনেকে একই আবদার করছিল।" },
      { type: "h3", text: "চায়ের টং থেকে আইডিয়া" },
      { type: "p", text: "পরীক্ষা শেষ করে আমরা সবাই যখন চায়ের টং-এ আড্ডা দিচ্ছিলাম, তখনই বন্ধুরা বলল—'তুই এমন একটা ওয়েবসাইট কেন বানাস না যেখানে সবাই ফ্রিতে দ্রুত কভার পেজ বানিয়ে নিতে পারবে?' সেই আড্ডার মাঝেই জন্ম নিল WUB DOX-এর আইডিয়া।" },
      { type: "list", items: [
        "বাস্তব জীবনের সমস্যা থেকে উঠে আসা একটি আইডিয়া",
        "পরীক্ষার আগের মূল্যবান সময় বাঁচানোর প্রচেষ্টা",
        "ছাত্রদের জন্য একজন ছাত্রের তৈরি করা প্ল্যাটফর্ম",
        "সম্পূর্ণ বিনামূল্যে সবার ব্যবহারের সুযোগ"
      ]},
      { type: "p", text: "ডিসেম্বরে আইডিয়াটা মাথায় আসলেও জানুয়ারির শুরুতে আমি কাজ শুরু করি। টানা দুই সপ্তাহের পরিশ্রমের পর WUB DOX এখন আপনাদের সামনে।" }
    ]
    }
  }
};
