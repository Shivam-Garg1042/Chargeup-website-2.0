import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const faqs = [
  {
    question: "What is Chargeup?",
    answer:
      "Chargeup is a driver-first Fi-Ne-Tech platform, designed to control the variables that determine repayment: energy, uptime, and asset performance. Using deep IoT integration and real-time data, the platform brings earning security for drivers, loan security for lenders, and asset security for OEMs, empowering drivers to run more and earn more for a better tomorrow.",
  },
  {
    question: "When was Chargeup founded?",
    answer: "Chargeup was founded in 2019 in Delhi by Varun Goenka.",
  },
  {
    question: "Who uses Chargeup?",
    answer:
      "Chargeup is used by multiple participants across the EV ecosystem including commercial EV drivers such as e-rickshaw drivers and delivery riders, NBFCs and lenders financing EV vehicles, OEMs and vehicle manufacturers, dealers and ecosystem partners. The platform currently supports 10,000 active drivers across 16 cities in India.",
  },
  {
    question: "How many drivers use Chargeup?",
    answer:
      "Chargeup currently supports 10,000 active drivers, with plans to scale to 100,000 drivers across 40 cities.",
  },
  {
    question: "How many cities does Chargeup operate in?",
    answer:
      "Chargeup currently operates across 16 cities in India and plans to expand to 40 cities.",
  },
  {
    question: "What is the Chargeup platform?",
    answer:
      "Chargeup is a Fi-Ne-Tech platform that integrates finance, energy, service, and resale to support EV drivers and the broader mobility ecosystem.",
  },
  {
    question: "What products make up the Chargeup platform?",
    answer:
      "The Chargeup platform includes four key components: Chargeup Exchange, Chargeup Track, Chargeup 365, and Chargeup Shield.",
    details: [
      "Chargeup Exchange: Phygital EV hubs connecting drivers with financiers, insurers, suppliers, and recyclers.",
      "Chargeup Track: IoT-powered tracking that provides real-time GPS monitoring and asset visibility.",
      "Chargeup 365: Predictive intelligence to improve uptime and asset performance.",
      "Chargeup Shield: AI-powered risk monitoring platform for lenders.",
    ],
  },
  {
    question: "What is Chargeup Exchange?",
    answer:
      "Chargeup Exchange is a phygital EV hub and marketplace where drivers can access services such as vehicle sales, resale, financing, and ecosystem support through one integrated platform.",
  },
  {
    question: "What is Chargeup Track?",
    answer:
      "Chargeup Track is an IoT-powered asset monitoring system that provides real-time GPS tracking and usage monitoring of EV assets.",
  },
  {
    question: "What is Chargeup 365?",
    answer:
      "Chargeup 365 focuses on uptime protection and predictive intelligence, helping ensure that EV assets operate efficiently and reliably.",
  },
  {
    question: "What is Chargeup Shield?",
    answer:
      "Chargeup Shield is an AI-powered system designed to support lenders by monitoring portfolio performance and identifying potential risk early.",
  },
  {
    question: "What is Chargeup Risk Engine?",
    answer:
      "A SMART Digital Score that helps NBFCs assess borrower intent using identity & digital footprint for secured lending.",
  },
  {
    question: "How accurate is Chargeup's risk prediction?",
    answer:
      "The Karma Index predicts potential defaults with around 83% accuracy, enabling better risk management for lenders.",
  },
  {
    question: "How does Chargeup help gig workers?",
    answer:
      "Chargeup helps gig and last-mile drivers by empowering them with higher earnings and income predictability, enabling them to run more, earn more. By providing better asset uptime, operational visibility, and access to financing and resale infrastructure. Drivers on the platform have seen up to 40% increase in annual income.",
  },
  {
    question: "How does Chargeup help lenders?",
    answer:
      "Chargeup helps lenders reduce risk by providing real-time asset and driver performance monitoring, AI-based risk prediction, and early alerts for potential defaults.",
  },
  {
    question: "How does Chargeup support OEMs?",
    answer:
      "Chargeup helps OEMs improve asset visibility, reduce service costs, and better manage the lifecycle of EV assets through platform data and ecosystem integration.",
  },
  {
    question: "What impact has Chargeup created so far?",
    answer:
      "Chargeup has demonstrated measurable impact including up to 40% increase in driver income, 50% reduction in OEM service costs, 7% uplift in NBFC return on assets, with less than 2% NPA, and 35% of new drivers joining through referrals.",
  },
  {
    question: "What is Chargeup's mission?",
    answer:
      "Chargeup's mission is to enable 1 million driver entrepreneurs with higher earnings by 2030 while accelerating the electrification of last-mile mobility in India.",
  },
];

const ChargeupFaq = (): JSX.Element => {
  return (
    <section id="chargeup-faq" className="w-full bg-white py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 ">
        <div className="flex flex-col gap-1 items-center text-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#041620] mb-4">FAQs</h2>
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Frequently asked questions</p>
          <p className="text-sm sm:text-base text-gray-500">
            Here are some common questions about Chargeup.
          </p>
        </div>

        <div className="border-t border-gray-400">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="border-gray-400">
                <AccordionTrigger className="px-2 sm:px-3 text-left text-sm sm:text-base font-semibold text-[#041620]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-2 sm:px-3 text-sm sm:text-base text-gray-600">
                  <p>{faq.answer}</p>
                  {faq.details && (
                    <ul className="mt-3 list-disc space-y-2 pl-5">
                      {faq.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-[#041620]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,137,72,0.5),_transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,39,81,0.55),_transparent_55%)]"></div>
          </div>
          <div className="relative px-6 py-8 sm:px-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8BE2B7]">Still need help?</p>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">Send us a note</h3>
            <p className="mt-2 text-sm sm:text-base text-white/80">
              For any other questions, please write to connect@echargeup.com or call 1800 123 0181.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargeupFaq;
