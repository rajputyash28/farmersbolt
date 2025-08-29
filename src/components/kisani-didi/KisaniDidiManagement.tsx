import React, { useState } from 'react';
import { Search, Plus, Filter, MoreHorizontal, Eye, Edit, UserCheck, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AddKisaniDidiModal from './AddKisaniDidiModal';

const KisaniDidiManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedKD, setSelectedKD] = useState<any>(null);

  const allKisaniDidis = [
    {
      id: 1,
      name: 'Meera Patel',
      registrationId: 'KD-2024-001',
      mobile: '+91 9876543210',
      location: 'Ahmedabad, Gujarat',
      status: 'Active',
      assignedTasks: 5,
      completionRate: '95%'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      registrationId: 'KD-2024-002',
      mobile: '+91 9876543211',
      location: 'Surat, Gujarat',
      status: 'Inactive',
      assignedTasks: 3,
      completionRate: '87%'
    }
  ];

  const pendingApprovals = [
    {
      id: 3,
      name: 'Kavita Singh',
      registrationId: 'KD-2024-003',
      mobile: '+91 9876543212',
      location: 'Rajkot, Gujarat',
      status: 'Pending',
      appliedDate: '2024-01-15',
      priority: 'High'
    },
    {
      id: 4,
      name: 'Sunita Devi',
      registrationId: 'KD-2024-004',
      mobile: '+91 9876543213',
      location: 'Vadodara, Gujarat',
      status: 'Pending',
      appliedDate: '2024-01-14',
      priority: 'Medium'
    }
  ];

  const handleViewProfile = (kd: any) => {
    navigate(`/kisani-didi/${kd.id}`);
  };

  const handleEditKD = (kd: any) => {
    setSelectedKD(kd);
    setShowAddModal(true);
  };

  const handleAddKD = () => {
    setSelectedKD(null);
    setShowAddModal(true);
  };

  const handleApprove = (kd: any) => {
    console.log('Approving KD:', kd);
    // Move to all KDs list
  };

  const handleReject = (kd: any) => {
    console.log('Rejecting KD:', kd);
    // Remove from pending list
  };

  const filteredData = activeTab === 'all' 
    ? allKisaniDidis.filter(kd =>
        kd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kd.mobile.includes(searchTerm) ||
        kd.registrationId.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pendingApprovals.filter(kd =>
        kd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kd.mobile.includes(searchTerm) ||
        kd.registrationId.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kisani Didi Management</h1>
          <p className="text-gray-600 mt-1">Manage Kisani Didis, approvals, and task assignments</p>
        </div>
        <button
          onClick={handleAddKD}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          Register New KD
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'all'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          All KDs ({allKisaniDidis.length})
        </button>
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'pending'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Pending Approvals ({pendingApprovals.length})
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by name, mobile, or registration ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter size={20} />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Registration ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Mobile
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              {activeTab === 'all' ? (
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Assigned Tasks
                </th>
              ) : (
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Applied Date
                </th>
              )}
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((kd) => (
              <tr key={kd.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleViewProfile(kd)}
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 underline"
                  >
                    {kd.name}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {kd.registrationId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {kd.mobile}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {kd.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    kd.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : kd.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {kd.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {activeTab === 'all' 
                    ? `${(kd as any).assignedTasks} tasks` 
                    : (kd as any).appliedDate
                  }
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex items-center gap-2">
                    {activeTab === 'pending' ? (
                      <>
                        <button
                          onClick={() => handleApprove(kd)}
                          className="p-1 text-green-600 hover:text-green-800"
                          title="Approve"
                        >
                          <UserCheck size={16} />
                        </button>
                        <button
                          onClick={() => handleReject(kd)}
                          className="p-1 text-red-600 hover:text-red-800"
                          title="Reject"
                        >
                          <X size={16} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleViewProfile(kd)}
                          className="p-1 text-gray-400 hover:text-blue-600"
                          title="View Profile"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleEditKD(kd)}
                          className="p-1 text-gray-400 hover:text-green-600"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                      </>
                    )}
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600"
                      title="More Actions"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit KD Modal */}
      {showAddModal && (
        <AddKisaniDidiModal
          kisaniDidi={selectedKD}
          onClose={() => {
            setShowAddModal(false);
            setSelectedKD(null);
          }}
          onSave={(kdData) => {
            console.log('Saving KD:', kdData);
            setShowAddModal(false);
            setSelectedKD(null);
          }}
        />
      )}
    </div>
  );
};

export default KisaniDidiManagement;