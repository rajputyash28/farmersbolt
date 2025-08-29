// import React, { useState } from 'react';
// import { Search, Plus, Filter, MoreHorizontal, Eye, Edit, Blocks as Block, UserCheck } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import AddFarmerModal from './AddFarmerModal';

// const FarmerManagement = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedFarmer, setSelectedFarmer] = useState<any>(null);

//   const farmers = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       mobile: '+91 9876543210',
//       memberId: 'MEM-F-2024-001',
//       status: 'Active',
//       registeredDate: '2024-01-15',
//       kycStatus: 'Approved'
//     },
//     {
//       id: 2,
//       name: 'Priya Sharma',
//       mobile: '+91 9876543211',
//       memberId: 'MEM-F-2024-002',
//       status: 'Inactive',
//       registeredDate: '2024-01-14',
//       kycStatus: 'Pending'
//     },
//     {
//       id: 3,
//       name: 'Amit Singh',
//       mobile: '+91 9876543212',
//       memberId: 'MEM-F-2024-003',
//       status: 'Active',
//       registeredDate: '2024-01-13',
//       kycStatus: 'Approved'
//     },
//     {
//       id: 4,
//       name: 'Sunita Devi',
//       mobile: '+91 9876543213',
//       memberId: 'MEM-F-2024-004',
//       status: 'Inactive',
//       registeredDate: '2024-01-12',
//       kycStatus: 'Rejected'
//     }
//   ];

//   const filteredFarmers = farmers.filter(farmer =>
//     farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     farmer.mobile.includes(searchTerm) ||
//     farmer.memberId.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleViewProfile = (farmer: any) => {
//     navigate(`/farmers/${farmer.id}`);
//   };

//   const handleEditFarmer = (farmer: any) => {
//     setSelectedFarmer(farmer);
//     setShowAddModal(true);
//   };

//   const handleAddFarmer = () => {
//     setSelectedFarmer(null);
//     setShowAddModal(true);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Farmer Management</h1>
//           <p className="text-gray-600 mt-1">
//             Manage farmers <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">294.49 × 36</span>, status, and details
//           </p>
//         </div>
//         <button
//           onClick={handleAddFarmer}
//           className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2 transition-colors"
//         >
//           <Plus size={20} />
//           Add New Farmer
//         </button>
//       </div>

