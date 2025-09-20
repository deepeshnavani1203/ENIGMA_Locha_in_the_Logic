
import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';

import MainLayout from '../components/common/MainLayout';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Campaigns from '../pages/Campaigns';
import CampaignDetail from '../pages/CampaignDetail';
import Gallery from '../pages/Gallery';
import Reports from '../pages/Reports';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

// Dashboards
import AdminDashboard from '../dashboard/AdminDashboard';
import NgoDashboard from '../dashboard/NgoDashboard';
import CompanyDashboard from '../dashboard/CompanyDashboard';
import DonorDashboard from '../dashboard/DonorDashboard';
import AdminManageNgos from '../dashboard/AdminManageNgos';
import AdminManageCompanies from '../dashboard/AdminManageCompanies';
import AdminManageCampaigns from '../dashboard/AdminManageCampaigns';
import AdminDonationsReport from '../dashboard/AdminDonationsReport';
import AdminProfile from '../dashboard/AdminProfile';
import NgoProfile from '../dashboard/NgoProfile';
import CompanyProfile from '../dashboard/CompanyProfile';
import CreateCampaign from '../dashboard/CreateCampaign';


export const AppRoutes: React.FC = () => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-background">
                <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-primary"></div>
            </div>
        );
    }
    
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/campaigns/:id" element={<CampaignDetail />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={user ? <Navigate to={`/dashboard/${user.role}`} /> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to="/" /> :<Signup />} />

            {/* Protected Dashboard Routes */}
            <Route element={<DashboardLayout />}>
                <Route path="/dashboard/admin" element={<ProtectedRoute allowedRoles={[UserRole.ADMIN]}><Outlet/></ProtectedRoute>}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="ngos" element={<AdminManageNgos />} />
                    <Route path="companies" element={<AdminManageCompanies />} />
                    <Route path="campaigns" element={<AdminManageCampaigns />} />
                    <Route path="reports" element={<AdminDonationsReport />} />
                    <Route path="donations" element={<Navigate to="/dashboard/admin/reports" replace />} />
                    <Route path="profile" element={<AdminProfile />} />
                </Route>
                <Route path="/dashboard/ngo" element={<ProtectedRoute allowedRoles={[UserRole.NGO]}><Outlet/></ProtectedRoute>}>
                    <Route index element={<NgoDashboard />} />
                    <Route path="campaigns" element={<NgoDashboard />} />
                    <Route path="create-campaign" element={<CreateCampaign />} />
                    <Route path="organization-profile" element={<NgoProfile />} />
                    <Route path="profile" element={<AdminProfile />} />
                </Route>
                <Route path="/dashboard/company" element={<ProtectedRoute allowedRoles={[UserRole.COMPANY]}><Outlet/></ProtectedRoute>}>
                    <Route index element={<CompanyDashboard />} />
                    <Route path="initiatives" element={<CompanyDashboard />} />
                    <Route path="create-campaign" element={<CreateCampaign />} />
                    <Route path="organization-profile" element={<CompanyProfile />} />
                    <Route path="profile" element={<AdminProfile />} />
                </Route>
                 <Route path="/dashboard/user" element={<ProtectedRoute allowedRoles={[UserRole.USER]}><Outlet/></ProtectedRoute>}>
                    <Route index element={<DonorDashboard />} />
                    <Route path="profile" element={<AdminProfile />} />
                </Route>
            </Route>
            
            {/* Redirect root dashboard path */}
            <Route path="/dashboard" element={
                <ProtectedRoute allowedRoles={Object.values(UserRole)}>
                    {user ? <Navigate to={`/dashboard/${user.role}`} replace /> : <Navigate to="/login" />}
                </ProtectedRoute>
            } />
            
            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
