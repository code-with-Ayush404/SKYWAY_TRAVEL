'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function AdminPanel() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('tours');
  const [tours, setTours] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Form states
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    const userRole = localStorage.getItem('userRole');
    if (storedToken && userRole === 'ADMIN') {
      setToken(storedToken);
      setIsLoggedIn(true);
      fetchData(storedToken);
    }
  }, []);

  // Fetch tours and vehicles
  const fetchData = async (authToken) => {
    setLoading(true);
    try {
      const config = { headers: { Authorization: `Bearer ${authToken}` } };
      
      const [toursRes, vehiclesRes] = await Promise.all([
        axios.get(`${API_URL}/admin/tours`, config),
        axios.get(`${API_URL}/admin/vehicles`, config)
      ]);
      
      setTours(toursRes.data.tours || []);
      setVehicles(vehiclesRes.data.vehicles || []);
    } catch (error) {
      toast.error('Failed to fetch data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    router.push('/login');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Admin Access Required</h1>
          <p>Please log in as an admin to access this panel.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Starline Travel Admin Panel</h1>
            <p className="text-blue-100">Manage Tour Packages & Vehicles</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => {
              setActiveTab('tours');
              setShowForm(false);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'tours'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-600'
            }`}
          >
            Tour Packages
          </button>
          <button
            onClick={() => {
              setActiveTab('vehicles');
              setShowForm(false);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'vehicles'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-600'
            }`}
          >
            Vehicles (Taxi & Wedding)
          </button>
        </div>

        {/* Add New Button */}
        {!showForm && (
          <button
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
              setFormData({});
            }}
            className="mb-6 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <Plus size={20} />
            Add New {activeTab === 'tours' ? 'Tour Package' : 'Vehicle'}
          </button>
        )}

        {/* Form Section */}
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">
              {editingId ? 'Edit' : 'Add New'} {activeTab === 'tours' ? 'Tour Package' : 'Vehicle'}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Form submission logic will be added here
                toast.success('Form submitted! (UI component)');
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Title/Name"
                value={formData.title || formData.name || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [activeTab === 'tours' ? 'title' : 'name']: e.target.value
                  })
                }
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Location/Category"
                value={formData.location || formData.category || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [activeTab === 'tours' ? 'location' : 'category']: e.target.value
                  })
                }
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="number"
                placeholder="Price"
                value={formData.price || formData.currentPrice || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [activeTab === 'tours' ? 'currentPrice' : 'price']: e.target.value
                  })
                }
                className="border border-gray-300 rounded px-3 py-2"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white rounded px-4 py-2 hover:bg-gray-500 transition col-span-1 md:col-span-2"
              >
                Cancel
              </button>
            </form>
          </div>
        )}

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading...</div>
          ) : activeTab === 'tours' ? (
            <TourTable tours={tours} onEdit={(tour) => {
              setFormData(tour);
              setEditingId(tour.id);
              setShowForm(true);
            }} onDelete={(id) => {
              toast.success('Delete clicked (API integration needed)');
            }} />
          ) : (
            <VehicleTable vehicles={vehicles} onEdit={(vehicle) => {
              setFormData(vehicle);
              setEditingId(vehicle.id);
              setShowForm(true);
            }} onDelete={(id) => {
              toast.success('Delete clicked (API integration needed)');
            }} />
          )}
        </div>
      </main>
    </div>
  );
}

function TourTable({ tours, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="text-left p-4">Title</th>
            <th className="text-left p-4">Location</th>
            <th className="text-left p-4">Price</th>
            <th className="text-left p-4">Days</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.length > 0 ? (
            tours.map((tour) => (
              <tr key={tour.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{tour.title}</td>
                <td className="p-4">{tour.location}</td>
                <td className="p-4">₹{tour.currentPrice}</td>
                <td className="p-4">{tour.days}</td>
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => onEdit(tour)}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(tour.id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                No tours found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function VehicleTable({ vehicles, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Type</th>
            <th className="text-left p-4">Category</th>
            <th className="text-left p-4">Price</th>
            <th className="text-left p-4">Capacity</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{vehicle.name}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-white text-sm ${
                    vehicle.vehicleType === 'TAXI' ? 'bg-yellow-500' : 'bg-purple-500'
                  }`}>
                    {vehicle.vehicleType}
                  </span>
                </td>
                <td className="p-4">{vehicle.category}</td>
                <td className="p-4">₹{vehicle.price}</td>
                <td className="p-4">{vehicle.capacity} seats</td>
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => onEdit(vehicle)}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(vehicle.id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">
                No vehicles found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