//       {/* Search and Filter */}
//       <div className="flex items-center gap-4">
//         <div className="flex-1 relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//           <input
//             type="text"
//             placeholder="Search by name, mobile, or member ID..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//           />
//         </div>
//         <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
//           <Filter size={20} />
//           Filter
//         </button>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Mobile
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Member ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Registered Date
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredFarmers.map((farmer) => (
//               <tr key={farmer.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <button
//                     onClick={() => handleViewProfile(farmer)}
//                     className="text-sm font-semibold text-gray-900 hover:text-blue-600 underline"
//                   >
//                     {farmer.name}
//                   </button>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                   {farmer.mobile}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                   {farmer.memberId}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
//                     farmer.status === 'Active'
//                       ? 'bg-green-100 text-green-800'
//                       : 'bg-red-100 text-red-800'
//                   }`}>
//                     {farmer.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                   {farmer.registeredDate}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-right">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => handleViewProfile(farmer)}
//                       className="p-1 text-gray-400 hover:text-blue-600"
//                       title="View Details"
//                     >
//                       <Eye size={16} />
//                     </button>
//                     <button
//                       onClick={() => handleEditFarmer(farmer)}
//                       className="p-1 text-gray-400 hover:text-green-600"
//                       title="Edit Details"
//                     >
//                       <Edit size={16} />
//                     </button>
//                     <button
//                       className="p-1 text-gray-400 hover:text-red-600"
//                       title="Block"
//                     >
//                       <Block size={16} />
//                     </button>
//                     <button
//                       className="p-1 text-gray-400 hover:text-green-600"
//                       title="Approve KYC"
//                     >
//                       <UserCheck size={16} />
//                     </button>
//                     <button
//                       className="p-1 text-gray-400 hover:text-gray-600"
//                       title="More Actions"
//                     >
//                       <MoreHorizontal size={16} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Add/Edit Farmer Modal */}
//       {showAddModal && (
//         <AddFarmerModal
//           farmer={selectedFarmer}
//           onClose={() => {
//             setShowAddModal(false);
//             setSelectedFarmer(null);
//           }}
//           onSave={(farmerData) => {
//             console.log('Saving farmer:', farmerData);
//             setShowAddModal(false);
//             setSelectedFarmer(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default FarmerManagement;



// import React, { useState } from 'react';
// import { Search, Plus, Filter, MoreHorizontal, Eye, Edit, UserCheck, Download, X, ChevronDown, Square } from 'lucide-react';

// const FarmerManagement = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedFarmer, setSelectedFarmer] = useState(null);
//   const [showFilterMenu, setShowFilterMenu] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(9);
//   const [filters, setFilters] = useState({
//     state: '',
//     district: '',
//     mandal: '',
//     landSize: ''
//   });

//   // Mock data with additional fields for filtering
//   const allFarmers = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       mobile: '+91 9876543210',
//       memberId: 'MEM-F-2024-001',
//       status: 'Active',
//       registeredDate: '2024-01-15',
//       kycStatus: 'Approved',
//       state: 'Punjab',
//       district: 'Ludhiana',
//       mandal: 'Ludhiana-I',
//       landSize: '5-10 acres'
//     },
//     {
//       id: 2,
//       name: 'Priya Sharma',
//       mobile: '+91 9876543211',
//       memberId: 'MEM-F-2024-002',
//       status: 'Inactive',
//       registeredDate: '2024-01-14',
//       kycStatus: 'Pending',
//       state: 'Haryana',
//       district: 'Karnal',
//       mandal: 'Karnal-II',
//       landSize: '2-5 acres'
//     },
//     {
//       id: 3,
//       name: 'Amit Singh',
//       mobile: '+91 9876543212',
//       memberId: 'MEM-F-2024-003',
//       status: 'Active',
//       registeredDate: '2024-01-13',
//       kycStatus: 'Approved',
//       state: 'Punjab',
//       district: 'Amritsar',
//       mandal: 'Amritsar-I',
//       landSize: '10+ acres'
//     },
//     {
//       id: 4,
//       name: 'Sunita Devi',
//       mobile: '+91 9876543213',
//       memberId: 'MEM-F-2024-004',
//       status: 'Inactive',
//       registeredDate: '2024-01-12',
//       kycStatus: 'Rejected',
//       state: 'Haryana',
//       district: 'Panipat',
//       mandal: 'Panipat-I',
//       landSize: '1-2 acres'
//     },
//     // Adding more mock farmers to demonstrate pagination
//     ...Array.from({ length: 116 }, (_, i) => ({
//       id: i + 5,
//       name: `Farmer ${i + 5}`,
//       mobile: `+91 987654${(3214 + i).toString().slice(-4)}`,
//       memberId: `MEM-F-2024-${(i + 5).toString().padStart(3, '0')}`,
//       status: i % 3 === 0 ? 'Inactive' : 'Active',
//       registeredDate: `2024-01-${(11 - (i % 11)).toString().padStart(2, '0')}`,
//       kycStatus: i % 4 === 0 ? 'Pending' : i % 7 === 0 ? 'Rejected' : 'Approved',
//       state: i % 2 === 0 ? 'Punjab' : 'Haryana',
//       district: i % 3 === 0 ? 'Ludhiana' : i % 3 === 1 ? 'Karnal' : 'Amritsar',
//       mandal: `Mandal-${i % 5 + 1}`,
//       landSize: i % 4 === 0 ? '1-2 acres' : i % 4 === 1 ? '2-5 acres' : i % 4 === 2 ? '5-10 acres' : '10+ acres'
//     }))
//   ];

//   // Apply filters and search
//   const filteredFarmers = allFarmers.filter(farmer => {
//     const matchesSearch = farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       farmer.mobile.includes(searchTerm) ||
//       farmer.memberId.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesFilters = 
//       (filters.state === '' || farmer.state === filters.state) &&
//       (filters.district === '' || farmer.district === filters.district) &&
//       (filters.mandal === '' || farmer.mandal === filters.mandal) &&
//       (filters.landSize === '' || farmer.landSize === filters.landSize);

//     return matchesSearch && matchesFilters;
//   });

//   // Pagination logic
//   const totalEntries = filteredFarmers.length;
//   const totalPages = Math.ceil(totalEntries / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, totalEntries);
//   const currentFarmers = filteredFarmers.slice(startIndex, endIndex);

//   const handleViewProfile = (farmer) => {
//     console.log('View profile:', farmer);
//   };

//   const handleEditFarmer = (farmer) => {
//     setSelectedFarmer(farmer);
//     setShowAddModal(true);
//   };

//   const handleAddFarmer = () => {
//     setSelectedFarmer(null);
//     setShowAddModal(true);
//   };

//   const handleExportCSV = () => {
//     const headers = ['Name', 'Mobile', 'Member ID', 'Status', 'Registered Date', 'KYC Status', 'State', 'District', 'Mandal', 'Land Size'];
//     const csvData = [
//       headers,
//       ...filteredFarmers.map(farmer => [
//         farmer.name,
//         farmer.mobile,
//         farmer.memberId,
//         farmer.status,
//         farmer.registeredDate,
//         farmer.kycStatus,
//         farmer.state,
//         farmer.district,
//         farmer.mandal,
//         farmer.landSize
//       ])
//     ];
    
//     const csvContent = csvData.map(row => row.map(field => `"${field}"`).join(',')).join('\n');
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'farmers_data.csv';
//     link.click();
//     window.URL.revokeObjectURL(url);
//   };

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => ({ ...prev, [filterType]: value }));
//     setCurrentPage(1); // Reset to first page when filter changes
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       state: '',
//       district: '',
//       mandal: '',
//       landSize: ''
//     });
//     setCurrentPage(1);
//   };

//   const handleApplyFilters = () => {
//     setShowFilterMenu(false);
//     setCurrentPage(1);
//   };

//   const hasActiveFilters = Object.values(filters).some(filter => filter !== '');

//   return (
//     <div className="space-y-6 relative">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Farmer Management</h1>
//           <p className="text-gray-600 mt-1">
//             Manage farmers, status, and details
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button
//             onClick={handleExportCSV}
//             className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors"
//           >
//             <Download size={20} />
//             Export CSV
//           </button>
//           <button
//             onClick={handleAddFarmer}
//             className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2 transition-colors"
//           >
//             <Plus size={20} />
//             Add New Farmer
//           </button>
//         </div>
//       </div>

//       {/* Search and Filter */}
//       <div className="flex items-center gap-4">
//         <div className="flex-1 relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//           <input
//             type="text"
//             placeholder="Search by name, mobile, or member ID..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//           />
//         </div>
//         <div className="relative">
//           <button 
//             onClick={() => setShowFilterMenu(!showFilterMenu)}
//             className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
//               hasActiveFilters 
//                 ? 'border-blue-500 bg-blue-50 text-blue-700' 
//                 : 'border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             <Filter size={20} />
//             Filter by
//             <ChevronDown size={16} />
//           </button>

//           {/* Filter Dropdown */}
//           {showFilterMenu && (
//             <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//               <div className="p-4 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-medium text-gray-900">Filter by</h3>
//                   <button 
//                     onClick={() => setShowFilterMenu(false)}
//                     className="text-gray-400 hover:text-gray-600"
//                   >
//                     <X size={16} />
//                   </button>
//                 </div>

//                 <div className="space-y-3">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
//                     <select
//                       value={filters.state}
//                       onChange={(e) => handleFilterChange('state', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All States</option>
//                       <option value="Punjab">Punjab</option>
//                       <option value="Haryana">Haryana</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
//                     <select
//                       value={filters.district}
//                       onChange={(e) => handleFilterChange('district', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All Districts</option>
//                       <option value="Ludhiana">Ludhiana</option>
//                       <option value="Karnal">Karnal</option>
//                       <option value="Amritsar">Amritsar</option>
//                       <option value="Panipat">Panipat</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Mandal</label>
//                     <select
//                       value={filters.mandal}
//                       onChange={(e) => handleFilterChange('mandal', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All Mandals</option>
//                       <option value="Ludhiana-I">Ludhiana-I</option>
//                       <option value="Karnal-II">Karnal-II</option>
//                       <option value="Amritsar-I">Amritsar-I</option>
//                       <option value="Panipat-I">Panipat-I</option>
//                       <option value="Mandal-1">Mandal-1</option>
//                       <option value="Mandal-2">Mandal-2</option>
//                       <option value="Mandal-3">Mandal-3</option>
//                       <option value="Mandal-4">Mandal-4</option>
//                       <option value="Mandal-5">Mandal-5</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Land size</label>
//                     <select
//                       value={filters.landSize}
//                       onChange={(e) => handleFilterChange('landSize', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All Sizes</option>
//                       <option value="1-2 acres">1-2 acres</option>
//                       <option value="2-5 acres">2-5 acres</option>
//                       <option value="5-10 acres">5-10 acres</option>
//                       <option value="10+ acres">10+ acres</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
//                   <button
//                     onClick={handleResetFilters}
//                     className="flex-1 px-3 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
//                   >
//                     Reset
//                   </button>
//                   <button
//                     onClick={handleApplyFilters}
//                     className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                   >
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Active Filters Display */}
//       {hasActiveFilters && (
//         <div className="flex items-center gap-2 text-sm">
//           <span className="text-gray-600">Active filters:</span>
//           {Object.entries(filters).map(([key, value]) => 
//             value && (
//               <span key={key} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
//                 {key}: {value}
//                 <button 
//                   onClick={() => handleFilterChange(key, '')}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <X size={12} />
//                 </button>
//               </span>
//             )
//           )}
//           <button 
//             onClick={handleResetFilters}
//             className="text-blue-600 hover:text-blue-800 font-medium"
//           >
//             Clear all
//           </button>
//         </div>
//       )}

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Mobile
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Member ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Registered Date
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {currentFarmers.map((farmer) => (
//               <tr key={farmer.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <button
//                     onClick={() => handleViewProfile(farmer)}
//                     className="text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
//                   >
//                     {farmer.name}
//                   </button>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                   {farmer.mobile}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                   {farmer.memberId}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
//                     farmer.status === 'Active'
//                       ? 'bg-green-100 text-green-800'
//                       : 'bg-red-100 text-red-800'
//                   }`}>
//                     {farmer.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                   {farmer.registeredDate}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-right">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => handleViewProfile(farmer)}
//                       className="p-1 text-gray-400 hover:text-blue-600"
//                       title="View Details"
//                     >
//                       <Eye size={16} />
//                     </button>
//                     <button
//                       onClick={() => handleEditFarmer(farmer)}
//                       className="p-1 text-gray-400 hover:text-green-600"
//                       title="Edit Details"
//                     >
//                       <Edit size={16} />
//                     </button>
//                     <button
//                       className="p-1 text-gray-400 hover:text-red-600"
//                       title="Block"
//                     >
//                       <Square size={16} />
//                     </button>
//                     <button
//                       className="p-1 text-gray-400 hover:text-green-600"
//                       title="Approve KYC"
//                     >
//                       <UserCheck size={16} />
//                     </button>
//                     <button
//                       className="p-1 text-gray-400 hover:text-gray-600"
//                       title="More Actions"
//                     >
//                       <MoreHorizontal size={16} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-between">
//         <div className="text-sm text-gray-600">
//           Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
//         </div>
        
//         <div className="flex items-center gap-1">
//           <button
//             onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
          
//           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//             let pageNum;
//             if (totalPages <= 5) {
//               pageNum = i + 1;
//             } else if (currentPage <= 3) {
//               pageNum = i + 1;
//             } else if (currentPage >= totalPages - 2) {
//               pageNum = totalPages - 4 + i;
//             } else {
//               pageNum = currentPage - 2 + i;
//             }
            
//             return (
//               <button
//                 key={pageNum}
//                 onClick={() => setCurrentPage(pageNum)}
//                 className={`px-3 py-1 text-sm border rounded transition-colors ${
//                   pageNum === currentPage
//                     ? 'border-blue-500 bg-blue-50 text-blue-600'
//                     : 'border-gray-300 hover:bg-gray-50'
//                 }`}
//               >
//                 {pageNum}
//               </button>
//             );
//           })}
          
//           <button
//             onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Add/Edit Farmer Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-lg font-bold mb-4">
//               {selectedFarmer ? 'Edit Farmer' : 'Add New Farmer'}
//             </h2>
//             <p className="text-gray-600">
//               {selectedFarmer ? 'Edit farmer details' : 'Add farmer form would go here'}
//             </p>
//             <div className="flex gap-2 mt-4">
//               <button
//                 onClick={() => {
//                   setShowAddModal(false);
//                   setSelectedFarmer(null);
//                 }}
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
//                   console.log('Saving farmer:', selectedFarmer);
//                   setShowAddModal(false);
//                   setSelectedFarmer(null);
//                 }}
//                 className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Overlay to close filter menu when clicking outside */}
//       {showFilterMenu && (
//         <div 
//           className="fixed inset-0 z-40" 
//           onClick={() => setShowFilterMenu(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default FarmerManagement;




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { Search, Plus, Filter, MoreHorizontal, Eye, Edit, UserCheck, Download, X, ChevronDown, Square } from 'lucide-react';

// const FarmerManagement = () => {
//   const navigate  = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedFarmer, setSelectedFarmer] = useState(null);
//   const [showFilterMenu, setShowFilterMenu] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [filters, setFilters] = useState({
//     state: '',
//     district: '',
//     mandal: '',
//     landSize: ''
//   });

//   // Mock data with additional fields for filtering
//   const allFarmers = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       mobile: '+91 9876543210',
//       memberId: 'MEM-F-2024-001',
//       status: 'Active',
//       registeredDate: '2024-01-15',
//       kycStatus: 'Approved',
//       state: 'Punjab',
//       district: 'Ludhiana',
//       mandal: 'Ludhiana-I',
//       landSize: '5-10 acres'
//     },
//     {
//       id: 2,
//       name: 'Priya Sharma',
//       mobile: '+91 9876543211',
//       memberId: 'MEM-F-2024-002',
//       status: 'Inactive',
//       registeredDate: '2024-01-14',
//       kycStatus: 'Pending',
//       state: 'Haryana',
//       district: 'Karnal',
//       mandal: 'Karnal-II',
//       landSize: '2-5 acres'
//     },
//     {
//       id: 3,
//       name: 'Amit Singh',
//       mobile: '+91 9876543212',
//       memberId: 'MEM-F-2024-003',
//       status: 'Active',
//       registeredDate: '2024-01-13',
//       kycStatus: 'Approved',
//       state: 'Punjab',
//       district: 'Amritsar',
//       mandal: 'Amritsar-I',
//       landSize: '10+ acres'
//     },
//     {
//       id: 4,
//       name: 'Sunita Devi',
//       mobile: '+91 9876543213',
//       memberId: 'MEM-F-2024-004',
//       status: 'Inactive',
//       registeredDate: '2024-01-12',
//       kycStatus: 'Rejected',
//       state: 'Haryana',
//       district: 'Panipat',
//       mandal: 'Panipat-I',
//       landSize: '1-2 acres'
//     },
//     // Adding more mock farmers to demonstrate pagination
//     ...Array.from({ length: 116 }, (_, i) => ({
//       id: i + 5,
//       name: `Farmer ${i + 5}`,
//       mobile: `+91 987654${(3214 + i).toString().slice(-4)}`,
//       memberId: `MEM-F-2024-${(i + 5).toString().padStart(3, '0')}`,
//       status: i % 3 === 0 ? 'Inactive' : 'Active',
//       registeredDate: `2024-01-${(11 - (i % 11)).toString().padStart(2, '0')}`,
//       kycStatus: i % 4 === 0 ? 'Pending' : i % 7 === 0 ? 'Rejected' : 'Approved',
//       state: i % 2 === 0 ? 'Punjab' : 'Haryana',
//       district: i % 3 === 0 ? 'Ludhiana' : i % 3 === 1 ? 'Karnal' : 'Amritsar',
//       mandal: `Mandal-${i % 5 + 1}`,
//       landSize: i % 4 === 0 ? '1-2 acres' : i % 4 === 1 ? '2-5 acres' : i % 4 === 2 ? '5-10 acres' : '10+ acres'
//     }))
//   ];

//   // Apply filters and search
//   const filteredFarmers = allFarmers.filter(farmer => {
//     const matchesSearch = farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       farmer.mobile.includes(searchTerm) ||
//       farmer.memberId.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesFilters = 
//       (filters.state === '' || farmer.state === filters.state) &&
//       (filters.district === '' || farmer.district === filters.district) &&
//       (filters.mandal === '' || farmer.mandal === filters.mandal) &&
//       (filters.landSize === '' || farmer.landSize === filters.landSize);

//     return matchesSearch && matchesFilters;
//   });

//   // Pagination logic
//   const totalEntries = filteredFarmers.length;
//   const totalPages = Math.ceil(totalEntries / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, totalEntries);
//   const currentFarmers = filteredFarmers.slice(startIndex, endIndex);

//   const handleViewProfile = (farmer : any) => {
//     navigate(`/farmers/${farmer.id}`);
//   };

//   const handleEditFarmer = (farmer : any ) => {
//     navigate(`/farmers/${farmer.id}`);
//   };

//   const handleAddFarmer = () => {
//     setSelectedFarmer(null);
//     setShowAddModal(true);
//   };

//   const handleExportCSV = () => {
//     const headers = ['Name', 'Mobile', 'Member ID', 'Status', 'Registered Date', 'KYC Status', 'State', 'District', 'Mandal', 'Land Size'];
//     const csvData = [
//       headers,
//       ...filteredFarmers.map(farmer => [
//         farmer.name,
//         farmer.mobile,
//         farmer.memberId,
//         farmer.status,
//         farmer.registeredDate,
//         farmer.kycStatus,
//         farmer.state,
//         farmer.district,
//         farmer.mandal,
//         farmer.landSize
//       ])
//     ];
    
//     const csvContent = csvData.map(row => row.map(field => `"${field}"`).join(',')).join('\n');
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'farmers_data.csv';
//     link.click();
//     window.URL.revokeObjectURL(url);
//   };

//   const handleFilterChange = (filterType : any , value : any ) => {
//     setFilters(prev => ({ ...prev, [filterType]: value }));
//     setCurrentPage(1); // Reset to first page when filter changes
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       state: '',
//       district: '',
//       mandal: '',
//       landSize: ''
//     });
//     setCurrentPage(1);
//   };

//   const handleApplyFilters = () => {
//     setShowFilterMenu(false);
//     setCurrentPage(1);
//   };

//   const hasActiveFilters = Object.values(filters).some(filter => filter !== '');

//   return (
//     <div className="space-y-6 relative">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Farmer Management</h1>
//           <p className="text-gray-600 mt-1">
//             Manage farmers, status, and details
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button
//             onClick={handleAddFarmer}
//             className="bg-[#000000] text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2 transition-colors"
//           >
//             <Plus size={20} />
//             Add New Farmer
//           </button>
//         </div>
//       </div>

//       {/* Search and Filter */}
//       <div className="flex items-center gap-4">
//         <div className="flex-1 relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//           <input
//             type="text"
//             placeholder="Search by name, mobile, or member ID..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//           />
//         </div>
//           <button
//             onClick={handleExportCSV}
//             className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors"
//           >
//             <Download size={20} />
//             Export CSV
//           </button>
//         <div className="relative">
//           <button 
//             onClick={() => setShowFilterMenu(!showFilterMenu)}
//             className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
//               hasActiveFilters 
//                 ? 'border-blue-500 bg-blue-50 text-blue-700' 
//                 : 'border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             <img src="/filter.svg" alt="Filter" />

//             {/* <Filter size={20} />
//             Filter by
//             <ChevronDown size={16} /> */}
//           </button>

//           {/* Filter Dropdown */}
//           {showFilterMenu && (
//             <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//               <div className="p-4 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-medium text-gray-900">Filter by</h3>
//                   <button 
//                     onClick={() => setShowFilterMenu(false)}
//                     className="text-gray-400 hover:text-gray-600"
//                   >
//                     <X size={16} />
//                   </button>
//                 </div>

//                 <div className="space-y-3">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
//                     <select
//                       value={filters.state}
//                       onChange={(e) => handleFilterChange('state', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All States</option>
//                       <option value="Punjab">Punjab</option>
//                       <option value="Haryana">Haryana</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
//                     <select
//                       value={filters.district}
//                       onChange={(e) => handleFilterChange('district', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All Districts</option>
//                       <option value="Ludhiana">Ludhiana</option>
//                       <option value="Karnal">Karnal</option>
//                       <option value="Amritsar">Amritsar</option>
//                       <option value="Panipat">Panipat</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Mandal</label>
//                     <select
//                       value={filters.mandal}
//                       onChange={(e) => handleFilterChange('mandal', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All Mandals</option>
//                       <option value="Ludhiana-I">Ludhiana-I</option>
//                       <option value="Karnal-II">Karnal-II</option>
//                       <option value="Amritsar-I">Amritsar-I</option>
//                       <option value="Panipat-I">Panipat-I</option>
//                       <option value="Mandal-1">Mandal-1</option>
//                       <option value="Mandal-2">Mandal-2</option>
//                       <option value="Mandal-3">Mandal-3</option>
//                       <option value="Mandal-4">Mandal-4</option>
//                       <option value="Mandal-5">Mandal-5</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Land size</label>
//                     <select
//                       value={filters.landSize}
//                       onChange={(e) => handleFilterChange('landSize', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All Sizes</option>
//                       <option value="1-2 acres">1-2 acres</option>
//                       <option value="2-5 acres">2-5 acres</option>
//                       <option value="5-10 acres">5-10 acres</option>
//                       <option value="10+ acres">10+ acres</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
//                   <button
//                     onClick={handleResetFilters}
//                     className="flex-1 px-3 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
//                   >
//                     Reset
//                   </button>
//                   <button
//                     onClick={handleApplyFilters}
//                     className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                   >
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Active Filters Display */}
//       {hasActiveFilters && (
//         <div className="flex items-center gap-2 text-sm">
//           <span className="text-gray-600">Active filters:</span>
//           {Object.entries(filters).map(([key, value]) => 
//             value && (
//               <span key={key} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
//                 {key}: {value}
//                 <button 
//                   onClick={() => handleFilterChange(key, '')}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <X size={12} />
//                 </button>
//               </span>
//             )
//           )}
//           <button 
//             onClick={handleResetFilters}
//             className="text-blue-600 hover:text-blue-800 font-medium"
//           >
//             Clear all
//           </button>
//         </div>
//       )}

//       {/* Table */}
//           {/* Table Container with proper spacing */}
//       <div className="px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-200">
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Name
//                 </th>
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Mobile
//                 </th>
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Member ID
//                 </th>
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Status
//                 </th>
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Registered Date
//                 </th>
//                 <th className="text-right py-4 text-sm font-semibold text-gray-700 w-1/6">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentFarmers.map((farmer, index) => (
//                 <tr key={farmer.id} className={index < currentFarmers.length - 1 ? "border-b border-gray-100" : ""}>
//                   <td className="py-4 pr-8">
//                     <button
//                       onClick={() => handleViewProfile(farmer)}
//                       className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
//                     >
//                       {farmer.name}
//                     </button>
//                   </td>
//                   <td className="py-4 pr-8 text-sm text-gray-600">
//                     {farmer.mobile}
//                   </td>
//                   <td className="py-4 pr-8 text-sm text-gray-600">
//                     {farmer.memberId}
//                   </td>
//                   <td className="py-4 pr-8">
//                     <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
//                       farmer.status === 'Active'
//                         ? 'bg-green-100 text-green-800'
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {farmer.status}
//                     </span>
//                   </td>
//                   <td className="py-4 pr-8 text-sm text-gray-600">
//                     {farmer.registeredDate}
//                   </td>
//                   <td className="py-4 text-right">
//                     <div className="flex items-center justify-end gap-1">
//                       <button
//                         onClick={() => handleViewProfile(farmer)}
//                         className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
//                         title="View Details"
//                       >
//                         <Eye size={16} />
//                       </button>
//                       <button
//                         onClick={() => handleEditFarmer(farmer)}
//                         className="p-2 text-gray-400 hover:text-green-600 transition-colors"
//                         title="Edit Details"
//                       >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         className="p-2 text-gray-400 hover:text-red-600 transition-colors"
//                         title="Block"
//                       >
//                         <Square size={16} />
//                       </button>
//                       <button
//                         className="p-2 text-gray-400 hover:text-green-600 transition-colors"
//                         title="Approve KYC"
//                       >
//                         <UserCheck size={16} />
//                       </button>
//                       <button
//                         className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
//                         title="More Actions"
//                       >
//                         <MoreHorizontal size={16} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-between">
//         <div className="text-sm text-gray-600">
//           Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
//         </div>
        
//         <div className="flex items-center gap-1">
//           <button
//             onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
          
//           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//             let pageNum;
//             if (totalPages <= 5) {
//               pageNum = i + 1;
//             } else if (currentPage <= 3) {
//               pageNum = i + 1;
//             } else if (currentPage >= totalPages - 2) {
//               pageNum = totalPages - 4 + i;
//             } else {
//               pageNum = currentPage - 2 + i;
//             }
            
//             return (
//               <button
//                 key={pageNum}
//                 onClick={() => setCurrentPage(pageNum)}
//                 className={`px-3 py-1 text-sm border rounded transition-colors ${
//                   pageNum === currentPage
//                     ? 'border-blue-500 bg-blue-50 text-blue-600'
//                     : 'border-gray-300 hover:bg-gray-50'
//                 }`}
//               >
//                 {pageNum}
//               </button>
//             );
//           })}
          
//           <button
//             onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Add/Edit Farmer Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-lg font-bold mb-4">
//               {selectedFarmer ? 'Edit Farmer' : 'Add New Farmer'}
//             </h2>
//             <p className="text-gray-600">
//               {selectedFarmer ? 'Edit farmer details' : 'Add farmer form would go here'}
//             </p>
//             <div className="flex gap-2 mt-4">
//               <button
//                 onClick={() => {
//                   setShowAddModal(false);
//                   setSelectedFarmer(null);
//                 }}
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
//                   console.log('Saving farmer:', selectedFarmer);
//                   setShowAddModal(false);
//                   setSelectedFarmer(null);
//                 }}
//                 className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Overlay to close filter menu when clicking outside */}
//       {showFilterMenu && (
//         <div 
//           className="fixed inset-0 z-40" 
//           onClick={() => setShowFilterMenu(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default FarmerManagement;
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, Plus, Filter, MoreHorizontal, Edit, Square, X, ChevronDown, Eye, UserCheck, Download } from 'lucide-react';

// const FarmerManagement = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedFarmer, setSelectedFarmer] = useState(null);
//   const [showFilterMenu, setShowFilterMenu] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [filters, setFilters] = useState({
//     state: '',
//     district: '',
//     mandal: '',
//     landSize: ''
//   });
//   const [showActionMenu, setShowActionMenu] = useState(null); // New state for action menu

//   // Mock data with additional fields for filtering
//   const allFarmers = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       mobile: '+91 9876543210',
//       memberId: 'MEM-F-2024-001',
//       status: 'Active',
//       registeredDate: '2024-01-15',
//       kycStatus: 'Approved',
//       state: 'Punjab',
//       district: 'Ludhiana',
//       mandal: 'Ludhiana-I',
//       landSize: '5-10 acres'
//     },
//     {
//       id: 2,
//       name: 'Priya Sharma',
//       mobile: '+91 9876543211',
//       memberId: 'MEM-F-2024-002',
//       status: 'Inactive',
//       registeredDate: '2024-01-14',
//       kycStatus: 'Pending',
//       state: 'Haryana',
//       district: 'Karnal',
//       mandal: 'Karnal-II',
//       landSize: '2-5 acres'
//     },
//     {
//       id: 3,
//       name: 'Amit Singh',
//       mobile: '+91 9876543212',
//       memberId: 'MEM-F-2024-003',
//       status: 'Active',
//       registeredDate: '2024-01-13',
//       kycStatus: 'Approved',
//       state: 'Punjab',
//       district: 'Amritsar',
//       mandal: 'Amritsar-I',
//       landSize: '10+ acres'
//     },
//     {
//       id: 4,
//       name: 'Sunita Devi',
//       mobile: '+91 9876543213',
//       memberId: 'MEM-F-2024-004',
//       status: 'Inactive',
//       registeredDate: '2024-01-12',
//       kycStatus: 'Rejected',
//       state: 'Haryana',
//       district: 'Panipat',
//       mandal: 'Panipat-I',
//       landSize: '1-2 acres'
//     },
//     ...Array.from({ length: 116 }, (_, i) => ({
//       id: i + 5,
//       name: `Farmer ${i + 5}`,
//       mobile: `+91 987654${(3214 + i).toString().slice(-4)}`,
//       memberId: `MEM-F-2024-${(i + 5).toString().padStart(3, '0')}`,
//       status: i % 3 === 0 ? 'Inactive' : 'Active',
//       registeredDate: `2024-01-${(11 - (i % 11)).toString().padStart(2, '0')}`,
//       kycStatus: i % 4 === 0 ? 'Pending' : i % 7 === 0 ? 'Rejected' : 'Approved',
//       state: i % 2 === 0 ? 'Punjab' : 'Haryana',
//       district: i % 3 === 0 ? 'Ludhiana' : i % 3 === 1 ? 'Karnal' : 'Amritsar',
//       mandal: `Mandal-${i % 5 + 1}`,
//       landSize: i % 4 === 0 ? '1-2 acres' : i % 4 === 1 ? '2-5 acres' : i % 4 === 2 ? '5-10 acres' : '10+ acres'
//     }))
//   ];

//   // Apply filters and search
//   const filteredFarmers = allFarmers.filter(farmer => {
//     const matchesSearch = farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       farmer.mobile.includes(searchTerm) ||
//       farmer.memberId.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesFilters = 
//       (filters.state === '' || farmer.state === filters.state) &&
//       (filters.district === '' || farmer.district === filters.district) &&
//       (filters.mandal === '' || farmer.mandal === filters.mandal) &&
//       (filters.landSize === '' || farmer.landSize === filters.landSize);

//     return matchesSearch && matchesFilters;
//   });

//   // Pagination logic
//   const totalEntries = filteredFarmers.length;
//   const totalPages = Math.ceil(totalEntries / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, totalEntries);
//   const currentFarmers = filteredFarmers.slice(startIndex, endIndex);

//   const handleViewProfile = (farmer) => {
//     navigate(`/farmers/${farmer.id}`);
//   };

//   const handleEditFarmer = (farmer) => {
//     navigate(`/farmers/${farmer.id}`);
//   };

//   const handleAddFarmer = () => {
//     setSelectedFarmer(null);
//     setShowAddModal(true);
//   };

//   const handleExportCSV = () => {
//     const headers = ['Name', 'Mobile', 'Member ID', 'Status', 'Registered Date', 'KYC Status', 'State', 'District', 'Mandal', 'Land Size'];
//     const csvData = [
//       headers,
//       ...filteredFarmers.map(farmer => [
//         farmer.name,
//         farmer.mobile,
//         farmer.memberId,
//         farmer.status,
//         farmer.registeredDate,
//         farmer.kycStatus,
//         farmer.state,
//         farmer.district,
//         farmer.mandal,
//         farmer.landSize
//       ])
//     ];
    
//     const csvContent = csvData.map(row => row.map(field => `"${field}"`).join(',')).join('\n');
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'farmers_data.csv';
//     link.click();
//     window.URL.revokeObjectURL(url);
//   };

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => ({ ...prev, [filterType]: value }));
//     setCurrentPage(1);
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       state: '',
//       district: '',
//       mandal: '',
//       landSize: ''
//     });
//     setCurrentPage(1);
//   };

