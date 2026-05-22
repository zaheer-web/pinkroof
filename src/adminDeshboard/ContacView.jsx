import { useEffect, useState } from "react";
import {
  FiMessageSquare,
  FiTrash2,
  FiX,
  FiUsers,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import {
  getAllContacts,
  deleteContact,
} from "../api/apiRoute";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactView = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedContact, setSelectedContact] = useState(null);

  /* ================= FETCH CONTACTS ================= */

  const fetchContacts = async () => {

    try {

      setLoading(true);

      const res = await getAllContacts();

      const contactsData = res?.data || [];

      setContacts(contactsData);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load contacts ❌");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    fetchContacts();
  }, []);


  /* ================= OPEN MODALS ================= */

  const openMessageModal = (contact) => {
    setSelectedContact(contact);
    setShowMessageModal(true);
  };

  const openDeleteModal = (contact) => {
    setSelectedContact(contact);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowMessageModal(false);
    setShowDeleteModal(false);
    setSelectedContact(null);
  };


  /* ================= DELETE CONTACT ================= */

  const handleDeleteContact = async () => {

    try {

      await deleteContact(selectedContact._id);

      setContacts((prev) =>
        prev.filter((c) => c._id !== selectedContact._id)
      );

      toast.success("Contact deleted successfully 🗑️");

      closeModal();

    } catch (error) {

      console.error(error);

      toast.error("Failed to delete contact ❌");

    }

  };


  /* ================= LOADING ================= */

  if (loading) {

    return (
      <div className="min-h-screen flex justify-center items-center text-lg font-semibold text-pink-600">
        Loading Contacts...
      </div>
    );

  }


  return (

    <div className="min-h-screen bg-gray-100 p-3 sm:p-5 md:p-8">

      {/* HEADER */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 flex items-center gap-3">
          <FiUsers size={32} />
          Pink Roof Contacts
        </h1>

        <div className="bg-white px-5 py-3 rounded-xl shadow text-gray-700 font-medium">
          Total Contacts : {contacts.length}
        </div>

      </div>


      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white">

              <tr>

                <th className="px-4 py-4 text-left text-sm font-semibold">
                  #
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold">
                  First Name
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold">
                  Last Name
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold">
                  Email
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold">
                  Phone
                </th>

                <th className="px-4 py-4 text-center text-sm font-semibold">
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {contacts.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    No contacts found
                  </td>

                </tr>

              ) : (

                contacts.map((contact, index) => (

                  <tr
                    key={contact._id}
                    className="border-b hover:bg-pink-50 transition"
                  >

                    <td className="px-4 py-4 text-sm">
                      {index + 1}
                    </td>

                    <td className="px-4 py-4 text-sm font-medium">
                      {contact.firstName}
                    </td>

                    <td className="px-4 py-4 text-sm font-medium">
                      {contact.lastName}
                    </td>

                    <td className="px-4 py-4 text-sm">
                      {contact.email}
                    </td>

                    <td className="px-4 py-4 text-sm">
                      {contact.phone}
                    </td>


                    {/* ACTIONS */}

                    <td className="px-4 py-4">

                      <div className="flex justify-center gap-3">

                        {/* VIEW MESSAGE */}

                        <button
                          onClick={() =>
                            openMessageModal(contact)
                          }
                          className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                          title="View Message"
                        >
                          <FiMessageSquare size={18} />
                        </button>


                        {/* DELETE */}

                        <button
                          onClick={() =>
                            openDeleteModal(contact)
                          }
                          className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                          title="Delete Contact"
                        >
                          <FiTrash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>



      {/* ================= MESSAGE MODAL ================= */}

      {showMessageModal && (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">

            {/* HEADER */}

            <div className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-6 py-4 flex justify-between items-center">

              <div>

                <h2 className="text-xl font-bold">
                  Contact Message
                </h2>

                <p className="text-sm opacity-90">
                  {selectedContact?.firstName}{" "}
                  {selectedContact?.lastName}
                </p>

              </div>

              <button
                onClick={closeModal}
                className="hover:rotate-90 transition"
              >
                <FiX size={24} />
              </button>

            </div>


            {/* BODY */}

            <div className="p-6 space-y-5">

              <div className="flex items-center gap-3 text-gray-700">

                <FiMail className="text-pink-500" />

                <span className="break-all">
                  {selectedContact?.email}
                </span>

              </div>

              <div className="flex items-center gap-3 text-gray-700">

                <FiPhone className="text-pink-500" />

                <span>
                  {selectedContact?.phone}
                </span>

              </div>


              {/* MESSAGE BOX */}

              <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 max-h-60 overflow-y-auto">

                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed break-words">

                  {selectedContact?.message ||
                    "No message provided"}

                </p>

              </div>


              <div className="flex justify-end">

                <button
                  onClick={closeModal}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white hover:opacity-90 transition"
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}



      {/* ================= DELETE MODAL ================= */}

      {showDeleteModal && (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">

            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Delete Contact
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Are you sure you want to delete this contact?
            </p>

            <div className="mt-2 font-semibold text-gray-800 break-all">
              {selectedContact?.email}
            </div>


            <div className="flex justify-end gap-3 mt-8">

              <button
                onClick={closeModal}
                className="px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteContact}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>

            </div>

          </div>

        </div>

      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

    </div>

  );

};

export default ContactView;