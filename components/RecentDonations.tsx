"use client";

import {
  DollarSign,
  User,
  Calendar,
  CreditCard,
  Heart,
} from "lucide-react";

type Donation = {
  id: string;
  name: string;
  amount: number;
  donationType: string;
  paymentMethod: string;
  bloodGroup?: string;
  createdAt?: any;
};

type Props = {
  donations: Donation[];
};

export default function RecentDonations({
  donations,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Recent Donations
      </h2>

      {donations.length === 0 ? (

        <div className="rounded-xl bg-slate-50 p-6 text-center text-slate-500">
          No donations found.
        </div>

      ) : (

        <div className="space-y-4">

          {donations.map((donation) => (

            <div
              key={donation.id}
              className="rounded-2xl border p-5 transition hover:bg-slate-50"
            >

              <div className="flex items-center justify-between">

                <div className="space-y-2">

                  <div className="flex items-center gap-2">

                    <User
                      size={18}
                      className="text-blue-600"
                    />

                    <h3 className="font-semibold">
                      {donation.name}
                    </h3>

                  </div>

                  <div className="flex items-center gap-2 text-green-600">

                    <DollarSign size={16} />

                    <span>
                      PKR {donation.amount}
                    </span>

                  </div>

                  <p className="text-sm text-slate-500">

                    Donation Type:
                    {" "}
                    <span className="font-medium">
                      {donation.donationType}
                    </span>

                  </p>

                  {donation.donationType ===
                    "Blood Donation" && (
                    <div className="flex items-center gap-2 text-red-600">

                      <Heart size={16} />

                      <span>
                        Blood Group:
                        {" "}
                        {donation.bloodGroup}
                      </span>

                    </div>
                  )}

                  <div className="flex items-center gap-2 text-blue-600">

                    <CreditCard size={16} />

                    <span>
                      {donation.paymentMethod}
                    </span>

                  </div>

                </div>

                <Calendar
                  className="text-slate-400"
                  size={20}
                />

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}