//   const handleApplyFilters = () => {
//     setShowFilterMenu(false);
//     setCurrentPage(1);
//   };

//   const handleDeleteFarmer = (farmer) => {
//     console.log('Deleting farmer:', farmer);
//     // Implement delete logic here
//     setShowActionMenu(null);
//   };

//   const handleBlockFarmer = (farmer) => {
//     console.log('Blocking farmer:', farmer);
//     // Implement block logic here
//     setShowActionMenu(null);
//   };

//   const toggleActionMenu = (farmerId) => {
//     setShowActionMenu(showActionMenu === farmerId ? null : farmerId);
//   };

//   const hasActiveFilters = Object.values(filters).some(filter => filter !== '');

//   return (
//     <div className="space-y-6 relative">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Farmer Management</h1>
//           <p className="text-gray-600 mt-1">
//             Manage farmers, status, and details
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button
//             onClick={handleAddFarmer}
//             className="bg-[#000000] text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2 transition-colors"
//           >
//             <Plus size={20} />
//             Add New Farmer
//           </button>
//         </div>
//       </div>

//       {/* Search and Filter */}
//       <div className="flex items-center gap-4">
//         <div className="flex-1 relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//           <input
//             type="text"
//             placeholder="Search by name, mobile, or member ID..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//           />
//         </div>
//         <button
//           onClick={handleExportCSV}
//           className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors"
//         >
//           <Download size={20} />
//           Export CSV
//         </button>
//         <div className="relative">
//           <button 
//             onClick={() => setShowFilterMenu(!showFilterMenu)}
//             className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
//               hasActiveFilters 
//                 ? 'border-blue-500 bg-blue-50 text-blue-700' 
//                 : 'border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             <img src="/filter.svg" alt="Filter" />
//           </button>

