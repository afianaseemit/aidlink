"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

type HelpRequest = {
  id: string;
  name: string;
  email: string;
  city: string;
  disasterType: string;
  urgency: string;
  status: string;
  assignedVolunteerId: string;
  assignedVolunteerName: string;
  assignedOrganizationId: string;
  assignedOrganizationName: string;
};

type Volunteer = {
  id: string;
  name: string;
};

type Organization = {
  id: string;
  name: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [checking, setChecking] = useState(true);

  const [requests, setRequests] = useState<HelpRequest[]>([]);

  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  const [organizations, setOrganizations] =
    useState<Organization[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (!user) {
          router.push("/login");
          return;
        }

        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          router.push("/");
          return;
        }

        if (userSnap.data().role !== "admin") {
          alert("Access Denied");
          router.push("/");
          return;
        }

        await loadData();

        setChecking(false);
      }
    );

    return () => unsubscribe();
  }, []);

  async function loadData() {
    // HELP REQUESTS
    const requestSnapshot = await getDocs(
      collection(db, "helpRequests")
    );

    const requestData: HelpRequest[] = [];

    requestSnapshot.forEach((docSnap) => {
      const data = docSnap.data();

      requestData.push({
        id: docSnap.id,
        name: data.name || "",
        email: data.email || "",
        city: data.city || "",
        disasterType: data.disasterType || "",
        urgency: data.urgency || "",
        status: data.status || "Pending",
        assignedVolunteerId:
          data.assignedVolunteerId || "",
        assignedVolunteerName:
          data.assignedVolunteerName || "",
        assignedOrganizationId:
          data.assignedOrganizationId || "",
        assignedOrganizationName:
          data.assignedOrganizationName || "",
      });
    });

    setRequests(requestData);

    // VOLUNTEERS
    // NOTE: Volunteers are stored in the "users" collection with
    // role === "volunteer" (same source the dashboard page uses),
    // NOT in a separate "volunteers" collection. Fetching from the
    // wrong collection meant this dropdown was always empty, so no
    // volunteer could ever be assigned.
    const usersSnapshot = await getDocs(collection(db, "users"));

    const volunteerData: Volunteer[] = [];

    usersSnapshot.forEach((docSnap) => {
      const data = docSnap.data();

      if (data.role === "volunteer") {
        volunteerData.push({
          id: docSnap.id,
          name: data.name || data.displayName || data.email || "Unnamed",
        });
      }
    });

    setVolunteers(volunteerData);

    // ORGANIZATIONS
    const organizationSnapshot = await getDocs(
      collection(db, "organizations")
    );

    const organizationData: Organization[] = [];

    organizationSnapshot.forEach((docSnap) => {
      organizationData.push({
        id: docSnap.id,
        name: docSnap.data().name || "",
      });
    });

    setOrganizations(organizationData);
  }

  async function updateRequest(request: HelpRequest) {
    try {
      await updateDoc(
        doc(db, "helpRequests", request.id),
        {
          status: request.status,
          assignedVolunteerId:
            request.assignedVolunteerId,
          assignedVolunteerName:
            request.assignedVolunteerName,
          assignedOrganizationId:
            request.assignedOrganizationId,
          assignedOrganizationName:
            request.assignedOrganizationName,
        }
      );

      alert("✅ Request updated successfully.");

      await loadData();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to update request.");
    }
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <h2 className="text-2xl font-bold">
          Loading Admin Panel...
        </h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-10 text-4xl font-bold text-blue-600">
          Admin Dashboard
        </h1>

        <div className="space-y-8">

          {requests.map((request, index) => (

            <div
              key={request.id}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >

              <div className="grid gap-2">

                <h2 className="text-2xl font-bold">
                  {request.name}
                </h2>

                <p>
                  <strong>Email:</strong> {request.email}
                </p>

                <p>
                  <strong>City:</strong> {request.city}
                </p>

                <p>
                  <strong>Disaster:</strong>{" "}
                  {request.disasterType}
                </p>

                <p>
                  <strong>Urgency:</strong>{" "}
                  {request.urgency}
                </p>

              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">

                {/* Volunteer */}

                <select
                  value={request.assignedVolunteerId}
                  onChange={(e) => {

                    const volunteer =
                      volunteers.find(
                        (v) =>
                          v.id === e.target.value
                      );

                    const updated = [...requests];

                    updated[index].assignedVolunteerId =
                      volunteer?.id || "";

                    updated[index].assignedVolunteerName =
                      volunteer?.name || "";

                    setRequests(updated);

                  }}
                  className="rounded-xl border p-3"
                >

                  <option value="">
                    Select Volunteer
                  </option>

                  {volunteers.map((volunteer) => (

                    <option
                      key={volunteer.id}
                      value={volunteer.id}
                    >
                      {volunteer.name}
                    </option>

                  ))}

                </select>

                {/* Organization */}

                <select
                  value={request.assignedOrganizationId}
                  onChange={(e) => {

                    const organization =
                      organizations.find(
                        (o) =>
                          o.id === e.target.value
                      );

                    const updated = [...requests];

                    updated[index].assignedOrganizationId =
                      organization?.id || "";

                    updated[index].assignedOrganizationName =
                      organization?.name || "";

                    setRequests(updated);

                  }}
                  className="rounded-xl border p-3"
                >

                  <option value="">
                    Select Organization
                  </option>

                  {organizations.map((organization) => (

                    <option
                      key={organization.id}
                      value={organization.id}
                    >
                      {organization.name}
                    </option>

                  ))}

                </select>

                {/* Status */}

                <select
                  value={request.status}
                  onChange={(e) => {

                    const updated = [...requests];

                    updated[index].status =
                      e.target.value;

                    setRequests(updated);

                  }}
                  className="rounded-xl border p-3"
                >

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Assigned">
                    Assigned
                  </option>

                  <option value="Completed">
                    Completed
                  </option>

                </select>

              </div>

              <button
                onClick={() => updateRequest(request)}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Save Changes
              </button>

            </div>

          ))}

          {requests.length === 0 && (
            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
              <h2 className="text-2xl font-bold text-slate-700">
                No Help Requests Found
              </h2>

              <p className="mt-2 text-slate-500">
                All submitted help requests will appear here.
              </p>
            </div>
          )}

        </div>

      </div>

    </main>
  );
}