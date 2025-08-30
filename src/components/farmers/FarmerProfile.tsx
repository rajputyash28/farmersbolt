import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, MapPin, Users, Sprout, Tractor,Phone ,CreditCard} from 'lucide-react';


const FarmerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock farmer data based on the ID
  const farmer = {
    id: 1,
    name: 'Rajesh Kumar',
    memberId: 'MEM-F-2024-001',
    registeredDate: '2024-01-15',
    kycStatus: 'Verified',
    profileImage: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150',
    basicDetails: {
      fullName: 'Rajesh Kumar',
      dateOfBirth: '1985-06-15',
      gender: 'Male',
      mobileNumber: '+91 9876543210',
      emailAddress: 'rajesh.farmer@gmail.com',
      fatherName: 'Ram Kumar',
      education: '8th Pass'
    },
    kycDocuments: {
      aadharCard: '1234-5678-9012'
    },
    addressInfo: {
      completeAddress: 'House No 123, Main Street',
      village: 'Rampur',
      mandal: 'Ahmedabad',
      district: 'Gujarat',
      state: 'Gujarat',
      pinCode: '380001'
    },
    landDetails: [
      {
        landOwner: 'Self',
        landDetails: 'Agricultural',
        ownLand: '5 acres',
        landName: 'Farm A',
        landLocation: 'Leased Land',
        leasedLand: '2 acres'
      }
    ],
    cropDetails: {
      landName: 'Land A',
      plotNumber: '123A',
      landArea: '160 acres',
      cropTypes: 'Variety',
      soilVariety: 'Seed',
      kharifStock: 'Rice, Cotton',
      rabiStock: 'Wheat'
    },
    livestockDetails: {
      totalLivestock: 8,
      cattle: 4,
      poultry: 25,
      smallAnimals: 50,
      detailedBreakdown: {
        cattle: 3,
        inHouses: 3,
        chickens: 8,
        goats: 3,
        ducks: 5,
        sheep: 50
      }
    },
    quickStats: {
      totalLand: '5.5 acres',
      familyMembers: 5,
      livestock: 40,
      assets: 20
    },
    familyDetails: {
      totalAdults: 4,
      totalChildren: 3,
      workingMembers: 2
    },
    farmMachineryDetails: {
      tractor: { harvester: 'Truck', plough: 'Sprayer', total: 10 }
    }
  };

  const handleEdit = () => {
    navigate(`/farmers/edit/${farmer.id}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/farmers')}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg border border-gray-300"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-blue-600">Farmer Profile</h1>
            <p className="text-gray-600">Complete Information for {farmer.name}</p>
          </div>
        </div>
        <button 
          onClick={handleEdit}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
        >
          <Edit size={18} />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Profile Overview */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center">
              <img
                src={farmer.profileImage}
                alt={farmer.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">{farmer.name}</h3>
              <p className="text-sm text-gray-600">{farmer.memberId}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                {farmer.kycStatus}
              </span>
              <p className="text-sm text-gray-500 mt-2">Aadhar from DLD</p>
              <p className="text-sm font-medium text-gray-700">KD: 2024-064</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Land</span>
                <span className="font-medium">{farmer.quickStats.totalLand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Family Members</span>
                <span className="font-medium">{farmer.quickStats.familyMembers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livestock</span>
                <span className="font-medium">{farmer.quickStats.livestock}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Assets</span>
                <span className="font-medium">{farmer.quickStats.assets}</span>
              </div>
            </div>
          </div>

          {/* Family Details */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users size={20} />
              Family Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Adults</span>
                <span className="font-medium">{farmer.familyDetails.totalAdults}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Children</span>
                <span className="font-medium">{farmer.familyDetails.totalChildren}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Working Members</span>
                <span className="font-medium">{farmer.familyDetails.workingMembers}</span>
              </div>
            </div>
          </div>

          {/* Farm Machinery */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CreditCard size={20} />
              Farm Machinery Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Tractor</span>
                <span className="font-medium">Yes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Harvester</span>
                <span className="font-medium">Truck</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plough</span>
                <span className="font-medium">Sprayer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total</span>
                <span className="font-medium">10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Detailed Information */}
        <div className="lg:col-span-3 space-y-6">
          {/* Personal Information & KYC Documents */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Phone size={20}/> Personal Information & KYC Documents
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Details */}
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-3">Basic Details</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">Full Name</span>
                      <p className="font-medium">{farmer.basicDetails.fullName}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Date of Birth</span>
                      <p className="font-medium">{farmer.basicDetails.dateOfBirth}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">Gender</span>
                      <p className="font-medium">{farmer.basicDetails.gender}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Mobile Number</span>
                      <p className="font-medium">{farmer.basicDetails.mobileNumber}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">Email Address</span>
                      <p className="font-medium">{farmer.basicDetails.emailAddress}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Father Name</span>
                      <p className="font-medium">{farmer.basicDetails.fatherName}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Education</span>
                    <p className="font-medium">{farmer.basicDetails.education}</p>
                  </div>
                </div>
              </div>

              {/* KYC Documents */}
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-3">KYC Documents</h4>
                <div>
                  <span className="text-sm text-gray-600">Aadhar Card</span>
                  <p className="font-medium">{farmer.kycDocuments.aadharCard}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin size={20} />
              Address Information
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <span className="text-sm text-gray-600">Complete Address</span>
                <p className="font-medium">{farmer.addressInfo.completeAddress}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Village</span>
                <p className="font-medium">{farmer.addressInfo.village}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Mandal</span>
                <p className="font-medium">{farmer.addressInfo.mandal}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">District</span>
                <p className="font-medium">{farmer.addressInfo.district}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">State</span>
                <p className="font-medium">{farmer.addressInfo.state}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">PIN Code</span>
                <p className="font-medium">{farmer.addressInfo.pinCode}</p>
              </div>
            </div>
          </div>

          {/* Land Details */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <img src='/house.svg' alt='house'/> Land Details
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <span className="text-sm text-gray-600">Land Owner</span>
                <p className="font-medium">Self</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Land Details</span>
                <p className="font-medium">Agricultural</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Own Land</span>
                <p className="font-medium">5 acres</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Land Name</span>
                <p className="font-medium">Farm A</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Land Location</span>
                <p className="font-medium">Leased Land</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Leased Land</span>
                <p className="font-medium">2 acres</p>
              </div>
            </div>
          </div>

          {/* Crop Details */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Sprout size={20} />
              Crop Details
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <span className="text-sm text-gray-600">Land Name</span>
                <p className="font-medium">{farmer.cropDetails.landName}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Plot Number</span>
                <p className="font-medium">{farmer.cropDetails.plotNumber}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Land Area</span>
                <p className="font-medium">{farmer.cropDetails.landArea}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Crop Types</span>
                <p className="font-medium">{farmer.cropDetails.cropTypes}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Soil Variety</span>
                <p className="font-medium">{farmer.cropDetails.soilVariety}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Kharif Stock</span>
                <p className="font-medium">{farmer.cropDetails.kharifStock}</p>
              </div>
            </div>
          </div>

          {/* Livestock Details */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <img src='/wheel.svg' alt='wheel'/> Livestock Details
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-3">Total Livestock</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Cattle</span>
                    <p className="font-medium">{farmer.livestockDetails.cattle}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Poultry</span>
                    <p className="font-medium">{farmer.livestockDetails.poultry}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Small Animals</span>
                    <p className="font-medium">{farmer.livestockDetails.smallAnimals}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-3">Detailed Breakdown</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Cattle</span>
                    <p className="font-medium">{farmer.livestockDetails.detailedBreakdown.cattle}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Goats</span>
                    <p className="font-medium">{farmer.livestockDetails.detailedBreakdown.goats}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Chickens</span>
                    <p className="font-medium">{farmer.livestockDetails.detailedBreakdown.chickens}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Sheep</span>
                    <p className="font-medium">{farmer.livestockDetails.detailedBreakdown.sheep}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;