//           {/* Filter Dropdown */}
//           {showFilterMenu && (
//             <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//               <div className="p-4 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-medium text-gray-900">Filter by</h3>
//                   <button 
//                     onClick={() => setShowFilterMenu(false)}
//                     className="text-gray-400 hover:text-gray-600"
//                   >
//                     <X size={16} />
//                   </button>
//                 </div>

//                 <div className="space-y-3">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
//                     <select
//                       value={filters.state}
//                       onChange={(e) => handleFilterChange('state', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All States</option>
//                       <option value="Punjab">Punjab</option>
//                       <option value="Haryana">Haryana</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
//                     <select
//                       value={filters.district}
//                       onChange={(e) => handleFilterChange('district', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All Districts</option>
//                       <option value="Ludhiana">Ludhiana</option>
//                       <option value="Karnal">Karnal</option>
//                       <option value="Amritsar">Amritsar</option>
//                       <option value="Panipat">Panipat</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Mandal</label>
//                     <select
//                       value={filters.mandal}
//                       onChange={(e) => handleFilterChange('mandal', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All Mandals</option>
//                       <option value="Ludhiana-I">Ludhiana-I</option>
//                       <option value="Karnal-II">Karnal-II</option>
//                       <option value="Amritsar-I">Amritsar-I</option>
//                       <option value="Panipat-I">Panipat-I</option>
//                       <option value="Mandal-1">Mandal-1</option>
//                       <option value="Mandal-2">Mandal-2</option>
//                       <option value="Mandal-3">Mandal-3</option>
//                       <option value="Mandal-4">Mandal-4</option>
//                       <option value="Mandal-5">Mandal-5</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Land size</label>
//                     <select
//                       value={filters.landSize}
//                       onChange={(e) => handleFilterChange('landSize', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">All Sizes</option>
//                       <option value="1-2 acres">1-2 acres</option>
//                       <option value="2-5 acres">2-5 acres</option>
//                       <option value="5-10 acres">5-10 acres</option>
//                       <option value="10+ acres">10+ acres</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
//                   <button
//                     onClick={handleResetFilters}
//                     className="flex-1 px-3 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
//                   >
//                     Reset
//                   </button>
//                   <button
//                     onClick={handleApplyFilters}
//                     className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                   >
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Active Filters Display */}
//       {hasActiveFilters && (
//         <div className="flex items-center gap-2 text-sm">
//           <span className="text-gray-600">Active filters:</span>
//           {Object.entries(filters).map(([key, value]) => 
//             value && (
//               <span key={key} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
//                 {key}: {value}
//                 <button 
//                   onClick={() => handleFilterChange(key, '')}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <X size={12} />
//                 </button>
//               </span>
//             )
//           )}
//           <button 
//             onClick={handleResetFilters}
//             className="text-blue-600 hover:text-blue-800 font-medium"
//           >
//             Clear all
//           </button>
//         </div>
//       )}

