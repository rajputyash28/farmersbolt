import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Phone, MapPin, Calendar, CheckCircle, Clock } from 'lucide-react';

const KisaniDidiProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const kisaniDidi = {
    id: 1,
    name: 'Meera Patel',
    registrationId: 'KD-2024-001',
    mobile: '+91 9876543210',
    location: 'Ahmedabad, Gujarat',
    status: 'Active',
    assignedTasks: 5,
    completionRate: '95%',
    attendanceHistory: [
      { date: '2024-01-15', location: 'Village A', checkIn: '09:00 AM', checkOut: '05:00 PM', status: 'Present' },
      { date: '2024-01-14', location: 'Village B', checkIn: '08:30 AM', checkOut: '04:30 PM', status: 'Present' },
      { date: '2024-01-13', location: 'Village A', checkIn: '-', checkOut: '-', status: 'Absent' }
    ],
    tasks: [
      { id: 1, title: 'Crop Disease Survey', status: 'Completed', date: '2024-01-15' },
      { id: 2, title: 'Farmer Training Session', status: 'In Progress', date: '2024-01-16' },
      { id: 3, title: 'Soil Testing Campaign', status: 'Assigned', date: '2024-01-17' }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/kisani-didi')}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg border border-gray-300"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-blue-600">Kisani Didi Profile</h1>
            <p className="text-gray-600">Complete Information for {kisaniDidi.name}</p>
          </div>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
          <Edit size={18} />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Overview */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">
                  {kisaniDidi.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{kisaniDidi.name}</h3>
              <p className="text-sm text-gray-600">{kisaniDidi.registrationId}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                {kisaniDidi.status}
              </span>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{kisaniDidi.mobile}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{kisaniDidi.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Assigned Tasks</span>
                <span className="font-medium">{kisaniDidi.assignedTasks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Completion Rate</span>
                <span className="font-medium text-green-600">{kisaniDidi.completionRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Active Since</span>
                <span className="font-medium">Jan 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Detailed Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Assigned Tasks */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Assigned Tasks</h3>
            <div className="space-y-3">
              {kisaniDidi.tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{task.title}</h4>
                    <p className="text-sm text-gray-600">Due: {task.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance History */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Attendance</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Location</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Check In</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Check Out</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {kisaniDidi.attendanceHistory.map((attendance, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 text-sm text-gray-900">{attendance.date}</td>
                      <td className="py-3 text-sm text-gray-600">{attendance.location}</td>
                      <td className="py-3 text-sm text-gray-600">{attendance.checkIn}</td>
                      <td className="py-3 text-sm text-gray-600">{attendance.checkOut}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-1">
                          {attendance.status === 'Present' ? (
                            <>
                              <CheckCircle size={16} className="text-green-500" />
                              <span className="text-sm text-green-600">Present</span>
                            </>
                          ) : (
                            <>
                              <Clock size={16} className="text-red-500" />
                              <span className="text-sm text-red-600">Absent</span>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KisaniDidiProfile;