import axios from 'axios';

// Use internal API route to avoid CORS/network issues from the browser
const API_BASE_URL = '/api/agents';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: string;
  role_id: number;
  role_name: string;
  team?: number;
  team_name: string;
  gender: string;
  nationality: string;
  emirates_id?: string;
  passport_no?: string;
  kyc_verification: boolean;
  created_at: string;
  updated_at: string;
  state: string;
  dob?: string;
  remarks?: string;
  languages?: string[];
  brn_number?: string;
  experience_years?: number;
  specialities?: string[];
  property_default_view?: string;
  leads_default_view?: string;
  whatsapp_notification: boolean;
  joining_date?: string;
  job_type?: string;
  qr_code?: string;
  documents?: any;
  agent_type?: string;
  designation?: string;
}

export interface AgentsResponse {
  data: Agent[];
  success: boolean;
  message?: string;
}

// Fetch all agents
export const getAllAgents = async (): Promise<Agent[]> => {
  try {
    const response = await apiClient.get('');
    // If upstream returns an array directly, normalize; otherwise use response.data.data
    const payload = response.data;
    if (Array.isArray(payload)) return payload as Agent[];
    if (payload?.data && Array.isArray(payload.data)) return payload.data as Agent[];
    return [];
  } catch (error) {
    console.error('Error fetching agents:', error);
    throw new Error('Failed to fetch agents');
  }
};

// Fetch agent by ID (optional future use)
export const getAgentById = async (id: number): Promise<Agent> => {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching agent:', error);
    throw new Error('Failed to fetch agent');
  }
};

// Featured agents fallback to all (optional future use)
export const getFeaturedAgents = async (): Promise<Agent[]> => {
  try {
    const response = await apiClient.get('/featured');
    const payload = response.data;
    if (Array.isArray(payload)) return payload as Agent[];
    if (payload?.data && Array.isArray(payload.data)) return payload.data as Agent[];
    return getAllAgents();
  } catch (error) {
    return getAllAgents();
  }
};