//       {/* Table */}
//       <div className="px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-200">
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Name
//                 </th>
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Mobile
//                 </th>
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Member ID
//                 </th>
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Status
//                 </th>
//                 <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
//                   Registered Date
//                 </th>
//                 <th className="text-right py-4 text-sm font-semibold text-gray-700 w-1/6">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentFarmers.map((farmer, index) => (
//                 <tr key={farmer.id} className={index < currentFarmers.length - 1 ? "border-b border-gray-100" : ""}>
//                   <td className="py-4 pr-8">
//                     <button
//                       onClick={() => handleViewProfile(farmer)}
//                       className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
//                     >
//                       {farmer.name}
//                     </button>
//                   </td>
//                   <td className="py-4 pr-8 text-sm text-gray-600">
//                     {farmer.mobile}
//                   </td>
//                   <td className="py-4 pr-8 text-sm text-gray-600">
//                     {farmer.memberId}
//                   </td>
//                   <td className="py-4 pr-8">
//                     <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
//                       farmer.status === 'Active'
//                         ? 'bg-green-100 text-green-800'
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {farmer.status}
//                     </span>
//                   </td>
//                   <td className="py-4 pr-8 text-sm text-gray-600">
//                     {farmer.registeredDate}
//                   </td>
//                   <td className="py-4 text-right relative">
//                     <button
//                       onClick={() => toggleActionMenu(farmer.id)}
//                       className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
//                       title="More Actions"
//                     >
//                       <MoreHorizontal size={16} />
//                     </button>
//                     {showActionMenu === farmer.id && (
//                       <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                         <div className="py-1">
//                           <button
//                             onClick={() => {
//                               handleEditFarmer(farmer);
//                               setShowActionMenu(null);
//                             }}
//                             className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                           >
//                             <Edit size={16} />
//                             Edit Details
//                           </button>
//                           <button
//                             onClick={() => {
//                               handleDeleteFarmer(farmer);
//                               setShowActionMenu(null);
//                             }}
//                             className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
//                           >
//                             <Square size={16} />
//                             Delete
//                           </button>
//                           <button
//                             onClick={() => {
//                               handleBlockFarmer(farmer);
//                               setShowActionMenu(null);
//                             }}
//                             className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
//                           >
//                             <Square size={16} />
//                             Block
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-between">
//         <div className="text-sm text-gray-600">
//           Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
//         </div>
        
