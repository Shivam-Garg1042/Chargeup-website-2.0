import { Separator } from "../../components/ui/separator";

export default function RefundCancellationContent(): JSX.Element {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-6 text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Refund and Cancellation Policy</h1>

      <div className="space-y-4 text-[17px] leading-relaxed">
        <p className="text-gray-700">
          The Driver shall pay a one-time, non-refundable amount <span className="font-bold">("Sign-up Charge")</span> to enroll itself in the battery swapping network of the Company.
        </p>

        <p className="text-gray-700">
          The Driver shall deposit an interest free security deposit, as specified in the sign-up plan, before he / she can rent the Batteries from the Company.
        </p>

        <p className="text-gray-700">
          Interest-free Security deposit shall be adjusted against any damage/loss/ wear and tear to the battery. If there is no damage/loss/ wear and tear to the battery then the whole amount shall be refunded, without interest, to the Driver on cancellation/termination of User enrollment with Company.
        </p>

        <p className="text-gray-700">
          In the event of damage, Loss/ any wear and tear to the battery, the cost of the same shall be adjusted through the Interest-free Security deposit and in the event such cost exceeds the interest free security deposit then the same shall has to be paid by the Driver. After due adjustment of the damage, Loss/ any wear and tear to the battery and additional amount, if any, the Driver shall make the interest free security deposit whole to the amount before such adjustment was done. The Company reserves the right to ask Driver to deposit increased interest free Security Deposit depending upon the condition of battery which was adjusted in earlier interest free security deposit.
        </p>

        <p className="text-gray-700">
          In case the Driver terminates his / her relationship with the Company at any point of time and then re-joins the battery swapping network of the Company, he / she shall be required to make the payments in Clauses (i) and (ii) afresh.
        </p>

        <p className="text-gray-700">
          At any point of time Driver may request for cancellation of the subscription plan he/she has availed for, if any. However the subscription shall stand cancelled on the forthcoming renewal date of the said subscription plan and no amount shall be refunded on the pro rata basis for the remaining period of the subscription plan for which the driver have subscribed too.
        </p>

        <p className="text-gray-700">
          The Company shall, at its sole discretion, may cancel the subscription plan subscribed by the Driver if the payment for renewal of subscription plan is not made with 3 (Three) days of the renewal date. In such case, prices of the current subscription plan shall apply.
        </p>

        <p className="text-gray-700">
          The Company shall have right to cancel the subscription plan if the battery swapped by the Drivers is misused in any manner or the subscription plan is also misused by the Drivers.
        </p>

        <p className="text-gray-700">
          The Company may at any time at its sole option amend or modify the Battery Rental Charges or subscription plan charges by providing 7 days prior notice to the Driver under this Agreement. The Driver may terminate this Agreement if he / she does not wish to abide by the modifications / amendments to these charges. In the event as mentioned herein this clause, if the Driver intends to cancel its subscription plan then in such situation Company shall refund the amount, calculated on pro-rata basis, of the remaining period of subscription plan which has been paid to by the Driver.
        </p>

        <p className="text-gray-700">
          The Company shall be entitled to adjust any dues of the Driver against the Security Deposit and damage, Loss/ any wear and tear to the battery. Thereafter, Company shall refund the remaining Security Deposit to the Driver within 30 (thirty) days of termination.
        </p>

        <p className="text-gray-700">
          In any circumstances the Sign-up charges paid by the Driver at the time of enrollment to the Company shall not be refunded.
        </p>

        <p className="text-gray-700">
          For any disputes arising through the Refund and Cancellation Policy, the courts at Saket, New Delhi shall have exclusive jurisdiction.
        </p>

        <p className="text-gray-700">
          For any further doubts/ Clarification, the Driver/ User may send a mail to <a href="mailto:info@echargeup.com" className="text-blue-600 hover:text-blue-800 underline font-medium">info@echargeup.com</a> addressing the grievance.
        </p>
      </div>
    </div>
  );
};