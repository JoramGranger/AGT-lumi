'use client'
import { ArrowRight, Mic, Command, Bell, Sun, ShoppingBag, Stethoscope, Briefcase } from "lucide-react"
import Link from "next/link"
import Card from "@/app/components/Card"
const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 text-blue-900 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-light text-2xl">AGT</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#lumi">
            Lumi
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#vision">
            Vision
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-100 via-blue-300 to-purple-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionizing Customer Experience with Interactive A.I.
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  AGT introduces Lumi: your tabletop AI agent for seamless restaurant service. Imagine this power across industries.
                </p>
              </div>
              <div className="space-x-4">
                <button className="text-white bg-blue-900 rounded-lg px-4 py-2" onClick={() => document.getElementById('lumi')?.scrollIntoView({ behavior: 'smooth' })}>
                  Discover Lumi
                </button>
                <button className="outline outline-1 outline-black rounded-lg px-4 py-2">Explore AGT</button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light text-blue-900 tracking-tighter sm:text-5xl text-center mb-4">What is AGT?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto text-center">
              AGT is redefining customer service with intelligent, interactive agents that respond to your customers&apos; needs. Our first product, Lumi, is an AI-powered tabletop assistant designed for the restaurant industry, delivering service at the touch of a button or a simple voice command.
            </p>
          </div>
        </section>

        <section id="lumi" className="w-full text-blue-900 py-12 md:py-24 lg:py-32 bg-slate-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-tighter sm:text-5xl text-center mb-12">Introducing Lumi for Restaurants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="h-48 w-full bg-gray-200 dark:bg-gray-700">Image</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-light">Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                    <span>Call Waiter: Button for service request</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                    <span>Request Bill: Quick, streamlined billing process</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mic className="h-5 w-5 text-blue-500" />
                    <span>Voice-Activated Assistance: Just ask Lumi for help—no wait needed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                    <span>LED Ambiance: Adaptive LED lighting to suit any table environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full text-blue-900 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-tighter sm:text-5xl text-center mb-12">How Lumi Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {[
                  {
                    title: "1. Guest Interaction",
                    content: "Guests use button or voice commands for simple, intuitive interaction with Lumi.",
                    icon: <Command className="w-12 h-12 mb-4 text-blue-900" /> // Command icon for interaction
                  },
                  {
                    title: "2. Real-Time Notifications",
                    content: "Lumi instantly alerts waitstaff through AGT's app, ensuring prompt service.",
                    icon: <Bell className="w-12 h-12 mb-4 text-blue-900" /> // Bell icon for notifications
                  },
                  {
                    title: "3. Ambient LED Design",
                    content: "Lumi's adaptive lighting enhances the dining atmosphere while providing visual cues.",
                    icon: <Sun className="w-12 h-12 mb-4 text-blue-900" /> // Sun icon for ambient lighting
                  }
                ].map((card, index) => (
                  <Card key={index} title={card.title} icon={card.icon}>
                    {card.content}
                  </Card>
                ))}
            </div>
          </div>
        </section>

        <section id="vision" className="w-full text-blue-900 py-12 md:py-24 lg:py-32 bg-slate-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-tighter sm:text-5xl text-center mb-12">AGT: Interactive A.I. for Every Industry</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto text-center mb-12">
              Lumi is just the beginning. Our mission at AGT is to bring intelligent, interactive, responsive, customizable agents to every business environment, creating tailored experiences for hospitality, retail, healthcare, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                   {
          title: "Hospitality",
          content: "Table-side service agents for a seamless experience.",
          icon: <ShoppingBag className="w-12 h-12 mb-4 text-blue-500" />
                   },
                   {
                     title: "Retail",
                     content: "In-store assistance and instant product information.",
                     icon: <ShoppingBag className="w-12 h-12 mb-4 text-blue-500" />
                   },
                   {
                     title: "Healthcare",
                     content: "Patient support and check-in assistance.",
                     icon: <Stethoscope className="w-12 h-12 mb-4 text-blue-500" />
                   },
                   {
                     title: "Corporate Spaces",
                     content: "Intelligent kiosks for guest management.",
                     icon: <Briefcase className="w-12 h-12 mb-4 text-blue-500" />
                   }
                 ].map((card, index) => (
                   <Card key={index} title={card.title} icon={card.icon}>
                     {card.content}
                   </Card>
                 ))}
            </div>
          </div>
        </section>

        <section className="w-full text-blue-900 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-tighter sm:text-5xl text-center mb-12">Why Choose AGT Interactive A.I. Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                   {
                     title: "Enhanced Customer Satisfaction",
                     content: "Responsive, real-time service elevates the guest experience."
                   },
                   {
                     title: "Operational Efficiency",
                     content: "Reduces unnecessary tasks, allowing staff to focus on customer care."
                   },
                   {
                     title: "Customizable and Scalable",
                     content: "AGT's interactive agents can adapt to any industry need."
                   }
                 ].map((card, index) => (
                   <Card key={index} title={card.title}>
                     {card.content}
                   </Card>
                 ))}
            </div>
            <div className="mt-12 text-center">
              <blockquote className="italic text-xl text-gray-600 dark:text-gray-300">
              &quot;Lumi has transformed our restaurant&apos;s efficiency and guest satisfaction. 
              It&apos;s like having an extra staff member at every table, ensuring no request goes unnoticed.&quot;
              </blockquote>
              <p className="mt-4 font-semibold">- John Doe, Restaurant Manager</p>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full text-blue-900 py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-100 via-blue-300 to-purple-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-light tracking-tighter sm:text-5xl">Get Started with AGT</h2>
                <p className="max-w-[600px] text-blue-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us on the journey to smarter, interactive customer experiences. See Lumi in action or explore how AGT can transform your industry.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 flex justify-between gap-8">
                <button className="w-full text-white bg-blue-900 rounded-lg px-4 py-2">
                  Request a Demo
                </button>
                <button className="w-full outline outline-3 outline-blue-900 rounded-lg px-4 py-2">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AGT. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#about">
              About AGT
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#lumi">
              Lumi
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#vision">
              Vision
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </footer>

    </div>
  );
};


export default Landing;

  