//         <div className="flex items-center gap-1">
//           <button
//             onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
          
//           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//             let pageNum;
//             if (totalPages <= 5) {
//               pageNum = i + 1;
//             } else if (currentPage <= 3) {
//               pageNum = i + 1;
//             } else if (currentPage >= totalPages - 2) {
//               pageNum = totalPages - 4 + i;
//             } else {
//               pageNum = currentPage - 2 + i;
//             }
            
//             return (
//               <button
//                 key={pageNum}
//                 onClick={() => setCurrentPage(pageNum)}
//                 className={`px-3 py-1 text-sm border rounded transition-colors ${
//                   pageNum === currentPage
//                     ? 'border-blue-500 bg-blue-50 text-blue-600'
//                     : 'border-gray-300 hover:bg-gray-50'
//                 }`}
//               >
//                 {pageNum}
//               </button>
//             );
//           })}
          
//           <button
//             onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Add/Edit Farmer Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-lg font-bold mb-4">
//               {selectedFarmer ? 'Edit Farmer' : 'Add New Farmer'}
//             </h2>
//             <p className="text-gray-600">
//               {selectedFarmer ? 'Edit farmer details' : 'Add farmer form would go here'}
//             </p>
//             <div className="flex gap-2 mt-4">
//               <button
//                 onClick={() => {
//                   setShowAddModal(false);
//                   setSelectedFarmer(null);
//                 }}
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
//                   console.log('Saving farmer:', selectedFarmer);
//                   setShowAddModal(false);
//                   setSelectedFarmer(null);
//                 }}
//                 className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Overlay to close filter menu when clicking outside */}
//       {showFilterMenu && (
//         <div 
//           className="fixed inset-0 z-40" 
//           onClick={() => setShowFilterMenu(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default FarmerManagement;
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Filter, MoreHorizontal, Edit, Ban, Trash, X, ChevronDown, Eye, UserCheck, Download } from 'lucide-react';

const FarmerManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filters, setFilters] = useState({
    state: '',
    district: '',
    mandal: '',
    landSize: ''
  });
  const [showActionMenu, setShowActionMenu] = useState(null); // State for action menu
  const actionMenuRef = useRef(null); // Ref for click-outside detection

  // Mock data with additional fields for filtering
  const allFarmers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      mobile: '+91 9876543210',
      memberId: 'MEM-F-2024-001',
      status: 'Active',
      registeredDate: '2024-01-15',
      kycStatus: 'Approved',
      state: 'Punjab',
      district: 'Ludhiana',
      mandal: 'Ludhiana-I',
      landSize: '5-10 acres'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      mobile: '+91 9876543211',
      memberId: 'MEM-F-2024-002',
      status: 'Inactive',
      registeredDate: '2024-01-14',
      kycStatus: 'Pending',
      state: 'Haryana',
      district: 'Karnal',
      mandal: 'Karnal-II',
      landSize: '2-5 acres'
    },
    {
      id: 3,
      name: 'Amit Singh',
      mobile: '+91 9876543212',
      memberId: 'MEM-F-2024-003',
      status: 'Active',
      registeredDate: '2024-01-13',
      kycStatus: 'Approved',
      state: 'Punjab',
      district: 'Amritsar',
      mandal: 'Amritsar-I',
      landSize: '10+ acres'
    },
    {
      id: 4,
      name: 'Sunita Devi',
      mobile: '+91 9876543213',
      memberId: 'MEM-F-2024-004',
      status: 'Inactive',
      registeredDate: '2024-01-12',
      kycStatus: 'Rejected',
      state: 'Haryana',
      district: 'Panipat',
      mandal: 'Panipat-I',
      landSize: '1-2 acres'
    },
    ...Array.from({ length: 116 }, (_, i) => ({
      id: i + 5,
      name: `Farmer ${i + 5}`,
      mobile: `+91 987654${(3214 + i).toString().slice(-4)}`,
      memberId: `MEM-F-2024-${(i + 5).toString().padStart(3, '0')}`,
      status: i % 3 === 0 ? 'Inactive' : 'Active',
      registeredDate: `2024-01-${(11 - (i % 11)).toString().padStart(2, '0')}`,
      kycStatus: i % 4 === 0 ? 'Pending' : i % 7 === 0 ? 'Rejected' : 'Approved',
      state: i % 2 === 0 ? 'Punjab' : 'Haryana',
      district: i % 3 === 0 ? 'Ludhiana' : i % 3 === 1 ? 'Karnal' : 'Amritsar',
      mandal: `Mandal-${i % 5 + 1}`,
      landSize: i % 4 === 0 ? '1-2 acres' : i % 4 === 1 ? '2-5 acres' : i % 4 === 2 ? '5-10 acres' : '10+ acres'
    }))
  ];

  // Apply filters and search
  const filteredFarmers = allFarmers.filter(farmer => {
    const matchesSearch = farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.mobile.includes(searchTerm) ||
      farmer.memberId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilters = 
      (filters.state === '' || farmer.state === filters.state) &&
      (filters.district === '' || farmer.district === filters.district) &&
      (filters.mandal === '' || farmer.mandal === filters.mandal) &&
      (filters.landSize === '' || farmer.landSize === filters.landSize);

    return matchesSearch && matchesFilters;
  });

  // Pagination logic
  const totalEntries = filteredFarmers.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalEntries);
  const currentFarmers = filteredFarmers.slice(startIndex, endIndex);

  const handleViewProfile = (farmer) => {
    navigate(`/farmers/${farmer.id}`);
  };

  const handleEditFarmer = (farmer) => {
    navigate(`/farmers/${farmer.id}`);
  };

  const handleAddFarmer = () => {
    setSelectedFarmer(null);
    setShowAddModal(true);
  };

  const handleExportCSV = () => {
    const headers = ['Name', 'Mobile', 'Member ID', 'Status', 'Registered Date', 'KYC Status', 'State', 'District', 'Mandal', 'Land Size'];
    const csvData = [
      headers,
      ...filteredFarmers.map(farmer => [
        farmer.name,
        farmer.mobile,
        farmer.memberId,
        farmer.status,
        farmer.registeredDate,
        farmer.kycStatus,
        farmer.state,
        farmer.district,
        farmer.mandal,
        farmer.landSize
      ])
    ];
    
    const csvContent = csvData.map(row => row.map(field => `"${field}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'farmers_data.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      state: '',
      district: '',
      mandal: '',
      landSize: ''
    });
    setCurrentPage(1);
  };

  const handleApplyFilters = () => {
    setShowFilterMenu(false);
    setCurrentPage(1);
  };

  const handleDeleteFarmer = (farmer) => {
    console.log('Deleting farmer:', farmer);
    setShowActionMenu(null);
  };

  const handleBlockFarmer = (farmer) => {
    console.log('Blocking farmer:', farmer);
    setShowActionMenu(null);
  };

  const toggleActionMenu = (farmerId) => {
    setShowActionMenu(showActionMenu === farmerId ? null : farmerId);
  };

  // Click outside to close action menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target)) {
        setShowActionMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const hasActiveFilters = Object.values(filters).some(filter => filter !== '');

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Farmer Management</h1>
          <p className="text-gray-600 mt-1">
            Manage farmers, status, and details
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAddFarmer}
            className="bg-[#000000] text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2 transition-colors"
          >
            <Plus size={20} />
            Add New Farmer
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by name, mobile, or member ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[448px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg  "
          />
        </div>
        <div className='flex items-center justify-end mt-4 gap-3'>

        <button
          onClick={handleExportCSV}
          className="bg-white border font-bold border-black text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors"
        >
          <Download size={20}  className = "rotate-180"/>
          Export CSV
        </button>
        <div className="relative">
          <button 
            onClick={() => setShowFilterMenu(!showFilterMenu)}
            className={`flex items-center gap-2 px-4 py-2  transition-colors ${
              hasActiveFilters 
                ? 'border-blue-500 bg-blue-50 text-blue-700' 
                : 'border-gray-300 '
              }`}
          >
            <img src="/filter.svg" alt="Filter" />
          </button>

          {/* Filter Dropdown */}
          {showFilterMenu && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">Filter by</h3>
                  <button 
                    onClick={() => setShowFilterMenu(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <select
                      value={filters.state}
                      onChange={(e) => handleFilterChange('state', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All States</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Haryana">Haryana</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                    <select
                      value={filters.district}
                      onChange={(e) => handleFilterChange('district', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All Districts</option>
                      <option value="Ludhiana">Ludhiana</option>
                      <option value="Karnal">Karnal</option>
                      <option value="Amritsar">Amritsar</option>
                      <option value="Panipat">Panipat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mandal</label>
                    <select
                      value={filters.mandal}
                      onChange={(e) => handleFilterChange('mandal', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All Mandals</option>
                      <option value="Ludhiana-I">Ludhiana-I</option>
                      <option value="Karnal-II">Karnal-II</option>
                      <option value="Amritsar-I">Amritsar-I</option>
                      <option value="Panipat-I">Panipat-I</option>
                      <option value="Mandal-1">Mandal-1</option>
                      <option value="Mandal-2">Mandal-2</option>
                      <option value="Mandal-3">Mandal-3</option>
                      <option value="Mandal-4">Mandal-4</option>
                      <option value="Mandal-5">Mandal-5</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Land size</label>
                    <select
                      value={filters.landSize}
                      onChange={(e) => handleFilterChange('landSize', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All Sizes</option>
                      <option value="1-2 acres">1-2 acres</option>
                      <option value="2-5 acres">2-5 acres</option>
                      <option value="5-10 acres">5-10 acres</option>
                      <option value="10+ acres">10+ acres</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                  <button
                    onClick={handleResetFilters}
                    className="flex-1 px-3 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={handleApplyFilters}
                    className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>

      

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Active filters:</span>
          {Object.entries(filters).map(([key, value]) => 
            value && (
              <span key={key} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                {key}: {value}
                <button 
                  onClick={() => handleFilterChange(key, '')}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <X size={12} />
                </button>
              </span>
            )
          )}
          <button 
            onClick={handleResetFilters}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Table */}
      <div className="px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
                  Name
                </th>
                <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
                  Mobile
                </th>
                <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
                  Member ID
                </th>
                <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
                  Status
                </th>
                <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-700 w-1/6">
                  Registered Date
                </th>
                <th className="text-right py-4 text-sm font-semibold text-gray-700 w-1/6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentFarmers.map((farmer, index) => (
                <tr key={farmer.id} className={index < currentFarmers.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="py-4 pr-8">
                    <button
                      onClick={() => handleViewProfile(farmer)}
                      className="text-sm font-medium text-[#000000]-600 hover:text-blue-800 underline"
                    >
                      {farmer.name}
                    </button>
                  </td>
                  <td className="py-4 pr-8 text-sm text-gray-600">
                    {farmer.mobile}
                  </td>
                  <td className="py-4 pr-8 text-sm text-gray-600">
                    {farmer.memberId}
                  </td>
                  <td className="py-4 pr-8">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      farmer.status === 'Active'
                        ? 'bg-gray-100 text-[#000000]-800'
                        : 'bg-gray-100 text-[#000000]-800'
                    }`}>
                      {farmer.status}
                    </span>
                  </td>
                  <td className="py-4 pr-8 text-sm text-gray-600">
                    {farmer.registeredDate}
                  </td>
                  <td className="py-4 text-right relative">
                    <button
                      onClick={() => toggleActionMenu(farmer.id)}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      title="More Actions"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                    {showActionMenu === farmer.id && (
                      <div ref={actionMenuRef} className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              handleEditFarmer(farmer);
                              setShowActionMenu(null);
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                          >
                            <Edit size={16} />
                            Edit Details
                          </button>
                          <button
                            onClick={() => {
                              handleBlockFarmer(farmer);
                              setShowActionMenu(null);
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                          >
                            <Ban size={16} />
                            Block
                          </button>
                          <button
                            onClick={() => {
                              handleDeleteFarmer(farmer);
                              setShowActionMenu(null);
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                          >
                            <Trash size={16} />
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="font-semibold text-sm text-[#000000]">
          Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 text-sm border rounded transition-colors ${
                  pageNum === currentPage
                    ? 'border-[#000000] '
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm  rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      {/* Add/Edit Farmer Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">
              {selectedFarmer ? 'Edit Farmer' : 'Add New Farmer'}
            </h2>
            <p className="text-gray-600">
              {selectedFarmer ? 'Edit farmer details' : 'Add farmer form would go here'}
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setSelectedFarmer(null);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log('Saving farmer:', selectedFarmer);
                  setShowAddModal(false);
                  setSelectedFarmer(null);
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close filter menu when clicking outside */}
      {showFilterMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowFilterMenu(false)}
        />
      )}
    </div>
  );
};

export default FarmerManagement;